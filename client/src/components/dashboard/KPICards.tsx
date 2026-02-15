import { Landmark, FileText, HandCoins, BanknoteArrowDown } from "lucide-react";
import type { kpis } from "../../types/dashboard.types";

type KPICardsProps = {
  kpisData: kpis;
}

export function KPICards({ kpisData }: KPICardsProps) {
  
  const kpis = [
    {
      icon: Landmark,
      label: "Chiffre d'affaire (ce mois)",
      value:  kpisData.CAmois + " DHs",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      valueColor: "text-green-700"
    },
    {
      icon: FileText,
      label: "Factures non Payeé",
      value: kpisData.unpaidInvoices,
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      valueColor: "text-orange-700"
    },
    {
      icon: HandCoins,
      label: "Revenues Nett",
      value: kpisData.netRevenues + " DHs",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      valueColor: "text-green-700"
    },
    {
      icon: BanknoteArrowDown,
      label: "Depences",
      value: kpisData.depenses + " DHs",
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
      valueColor: "text-red-700"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {kpis.map((kpi, index) => {
        const Icon = kpi.icon;
        return (
          <div
            key={index}
            className="bg-white rounded-[20px] p-6 shadow-[0_2px_16px_rgba(0,0,0,0.04)] border border-gray-100 hover:border-[#2D3194] hover:shadow-[0_4px_20px_rgba(45,49,148,0.08)] transition-all duration-300 group"
          >
            {/* Icon */}
            <div className={`w-14 h-14 rounded-[16px] ${kpi.bgColor} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300`}>
              <Icon className={`w-7 h-7 ${kpi.iconColor}`} strokeWidth={2} />
            </div>

            {/* Value */}
            <div className={`text-3xl font-semibold ${kpi.valueColor} mb-2`}>
              {kpi.value}
            </div>

            {/* Label */}
            <p className="text-[#7A7A7A] text-sm">
              {kpi.label}
            </p>
          </div>
        );
      })}
    </div>
  );
}
