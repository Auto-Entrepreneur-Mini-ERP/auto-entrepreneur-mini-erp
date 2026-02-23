import { KPICards } from "../../components/dashboard/KPICards";
import { ChartsAndTables } from "../../components/dashboard/ChartsAndTables";
import { useEffect } from "react";
import { useAnalytics } from "../../hooks/useAnalytics";
import type { kpis, recentsTypes } from "../../types/dashboard.types";

export function DashboardView() {
  const { 
    kpis, 
    monthlyRevenues, 
    monthlyDepences,
    recents,
    getKpisData, 
    getMonthlyRevenuesData,
    getMonthlyDepensesData,
    getRecentsData
  } = useAnalytics();

  useEffect(()=>{
    (async () => {
      await getKpisData();
      await getMonthlyRevenuesData();
      await getMonthlyDepensesData();
      await getRecentsData();
    })();
  },[]);  
    
  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <KPICards kpisData={kpis as kpis} />

      {/* Charts and Tables Section */}
      <ChartsAndTables monthlyRevenues={monthlyRevenues} monthlyDepences={monthlyDepences} recents={recents as recentsTypes} />
    </div>
  );
}