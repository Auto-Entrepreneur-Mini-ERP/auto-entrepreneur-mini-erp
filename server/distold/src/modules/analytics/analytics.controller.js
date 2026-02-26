import { analyticsService } from "./analytics.service.js";
const overview = async (req, res) => {
    const autoenretpreneurId = req.AutoEntrepreneurID;
    const results = await analyticsService.overview(autoenretpreneurId);
    res.status(200).json(results);
};
const monthlyRevenues = async (req, res) => {
    const autoenretpreneurId = req.AutoEntrepreneurID;
    const results = await analyticsService.monthlyRevenues(autoenretpreneurId);
    res.status(200).json(results);
};
const monthlyDepenses = async (req, res) => {
    const autoenretpreneurId = req.AutoEntrepreneurID;
    const results = await analyticsService.monthlyDepenses(autoenretpreneurId);
    res.status(200).json(results);
};
const recents = async (req, res) => {
    const autoenretpreneurId = req.AutoEntrepreneurID;
    const results = await analyticsService.recents(autoenretpreneurId);
    res.status(200).json(results);
};
export const analyticsController = {
    overview,
    monthlyDepenses,
    monthlyRevenues,
    recents
};
//# sourceMappingURL=analytics.controller.js.map