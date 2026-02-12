import type { Request, Response } from "express";
import { analyticsService } from "./analytics.service.js";

const overview = async (req: Request, res: Response) => {
    const autoenretpreneurId = req.AutoEntrepreneurID;

    const results = await analyticsService.overview(autoenretpreneurId as string);
    res.status(200).json(results);
};

const monthlyRevenues = async (req: Request, res: Response) => {
    const autoenretpreneurId = req.AutoEntrepreneurID;

    const results = await analyticsService.monthlyRevenues(autoenretpreneurId as string);
    res.status(200).json(results);
};

const monthlyDepenses = async (req: Request, res: Response) => {
    const autoenretpreneurId = req.AutoEntrepreneurID;

    const results = await analyticsService.monthlyDepenses(autoenretpreneurId as string);
    res.status(200).json(results);
};

const recents = async (req: Request, res: Response) => {
    const autoenretpreneurId = req.AutoEntrepreneurID;

    const results = await analyticsService.recents(autoenretpreneurId as string);
    res.status(200).json(results);
};

export const analyticsController = {
    overview,
    monthlyDepenses,
    monthlyRevenues,
    recents
}