import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { FileText, CreditCard, AlertTriangle, ExternalLink } from "lucide-react";

// Sample data for line chart
const turnoverData = [
  { month: "Jan", turnover: 35 },
  { month: "Feb", turnover: 38 },
  { month: "Mar", turnover: 42 },
  { month: "Apr", turnover: 39 },
  { month: "May", turnover: 45 },
  { month: "Jun", turnover: 42.5 },
  { month: "Jul", turnover: 48 },
  { month: "Aug", turnover: 46 },
  { month: "Sep", turnover: 50 },
  { month: "Oct", turnover: 47 },
  { month: "Nov", turnover: 52 },
  { month: "Dec", turnover: 55 },
];

// Sample data for tables
const recentInvoices = [
  { id: "INV-2451", client: "ABC Logistics Pvt Ltd", amount: "₹2,45,000", date: "Dec 28, 2025", status: "Paid" },
  { id: "INV-2450", client: "Global Shipping Co.", amount: "₹3,20,000", date: "Dec 27, 2025", status: "Paid" },
  { id: "INV-2449", client: "Express Cargo Services", amount: "₹1,85,000", date: "Dec 26, 2025", status: "Pending" },
  { id: "INV-2448", client: "Ocean Freight Partners", amount: "₹4,10,000", date: "Dec 25, 2025", status: "Paid" },
];

const recentPayments = [
  { id: "PAY-5621", client: "ABC Logistics Pvt Ltd", amount: "₹2,45,000", date: "Dec 28, 2025", method: "Bank Transfer" },
  { id: "PAY-5620", client: "Global Shipping Co.", amount: "₹3,20,000", date: "Dec 27, 2025", method: "Cheque" },
  { id: "PAY-5619", client: "Ocean Freight Partners", amount: "₹4,10,000", date: "Dec 25, 2025", method: "Bank Transfer" },
  { id: "PAY-5618", client: "Metro Transport Ltd", amount: "₹2,95,000", date: "Dec 24, 2025", method: "UPI" },
];

const unpaidInvoices = [
  { id: "INV-2449", client: "Express Cargo Services", amount: "₹1,85,000", date: "Dec 26, 2025", daysOverdue: 5 },
  { id: "INV-2446", client: "Swift Delivery Inc.", amount: "₹1,75,000", date: "Dec 23, 2025", daysOverdue: 8 },
  { id: "INV-2442", client: "Rapid Logistics Co.", amount: "₹2,35,000", date: "Dec 20, 2025", daysOverdue: 11 },
  { id: "INV-2438", client: "Prime Freight Services", amount: "₹3,15,000", date: "Dec 18, 2025", daysOverdue: 13 },
];

type TabType = "invoices" | "payments" | "unpaid";

export function ChartsAndTables() {
  const [activeTab, setActiveTab] = useState<TabType>("invoices");

  const tabs = [
    { id: "invoices" as TabType, label: "Recent Invoices", icon: FileText },
    { id: "payments" as TabType, label: "Recent Payments", icon: CreditCard },
    { id: "unpaid" as TabType, label: "Unpaid Invoices", icon: AlertTriangle },
  ];

  const renderTableContent = () => {
    switch (activeTab) {
      case "invoices":
        return (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left py-3 px-4 text-[#7A7A7A] text-xs uppercase tracking-wide">Invoice ID</th>
                  <th className="text-left py-3 px-4 text-[#7A7A7A] text-xs uppercase tracking-wide">Client</th>
                  <th className="text-left py-3 px-4 text-[#7A7A7A] text-xs uppercase tracking-wide">Amount</th>
                  <th className="text-left py-3 px-4 text-[#7A7A7A] text-xs uppercase tracking-wide">Date</th>
                  <th className="text-left py-3 px-4 text-[#7A7A7A] text-xs uppercase tracking-wide">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentInvoices.map((invoice, index) => (
                  <tr key={index} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-4 text-[#2D3194] font-medium text-sm">{invoice.id}</td>
                    <td className="py-3 px-4 text-[#1A1A1A] text-sm">{invoice.client}</td>
                    <td className="py-3 px-4 text-[#1A1A1A] font-medium text-sm">{invoice.amount}</td>
                    <td className="py-3 px-4 text-[#7A7A7A] text-sm">{invoice.date}</td>
                    <td className="py-3 px-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        invoice.status === "Paid" 
                          ? "bg-green-50 text-green-700" 
                          : "bg-orange-50 text-orange-700"
                      }`}>
                        {invoice.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case "payments":
        return (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left py-3 px-4 text-[#7A7A7A] text-xs uppercase tracking-wide">Payment ID</th>
                  <th className="text-left py-3 px-4 text-[#7A7A7A] text-xs uppercase tracking-wide">Client</th>
                  <th className="text-left py-3 px-4 text-[#7A7A7A] text-xs uppercase tracking-wide">Amount</th>
                  <th className="text-left py-3 px-4 text-[#7A7A7A] text-xs uppercase tracking-wide">Date</th>
                  <th className="text-left py-3 px-4 text-[#7A7A7A] text-xs uppercase tracking-wide">Method</th>
                </tr>
              </thead>
              <tbody>
                {recentPayments.map((payment, index) => (
                  <tr key={index} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-4 text-[#2D3194] font-medium text-sm">{payment.id}</td>
                    <td className="py-3 px-4 text-[#1A1A1A] text-sm">{payment.client}</td>
                    <td className="py-3 px-4 text-green-700 font-medium text-sm">{payment.amount}</td>
                    <td className="py-3 px-4 text-[#7A7A7A] text-sm">{payment.date}</td>
                    <td className="py-3 px-4">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gray-50 text-[#1A1A1A]">
                        {payment.method}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case "unpaid":
        return (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left py-3 px-4 text-[#7A7A7A] text-xs uppercase tracking-wide">Invoice ID</th>
                  <th className="text-left py-3 px-4 text-[#7A7A7A] text-xs uppercase tracking-wide">Client</th>
                  <th className="text-left py-3 px-4 text-[#7A7A7A] text-xs uppercase tracking-wide">Amount</th>
                  <th className="text-left py-3 px-4 text-[#7A7A7A] text-xs uppercase tracking-wide">Due Date</th>
                  <th className="text-left py-3 px-4 text-[#7A7A7A] text-xs uppercase tracking-wide">Overdue</th>
                </tr>
              </thead>
              <tbody>
                {unpaidInvoices.map((invoice, index) => (
                  <tr key={index} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-4 text-[#2D3194] font-medium text-sm">{invoice.id}</td>
                    <td className="py-3 px-4 text-[#1A1A1A] text-sm">{invoice.client}</td>
                    <td className="py-3 px-4 text-red-700 font-medium text-sm">{invoice.amount}</td>
                    <td className="py-3 px-4 text-[#7A7A7A] text-sm">{invoice.date}</td>
                    <td className="py-3 px-4">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-red-50 text-red-700">
                        {invoice.daysOverdue} days
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
      {/* Chart Section - 70% */}
      <div className="lg:col-span-7">
        <div className="bg-white rounded-[20px] p-6 shadow-[0_2px_16px_rgba(0,0,0,0.04)] border border-gray-100 h-full flex flex-col">
          <div className="mb-6">
            <h2 className="text-[#1A1A1A] mb-1">Turnover Overview</h2>
            <p className="text-[#7A7A7A] text-sm">Monthly turnover trend (in Lakhs ₹)</p>
          </div>

          <div className="flex-1 min-h-0">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={turnoverData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis 
                  dataKey="month" 
                  stroke="#7A7A7A"
                  style={{ fontSize: '12px' }}
                />
                <YAxis 
                  stroke="#7A7A7A"
                  style={{ fontSize: '12px' }}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #E5E7EB',
                    borderRadius: '12px',
                    fontSize: '14px'
                  }}
                  formatter={(value) => [`₹${value}L`, 'Turnover']}
                />
                <Line 
                  type="monotone" 
                  dataKey="turnover" 
                  stroke="#2D3194" 
                  strokeWidth={3}
                  dot={{ fill: '#2D3194', r: 5 }}
                  activeDot={{ r: 7, fill: '#F8BC00' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Table Section - 30% */}
      <div className="lg:col-span-3">
        <div className="bg-white rounded-[20px] p-6 shadow-[0_2px_16px_rgba(0,0,0,0.04)] border border-gray-100 h-full flex flex-col">
          {/* Tab Selection */}
          <div className="flex gap-2 mb-4">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 p-2.5 rounded-[12px] transition-all duration-300 flex items-center justify-center gap-1.5 ${
                    activeTab === tab.id
                      ? "bg-[#2D3194] text-white shadow-md"
                      : "bg-gray-50 text-[#7A7A7A] hover:bg-gray-100"
                  }`}
                  title={tab.label}
                >
                  <Icon className="w-4 h-4" strokeWidth={2} />
                </button>
              );
            })}
          </div>

          {/* Tab Label */}
          <h3 className="text-[#1A1A1A] mb-4">
            {tabs.find(t => t.id === activeTab)?.label}
          </h3>

          {/* Table Content */}
          <div className="flex-1 -mx-6 px-6 overflow-auto">
            <div className="space-y-3">
              {activeTab === "invoices" && recentInvoices.map((invoice, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-[12px] hover:bg-gray-100 transition-all">
                  <div className="flex items-start justify-between mb-1">
                    <p className="text-[#2D3194] font-medium text-sm">{invoice.id}</p>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      invoice.status === "Paid" 
                        ? "bg-green-100 text-green-700" 
                        : "bg-orange-100 text-orange-700"
                    }`}>
                      {invoice.status}
                    </span>
                  </div>
                  <p className="text-[#1A1A1A] text-sm mb-1">{invoice.client}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-[#1A1A1A] font-medium text-sm">{invoice.amount}</p>
                    <p className="text-[#7A7A7A] text-xs">{invoice.date}</p>
                  </div>
                </div>
              ))}

              {activeTab === "payments" && recentPayments.map((payment, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-[12px] hover:bg-gray-100 transition-all">
                  <div className="flex items-start justify-between mb-1">
                    <p className="text-[#2D3194] font-medium text-sm">{payment.id}</p>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-[#1A1A1A]">
                      {payment.method}
                    </span>
                  </div>
                  <p className="text-[#1A1A1A] text-sm mb-1">{payment.client}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-green-700 font-medium text-sm">{payment.amount}</p>
                    <p className="text-[#7A7A7A] text-xs">{payment.date}</p>
                  </div>
                </div>
              ))}

              {activeTab === "unpaid" && unpaidInvoices.map((invoice, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-[12px] hover:bg-gray-100 transition-all">
                  <div className="flex items-start justify-between mb-1">
                    <p className="text-[#2D3194] font-medium text-sm">{invoice.id}</p>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-700">
                      {invoice.daysOverdue}d
                    </span>
                  </div>
                  <p className="text-[#1A1A1A] text-sm mb-1">{invoice.client}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-red-700 font-medium text-sm">{invoice.amount}</p>
                    <p className="text-[#7A7A7A] text-xs">{invoice.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* View All Link */}
          <button className="mt-4 w-full py-2.5 bg-gray-50 hover:bg-[#2D3194]/5 text-[#2D3194] rounded-xl transition-all font-medium text-sm flex items-center justify-center gap-2 group">
            View All
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>
  );
}