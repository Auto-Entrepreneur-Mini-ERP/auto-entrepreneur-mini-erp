import type { PayementMetod, PaymentCreateInput, PaymentOutput, PaymentUpdateInput } from "./payment.types.js";
export declare const paymentService: {
    getAllPayments: (autoentrepreneurId: string, page: number, limit: number) => Promise<{
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
                status: import("../../../generated/prisma/enums.js").InvoiceStatus;
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
    }>;
    getOnePayment: (autoentrepreneurId: string, paymentId: string) => Promise<{
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
            status: import("../../../generated/prisma/enums.js").InvoiceStatus;
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
    }>;
    createPayment: (autoentrepreneurId: string, data: PaymentCreateInput) => Promise<{
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
    }>;
    updatePayment: (autoentrepreneurId: string, paymentId: string, data: PaymentUpdateInput) => Promise<{
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
    }>;
    deletePayment: (autoentrepreneurId: string, paymentId: string) => Promise<boolean>;
    reconciliatePayment: (autoentrepreneurId: string, paymentId: string) => Promise<PaymentOutput>;
    paymentStats: (autoentrepreneurId: string, periodFrom: string, periodTo: string, paymentMethod: PayementMetod, isReconcieled: string) => Promise<{
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
    }[]>;
};
//# sourceMappingURL=payment.service.d.ts.map