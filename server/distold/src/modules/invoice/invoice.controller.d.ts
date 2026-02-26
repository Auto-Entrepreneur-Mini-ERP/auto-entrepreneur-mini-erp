import type { Request, Response } from "express";
export declare const invoiceController: {
    getInvoices: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    getOneInvoice: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    getInvoicesByNumber: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    createInvoice: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    editInvoice: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    cancelInvoice: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    deleteInvoice: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    downloadInvoice: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
};
//# sourceMappingURL=invoice.controller.d.ts.map