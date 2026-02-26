import type { Request, Response } from "express";
export declare const taxDeclartaionController: {
    getAllTaxDeclartion: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    createTaxDeclaration: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    patchTaxDeclaration: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    getTaxDeclaration: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    deleteTaxDeclaration: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    getCurrentTaxDeclarationInfo: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
};
//# sourceMappingURL=taxDeclaration.controller.d.ts.map