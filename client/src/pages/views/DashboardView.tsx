import { KPICards } from "../../components/dashboard/KPICards";
import { ChartsAndTables } from "../../components/dashboard/ChartsAndTables";

export function DashboardView() {
  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <KPICards />

      {/* Charts and Tables Section */}
      <ChartsAndTables />
    </div>
  );
}