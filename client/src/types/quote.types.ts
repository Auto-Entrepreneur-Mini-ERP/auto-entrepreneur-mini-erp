
export type LineType = {
    PRODUCT: "PRODUCT"
    SERVICE: "SERVICE"
}

export interface Quote {
    id: string,
    quoteNumber: string,
    issueDate: string,
    validityDate: string,
    status: string,
    subtotal: number,
    totalAmount: number,
    notes?: string,
    customerId: string,
    customer: {
        user:{
            firstName: string
            lastName: string
        }
    },
    quoteLines: QuoteLine[]
}

export interface QuoteLine {
  id: string,
  order: number,
  lineType: LineType,
  description: string,
  quantity: number,
  unitPrice: number,
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

export interface QuoteLineInput {
  order: number,
  lineType: LineType;
  name?: string,
  description?: string;
  quantity: number;
  unitPrice: number;
  productId?: string;
  serviceId?: string;
}

export interface CreateQuoteInput {
  issueDate: Date;
  validityDate: Date;
  customerId: string;
  customerName?: string | null,
  notes?: string;
}

export interface UpdateQuoteInput {
  validityDate?: string;
  notes?: string;
}