import type { Request, Response } from "express";
export declare const paymentController: {
    getAllPayments: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    getPaymentById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    createPayment: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    updatePayment: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    deletePayment: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    reconciliatePayment: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    paymentStats: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
};
//# sourceMappingURL=payment.controller.d.ts.map