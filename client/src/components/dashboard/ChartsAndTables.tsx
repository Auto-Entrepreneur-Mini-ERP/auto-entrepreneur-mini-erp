import { useState } from "react";
import { FileText, CreditCard, AlertTriangle, } from "lucide-react";
import TurnoverTable from "./TurnoverTable";
import type { recentsTypes } from "../../types/dashboard.types";

type TabType = "invoices" | "payments" | "unpaid";

type ChartsAndTablesProps = {
  monthlyRevenues: { index: number; amount: number }[];
  monthlyDepences: { index: number; amount: number }[];
  recents: recentsTypes
};


export function ChartsAndTables({ monthlyRevenues, monthlyDepences, recents }: ChartsAndTablesProps) {
  const [activeTab, setActiveTab] = useState<TabType>("invoices");


  const tabs = [
    { id: "invoices" as TabType, label: "Factures Recentes", icon: FileText },
    { id: "payments" as TabType, label: "Paiments Recentes", icon: CreditCard },
    { id: "unpaid" as TabType, label: "Factures Non Payeé", icon: AlertTriangle },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
      {/* Chart Section - 70% */}
      <TurnoverTable monthlyRevenues={monthlyRevenues} monthlyDepences={monthlyDepences} />

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
                  className={`flex-1 p-2.5 rounded-[12px] transition-all duration-300 flex items-center justify-center gap-1.5 ${activeTab === tab.id
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
            {
              tabs.find(t => t.id === activeTab)?.label
            }
          </h3>

          {/* Table Content */}
          <div className="flex-1 -mx-6 px-6 overflow-auto">
            <div className="space-y-3">
              {activeTab === "invoices" && (recents.recentInvoices.length > 0 ?
                recents.recentInvoices.map((invoice, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-[12px] hover:bg-gray-100 transition-all">
                    <div className="flex items-start justify-between mb-1">
                      <p className="text-[#2D3194] font-medium text-sm">{invoice.id}</p>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${invoice.status === "Paid"
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
                )) : <p className="text-[#1A1A1A] text-center font-medium text-md">No invoices</p>)}

              {activeTab === "payments" && (recents.recentPayments.length > 0 ? recents.recentPayments.map((payment, index) => (
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
              )) : <p className="text-[#1A1A1A] text-center font-medium text-md">No payments</p>)}

              {activeTab === "unpaid" && (recents.unpaidInvoices.length > 0 ? recents.unpaidInvoices.map((invoice, index) => (
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
              )): <p className="text-[#1A1A1A] text-center font-medium text-md">No Unpaid Invoices</p>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}