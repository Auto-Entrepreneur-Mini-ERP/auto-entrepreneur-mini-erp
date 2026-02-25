export const getNotificationPath = (entityType: string, entityId: string): string => {
  switch (entityType) {
    case 'invoice': return `/app/quots-invoices?highlight=invoice&id=${entityId}`;
    case 'quote': return `/app/quots-invoices?highlight=quote&id=${entityId}`;
    case 'payment': return `/app/payments?highlight=${entityId}`;
    case 'tax': return `/app/ca-declaration?highlight=declaration&id=${entityId}`;
    case 'contribution': return `/app/cnss-payment?highlight=${entityId}`;
    case 'expense': return `/app/expenses?highlight=${entityId}`;
    default: return `/app/dashboard`;
  }
};