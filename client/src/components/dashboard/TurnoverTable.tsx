import { ResponsiveContainer } from "recharts";
import { combineMonthlyData } from "../../utils/combineMonthlyData";
 
type TurnoverTableProps = {
  monthlyRevenues: { index: number; amount: number }[];
  monthlyDepences: { index: number; amount: number }[];
};


function TurnoverTable({ monthlyRevenues, monthlyDepences }: TurnoverTableProps) {

    const monthlyData = combineMonthlyData(monthlyRevenues, monthlyDepences);

    const maxRevenue = Math.max(...monthlyData.map(d => d.revenues));
    const maxExpense = Math.max(...monthlyData.map(d => d.expenses));


    return (
        <>
            <div className="lg:col-span-7">
                <div className="bg-white rounded-[20px] p-6 shadow-[0_2px_16px_rgba(0,0,0,0.04)] border border-gray-100 h-full flex flex-col">
                    <div className="mb-6">
                        <h2 className="text-[#1A1A1A] mb-1">Aperçu du chiffre d’affaires et Dépenses</h2>
                        <p className="text-[#7A7A7A] text-sm">Tendance mensuel (en DHs)</p>
                    </div>

                    <div className="flex-1 min-h-0">
                        <ResponsiveContainer width="100%" height="100%">
                            {/* Custom Bar Chart */}
                            <div className="space-y-3">
                                {monthlyData.map((data, index) => (
                                    <div key={index} className="flex items-center gap-4">
                                        <div className="w-12 text-sm font-medium text-gray-600">{data.month}</div>
                                        <div className="flex-1 flex gap-2 items-center">
                                            {/* Revenue Bar */}
                                            <div className="flex-1 relative h-8 bg-gray-50 rounded-lg overflow-hidden">
                                                <div
                                                    className="absolute left-0 top-0 h-full bg-[#2D3194] rounded-lg transition-all duration-500 flex items-center justify-end pr-2"
                                                    style={{ width: `${(data.revenues / maxRevenue) * 100}%` }}
                                                >
                                                    <span className="text-xs font-semibold text-white">{data.revenues}</span>
                                                </div>
                                            </div>
                                            {/* Expenses Bar */}
                                            <div className="flex-1 relative h-8 bg-gray-50 rounded-lg overflow-hidden">
                                                <div
                                                    className="absolute left-0 top-0 h-full bg-red-400 rounded-lg transition-all duration-500 flex items-center justify-end pr-2"
                                                    style={{ width: `${(data.expenses / maxExpense) * 100}%` }}
                                                >
                                                    <span className="text-xs font-semibold text-white">{data.expenses}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TurnoverTable