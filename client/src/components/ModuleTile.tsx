import { Lock, type LucideIcon } from "lucide-react";

interface ModuleTileProps {
  name: string;
  icon: LucideIcon;
  isLocked: boolean;
}

export function ModuleTile({ name, icon: Icon, isLocked }: ModuleTileProps) {
  return (
    <button
      disabled={isLocked}
      className={`group relative bg-white rounded-xl p-6 border transition-all duration-300 ${
        isLocked
          ? "border-gray-200 opacity-40 cursor-not-allowed"
          : "border-gray-200 hover:border-[#F8BC00] hover:-translate-y-2 hover:shadow-xl shadow-sm"
      }`}
    >
      <div className="flex flex-col items-center justify-center space-y-4 h-32">
        {/* Icon */}
        <div
          className={`transition-all duration-300 ${
            isLocked ? "text-gray-400" : "text-[#2D3194] group-hover:text-[#4850C8] group-hover:scale-110"
          }`}
        >
          <Icon className="w-10 h-10" strokeWidth={1.8} />
        </div>

        {/* Module Name */}
        <p
          className={`text-center font-medium transition-colors ${
            isLocked ? "text-gray-400" : "text-[#2D3194] group-hover:text-[#2D3194]"
          }`}
        >
          {name}
        </p>

        {/* Lock Icon Overlay */}
        {isLocked && (
          <div className="absolute top-3 right-3">
            <Lock className="w-4 h-4 text-gray-400" strokeWidth={2} />
          </div>
        )}

        {/* Active indicator - gold underline on hover */}
        {!isLocked && (
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#F8BC00] group-hover:w-2/3 transition-all duration-300 rounded-full"></div>
        )}
      </div>
    </button>
  );
}
