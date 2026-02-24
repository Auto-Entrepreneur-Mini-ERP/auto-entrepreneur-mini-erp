export enum PaymentStatus {
  PENDING = "PENDING",
  PAID = "PAID",
  OVERDUE = "OVERDUE",
  CANCELLED = "CANCELLED",
}

export interface ContributionOutput {
    id: string,
    period: string,
    year: number,
    quarter?: number,
    amount: number,
    dueDate: Date,
    paymentDate?: Date,
    status:  PaymentStatus,
    reference: string,
    AutoentrepreneurId: string,
}

export interface ContributionCreateInput {
    period: string,
    amount: number,
    dueDate: string,
    paymentDate: string,
    status: PaymentStatus,
    reference: string,
}

export interface ContributionUpdateStatusInput {
    status: PaymentStatus
}