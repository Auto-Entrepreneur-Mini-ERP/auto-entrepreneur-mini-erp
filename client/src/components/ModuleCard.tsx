import { type LucideIcon } from "lucide-react";

interface ModuleCardProps {
  name: string;
  icon: LucideIcon;
  authorized: boolean;
}

export function ModuleCard({ name, icon: Icon, authorized }: ModuleCardProps) {
  return (
    <button
      disabled={!authorized}
      className={`group bg-white rounded-[20px] border-2 transition-all duration-300 h-44 flex flex-col items-center justify-center gap-4 ${
        authorized
          ? "border-gray-200 hover:border-[#2D3194] hover:shadow-[0_4px_16px_rgba(248,188,0,0.15)] cursor-pointer"
          : "border-gray-100 opacity-40 cursor-not-allowed"
      }`}
    >
      {/* Icon */}
      <Icon
        className={`w-12 h-12 transition-transform duration-300 ${
          authorized ? "text-[#2D3194] group-hover:scale-110" : "text-[#707070]"
        }`}
        strokeWidth={1.8}
      />

      {/* Title */}
      <span
        className={`text-center font-medium px-4 ${
          authorized ? "text-[#2D3194]" : "text-[#707070]"
        }`}
      >
        {name}
      </span>
    </button>
  );
}
