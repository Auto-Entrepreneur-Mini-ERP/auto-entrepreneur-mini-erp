import type { Request, Response } from "express";
export declare const ContributionController: {
    getAllContributions: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    getOneContribution: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    createContribution: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    modifyContributionStatus: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
};
//# sourceMappingURL=contribution.controller.d.ts.map