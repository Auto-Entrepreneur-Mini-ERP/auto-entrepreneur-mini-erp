import { Bell, User, Settings, Award, Building2 } from "lucide-react";

export function TopHeader() {
  return (
    <header className="bg-white border-b border-gray-200 px-8 py-4 sticky top-0 z-10">
      <div className="flex items-center justify-between">
        {/* Left Side - Logo + Badge */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#2D3194] to-[#4850C8] rounded-xl flex items-center justify-center shadow-md">
              <Building2 className="w-6 h-6 text-white" strokeWidth={2} />
            </div>
            <div>
              <h1 className="text-[#2D3194] text-lg">ICSA Logistics</h1>
              <p className="text-[#707070] text-sm">Enterprise Portal</p>
            </div>
          </div>

          {/* 94 Years Badge */}
          <div className="flex items-center gap-2 bg-gradient-to-r from-[#F8BC00] to-[#FAD86B] px-4 py-2 rounded-full shadow-sm">
            <Award className="w-4 h-4 text-[#2D3194]" strokeWidth={2} />
            <span className="text-[#2D3194] text-sm font-medium">94 Years</span>
          </div>
        </div>

        {/* Right Side - Actions */}
        <div className="flex items-center gap-3">
          {/* Notification Icon */}
          <button className="relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
            <Bell className="w-5 h-5 text-[#2D3194]" strokeWidth={1.8} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Settings Icon */}
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
            <Settings className="w-5 h-5 text-[#2D3194]" strokeWidth={1.8} />
          </button>

          {/* Profile Photo Circle */}
          <button className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2D3194] to-[#4850C8] flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
            <User className="w-5 h-5 text-white" strokeWidth={2} />
          </button>
        </div>
      </div>
    </header>
  );
}
