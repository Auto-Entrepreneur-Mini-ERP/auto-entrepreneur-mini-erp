import type { Request, Response } from "express";
import { authService } from "./auth.service.js";

const register = async (req: Request, res: Response): Promise<Response> => {
    const autoEntrepreneur = await authService.createAutoEntrepreneur(req.body);
    return res.status(201).json(autoEntrepreneur);
}

const login = async (req: Request, res: Response): Promise<Response> => {
    const autoEntrepreneur = await authService.loginAutoEntrepreneur(req.body);
    return res.status(200).json(autoEntrepreneur);
}

const forgotPassword = async (req: Request, res: Response): Promise<Response> => {
    const result = await authService.forgotPassword(req.body.email);
    return res.status(200).json({
        otp: result
    });
}

const resetPassword = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const result = await authService.resetPassword(id as string, req.body);
    return res.status(200).json(result);
}

const logout = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const result = await authService.logout(id as string);
    return res.status(200).json(result);
}

export const authController = {
    register,
    login,
    forgotPassword,
    resetPassword,
    logout,
}