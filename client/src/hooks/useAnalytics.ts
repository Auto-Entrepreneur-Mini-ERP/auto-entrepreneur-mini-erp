import { useState } from "react";
import { dashboardApi } from "../api/dashboard.api";
import type { kpis, recentsTypes } from "../types/dashboard.types";

type MonthlyPoint = { index: number; amount: number };

export const useAnalytics = () => {
    const [kpis, setKpis] = useState<kpis>({
        CAmois: 0,
        unpaidInvoices: 0,
        netRevenues: 0,
        depenses: 0
    });
    const [monthlyRevenues, setMonthlyRevenues] = useState<MonthlyPoint[]>([]);
    const [monthlyDepences, setMonthlyDepences] = useState<MonthlyPoint[]>([]);
    const [recents, setRecents] = useState<recentsTypes>({
        recentInvoices: { count: 0, invoices: [] },
        recentPayments: { count: 0, payments: [] },
        unpaidInvoices: []
    });

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

    const getMonthlyRevenuesData = async () => {
        const result = await dashboardApi.getMonthlyRevenues();

        if (result) {
            setMonthlyRevenues(result.data as MonthlyPoint[]);
        };
    };

    const getMonthlyDepencesData = async () => {
        const result = await dashboardApi.getMonthlyDepenses();

        if (result) {
            setMonthlyDepences(result.data as MonthlyPoint[]);
        };
    };

    const getRecentsData = async () => {
        const result = await dashboardApi.getRecents();
        if (result) {
            setRecents(result.data as recentsTypes);
        };
    };

    return {
        kpis,
        monthlyRevenues,
        monthlyDepences,
        recents,
        getKpisData,
        getMonthlyRevenuesData,
        getMonthlyDepensesData,
        getRecentsData,
    };
};