import   { LineType  } from '../../../generated/prisma/enums.js';

export interface QuoteLineInput {
  lineType: LineType;
  description: string;
  quantity: number;
  unitPrice: number;
  productId?: string;
  serviceId?: string;
}

export interface CreateQuoteInput {
  issueDate: Date;
  validityDate: Date;
  customerId: string;
  notes?: string;
  lines: QuoteLineInput[];
}

export interface UpdateQuoteInput {
  validityDate?: Date;
  notes?: string;
}
