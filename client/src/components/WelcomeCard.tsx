import { User, MapPin, Briefcase, Hash, TrendingUp, CheckCircle, Mail } from "lucide-react";

export function WelcomeCard() {
  return (
    <div className="bg-white rounded-[24px] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.05)] border border-gray-100 relative overflow-hidden">
      {/* Gold accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#F8BC00]"></div>

      <div className="flex items-center justify-between gap-8">
        {/* Left Side - Profile and Details */}
        <div className="flex items-center gap-6">
          {/* Profile Avatar */}
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#2D3194] to-[#4850C8] flex items-center justify-center shadow-lg flex-shrink-0">
            <User className="w-10 h-10 text-white" strokeWidth={2} />
          </div>

          {/* Personalization */}
          <div className="space-y-3">
            <div>
              <h1 className="text-[#2D3194] mb-1">Welcome, John Doe 👋</h1>
              <p className="text-[#707070]">Business Development Manager</p>
            </div>

            {/* Employee Details */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 text-sm">
                <Hash className="w-4 h-4 text-[#707070]" strokeWidth={2} />
                <span className="text-[#707070]">Employee ID:</span>
                <span className="text-[#2D3194] font-medium">EMP-2451</span>
              </div>

              <div className="w-1 h-4 bg-gray-300 rounded-full"></div>

              <div className="flex items-center gap-2 text-sm">
                <Briefcase className="w-4 h-4 text-[#707070]" strokeWidth={2} />
                <span className="text-[#2D3194] font-medium">Business Development</span>
              </div>

              <div className="w-1 h-4 bg-gray-300 rounded-full"></div>

              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-[#707070]" strokeWidth={2} />
                <span className="text-[#2D3194] font-medium">Mumbai HQ</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Quick Stats */}
        <div className="flex items-center gap-6">
          {/* Attendance */}
          <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200 min-w-[140px]">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-4 h-4 text-green-600" strokeWidth={2} />
              <span className="text-[#707070] text-sm">Attendance</span>
            </div>
            <p className="text-[#2D3194] text-2xl font-medium">96%</p>
            <p className="text-[#707070] text-xs mt-1">This month</p>
          </div>

          {/* Pending Tasks */}
          <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200 min-w-[140px]">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-[#F8BC00]" strokeWidth={2} />
              <span className="text-[#707070] text-sm">Pending Tasks</span>
            </div>
            <p className="text-[#2D3194] text-2xl font-medium">12</p>
            <p className="text-[#707070] text-xs mt-1">Due this week</p>
          </div>

          {/* New Messages */}
          <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200 min-w-[140px]">
            <div className="flex items-center gap-2 mb-2">
              <Mail className="w-4 h-4 text-blue-600" strokeWidth={2} />
              <span className="text-[#707070] text-sm">New Messages</span>
            </div>
            <p className="text-[#2D3194] text-2xl font-medium">8</p>
            <p className="text-[#707070] text-xs mt-1">Unread</p>
          </div>
        </div>
      </div>
    </div>
  );
}
