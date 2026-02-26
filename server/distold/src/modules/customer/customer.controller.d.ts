import type { Request, Response } from "express";
export declare const customerController: {
    getAllCustomers: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    createCustomer: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    updateCustomer: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    getCustomer: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    getCustomerByName: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    deleteCustomer: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    getAllInvoices: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    getAllQuotes: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
};
//# sourceMappingURL=customer.controller.d.ts.map