import type { Request, Response } from 'express';
export declare const expenseController: {
    getExpenses: (req: Request, res: Response, next: import("express").NextFunction) => void;
    getStats: (req: Request, res: Response, next: import("express").NextFunction) => void;
    exportExcel: (req: Request, res: Response, next: import("express").NextFunction) => void;
    getExpense: (req: Request, res: Response, next: import("express").NextFunction) => void;
    createExpense: ((req: Request, res: Response, next: import("express").NextFunction) => void)[];
    updateExpense: ((req: Request, res: Response, next: import("express").NextFunction) => void)[];
    deleteExpense: (req: Request, res: Response, next: import("express").NextFunction) => void;
};
//# sourceMappingURL=expense.controller.d.ts.map