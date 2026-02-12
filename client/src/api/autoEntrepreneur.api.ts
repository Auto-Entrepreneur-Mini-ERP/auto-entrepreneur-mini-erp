import { api } from "../api/axios";

const getProfile = async () => {
    const autoE = await api.get('/profile');
    return autoE;
};

export const autoEntrepreneurApi = {
    getProfile,
}