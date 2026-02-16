type InvoiceStatus = {
    DRAFT : "DRAFT",
    SENT : "SENT",
    UNPAID : "UNPAID",
    PARTIALLY_PAID : "PARTIALLY_PAID",
    PAID : "PAID",
    OVERDUE : "OVERDUE",
    CANCELLED : "CANCELLED",
}

type LineType = {
    PRODUCT : "PRODUCT",
    SERVICE : "SERVICE"
}

export interface Invoice {
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
};

export interface InvoiceLine {
    order: number,
    lineType: LineType,
    description?: string,
    quantity: number,
    unitPrice: number,
    totalPrice: number,
    productId?: string,
    serviceId?: string,
};

export interface CreateInvoiceData {
    customerId: string,
    dueDate: Date,
    discount?: number,
    paidAmount?: number,
    payementMethod?: string,
    notes?: string,
}

export interface CreateInvoiceLineData{
    order: number,
    lineType: LineType,
    description?: string,
    quantity: number,
    unitPrice: number,
    productId?: string,
    serviceId?: string,
}