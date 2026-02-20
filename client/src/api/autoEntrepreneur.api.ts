import { api } from "../api/axios";
import type { AutoentrepreneurUpdateData } from "../types/autoentrepreneur.types";

const getProfile = async () => {
    const autoE = await api.get('/profile');
    return autoE;
};

const updateProfile = async (data: AutoentrepreneurUpdateData) => {    
    const autoE = await api.put('/profile', data);        
    return autoE;
};

export const autoEntrepreneurApi = {
    getProfile,
    updateProfile,
}