import type { Request, Response, NextFunction } from "express";

export const validateBody =
  (schema: any) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      
      await schema.body.parse(req.body);
      // await schema.query.parse(req.query);
      next();
      
    } catch (error: any) {
      console.log(error);
      
      return res.status(400).json({
        message: "Validation error",
        errors: error.message,
      });
      
    }
  };


export const validateQuery =
  (schema: any) => async (req: Request, res: Response, next: NextFunction) => {
    try {

      await schema.query.parse(req.query);
      next();
      
    } catch (error: any) {
      return res.status(400).json({
        message: "Validation error",
        errors: error.message,
      });
      
    }
  };
