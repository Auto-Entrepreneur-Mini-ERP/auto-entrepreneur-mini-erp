import { QuoteStatus } from '../../../generated/prisma/enums.js';
import type { CreateQuoteInput, UpdateQuoteInput } from './devis.types.js';
export declare class DevisService {
    create(autoentrepreneurId: string, data: CreateQuoteInput): Promise<{
        quoteLines: {
            id: string;
            description: string;
            unitPrice: import("@prisma/client-runtime-utils").Decimal;
            productId: string | null;
            quantity: import("@prisma/client-runtime-utils").Decimal;
            serviceId: string | null;
            quoteId: string;
            lineType: import("../../../generated/prisma/enums.js").LineType;
            totalPrice: import("@prisma/client-runtime-utils").Decimal;
            order: number;
        }[];
    } & {
        id: string;
        creationDate: Date;
        updateDate: Date;
        status: QuoteStatus;
        AutoEntrepreneurId: string;
        issueDate: Date;
        subtotal: import("@prisma/client-runtime-utils").Decimal;
        totalAmount: import("@prisma/client-runtime-utils").Decimal;
        notes: string | null;
        pdfUrl: string | null;
        customerId: string;
        quoteNumber: string;
        validityDate: Date;
        taxAmount: import("@prisma/client-runtime-utils").Decimal;
        invoiceId: string | null;
    }>;
    findAll(autoentrepreneurId: string): Promise<{
        quotes: ({
            customer: {
                user: {
                    id: string;
                    creationDate: Date;
                    updateDate: Date;
                    email: string;
                    firstName: string | null;
                    lastName: string | null;
                    phone: string | null;
                    address: string | null;
                };
            } & {
                id: string;
                userId: string;
                ice: string;
                creationDate: Date;
                updateDate: Date;
                AutoEntrepreneurId: string;
                city: string | null;
                country: string | null;
                isActive: boolean;
            };
            quoteLines: ({
                service: {
                    id: string;
                    AutoEntrepreneurId: string;
                    itemId: string;
                    hourlyRate: import("@prisma/client-runtime-utils").Decimal | null;
                    fixedRate: import("@prisma/client-runtime-utils").Decimal | null;
                    estimatedDuration: number | null;
                } | null;
                product: {
                    id: string;
                    reference: string | null;
                    AutoEntrepreneurId: string;
                    unitPrice: import("@prisma/client-runtime-utils").Decimal;
                    stockQuantity: number;
                    alertThreshold: number;
                    itemId: string;
                } | null;
            } & {
                id: string;
                description: string;
                unitPrice: import("@prisma/client-runtime-utils").Decimal;
                productId: string | null;
                quantity: import("@prisma/client-runtime-utils").Decimal;
                serviceId: string | null;
                quoteId: string;
                lineType: import("../../../generated/prisma/enums.js").LineType;
                totalPrice: import("@prisma/client-runtime-utils").Decimal;
                order: number;
            })[];
        } & {
            id: string;
            creationDate: Date;
            updateDate: Date;
            status: QuoteStatus;
            AutoEntrepreneurId: string;
            issueDate: Date;
            subtotal: import("@prisma/client-runtime-utils").Decimal;
            totalAmount: import("@prisma/client-runtime-utils").Decimal;
            notes: string | null;
            pdfUrl: string | null;
            customerId: string;
            quoteNumber: string;
            validityDate: Date;
            taxAmount: import("@prisma/client-runtime-utils").Decimal;
            invoiceId: string | null;
        })[];
        count: number;
    }>;
    findById(id: string): Promise<({
        customer: {
            user: {
                id: string;
                creationDate: Date;
                updateDate: Date;
                email: string;
                firstName: string | null;
                lastName: string | null;
                phone: string | null;
                address: string | null;
            };
        } & {
            id: string;
            userId: string;
            ice: string;
            creationDate: Date;
            updateDate: Date;
            AutoEntrepreneurId: string;
            city: string | null;
            country: string | null;
            isActive: boolean;
        };
        quoteLines: ({
            service: ({
                item: {
                    id: string;
                    creationDate: Date;
                    updateDate: Date;
                    name: string;
                    isActive: boolean;
                    description: string | null;
                    unit: string;
                    category: string | null;
                };
            } & {
                id: string;
                AutoEntrepreneurId: string;
                itemId: string;
                hourlyRate: import("@prisma/client-runtime-utils").Decimal | null;
                fixedRate: import("@prisma/client-runtime-utils").Decimal | null;
                estimatedDuration: number | null;
            }) | null;
            product: ({
                item: {
                    id: string;
                    creationDate: Date;
                    updateDate: Date;
                    name: string;
                    isActive: boolean;
                    description: string | null;
                    unit: string;
                    category: string | null;
                };
            } & {
                id: string;
                reference: string | null;
                AutoEntrepreneurId: string;
                unitPrice: import("@prisma/client-runtime-utils").Decimal;
                stockQuantity: number;
                alertThreshold: number;
                itemId: string;
            }) | null;
        } & {
            id: string;
            description: string;
            unitPrice: import("@prisma/client-runtime-utils").Decimal;
            productId: string | null;
            quantity: import("@prisma/client-runtime-utils").Decimal;
            serviceId: string | null;
            quoteId: string;
            lineType: import("../../../generated/prisma/enums.js").LineType;
            totalPrice: import("@prisma/client-runtime-utils").Decimal;
            order: number;
        })[];
    } & {
        id: string;
        creationDate: Date;
        updateDate: Date;
        status: QuoteStatus;
        AutoEntrepreneurId: string;
        issueDate: Date;
        subtotal: import("@prisma/client-runtime-utils").Decimal;
        totalAmount: import("@prisma/client-runtime-utils").Decimal;
        notes: string | null;
        pdfUrl: string | null;
        customerId: string;
        quoteNumber: string;
        validityDate: Date;
        taxAmount: import("@prisma/client-runtime-utils").Decimal;
        invoiceId: string | null;
    }) | null>;
    update(id: string, data: UpdateQuoteInput): Promise<{
        id: string;
        creationDate: Date;
        updateDate: Date;
        status: QuoteStatus;
        AutoEntrepreneurId: string;
        issueDate: Date;
        subtotal: import("@prisma/client-runtime-utils").Decimal;
        totalAmount: import("@prisma/client-runtime-utils").Decimal;
        notes: string | null;
        pdfUrl: string | null;
        customerId: string;
        quoteNumber: string;
        validityDate: Date;
        taxAmount: import("@prisma/client-runtime-utils").Decimal;
        invoiceId: string | null;
    }>;
    delete(id: string): Promise<{
        id: string;
        creationDate: Date;
        updateDate: Date;
        status: QuoteStatus;
        AutoEntrepreneurId: string;
        issueDate: Date;
        subtotal: import("@prisma/client-runtime-utils").Decimal;
        totalAmount: import("@prisma/client-runtime-utils").Decimal;
        notes: string | null;
        pdfUrl: string | null;
        customerId: string;
        quoteNumber: string;
        validityDate: Date;
        taxAmount: import("@prisma/client-runtime-utils").Decimal;
        invoiceId: string | null;
    }>;
    changeStatus(id: string, status: QuoteStatus): Promise<{
        id: string;
        creationDate: Date;
        updateDate: Date;
        status: QuoteStatus;
        AutoEntrepreneurId: string;
        issueDate: Date;
        subtotal: import("@prisma/client-runtime-utils").Decimal;
        totalAmount: import("@prisma/client-runtime-utils").Decimal;
        notes: string | null;
        pdfUrl: string | null;
        customerId: string;
        quoteNumber: string;
        validityDate: Date;
        taxAmount: import("@prisma/client-runtime-utils").Decimal;
        invoiceId: string | null;
    }>;
    generatePdf(id: string): Promise<{
        pdf: Uint8Array<ArrayBufferLike>;
        quoteNumber: string | undefined;
    }>;
}
//# sourceMappingURL=devis.service.d.ts.map