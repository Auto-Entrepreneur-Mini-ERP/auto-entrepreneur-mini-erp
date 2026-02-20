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
    id: string,
    invoiceId: string,
    invoiceNumber: string,
    issueDate: Date,
    dueDate: Date,
    status: InvoiceStatus,
    discount: number,
    subtotal: number,
    totalAmount: number,
    paidAmount: number,
    remainingAmount: number,
    note?: string,
    pdfUrl?: string,
    customerId: string,
    customer:{
        user:{
            firstName: string,
            lastName: string
        }
    }
    invoiceLines: InvoiceLine[],
};

export interface InvoiceLine {
    id: string,
    order: number,
    lineType: LineType,
    description?: string,
    quantity: number,
    unitPrice: number,
    totalPrice: number,
    productId?: string,
    serviceId?: string,
    product?:{
        reference: string,
        unitPrice: number,
        item:{
            name: string,
            category: string,
            unit: string
        }
    },
    service?:{
        reference: string,
        unitPrice: number,
        item:{
            name: string,
            category: string,
            unit: string
        }
    },
}

export interface CreateInvoiceData {
    customerId: string,
    customerName?: string,
    dueDate: Date,
    discount?: number,
    paidAmount?: number,
    payementMethod?: string,
    notes?: string,
}

export interface CreateInvoiceLineData{
    order: number,
    lineType: LineType,
    name: string,
    quantity: number,
    unitPrice: number,
    productId?: string,
    serviceId?: string,
}

export interface UpdateInvoiceData {
    dueDate?: Date,
    notes?: string,
}

export interface UpdateInvoiceLineData{
    order: number,
    lineType: LineType,
    name?: string,
    quantity: number,
    unitPrice: number,
    productId?: string | undefined,
    serviceId?: string | undefined,
    product?:{
        reference: string,
        unitPrice: number,
        item:{
            name: string,
            category: string,
            unit: string
        }
    },
    service?:{
        reference: string,
        unitPrice: number,
        item:{
            name: string,
            category: string,
            unit: string
        }
    },
}