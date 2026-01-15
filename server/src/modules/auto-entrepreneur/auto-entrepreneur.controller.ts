import type { Request, Response } from "express";
import { autoEntrepreneurService } from "./auto-entrepreneur.service.js";
import { get } from "node:http";

const getProfile = async (req: Request, res: Response): Promise<Response> => {
    const autoEntrepreneur = await autoEntrepreneurService.profileAutoEntrepreneur(req.body);
    return res.status(200).json({autoEntrepreneur});
};

export const autoEntrepreneurController = {
    getProfile,
}