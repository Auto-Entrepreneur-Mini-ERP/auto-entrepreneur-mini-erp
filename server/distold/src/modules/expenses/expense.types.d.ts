export type ExpenseCategory = "FOURNITURES" | "TRANSPORT" | "COMMUNICATION" | "FORMATION" | "LOGICIEL" | "REPAS" | "LOYER" | "MATERIEL" | "PUBLICITE" | "ASSURANCE" | "AUTRE";
export type ExpensePaymentMethod = "CASH" | "CHECK" | "BANK_TRANSFER" | "CREDIT_CARD" | "MOBILE_PAYMENT" | "OTHER";
export interface CreateExpenseInput {
    category: ExpenseCategory;
    description?: string | undefined;
    amount: number;
    date: string | Date;
    supplier?: string | undefined;
    paymentMethod: ExpensePaymentMethod;
    isDeductible?: boolean | undefined;
}
export interface UpdateExpenseInput {
    category?: ExpenseCategory | undefined;
    description?: string | undefined;
    amount?: number | undefined;
    date?: string | Date | undefined;
    supplier?: string | undefined;
    paymentMethod?: ExpensePaymentMethod | undefined;
    isDeductible?: boolean | undefined;
}
export interface ExpenseFilters {
    category?: ExpenseCategory;
    startDate?: string | Date;
    endDate?: string | Date;
    isDeductible?: boolean;
    minAmount?: number;
    maxAmount?: number;
}
export interface ExpenseResponse {
    id: string;
    category: string;
    description: string | null;
    amount: number;
    date: Date;
    supplier: string | null;
    paymentMethod: string;
    receiptUrl: string | null;
    isDeductible: boolean;
    autoEntrepreneurId: string;
    creationDate: Date;
    updateDate: Date;
}
export interface ExpenseCategoryStats {
    category: string;
    total: number;
    count: number;
}
export interface ExpenseStats {
    totalAmount: number;
    deductibleAmount: number;
    nonDeductibleAmount: number;
    count: number;
    byCategory: ExpenseCategoryStats[];
}
//# sourceMappingURL=expense.types.d.ts.map