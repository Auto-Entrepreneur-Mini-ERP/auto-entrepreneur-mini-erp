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

const resetPassword = async (req: Request, res: Response): Promise<Response> => {
    return res.status(200).json();
}

const logout = async (req: Request, res: Response): Promise<Response> => {
    return res.status(200).json();
}

export const authController = {
    register,
    login,
    resetPassword,
    logout,
}