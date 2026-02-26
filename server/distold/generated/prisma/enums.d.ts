export declare const ActivityType: {
    readonly COMMERCE: "COMMERCE";
    readonly SERVICE: "SERVICE";
    readonly MIXTE: "MIXTE";
};
export type ActivityType = (typeof ActivityType)[keyof typeof ActivityType];
export declare const InvoiceStatus: {
    readonly DRAFT: "DRAFT";
    readonly SENT: "SENT";
    readonly UNPAID: "UNPAID";
    readonly PARTIALLY_PAID: "PARTIALLY_PAID";
    readonly PAID: "PAID";
    readonly OVERDUE: "OVERDUE";
    readonly CANCELLED: "CANCELLED";
};
export type InvoiceStatus = (typeof InvoiceStatus)[keyof typeof InvoiceStatus];
export declare const QuoteStatus: {
    readonly DRAFT: "DRAFT";
    readonly SENT: "SENT";
    readonly ACCEPTED: "ACCEPTED";
    readonly REJECTED: "REJECTED";
    readonly EXPIRED: "EXPIRED";
    readonly CONVERTED: "CONVERTED";
};
export type QuoteStatus = (typeof QuoteStatus)[keyof typeof QuoteStatus];
export declare const LineType: {
    readonly PRODUCT: "PRODUCT";
    readonly SERVICE: "SERVICE";
};
export type LineType = (typeof LineType)[keyof typeof LineType];
export declare const PaymentMethod: {
    readonly CASH: "CASH";
    readonly CHECK: "CHECK";
    readonly BANK_TRANSFER: "BANK_TRANSFER";
    readonly CREDIT_CARD: "CREDIT_CARD";
    readonly MOBILE_PAYMENT: "MOBILE_PAYMENT";
    readonly OTHER: "OTHER";
};
export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod];
export declare const DeclarationStatus: {
    readonly DRAFT: "DRAFT";
    readonly PENDING: "PENDING";
    readonly SUBMITTED: "SUBMITTED";
    readonly PAID: "PAID";
    readonly OVERDUE: "OVERDUE";
};
export type DeclarationStatus = (typeof DeclarationStatus)[keyof typeof DeclarationStatus];
export declare const PaymentStatus: {
    readonly PENDING: "PENDING";
    readonly PAID: "PAID";
    readonly OVERDUE: "OVERDUE";
    readonly CANCELLED: "CANCELLED";
};
export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus];
export declare const NotificationType: {
    readonly INVOICE: "INVOICE";
    readonly QUOTE: "QUOTE";
    readonly PAYMENT: "PAYMENT";
    readonly EXPENSE: "EXPENSE";
    readonly TAX: "TAX";
    readonly CONTRIBUTION: "CONTRIBUTION";
    readonly SYSTEM: "SYSTEM";
    readonly REMINDER: "REMINDER";
};
export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType];
//# sourceMappingURL=enums.d.ts.map