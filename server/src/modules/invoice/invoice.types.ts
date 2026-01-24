export enum InvoiceStatus {
    DRAFT = "DRAFT",
    SENT = "SENT",
    UNPAID = "UNPAID",
    PARTIALLY_PAID = "PARTIALLY_PAID",
    PAID = "PAID",
    OVERDUE = "OVERDUE",
    CANCELLED = "CANCELLED",
}

export enum LineType {
    PRODUCT = "PRODUCT",
    SERVICE = "SERVICE"
}

export interface InvoiceOutput {
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
    InvoiceLine?: InvoiceLine[],
}

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
}

export interface InvoiceCreateSchemaInput {
    invoice:{
        invoiceNumber?: string,
        issueDate?: Date,
        dueDate: Date,
        status: InvoiceStatus,
        subtotal?: number,
        discount?: number,
        totalAmount?: number,
        paidAmount?: number,
        payementMethod?: string,
        remainingAmount?: number,
        note?: string,
        customerId: string,
    },
    invoiceLine: [{
        order: number,
        lineType: LineType,
        description?: string,
        quantity: number,
        unitPrice: number,
        productId?: string,
        serviceId?: string,
    }]
}

export interface InvoiceUpdateSchemaInput {
    dueDate: Date,
    status: InvoiceStatus,
    paidAmount: number,
    note?: string,
    invoiceLine: {
        order: number,
        lineType: LineType,
        description?: string,
        quantity: number,
        unitPrice: number,
        productId?: string,
        serviceId?: string,
    }
}