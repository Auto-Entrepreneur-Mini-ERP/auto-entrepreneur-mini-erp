import { api } from "./axios";

const getKPIs = async () => {
    const kpis = await api.get('/analytics/overview');
    console.log(kpis);
    
    return kpis;
};

const getMonthlyRevenues = async () => {
    const monthlyRevenues = await api.get('/analytics/monthly-revenues');
    return monthlyRevenues;
};

const getMonthlyDepenses = async () => {
    const monthlyDepenses = await api.get('/analytics/monthly-depenses');
    return monthlyDepenses;
};

const getRecents = async () => {
    const recents = await api.get('/analytics/recents');
    return recents;
};

export const dashboardApi = {
    getKPIs,
    getMonthlyRevenues,
    getMonthlyDepenses,
    getRecents
}