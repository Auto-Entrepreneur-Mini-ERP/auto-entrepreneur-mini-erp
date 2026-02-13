import { useState } from "react";
import { dashboardApi } from "../api/dashboard.api";

export const useAnalytics = () => {
    const [kpis, setKpis] = useState({});
    // const [monthlyRevenues, setMonthlyRevenues] = useState({});
    // const [monthlyDepences, setMonthlyDepences] = useState({});
    // const [recents, setRecents] = useState({});

    const getKpisData = async () => {
        const result = await dashboardApi.getKPIs();
        
        if (result) {
            setKpis({
                CAmois: result.data.CAmois,
                unpaidInvoices: result.data.unpaidInvoices,
                netRevenues: result.data.netRevenues,
                depenses: result.data.depenses,
            });
        };
    };

    return {
        kpis,
        // monthlyRevenues,
        // monthlyDepences,
        // recents,
        getKpisData,
    };
};