import { type InvoiceCreateSchemaInput, type InvoiceOutput, type InvoiceUpdateSchemaInput } from './invoice.types.js';
export declare const invoicesService: {
    getAllInvoices: (autoentrepreneurId: string, page: number, limit: number) => Promise<{
        invoices: InvoiceOutput[];
        count: number;
    }>;
    getInvoiceById: (autoentrepreneurId: string, invoiceId: string) => Promise<InvoiceOutput>;
    getInvoiceByNumber: (autoentrepreneurId: string, invoiceNumber: string) => Promise<InvoiceOutput>;
    addInvoice: (autoentrepreneurId: string, data: InvoiceCreateSchemaInput) => Promise<InvoiceOutput>;
    updateInvoice: (autoentrepreneurId: string, invoiceId: string, data: InvoiceUpdateSchemaInput) => Promise<InvoiceOutput>;
    cancelInvoice: (autoentrepreneurId: string, invoiceId: string) => Promise<InvoiceOutput>;
    deleteInvoice: (autoentrepreneurId: string, invoiceId: string) => Promise<boolean>;
    generatePdf: (autoentrepreneurId: string, invoiceId: string) => Promise<{
        pdf: Uint8Array<ArrayBufferLike>;
        invoiceNumber: string | undefined;
    }>;
};
//# sourceMappingURL=invoice.service.d.ts.map