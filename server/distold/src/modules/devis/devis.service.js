import { QuoteStatus } from '../../../generated/prisma/enums.js';
;
import { Prisma, PrismaClient } from '../../../generated/prisma/client.js';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { quoteNumberGenerator } from './utils/quoteNumberGenerator.js';
import { generateQuoteHTML } from './utils/quoteTemplate.js';
import puppeteer from 'puppeteer';
const adapter = new PrismaMariaDb({
    host: process.env.DATABASE_HOST || '',
    user: process.env.DATABASE_USER || '',
    password: process.env.DATABASE_PASSWORD || '',
    database: process.env.DATABASE_NAME || '',
    connectionLimit: 5
});
const prisma = new PrismaClient({ adapter });
export class DevisService {
    async create(autoentrepreneurId, data) {
        const lastQuote = await prisma.quote.findFirst({
            select: {
                quoteNumber: true
            },
            where: {
                AutoEntrepreneurId: autoentrepreneurId
            },
            orderBy: {
                creationDate: 'desc'
            }
        });
        const newQuoteNumber = await quoteNumberGenerator(lastQuote?.quoteNumber);
        // calculate total from invoice lines
        let quoteSubTotal = 0;
        data.lines.forEach((line) => {
            quoteSubTotal += line.quantity * line.unitPrice;
        });
        const CreateQuoteData = {
            quoteNumber: newQuoteNumber,
            issueDate: new Date(),
            validityDate: data.validityDate,
            notes: data.notes || "",
            status: QuoteStatus.DRAFT,
            subtotal: quoteSubTotal,
            taxAmount: 0, // Default: no tax
            totalAmount: quoteSubTotal,
            AutoEntrepreneur: {
                connect: {
                    id: autoentrepreneurId
                }
            },
            customer: {
                connect: {
                    id: data.customerId
                }
            },
        };
        const quote = await prisma.quote.create({
            data: {
                ...CreateQuoteData,
                quoteLines: {
                    create: data.lines.map((line, index) => ({
                        lineType: line.lineType,
                        description: line.description || "No description",
                        quantity: line.quantity,
                        unitPrice: line.unitPrice,
                        totalPrice: line.quantity * line.unitPrice,
                        order: index + 1,
                        productId: line.productId,
                        serviceId: line.serviceId,
                    }))
                }
            },
            include: {
                quoteLines: true,
            }
        });
        return quote;
    }
    async findAll(autoentrepreneurId) {
        const quotes = await prisma.quote.findMany({
            where: {
                AutoEntrepreneurId: autoentrepreneurId
            },
            orderBy: {
                issueDate: 'desc'
            },
            include: {
                quoteLines: {
                    include: {
                        product: true,
                        service: true
                    }
                },
                customer: {
                    include: {
                        user: true
                    }
                }
            },
        });
        const count = await prisma.quote.count({
            where: {
                AutoEntrepreneurId: autoentrepreneurId
            }
        });
        return { quotes, count };
    }
    async findById(id) {
        return prisma.quote.findUnique({
            where: { id },
            include: {
                quoteLines: {
                    include: {
                        product: {
                            include: {
                                item: true
                            }
                        },
                        service: {
                            include: {
                                item: true
                            }
                        }
                    }
                },
                customer: {
                    include: {
                        user: true
                    }
                }
            },
        });
    }
    async update(id, data) {
        const QuoteUpdateData = {
            validityDate: data.validityDate,
            notes: data.notes
        };
        return prisma.quote.update({
            where: { id },
            data: QuoteUpdateData,
        });
    }
    async delete(id) {
        return prisma.quote.delete({
            where: { id },
        });
    }
    async changeStatus(id, status) {
        return prisma.quote.update({
            where: { id },
            data: { status },
        });
    }
    async generatePdf(id) {
        const quote = await prisma.quote.findUnique({
            where: { id },
            include: {
                quoteLines: {
                    include: {
                        product: {
                            include: { item: true },
                        },
                        service: true,
                    },
                },
                customer: {
                    include: { user: true },
                },
            },
        });
        const browser = await puppeteer.launch({
            headless: true,
        });
        const page = await browser.newPage();
        const html = generateQuoteHTML(quote);
        await page.setContent(html, { waitUntil: "domcontentloaded" });
        const pdf = await page.pdf({
            format: "A4",
            printBackground: true,
        });
        await browser.close();
        return {
            pdf,
            quoteNumber: quote?.quoteNumber
        };
    }
}
//# sourceMappingURL=devis.service.js.map