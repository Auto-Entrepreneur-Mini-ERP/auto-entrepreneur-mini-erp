import { type LucideIcon } from "lucide-react";

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  color: "blue" | "navy" | "gold";
}

export function ValueCard({ icon: Icon, title, subtitle, description, color }: ValueCardProps) {
  const colorStyles = {
    blue: {
      bg: "bg-blue-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      titleColor: "text-blue-900",
    },
    navy: {
      bg: "bg-indigo-50",
      iconBg: "bg-[#2D3194]/10",
      iconColor: "text-[#2D3194]",
      titleColor: "text-[#2D3194]",
    },
    gold: {
      bg: "bg-amber-50",
      iconBg: "bg-[#F8BC00]/20",
      iconColor: "text-[#F8BC00]",
      titleColor: "text-[#2D3194]",
    },
  };

  const styles = colorStyles[color];

  return (
    <div className="group bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      {/* Icon */}
      <div className={`${styles.iconBg} rounded-xl p-4 inline-flex mb-4`}>
        <Icon className={`w-8 h-8 ${styles.iconColor}`} strokeWidth={1.8} />
      </div>

      {/* Content */}
      <h3 className={`${styles.titleColor} mb-2`}>{title}</h3>
      <p className="text-[#2D3194] mb-2">{subtitle}</p>
      <p className="text-[#6B7280]">{description}</p>

      {/* Decorative bottom accent */}
      <div className="mt-5 h-1 w-16 bg-[#F8BC00] rounded-full"></div>
    </div>
  );
}
