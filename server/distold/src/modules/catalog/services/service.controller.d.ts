import type { Request, Response } from 'express';
declare global {
    namespace Express {
        interface Request {
            user?: {
                id: string;
            };
        }
    }
}
export declare class ServiceController {
    static createService: ((req: Request, res: Response, next: import("express").NextFunction) => void)[];
    static getServices: ((req: Request, res: Response, next: import("express").NextFunction) => void)[];
    static getService: ((req: Request, res: Response, next: import("express").NextFunction) => void)[];
    static updateService: ((req: Request, res: Response, next: import("express").NextFunction) => void)[];
    static deleteService: ((req: Request, res: Response, next: import("express").NextFunction) => void)[];
}
export default ServiceController;
//# sourceMappingURL=service.controller.d.ts.map