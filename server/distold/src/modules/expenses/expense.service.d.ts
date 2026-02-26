import type { CreateExpenseInput, UpdateExpenseInput, ExpenseFilters, ExpenseResponse, ExpenseStats } from "./expense.types.js";
export declare class ExpenseService {
    createExpense(data: CreateExpenseInput & {
        autoEntrepreneurId: string;
        receiptUrl?: string | undefined;
    }): Promise<ExpenseResponse>;
    getExpenses(autoEntrepreneurId: string, filters?: ExpenseFilters, page?: number, limit?: number): Promise<{
        data: ExpenseResponse[];
        total: number;
        page: number;
        totalPages: number;
    }>;
    getExpenseById(id: string, autoEntrepreneurId: string): Promise<ExpenseResponse | null>;
    updateExpense(id: string, autoEntrepreneurId: string, data: UpdateExpenseInput & {
        receiptUrl?: string | undefined;
    }): Promise<ExpenseResponse | null>;
    deleteExpense(id: string, autoEntrepreneurId: string): Promise<boolean>;
    getStats(autoEntrepreneurId: string, startDate?: string | Date, endDate?: string | Date): Promise<ExpenseStats>;
    exportToExcel(autoEntrepreneurId: string, filters?: ExpenseFilters): Promise<Buffer>;
    private _buildWhere;
    private _deleteFile;
}
export declare const expenseService: ExpenseService;
//# sourceMappingURL=expense.service.d.ts.map