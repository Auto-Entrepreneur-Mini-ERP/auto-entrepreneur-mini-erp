import { contributionService } from "./contribution.service.js";
// GET /contributions
const getAllContributions = async (req, res) => {
    try {
        const autoEntrepreneurId = req.AutoEntrepreneurID;
        if (!autoEntrepreneurId) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const page = req.query.page ? parseInt(req.query.page, 10) : 1;
        const limit = req.query.limit
            ? parseInt(req.query.limit, 10)
            : 10;
        const year = req.query.year
            ? parseInt(req.query.year, 10)
            : undefined;
        const status = req.query.status;
        const contributions = await contributionService.getAllContributions(autoEntrepreneurId, page, limit, year, status);
        return res.status(200).json(contributions);
    }
    catch (error) {
        console.error("Error in getAllContributions:", error);
        return res.status(500).json({
            message: "Erreur lors de la récupération des cotisations.",
        });
    }
};
// GET /contributions/:contributionId
const getOneContribution = async (req, res) => {
    try {
        const autoEntrepreneurId = req.AutoEntrepreneurID;
        if (!autoEntrepreneurId) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const contributionId = req.params.contributionId;
        const contribution = await contributionService.getOneContribution(autoEntrepreneurId, contributionId);
        return res.status(200).json(contribution);
    }
    catch (error) {
        console.error("Error in getOneContribution:", error);
        return res.status(500).json({
            message: "Erreur lors de la récupération de la cotisation.",
        });
    }
};
// POST /contributions
const createContribution = async (req, res) => {
    try {
        const autoEntrepreneurId = req.AutoEntrepreneurID;
        if (!autoEntrepreneurId) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const data = req.body;
        const contribution = await contributionService.createContribution(autoEntrepreneurId, data);
        return res.status(201).json(contribution);
    }
    catch (error) {
        console.error("Error in createContribution:", error);
        return res.status(500).json({
            message: "Erreur lors de la création de la cotisation.",
        });
    }
};
// PATCH /contributions/:contributionId
const modifyContributionStatus = async (req, res) => {
    try {
        const autoEntrepreneurId = req.AutoEntrepreneurID;
        if (!autoEntrepreneurId) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const contributionId = req.params.contributionId;
        const body = req.body;
        const contribution = await contributionService.modifyContributionStatus(autoEntrepreneurId, contributionId, body);
        return res.status(200).json(contribution);
    }
    catch (error) {
        console.error("Error in modifyContributionStatus:", error);
        return res.status(500).json({
            message: "Erreur lors de la modification du statut.",
        });
    }
};
export const ContributionController = {
    getAllContributions,
    getOneContribution,
    createContribution,
    modifyContributionStatus,
};
//# sourceMappingURL=contribution.controller.js.map