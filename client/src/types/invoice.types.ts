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
  CASH: "CASH",
  CHECK: "CHECK",
  BANK_TRANSFER: "BANK_TRANSFER",
  CREDIT_CARD: "CREDIT_CARD",
  MOBILE_PAYMENT: "MOBILE_PAYMENT",
  OTHER: "OTHER",
}

export const PaymentMethodLabels: Record<string, string> = {
  CASH: "Espèces",
  CHECK: "Chèque",
  BANK_TRANSFER: "Transfert bancaire",
  CREDIT_CARD: "Carte bancaire",
  MOBILE_PAYMENT: "Paiement mobile",
  OTHER: "Autre",
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
    // `name` is only used client‑side for display and auto‑complete purposes,
    // it is stripped before payloads are sent to the server because the
    // Prisma `InvoiceLine` model does not have a `name` column.
    name?: string,
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
    // client-only display field; removed before sending to back-end
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