import type { Request, Response } from "express";
export declare const productController: {
    getProducts: (req: Request, res: Response, next: import("express").NextFunction) => void;
    getAlerts: (req: Request, res: Response, next: import("express").NextFunction) => void;
    getProduct: (req: Request, res: Response, next: import("express").NextFunction) => void;
    getProductByName: (req: Request, res: Response, next: import("express").NextFunction) => void;
    createProduct: (req: Request, res: Response, next: import("express").NextFunction) => void;
    updateProduct: (req: Request, res: Response, next: import("express").NextFunction) => void;
    updateStock: (req: Request, res: Response, next: import("express").NextFunction) => void;
    deleteProduct: (req: Request, res: Response, next: import("express").NextFunction) => void;
};
//# sourceMappingURL=product.controller.d.ts.map