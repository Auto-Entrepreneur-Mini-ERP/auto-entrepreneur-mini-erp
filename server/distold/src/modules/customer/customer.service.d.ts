import type { customer } from "./customer.types.js";
export declare const customerService: {
    getAllCustomers: (autoentrepreneurId: string) => Promise<({
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
    })[]>;
    createCustomer: (authID: string, customerData: customer) => Promise<{
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
    }>;
    updateCustomer: (id: string, customerData: Partial<customer>) => Promise<{
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
    }>;
    getCustomer: (id: string) => Promise<{
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
    }>;
    getCustomerByName: (name: string) => Promise<({
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
    })[]>;
    deleteCustomer: (id: string) => Promise<{
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
    }>;
    getAllInvoices: (customerId: string, AutoEntrepreneurID: string) => Promise<{
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
    }[]>;
    getAllQuotes: (customerId: string, AutoEntrepreneurID: string) => Promise<{
        id: string;
        creationDate: Date;
        updateDate: Date;
        status: import("../../../generated/prisma/enums.js").QuoteStatus;
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
    }[]>;
};
//# sourceMappingURL=customer.service.d.ts.map