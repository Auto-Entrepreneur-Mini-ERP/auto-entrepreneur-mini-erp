import { Calendar, AlertCircle, FileText } from "lucide-react";

export function QuickActions() {
  return (
    <div className="flex items-center justify-center gap-6">
      {/* Apply Leave */}
      <button className="group relative bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-4 border border-gray-200 hover:border-[#F8BC00] transition-all duration-300 shadow-sm hover:shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
            <Calendar className="w-5 h-5 text-blue-600" strokeWidth={2} />
          </div>
          <div className="text-left">
            <p className="text-[#2D3194] font-medium">Apply Leave</p>
            <p className="text-[#707070] text-sm">Request time off</p>
          </div>
        </div>
        {/* Gold accent on hover */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F8BC00] opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl"></div>
      </button>

      {/* Raise Ticket */}
      <button className="group relative bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-4 border border-gray-200 hover:border-[#F8BC00] transition-all duration-300 shadow-sm hover:shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center group-hover:bg-orange-100 transition-colors">
            <AlertCircle className="w-5 h-5 text-orange-600" strokeWidth={2} />
          </div>
          <div className="text-left">
            <p className="text-[#2D3194] font-medium">Raise Ticket</p>
            <p className="text-[#707070] text-sm">Report an issue</p>
          </div>
        </div>
        {/* Gold accent on hover */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F8BC00] opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl"></div>
      </button>

      {/* My Payslip */}
      <button className="group relative bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-4 border border-gray-200 hover:border-[#F8BC00] transition-all duration-300 shadow-sm hover:shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center group-hover:bg-green-100 transition-colors">
            <FileText className="w-5 h-5 text-green-600" strokeWidth={2} />
          </div>
          <div className="text-left">
            <p className="text-[#2D3194] font-medium">My Payslip</p>
            <p className="text-[#707070] text-sm">View salary details</p>
          </div>
        </div>
        {/* Gold accent on hover */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F8BC00] opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl"></div>
      </button>
    </div>
  );
}
