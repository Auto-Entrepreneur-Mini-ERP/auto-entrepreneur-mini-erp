// expenses/expense.types.ts
export type ExpenseCategory =
  | "FOURNITURES"
  | "TRANSPORT"
  | "COMMUNICATION"
  | "FORMATION"
  | "LOGICIEL"
  | "REPAS"
  | "LOYER"
  | "MATERIEL"
  | "PUBLICITE"
  | "ASSURANCE"
  | "AUTRE";

export type ExpensePaymentMethod =
  | "CASH"
  | "CHECK"
  | "BANK_TRANSFER"
  | "CREDIT_CARD"
  | "MOBILE_PAYMENT"
  | "OTHER";

// ─── Input types ──────────────────────────────────────────────────────────────
export interface CreateExpenseInput {
  category: ExpenseCategory;
  description?: string | undefined;
  amount: number;
  date: string | Date;
  supplier?: string | undefined;
  paymentMethod: ExpensePaymentMethod;
  isDeductible?: boolean | undefined;
  // receiptUrl is set by multer after upload, not from body
}

export interface UpdateExpenseInput {
  category?: ExpenseCategory | undefined;
  description?: string | undefined;
  amount?: number | undefined;
  date?: string | Date | undefined;
  supplier?: string | undefined;
  paymentMethod?: ExpensePaymentMethod | undefined;
  isDeductible?: boolean | undefined;
  // receiptUrl updated if new file uploaded
}

export interface ExpenseFilters {
  category?: ExpenseCategory;
  startDate?: string | Date;
  endDate?: string | Date;
  isDeductible?: boolean;
  minAmount?: number;
  maxAmount?: number;
}

// ─── Response type (mirrors Prisma Expense model) ─────────────────────────────
export interface ExpenseResponse {
  id: string;
  category: string;
  description: string | null;
  amount: number; // serialised from Decimal
  date: Date;
  supplier: string | null;
  paymentMethod: string;
  receiptUrl: string | null;
  isDeductible: boolean;
  autoEntrepreneurId: string;
  creationDate: Date;
  updateDate: Date;
}

// ─── Stats response ───────────────────────────────────────────────────────────
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
