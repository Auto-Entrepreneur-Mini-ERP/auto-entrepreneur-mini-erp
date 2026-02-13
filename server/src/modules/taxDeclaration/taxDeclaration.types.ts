import type { DeclarationStatus } from "../../../generated/prisma/enums.js";
 
export interface TaxDeclaration {
  id?: string;
  period: string;
  year: number;
  month?: number | null;
  totalRevenue?: number;
  taxRate?: number;
  taxAmount?: number;
  status?: DeclarationStatus;
  dueDate ?: Date | null;
  paymentDate?: Date | null;
  pdfUrl?: string | null;
  AutoEntrepreneurId: string;
  creationDate?: Date;
}
