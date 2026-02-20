import type { Request, Response } from "express";
import { contributionService } from "./contribution.service.js";
import type { ContributionCreateInput, ContributionUpdateStatusInput } from "./contribution.types.js";


const getAllContributions = async (req: Request, res: Response) => {
    const autoEntrepreneurId = req.AutoEntrepreneurID;

    const page = req.query.page ? parseInt(req.query.page as string, 10) : 1;
    const limit = req.query.limit ? parseInt(req.query.limit as string, 10) : 10;

    const contributions = await contributionService.getAllContributions(autoEntrepreneurId as string, page as number, limit as number);
    res.status(200).json(contributions);
};

const getOneContribution = async (req: Request, res: Response) => {
    const autoEntrepreneurId = req.AutoEntrepreneurID;
    const { contributionId } = req.params;
    
    const contribution = await contributionService.getOneContribution(autoEntrepreneurId as string, contributionId as string);
    res.status(200).json(contribution);
};

const createContribution = async (req: Request, res: Response) => {
    const autoEntrepreneurId = req.AutoEntrepreneurID;
    const data = req.body;
    
    const contribution = await contributionService.createContribution(autoEntrepreneurId as string, data as ContributionCreateInput);
    res.status(200).json(contribution);
};


const modifyContributionStatus = async (req: Request, res: Response) => {
    const autoEntrepreneurId = req.AutoEntrepreneurID;
    const {contributionId} = req.params;
    const body = req.body;

    const contribution = await contributionService.modifyContributionStatus(autoEntrepreneurId as string, contributionId as string, body as ContributionUpdateStatusInput);
    res.status(200).json(contribution);
};

export const ContributionController = {
    getAllContributions,
    getOneContribution,
    createContribution,
    modifyContributionStatus,
};