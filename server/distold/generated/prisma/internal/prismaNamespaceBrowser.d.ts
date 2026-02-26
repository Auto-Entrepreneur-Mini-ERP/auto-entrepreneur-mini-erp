import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly AutoEntrepreneur: "AutoEntrepreneur";
    readonly Customer: "Customer";
    readonly Item: "Item";
    readonly Product: "Product";
    readonly Service: "Service";
    readonly Invoice: "Invoice";
    readonly Quote: "Quote";
    readonly InvoiceLine: "InvoiceLine";
    readonly QuoteLine: "QuoteLine";
    readonly Payment: "Payment";
    readonly Expense: "Expense";
    readonly Document: "Document";
    readonly TaxDeclaration: "TaxDeclaration";
    readonly Contribution: "Contribution";
    readonly Notification: "Notification";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly firstName: "firstName";
    readonly lastName: "lastName";
    readonly phone: "phone";
    readonly address: "address";
    readonly creationDate: "creationDate";
    readonly updateDate: "updateDate";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const AutoEntrepreneurScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly password: "password";
    readonly businessName: "businessName";
    readonly activityType: "activityType";
    readonly taxRate: "taxRate";
    readonly ice: "ice";
    readonly logo: "logo";
    readonly creationDate: "creationDate";
    readonly updateDate: "updateDate";
    readonly passwordResetToken: "passwordResetToken";
    readonly passwordResetTokenExpiration: "passwordResetTokenExpiration";
};
export type AutoEntrepreneurScalarFieldEnum = (typeof AutoEntrepreneurScalarFieldEnum)[keyof typeof AutoEntrepreneurScalarFieldEnum];
export declare const CustomerScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly ice: "ice";
    readonly city: "city";
    readonly country: "country";
    readonly isActive: "isActive";
    readonly AutoEntrepreneurId: "AutoEntrepreneurId";
    readonly creationDate: "creationDate";
    readonly updateDate: "updateDate";
};
export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum];
export declare const ItemScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
    readonly unit: "unit";
    readonly category: "category";
    readonly isActive: "isActive";
    readonly creationDate: "creationDate";
    readonly updateDate: "updateDate";
};
export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum];
export declare const ProductScalarFieldEnum: {
    readonly id: "id";
    readonly itemId: "itemId";
    readonly unitPrice: "unitPrice";
    readonly reference: "reference";
    readonly stockQuantity: "stockQuantity";
    readonly alertThreshold: "alertThreshold";
    readonly AutoEntrepreneurId: "AutoEntrepreneurId";
};
export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum];
export declare const ServiceScalarFieldEnum: {
    readonly id: "id";
    readonly itemId: "itemId";
    readonly hourlyRate: "hourlyRate";
    readonly fixedRate: "fixedRate";
    readonly estimatedDuration: "estimatedDuration";
    readonly AutoEntrepreneurId: "AutoEntrepreneurId";
};
export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum];
export declare const InvoiceScalarFieldEnum: {
    readonly id: "id";
    readonly invoiceNumber: "invoiceNumber";
    readonly issueDate: "issueDate";
    readonly dueDate: "dueDate";
    readonly status: "status";
    readonly subtotal: "subtotal";
    readonly discount: "discount";
    readonly totalAmount: "totalAmount";
    readonly paidAmount: "paidAmount";
    readonly remainingAmount: "remainingAmount";
    readonly notes: "notes";
    readonly pdfUrl: "pdfUrl";
    readonly AutoEntrepreneurId: "AutoEntrepreneurId";
    readonly customerId: "customerId";
    readonly creationDate: "creationDate";
    readonly updateDate: "updateDate";
    readonly quoteId: "quoteId";
};
export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum];
export declare const QuoteScalarFieldEnum: {
    readonly id: "id";
    readonly quoteNumber: "quoteNumber";
    readonly issueDate: "issueDate";
    readonly validityDate: "validityDate";
    readonly status: "status";
    readonly subtotal: "subtotal";
    readonly taxAmount: "taxAmount";
    readonly totalAmount: "totalAmount";
    readonly notes: "notes";
    readonly pdfUrl: "pdfUrl";
    readonly AutoEntrepreneurId: "AutoEntrepreneurId";
    readonly customerId: "customerId";
    readonly creationDate: "creationDate";
    readonly updateDate: "updateDate";
    readonly invoiceId: "invoiceId";
};
export type QuoteScalarFieldEnum = (typeof QuoteScalarFieldEnum)[keyof typeof QuoteScalarFieldEnum];
export declare const InvoiceLineScalarFieldEnum: {
    readonly id: "id";
    readonly lineType: "lineType";
    readonly description: "description";
    readonly quantity: "quantity";
    readonly unitPrice: "unitPrice";
    readonly totalPrice: "totalPrice";
    readonly order: "order";
    readonly invoiceId: "invoiceId";
    readonly productId: "productId";
    readonly serviceId: "serviceId";
};
export type InvoiceLineScalarFieldEnum = (typeof InvoiceLineScalarFieldEnum)[keyof typeof InvoiceLineScalarFieldEnum];
export declare const QuoteLineScalarFieldEnum: {
    readonly id: "id";
    readonly lineType: "lineType";
    readonly description: "description";
    readonly quantity: "quantity";
    readonly unitPrice: "unitPrice";
    readonly totalPrice: "totalPrice";
    readonly order: "order";
    readonly quoteId: "quoteId";
    readonly productId: "productId";
    readonly serviceId: "serviceId";
};
export type QuoteLineScalarFieldEnum = (typeof QuoteLineScalarFieldEnum)[keyof typeof QuoteLineScalarFieldEnum];
export declare const PaymentScalarFieldEnum: {
    readonly id: "id";
    readonly reference: "reference";
    readonly amount: "amount";
    readonly paymentDate: "paymentDate";
    readonly paymentMethod: "paymentMethod";
    readonly notes: "notes";
    readonly transactionNumber: "transactionNumber";
    readonly isReconciled: "isReconciled";
    readonly AutoEntrepreneurId: "AutoEntrepreneurId";
    readonly invoiceId: "invoiceId";
    readonly creationDate: "creationDate";
};
export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum];
export declare const ExpenseScalarFieldEnum: {
    readonly id: "id";
    readonly category: "category";
    readonly description: "description";
    readonly amount: "amount";
    readonly date: "date";
    readonly supplier: "supplier";
    readonly paymentMethod: "paymentMethod";
    readonly receiptUrl: "receiptUrl";
    readonly isDeductible: "isDeductible";
    readonly AutoEntrepreneurId: "AutoEntrepreneurId";
    readonly creationDate: "creationDate";
    readonly updateDate: "updateDate";
};
export type ExpenseScalarFieldEnum = (typeof ExpenseScalarFieldEnum)[keyof typeof ExpenseScalarFieldEnum];
export declare const DocumentScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly type: "type";
    readonly category: "category";
    readonly fileUrl: "fileUrl";
    readonly fileSize: "fileSize";
    readonly uploadDate: "uploadDate";
    readonly description: "description";
    readonly AutoEntrepreneurId: "AutoEntrepreneurId";
};
export type DocumentScalarFieldEnum = (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum];
export declare const TaxDeclarationScalarFieldEnum: {
    readonly id: "id";
    readonly period: "period";
    readonly year: "year";
    readonly month: "month";
    readonly totalRevenue: "totalRevenue";
    readonly taxRate: "taxRate";
    readonly taxAmount: "taxAmount";
    readonly status: "status";
    readonly dueDate: "dueDate";
    readonly paymentDate: "paymentDate";
    readonly pdfUrl: "pdfUrl";
    readonly AutoEntrepreneurId: "AutoEntrepreneurId";
    readonly creationDate: "creationDate";
};
export type TaxDeclarationScalarFieldEnum = (typeof TaxDeclarationScalarFieldEnum)[keyof typeof TaxDeclarationScalarFieldEnum];
export declare const ContributionScalarFieldEnum: {
    readonly id: "id";
    readonly period: "period";
    readonly year: "year";
    readonly quarter: "quarter";
    readonly amount: "amount";
    readonly dueDate: "dueDate";
    readonly paymentDate: "paymentDate";
    readonly status: "status";
    readonly reference: "reference";
    readonly AutoEntrepreneurId: "AutoEntrepreneurId";
    readonly creationDate: "creationDate";
};
export type ContributionScalarFieldEnum = (typeof ContributionScalarFieldEnum)[keyof typeof ContributionScalarFieldEnum];
export declare const NotificationScalarFieldEnum: {
    readonly id: "id";
    readonly type: "type";
    readonly title: "title";
    readonly message: "message";
    readonly associatedEntityType: "associatedEntityType";
    readonly associatedEntityId: "associatedEntityId";
    readonly isRead: "isRead";
    readonly priority: "priority";
    readonly AutoEntrepreneurId: "AutoEntrepreneurId";
    readonly creationDate: "creationDate";
};
export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const UserOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly firstName: "firstName";
    readonly lastName: "lastName";
    readonly phone: "phone";
    readonly address: "address";
};
export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum];
export declare const AutoEntrepreneurOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly password: "password";
    readonly businessName: "businessName";
    readonly ice: "ice";
    readonly logo: "logo";
    readonly passwordResetToken: "passwordResetToken";
};
export type AutoEntrepreneurOrderByRelevanceFieldEnum = (typeof AutoEntrepreneurOrderByRelevanceFieldEnum)[keyof typeof AutoEntrepreneurOrderByRelevanceFieldEnum];
export declare const CustomerOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly ice: "ice";
    readonly city: "city";
    readonly country: "country";
    readonly AutoEntrepreneurId: "AutoEntrepreneurId";
};
export type CustomerOrderByRelevanceFieldEnum = (typeof CustomerOrderByRelevanceFieldEnum)[keyof typeof CustomerOrderByRelevanceFieldEnum];
export declare const ItemOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
    readonly unit: "unit";
    readonly category: "category";
};
export type ItemOrderByRelevanceFieldEnum = (typeof ItemOrderByRelevanceFieldEnum)[keyof typeof ItemOrderByRelevanceFieldEnum];
export declare const ProductOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly itemId: "itemId";
    readonly reference: "reference";
    readonly AutoEntrepreneurId: "AutoEntrepreneurId";
};
export type ProductOrderByRelevanceFieldEnum = (typeof ProductOrderByRelevanceFieldEnum)[keyof typeof ProductOrderByRelevanceFieldEnum];
export declare const ServiceOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly itemId: "itemId";
    readonly AutoEntrepreneurId: "AutoEntrepreneurId";
};
export type ServiceOrderByRelevanceFieldEnum = (typeof ServiceOrderByRelevanceFieldEnum)[keyof typeof ServiceOrderByRelevanceFieldEnum];
export declare const InvoiceOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly invoiceNumber: "invoiceNumber";
    readonly notes: "notes";
    readonly pdfUrl: "pdfUrl";
    readonly AutoEntrepreneurId: "AutoEntrepreneurId";
    readonly customerId: "customerId";
    readonly quoteId: "quoteId";
};
export type InvoiceOrderByRelevanceFieldEnum = (typeof InvoiceOrderByRelevanceFieldEnum)[keyof typeof InvoiceOrderByRelevanceFieldEnum];
export declare const QuoteOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly quoteNumber: "quoteNumber";
    readonly notes: "notes";
    readonly pdfUrl: "pdfUrl";
    readonly AutoEntrepreneurId: "AutoEntrepreneurId";
    readonly customerId: "customerId";
    readonly invoiceId: "invoiceId";
};
export type QuoteOrderByRelevanceFieldEnum = (typeof QuoteOrderByRelevanceFieldEnum)[keyof typeof QuoteOrderByRelevanceFieldEnum];
export declare const InvoiceLineOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly description: "description";
    readonly invoiceId: "invoiceId";
    readonly productId: "productId";
    readonly serviceId: "serviceId";
};
export type InvoiceLineOrderByRelevanceFieldEnum = (typeof InvoiceLineOrderByRelevanceFieldEnum)[keyof typeof InvoiceLineOrderByRelevanceFieldEnum];
export declare const QuoteLineOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly description: "description";
    readonly quoteId: "quoteId";
    readonly productId: "productId";
    readonly serviceId: "serviceId";
};
export type QuoteLineOrderByRelevanceFieldEnum = (typeof QuoteLineOrderByRelevanceFieldEnum)[keyof typeof QuoteLineOrderByRelevanceFieldEnum];
export declare const PaymentOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly reference: "reference";
    readonly notes: "notes";
    readonly transactionNumber: "transactionNumber";
    readonly AutoEntrepreneurId: "AutoEntrepreneurId";
    readonly invoiceId: "invoiceId";
};
export type PaymentOrderByRelevanceFieldEnum = (typeof PaymentOrderByRelevanceFieldEnum)[keyof typeof PaymentOrderByRelevanceFieldEnum];
export declare const ExpenseOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly category: "category";
    readonly description: "description";
    readonly supplier: "supplier";
    readonly paymentMethod: "paymentMethod";
    readonly receiptUrl: "receiptUrl";
    readonly AutoEntrepreneurId: "AutoEntrepreneurId";
};
export type ExpenseOrderByRelevanceFieldEnum = (typeof ExpenseOrderByRelevanceFieldEnum)[keyof typeof ExpenseOrderByRelevanceFieldEnum];
export declare const DocumentOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly type: "type";
    readonly category: "category";
    readonly fileUrl: "fileUrl";
    readonly description: "description";
    readonly AutoEntrepreneurId: "AutoEntrepreneurId";
};
export type DocumentOrderByRelevanceFieldEnum = (typeof DocumentOrderByRelevanceFieldEnum)[keyof typeof DocumentOrderByRelevanceFieldEnum];
export declare const TaxDeclarationOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly period: "period";
    readonly pdfUrl: "pdfUrl";
    readonly AutoEntrepreneurId: "AutoEntrepreneurId";
};
export type TaxDeclarationOrderByRelevanceFieldEnum = (typeof TaxDeclarationOrderByRelevanceFieldEnum)[keyof typeof TaxDeclarationOrderByRelevanceFieldEnum];
export declare const ContributionOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly period: "period";
    readonly reference: "reference";
    readonly AutoEntrepreneurId: "AutoEntrepreneurId";
};
export type ContributionOrderByRelevanceFieldEnum = (typeof ContributionOrderByRelevanceFieldEnum)[keyof typeof ContributionOrderByRelevanceFieldEnum];
export declare const NotificationOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly message: "message";
    readonly associatedEntityType: "associatedEntityType";
    readonly associatedEntityId: "associatedEntityId";
    readonly priority: "priority";
    readonly AutoEntrepreneurId: "AutoEntrepreneurId";
};
export type NotificationOrderByRelevanceFieldEnum = (typeof NotificationOrderByRelevanceFieldEnum)[keyof typeof NotificationOrderByRelevanceFieldEnum];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map