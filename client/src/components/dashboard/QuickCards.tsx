import { Clock, CheckSquare, MessageSquare, Zap, LogIn, LogOut, Users, TrendingUp, Handshake } from "lucide-react";

export function QuickCards() {
  return (
    <div className="grid grid-cols-4 gap-6">
      {/* Attendance Card */}
      <div className="bg-white rounded-[20px] p-6 shadow-[0_2px_16px_rgba(0,0,0,0.04)] border border-gray-100 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-[#1A1A1A]">Attendance</h3>
          <Clock className="w-5 h-5 text-[#F8BC00]" strokeWidth={2} />
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <LogIn className="w-4 h-4 text-green-600" strokeWidth={2} />
              <span className="text-[#7A7A7A] text-sm">Punch In</span>
            </div>
            <span className="text-[#1A1A1A] font-medium text-sm">09:15 AM</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <LogOut className="w-4 h-4 text-red-600" strokeWidth={2} />
              <span className="text-[#7A7A7A] text-sm">Punch Out</span>
            </div>
            <span className="text-[#7A7A7A] font-medium text-sm">--:-- --</span>
          </div>

          <div className="pt-2 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <span className="text-[#7A7A7A] text-sm">Hours Today</span>
              <span className="text-[#2D3194] font-medium">3h 45m</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pending Tasks Card */}
      <div className="bg-white rounded-[20px] p-6 shadow-[0_2px_16px_rgba(0,0,0,0.04)] border border-gray-100 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-[#1A1A1A]">Pending Tasks</h3>
          <CheckSquare className="w-5 h-5 text-[#F8BC00]" strokeWidth={2} />
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[#7A7A7A] text-sm">Pending</span>
            <span className="text-[#1A1A1A] font-medium">8</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[#7A7A7A] text-sm">Today</span>
            <span className="text-[#2D3194] font-medium">5</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[#7A7A7A] text-sm">Overdue</span>
            <span className="text-red-600 font-medium">2</span>
          </div>
        </div>

        <button className="w-full py-2 bg-gray-50 hover:bg-gray-100 text-[#2D3194] rounded-xl transition-colors font-medium text-sm">
          View All Tasks
        </button>
      </div>

      {/* Messages / Notifications Card */}
      <div className="bg-white rounded-[20px] p-6 shadow-[0_2px_16px_rgba(0,0,0,0.04)] border border-gray-100 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-[#1A1A1A]">Messages</h3>
          <MessageSquare className="w-5 h-5 text-[#F8BC00]" strokeWidth={2} />
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[#7A7A7A] text-sm">Unread Messages</span>
            <span className="text-[#1A1A1A] font-medium">12</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[#7A7A7A] text-sm">Notifications</span>
            <span className="text-red-600 font-medium">3</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[#7A7A7A] text-sm">Announcements</span>
            <span className="text-[#2D3194] font-medium">2</span>
          </div>
        </div>

        <button className="w-full py-2 bg-gray-50 hover:bg-gray-100 text-[#2D3194] rounded-xl transition-colors font-medium text-sm">
          Open Inbox
        </button>
      </div>

      {/* Quick Shortcuts Card */}
      <div className="bg-white rounded-[20px] p-6 shadow-[0_2px_16px_rgba(0,0,0,0.04)] border border-gray-100 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-[#1A1A1A]">Quick Access</h3>
          <Zap className="w-5 h-5 text-[#F8BC00]" strokeWidth={2} />
        </div>

        <div className="space-y-2.5">
          <button className="w-full flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all group">
            <div className="w-8 h-8 bg-white border border-gray-200 rounded-lg flex items-center justify-center">
              <Users className="w-4 h-4 text-[#2D3194]" strokeWidth={2} />
            </div>
            <span className="text-[#1A1A1A] text-sm font-medium">People</span>
            <div className="ml-auto w-1.5 h-1.5 bg-[#F8BC00] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>

          <button className="w-full flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all group">
            <div className="w-8 h-8 bg-white border border-gray-200 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-[#2D3194]" strokeWidth={2} />
            </div>
            <span className="text-[#1A1A1A] text-sm font-medium">Performance</span>
            <div className="ml-auto w-1.5 h-1.5 bg-[#F8BC00] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>

          <button className="w-full flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all group">
            <div className="w-8 h-8 bg-white border border-gray-200 rounded-lg flex items-center justify-center">
              <Handshake className="w-4 h-4 text-[#2D3194]" strokeWidth={2} />
            </div>
            <span className="text-[#1A1A1A] text-sm font-medium">Partnerships</span>
            <div className="ml-auto w-1.5 h-1.5 bg-[#F8BC00] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        </div>
      </div>
    </div>
  );
}