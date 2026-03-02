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
  | "AUTRE"
  | "ABONNEMENT"
  | "EQUIPEMENT"
  | "HÉBERGEMENT"
  | "MAINTENANCE";

export type ExpensePaymentMethod =
  | "CASH"
  | "CHECK"
  | "BANK_TRANSFER"
  | "CREDIT_CARD"
  | "MOBILE_PAYMENT"
  | "OTHER";

export interface Expense {
  id: string;
  category: ExpenseCategory;
  description: string | null;
  amount: number;
  date: string;
  supplier: string | null;
  paymentMethod: ExpensePaymentMethod;
  receiptUrl: string | null;
  isDeductible: boolean;
  autoEntrepreneurId: string;
  creationDate: string;
  updateDate: string;
}

export interface CreateExpensePayload {
  category: ExpenseCategory;
  description?: string;
  amount: number;
  date: string;
  supplier?: string;
  paymentMethod: ExpensePaymentMethod;
  isDeductible?: boolean;
  receipt?: File;
}

export type UpdateExpensePayload = Partial<CreateExpensePayload>

export interface ExpenseFilters {
  category?: ExpenseCategory | '';
  startDate?: string;
  endDate?: string;
  isDeductible?: boolean | '';
  page?: number;
  limit?: number;
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

export interface ExpenseListResponse {
  success: boolean;
  data: Expense[];
  total: number;
  page: number;
  totalPages: number;
}