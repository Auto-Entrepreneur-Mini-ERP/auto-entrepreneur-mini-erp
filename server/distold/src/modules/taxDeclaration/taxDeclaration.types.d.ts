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
    dueDate?: Date | null;
    paymentDate?: Date | null;
    pdfUrl?: string | null;
    AutoEntrepreneurId: string;
    creationDate?: Date;
}
export interface currentTaxDeclaaration {
    id?: string | null;
    totalRevenue: number;
    taxAmount: number;
    ramainDays: number;
    periode: string;
    dueDate: Date;
    status: string;
}
//# sourceMappingURL=taxDeclaration.types.d.ts.map