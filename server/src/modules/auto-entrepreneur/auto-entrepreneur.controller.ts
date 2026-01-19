import type { Request, Response } from "express";
import { autoEntrepreneurService } from "./auto-entrepreneur.service.js";

const getProfile = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    const autoEntrepreneur = await autoEntrepreneurService.profileAutoEntrepreneur(id as string);
    return res.status(200).json(autoEntrepreneur);
};

const editProfile = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    const profileData = req.body;

    const updatedAutoEntrepreneur = await autoEntrepreneurService.updateAutoEntrepreneur(
        id as string,
        profileData,
    );
    return res.status(200).json(updatedAutoEntrepreneur);
}

export const autoEntrepreneurController = {
    getProfile,
    editProfile,
}