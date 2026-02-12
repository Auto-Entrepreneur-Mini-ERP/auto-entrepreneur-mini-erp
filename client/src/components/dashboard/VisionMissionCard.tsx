import { useState } from "react";
import { Eye, Target, Shield } from "lucide-react";

export function VisionMissionCard() {
  const [activeTab, setActiveTab] = useState("vision");

  const tabs = [
    {
      id: "vision",
      label: "Vision",
      icon: Eye,
      content: "To be the most trusted and innovative logistics partner in Asia, delivering excellence through technology, dedication, and customer-centric solutions that drive global trade forward.",
    },
    {
      id: "mission",
      label: "Mission",
      icon: Target,
      content: "Empowering businesses worldwide with seamless, reliable, and efficient supply chain solutions through continuous innovation, operational excellence, and a commitment to sustainable growth.",
    },
    {
      id: "quality",
      label: "Quality Policy",
      icon: Shield,
      content: "We are committed to delivering superior quality services through systematic processes, continuous improvement, compliance with international standards, and fostering a culture of excellence across all operations.",
    },
  ];

  const activeContent = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className="bg-white rounded-[22px] p-8 shadow-[0_2px_16px_rgba(0,0,0,0.04)] border border-gray-100">
      {/* Tab Navigation */}
      <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-xl transition-all duration-300 ${
                isActive
                  ? "bg-[#2D3194] text-white shadow-md"
                  : "bg-gray-50 text-[#1A1A1A] hover:bg-gray-100"
              }`}
            >
              <Icon className="w-4 h-4" strokeWidth={2} />
              <span className="font-medium text-sm">{tab.label}</span>
              {isActive && <div className="w-1.5 h-1.5 bg-[#F8BC00] rounded-full"></div>}
            </button>
          );
        })}
      </div>

      {/* Content Area */}
      <div className="flex items-start gap-6">
        {/* Icon */}
        {activeContent && (
          <>
            <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center flex-shrink-0 border border-gray-100">
              <activeContent.icon className="w-8 h-8 text-[#2D3194]" strokeWidth={2} />
            </div>

            {/* Text Content */}
            <div className="flex-1 space-y-2">
              <h3 className="text-[#2D3194]">{activeContent.label}</h3>
              <p className="text-[#7A7A7A] leading-relaxed">{activeContent.content}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}