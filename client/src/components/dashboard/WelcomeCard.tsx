import { User, Briefcase, MapPin, Calendar, Award } from "lucide-react";

export function WelcomeCard() {
  return (
    <div className="bg-white rounded-[22px] p-8 shadow-[0_2px_16px_rgba(0,0,0,0.04)] border border-gray-100">
      <div className="flex items-start justify-between gap-8">
        {/* Left Side - Profile */}
        <div className="flex items-start gap-6">
          {/* Avatar */}
          <div className="w-24 h-24 rounded-[20px] bg-[#2D3194] flex items-center justify-center shadow-sm flex-shrink-0">
            <User className="w-12 h-12 text-white" strokeWidth={2} />
          </div>

          {/* Employee Details */}
          <div className="space-y-4">
            <div>
              <h1 className="text-[#1A1A1A] mb-1">Welcome, Rajesh Kumar 👋</h1>
              <p className="text-[#7A7A7A]">Senior Business Development Manager</p>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-1">
                <p className="text-[#7A7A7A] text-xs uppercase tracking-wide">Employee ID</p>
                <p className="text-[#2D3194] font-medium">EMP-2451</p>
              </div>

              <div className="space-y-1">
                <p className="text-[#7A7A7A] text-xs uppercase tracking-wide">Department</p>
                <div className="flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-[#2D3194]" strokeWidth={2} />
                  <p className="text-[#2D3194] font-medium">Business Dev</p>
                </div>
              </div>

              <div className="space-y-1">
                <p className="text-[#7A7A7A] text-xs uppercase tracking-wide">Branch</p>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#2D3194]" strokeWidth={2} />
                  <p className="text-[#2D3194] font-medium">Mumbai HQ</p>
                </div>
              </div>

              <div className="space-y-1">
                <p className="text-[#7A7A7A] text-xs uppercase tracking-wide">Designation</p>
                <p className="text-[#2D3194] font-medium">Sr. Manager</p>
              </div>

              <div className="space-y-1">
                <p className="text-[#7A7A7A] text-xs uppercase tracking-wide">Date of Joining</p>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#2D3194]" strokeWidth={2} />
                  <p className="text-[#2D3194] font-medium">Jan 15, 2019</p>
                </div>
              </div>

              <div className="space-y-1">
                <p className="text-[#7A7A7A] text-xs uppercase tracking-wide">Tenure</p>
                <div className="flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#F8BC00]" strokeWidth={2} />
                  <p className="text-[#2D3194] font-medium">6 Years</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Profile Completion */}
        <div className="bg-gray-50 rounded-[20px] p-6 border border-gray-100 min-w-[280px]">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[#1A1A1A] font-medium">Profile Completion</span>
              <span className="text-[#F8BC00]">85%</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-[#F8BC00] rounded-full" style={{ width: "85%" }}></div>
            </div>

            <p className="text-[#7A7A7A] text-sm">Complete your profile to unlock all features and benefits.</p>

            <button className="w-full px-4 py-2.5 bg-[#2D3194] text-white rounded-xl hover:shadow-md transition-all duration-300 font-medium text-sm">
              Complete Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}