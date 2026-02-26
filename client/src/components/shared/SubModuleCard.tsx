import type { LucideIcon } from "lucide-react";

interface SubModuleCardProps {
  name: string;
  icon: LucideIcon;
}

export function SubModuleCard({ name, icon: Icon }: SubModuleCardProps) {
  return (
    <button className="group bg-white rounded-[20px] p-6 border-2 border-gray-100 hover:border-[#2D3194] transition-all duration-300 shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_20px_rgba(45,49,148,0.08)] space-y-4">
      {/* Icon */}
      <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform border border-gray-100">
        <Icon className="w-7 h-7 text-[#2D3194]" strokeWidth={2} />
      </div>

      {/* Name */}
      <div className="space-y-1">
        <h3 className="text-[#1A1A1A] font-medium text-left">{name}</h3>
        <p className="text-[#7A7A7A] text-sm text-left">Access module</p>
      </div>

      {/* Gold accent indicator on hover */}
      <div className="h-1 w-0 group-hover:w-full bg-[#F8BC00] rounded-full transition-all duration-300"></div>
    </button>
  );
}
