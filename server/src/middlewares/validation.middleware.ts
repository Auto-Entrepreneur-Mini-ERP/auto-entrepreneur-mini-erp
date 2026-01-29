import type { Request, Response, NextFunction } from "express";

export const validate =
  (schema: any) => (req: Request, res: Response, next: NextFunction) => {
    try {
      const parsed = schema.body.parse(req.body);

      req.body = parsed;

      next();
    } catch (error: any) {
      // const messages = error.issues
      //   .map((issue:any) => issue.message)
      //   .join(", ");
      return res.status(400).json({ message: "Validation error: " });
      
    }
  };
