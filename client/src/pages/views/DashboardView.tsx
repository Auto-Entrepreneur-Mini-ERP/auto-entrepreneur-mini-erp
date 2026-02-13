import { KPICards } from "../../components/dashboard/KPICards";
import { ChartsAndTables } from "../../components/dashboard/ChartsAndTables";
import { useEffect } from "react";
import { useAnalytics } from "../../hooks/useAnalytics";

export function DashboardView() {
  const { kpis, getKpisData } = useAnalytics();

  useEffect(()=>{
    getKpisData();
  },[]);
  console.log(kpis);
  
  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <KPICards />

      {/* Charts and Tables Section */}
      <ChartsAndTables />
    </div>
  );
}