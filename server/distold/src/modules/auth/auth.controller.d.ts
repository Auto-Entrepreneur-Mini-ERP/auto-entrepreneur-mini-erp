import type { Request, Response } from "express";
export declare const authController: {
    register: (req: Request, res: Response) => Promise<Response>;
    login: (req: Request, res: Response) => Promise<Response>;
    forgotPassword: (req: Request, res: Response) => Promise<Response>;
    otpVerify: (req: Request, res: Response) => Promise<Response>;
    resetPassword: (req: Request, res: Response) => Promise<Response>;
    logout: (req: Request, res: Response) => Promise<Response>;
};
//# sourceMappingURL=auth.controller.d.ts.map