type InvoiceStatus = {
    DRAFT : "DRAFT",
    SENT : "SENT",
    UNPAID : "UNPAID",
    PARTIALLY_PAID : "PARTIALLY_PAID",
    PAID : "PAID",
    OVERDUE : "OVERDUE",
    CANCELLED : "CANCELLED",
}

export type LineType = {
    PRODUCT : "PRODUCT",
    SERVICE : "SERVICE"
}

export const PaymentMethod = {
  CASH : "CASH",
  CHECK : "CHECK",
  BANK_TRANSFER : "TRANSFERT BANCAIRE",
  CREDIT_CARD : "CREDIT CARD",
  MOBILE_PAYMENT : "MOBILE PAYMENT",
  OTHER : "OTHER",
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
    quantity: number,
    unitPrice: number,
    productId?: string,
    serviceId?: string,
};

export interface CreateInvoiceData {
    customerId: string,
    customerName: string,
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