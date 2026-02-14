import type { NextFunction } from "express";
import type { Request, Response } from "express";


export class AppError extends Error{
    statusCode: number;

    constructor(message: string, statusCode: number){
        super(message);
        this.statusCode = statusCode;
    }
}

export const errorHandler = (err: AppError, req: Request, res: Response, next: NextFunction) => {
    console.log(err.message);
    
    const statusCode = err.statusCode || 500;
    if(statusCode === 500) err.message = "Something Went wrong!";

    res.status(200).json({
        message: err.message,
        statusCode: statusCode
    });
    next();
}