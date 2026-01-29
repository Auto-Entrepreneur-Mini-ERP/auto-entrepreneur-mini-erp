import type { Request, Response } from "express";
import { autoEntrepreneurService } from "./auto-entrepreneur.service.js";

const getProfile = async (req: Request, res: Response): Promise<Response> => {
    const autoentrepreneurId = req.AutoEntrepreneurID;

    const autoEntrepreneur = await autoEntrepreneurService.profileAutoEntrepreneur(autoentrepreneurId as string);
    return res.status(200).json(autoEntrepreneur);
};

const editProfile = async (req: Request, res: Response): Promise<Response> => {
    const autoentrepreneurId = req.AutoEntrepreneurID;
    const profileData = req.body;

    const updatedAutoEntrepreneur = await autoEntrepreneurService.updateAutoEntrepreneur(
        autoentrepreneurId as string,
        profileData,
    );
    return res.status(200).json(updatedAutoEntrepreneur);
}

export const autoEntrepreneurController = {
    getProfile,
    editProfile,
}