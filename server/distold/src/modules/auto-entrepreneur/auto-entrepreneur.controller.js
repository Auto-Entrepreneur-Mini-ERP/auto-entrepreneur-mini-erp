import { autoEntrepreneurService } from "./auto-entrepreneur.service.js";
const getProfile = async (req, res) => {
    const autoentrepreneurId = req.AutoEntrepreneurID;
    const autoEntrepreneur = await autoEntrepreneurService.profileAutoEntrepreneur(autoentrepreneurId);
    return res.status(200).json(autoEntrepreneur);
};
const editProfile = async (req, res) => {
    const autoentrepreneurId = req.AutoEntrepreneurID;
    const profileData = req.body;
    const updatedAutoEntrepreneur = await autoEntrepreneurService.updateAutoEntrepreneur(autoentrepreneurId, profileData);
    return res.status(200).json(updatedAutoEntrepreneur);
};
export const autoEntrepreneurController = {
    getProfile,
    editProfile,
};
//# sourceMappingURL=auto-entrepreneur.controller.js.map