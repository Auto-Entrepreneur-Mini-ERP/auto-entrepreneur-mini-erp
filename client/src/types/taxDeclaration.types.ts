export const DeclarationStatus = {
  DRAFT: "DRAFT",
  SUBMITTED: "SUBMITTED",
  PAID: "PAID",
} as const;

export type DeclarationStatus =
  (typeof DeclarationStatus)[keyof typeof DeclarationStatus];

export const DeclarationPeriod = {
  MONTHLY: "MONTHLY",
  QUARTERLY: "QUARTERLY",
 } as const;

export type DeclarationPeriod =
  (typeof DeclarationPeriod)[keyof typeof DeclarationPeriod];
export interface TaxDeclaration {
  id?: string;
  period: string;
  year: number;
  month?: number | null;
  totalRevenue?: number;
  taxRate?: number;
  taxAmount?: number;
  status?: DeclarationStatus;
  dueDate?: Date | null;
  paymentDate?: Date | null;
  pdfUrl?: string | null;
  AutoEntrepreneurId: string;
  creationDate?: Date;
}
export interface currentTaxDeclaaration {
  id: string;
  totalRevenue: number;
  taxAmount: number;
  ramainDays: number;
  periode: string;
  dueDate: Date | string;
  status: DeclarationStatus;
}
export interface createTaxDeclarationInput {
  period: string;
  year: number;
  month: number;
}
