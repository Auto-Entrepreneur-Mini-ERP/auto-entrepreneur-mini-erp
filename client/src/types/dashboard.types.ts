export interface kpis {
  CAmois: number,
  unpaidInvoices: number,
  netRevenues: number,
  depenses: number,
};

export interface recentsTypes {
  recentInvoices: {
    count: number,
    invoices: Array<{
      invoiceNumber: string;
      totalAmount: string;
      dueDate: string;
      status: string;
      customer: {
        user: {
          firstName: string,
          lastName: string,
        }
      }
    }>
  };
  recentPayments: Array<{
    reference: string;
    Invoice: {
      invoiceNumber: string,
      customer: {
        user: {
          firstName: string,
          lastName: string,
        }
      }
    };
    amount: string;
    paymentMethod: string,
    creationDate: string;
    method: string
  }>;
  unpaidInvoices: Array<{
    invoiceNumber: string;
    totalAmount: string;
    dueDate: string;
    remainingAmount: string;
  }>
};
