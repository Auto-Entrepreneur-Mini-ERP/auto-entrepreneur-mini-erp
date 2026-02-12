import { Target, Eye, Shield } from "lucide-react";

export function VisionPanel() {
  return (
    <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Vision */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="bg-[#4850C8]/10 rounded-lg p-2.5">
              <Eye className="w-5 h-5 text-[#4850C8]" strokeWidth={2} />
            </div>
            <h3 className="text-[#2D3194]">Vision</h3>
          </div>
          <p className="text-[#6B7280] leading-relaxed">
            To be the most trusted and innovative logistics partner, delivering excellence through technology and dedication.
          </p>
        </div>

        {/* Mission */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="bg-[#F8BC00]/10 rounded-lg p-2.5">
              <Target className="w-5 h-5 text-[#F8BC00]" strokeWidth={2} />
            </div>
            <h3 className="text-[#2D3194]">Mission</h3>
          </div>
          <p className="text-[#6B7280] leading-relaxed">
            Empowering businesses with seamless supply chain solutions through continuous innovation and customer-centric approach.
          </p>
        </div>

        {/* Quality Policy */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="bg-green-500/10 rounded-lg p-2.5">
              <Shield className="w-5 h-5 text-green-600" strokeWidth={2} />
            </div>
            <h3 className="text-[#2D3194]">Quality Policy</h3>
          </div>
          <p className="text-[#6B7280] leading-relaxed">
            Committed to delivering superior quality services through systematic processes and continuous improvement.
          </p>
        </div>
      </div>
    </div>
  );
}
