import { type LucideIcon } from "lucide-react";

interface NavigationCardProps {
  name: string;
  icon: LucideIcon;
}

export function NavigationCard({ name, icon: Icon }: NavigationCardProps) {
  return (
    <button className="group bg-white rounded-[20px] border-2 border-gray-100 hover:border-[#2D3194] transition-all duration-300 h-40 flex flex-col items-center justify-center gap-4 relative overflow-hidden">
      {/* Hover gold accent highlight */}
      <div className="absolute bottom-0 left-0 right-0 h-0 bg-[#F8BC00] group-hover:h-1 transition-all duration-300"></div>

      {/* Icon */}
      <Icon className="w-10 h-10 text-[#2D3194] group-hover:scale-110 transition-transform duration-300" strokeWidth={1.8} />

      {/* Label */}
      <span className="text-[#2D3194] font-medium text-center px-4">{name}</span>
    </button>
  );
}
