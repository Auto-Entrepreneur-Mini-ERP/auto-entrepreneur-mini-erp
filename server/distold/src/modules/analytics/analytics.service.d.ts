import { InvoiceStatus } from "../../../generated/prisma/enums.js";
export declare const analyticsService: {
    overview: (autoenretpreneurId: string) => Promise<{
        CAmois: number | import("@prisma/client-runtime-utils").Decimal;
        unpaidInvoices: number;
        netRevenues: number | import("@prisma/client-runtime-utils").Decimal;
        depenses: number | import("@prisma/client-runtime-utils").Decimal;
    }>;
    monthlyRevenues: (autoentrepreneurId: string) => Promise<{
        index: number;
        amount: number;
    }[]>;
    monthlyDepenses: (autoentrepreneurId: string) => Promise<{
        index: number;
        amount: number;
    }[]>;
    recents: (autoentrepreneurId: string) => Promise<{
        recentInvoices: {
            invoices: import("../invoice/invoice.types.js").InvoiceOutput[];
            count: number;
        };
        recentPayments: {
            payments: ({
                Invoice: {
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
                } & {
                    id: string;
                    creationDate: Date;
                    updateDate: Date;
                    dueDate: Date;
                    status: InvoiceStatus;
                    AutoEntrepreneurId: string;
                    invoiceNumber: string;
                    issueDate: Date;
                    subtotal: import("@prisma/client-runtime-utils").Decimal;
                    discount: import("@prisma/client-runtime-utils").Decimal | null;
                    totalAmount: import("@prisma/client-runtime-utils").Decimal;
                    paidAmount: import("@prisma/client-runtime-utils").Decimal;
                    remainingAmount: import("@prisma/client-runtime-utils").Decimal;
                    notes: string | null;
                    pdfUrl: string | null;
                    customerId: string;
                    quoteId: string | null;
                };
            } & {
                id: string;
                creationDate: Date;
                reference: string;
                amount: import("@prisma/client-runtime-utils").Decimal;
                paymentDate: Date;
                AutoEntrepreneurId: string;
                notes: string | null;
                invoiceId: string;
                paymentMethod: import("../../../generated/prisma/enums.js").PaymentMethod;
                transactionNumber: string | null;
                isReconciled: boolean;
            })[];
            count: number;
        };
        unpaidInvoices: {
            id: string;
            creationDate: Date;
            updateDate: Date;
            dueDate: Date;
            status: InvoiceStatus;
            AutoEntrepreneurId: string;
            invoiceNumber: string;
            issueDate: Date;
            subtotal: import("@prisma/client-runtime-utils").Decimal;
            discount: import("@prisma/client-runtime-utils").Decimal | null;
            totalAmount: import("@prisma/client-runtime-utils").Decimal;
            paidAmount: import("@prisma/client-runtime-utils").Decimal;
            remainingAmount: import("@prisma/client-runtime-utils").Decimal;
            notes: string | null;
            pdfUrl: string | null;
            customerId: string;
            quoteId: string | null;
        }[];
    }>;
};
//# sourceMappingURL=analytics.service.d.ts.map