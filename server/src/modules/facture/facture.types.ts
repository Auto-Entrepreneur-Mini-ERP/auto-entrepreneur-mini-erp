export enum InvoiceStatus {
    DRAFT = "DRAFT",
    SENT = "SENT",
    PARTIALLY_PAID = "PARTIALLY_PAID",
    PAID = "PAID",
    OVERDUE = "OVERDUE",
    CANCELLED = "CANCELLED",
}

export interface Invoice {
    id: string,
    invoiceNumber: string,
    issueDate: Date,
    dueDate: Date,
    status: InvoiceStatus,
    subtotal: number,
    totalAmount: number,
    paidAmount: number,
    remainingAmount: number,
    note?: string,
    pdfUrl?: string,
    customerId: string,
    autoEntrepreneurId: string,
    creationDate: Date,
    updateDate: Date,
}

export interface InvoiceCreateSchemaInput {
    invoiceNumber: string,
    dueDate: Date,
    status: InvoiceStatus,
    subtotal: number,
    totalAmount: number,
    paidAmount: number,
    note?: string,
    pdfUrl?: string,
    customerId: string,
}

export interface InvoiceUpdateSchemaInput {
    dueDate: Date,
    status: InvoiceStatus,
    paidAmount: number,
    note?: string,
}