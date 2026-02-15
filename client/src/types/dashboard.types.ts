export interface kpis {
  CAmois: number,
  unpaidInvoices: number,
  netRevenues: number,
  depenses: number,
};

export interface recentsTypes {
  recentInvoices: Array<{ id: string; client: string; amount: string; date: string; status: string }>;
  recentPayments: Array<{ id: string; client: string; amount: string; date: string; method: string }>;
  unpaidInvoices: Array<{ id: string; client: string; amount: string; date: string; daysOverdue: number }>
};
