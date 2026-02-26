import type { Request, Response } from "express";
export declare class DevisController {
    create(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getAll(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getById(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    update(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    delete(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    downloadQuote(req: Request, res: Response): Promise<void>;
    accepter(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    refuser(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
//# sourceMappingURL=devis.controller.d.ts.map