export const PaymentStatus = {
  PENDING: "PENDING",
  PAID: "PAID",
  OVERDUE: "OVERDUE",
  CANCELLED: "CANCELLED",
} as const;

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus];

export interface Contribution {
  id: string;
  period: string;
  year: number;
  quarter?: number;
  amount: number;
  dueDate: Date;
  paymentDate?: Date;
  status: PaymentStatus;
  reference: string;
  AutoentrepreneurId: string;
}


export interface CurrentContribution {
  period: string;
  quarter: number;
  year: number;
  dueDate: string;
  amount: number;
  reference: string;
  status: PaymentStatus;
}
