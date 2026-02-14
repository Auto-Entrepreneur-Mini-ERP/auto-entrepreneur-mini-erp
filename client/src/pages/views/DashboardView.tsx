import { KPICards } from "../../components/dashboard/KPICards";
import { ChartsAndTables } from "../../components/dashboard/ChartsAndTables";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export function DashboardView() {
  const navigate = useNavigate();
  useEffect(()=>{
    
  },[]);

  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <KPICards />

      {/* Charts and Tables Section */}
      <ChartsAndTables />
    </div>
  );
}