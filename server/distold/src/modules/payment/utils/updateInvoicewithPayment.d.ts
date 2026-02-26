import type { Prisma } from "../../../../generated/prisma/browser.js";
import type { PaymentCreateInput } from "../payment.types.js";
export declare const updateInvoiceAfterCreate: (invoiceId: string, payment: PaymentCreateInput) => Promise<void>;
export declare const updateInvoiceAfterUpdate: (invoiceId: string, payment: Prisma.PaymentUpdateInput) => Promise<void>;
//# sourceMappingURL=updateInvoicewithPayment.d.ts.map