import { Calendar, Cake, HelpCircle, Bell, TrendingUp, Users } from "lucide-react";

export function BottomSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Events & Announcements */}
      <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center gap-3 mb-5">
          <div className="bg-purple-100 rounded-lg p-2.5">
            <Bell className="w-5 h-5 text-purple-600" strokeWidth={2} />
          </div>
          <h3 className="text-[#2D3194]">Events & Announcements</h3>
        </div>

        <div className="space-y-3">
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
            <div className="flex items-start gap-3">
              <Calendar className="w-4 h-4 text-[#4850C8] mt-1 flex-shrink-0" strokeWidth={2} />
              <div>
                <p className="text-[#2D3194] font-medium">Q4 Strategy Meeting</p>
                <p className="text-[#6B7280] text-sm mt-1">Dec 15, 2025 • 10:00 AM</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
            <div className="flex items-start gap-3">
              <TrendingUp className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" strokeWidth={2} />
              <div>
                <p className="text-[#2D3194] font-medium">Annual Performance Review</p>
                <p className="text-[#6B7280] text-sm mt-1">Starting Jan 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Birthdays & Anniversaries */}
      <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center gap-3 mb-5">
          <div className="bg-pink-100 rounded-lg p-2.5">
            <Cake className="w-5 h-5 text-pink-600" strokeWidth={2} />
          </div>
          <h3 className="text-[#2D3194]">Celebrations</h3>
        </div>

        <div className="space-y-3">
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-white" strokeWidth={2} />
              </div>
              <div>
                <p className="text-[#2D3194] font-medium">Sarah Johnson</p>
                <p className="text-[#6B7280] text-sm">Birthday Today 🎉</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#F8BC00] to-[#FAD86B] rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-[#2D3194]" strokeWidth={2} />
              </div>
              <div>
                <p className="text-[#2D3194] font-medium">Michael Chen</p>
                <p className="text-[#6B7280] text-sm">5 Years Anniversary</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Help & Support */}
      <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center gap-3 mb-5">
          <div className="bg-cyan-100 rounded-lg p-2.5">
            <HelpCircle className="w-5 h-5 text-cyan-600" strokeWidth={2} />
          </div>
          <h3 className="text-[#2D3194]">Quick Help</h3>
        </div>

        <div className="space-y-3">
          <button className="w-full bg-gray-50 hover:bg-gray-100 rounded-lg p-4 border border-gray-100 hover:border-[#4850C8] transition-all text-left">
            <p className="text-[#2D3194] font-medium">Documentation</p>
            <p className="text-[#6B7280] text-sm mt-1">Access user guides & manuals</p>
          </button>

          <button className="w-full bg-gray-50 hover:bg-gray-100 rounded-lg p-4 border border-gray-100 hover:border-[#4850C8] transition-all text-left">
            <p className="text-[#2D3194] font-medium">Contact Support</p>
            <p className="text-[#6B7280] text-sm mt-1">Get help from our team</p>
          </button>

          <button className="w-full bg-gradient-to-r from-[#F8BC00] to-[#FAD86B] hover:from-[#FAD86B] hover:to-[#F8BC00] rounded-lg p-4 shadow-md hover:shadow-lg transition-all text-left">
            <p className="text-[#2D3194] font-medium">Submit Ticket</p>
            <p className="text-[#2D3194]/80 text-sm mt-1">Report an issue</p>
          </button>
        </div>
      </div>
    </div>
  );
}
