import type { TaxDeclaration, currentTaxDeclaaration } from "../taxDeclaration.types.js";
export declare const calculateTotalRevenue: (autoEntrepreneurId: string, year: number, month: number) => Promise<number>;
export declare function prepareCurrentTaxDeclarationInfo(autoId: string): Promise<currentTaxDeclaaration>;
export declare const PrepareTaxDeclarationData: (data: any, autoEID: string) => Promise<TaxDeclaration>;
//# sourceMappingURL=prepareData.d.ts.map