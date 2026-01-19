import type { NextFunction, Request, Response } from "express";
import z from "zod";
import { registerAutoEntrepreneurSchema } from "../modules/auth/auth.schema.js";


export const validate =
  (schema: any) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.body.parse(req.body);
      next();
    } catch (error: any) {
      return res.status(400).json({
        message: "Validation error",
        errors: error.message,
      });
    }
  };