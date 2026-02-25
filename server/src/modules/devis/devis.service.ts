import { QuoteStatus } from '../../../generated/prisma/enums.js';;
import type { CreateQuoteInput, UpdateQuoteInput } from './devis.types.js';
import { Prisma, PrismaClient } from '../../../generated/prisma/client.js';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { quoteNumberGenerator } from './utils/quoteNumberGenerator.js';

const adapter = new PrismaMariaDb({
  host: process.env.DATABASE_HOST || '',
  user: process.env.DATABASE_USER || '',
  password: process.env.DATABASE_PASSWORD || '',
  database: process.env.DATABASE_NAME || '',
  connectionLimit: 5
});
const prisma = new PrismaClient({ adapter });

export class DevisService {
  async create(autoentrepreneurId: string, data: CreateQuoteInput) {

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
    const newQuoteNumber = await quoteNumberGenerator(lastQuote?.quoteNumber as string);

    // calculate total from invoice lines
    let quoteSubTotal: number = 0;
    data.lines.forEach((line) => {
      quoteSubTotal += line.quantity * line.unitPrice
    });

    const CreateQuoteData: Prisma.QuoteCreateInput = {
      quoteNumber: newQuoteNumber,
      issueDate: new Date(),
      validityDate: data.validityDate as Date,
      notes: data.notes as string || "",
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
    }

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

  async findAll(autoentrepreneurId: string) {
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
    })

    return {quotes, count}
  }

  async findById(id: string) {
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

  async update(id: string, data: UpdateQuoteInput) {

    const QuoteUpdateData: Prisma.QuoteUpdateInput = {
      validityDate: data.validityDate as Date,
      notes: data.notes as string
    }

    return prisma.quote.update({
      where: { id },
      data: QuoteUpdateData,
    });
  }

  async delete(id: string) {
    return prisma.quote.delete({
      where: { id },
    });
  }

  async changeStatus(id: string, status: QuoteStatus) {
    return prisma.quote.update({
      where: { id },
      data: { status },
    });
  }
}

