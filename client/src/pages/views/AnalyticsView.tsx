import { BarChart3, TrendingUp, TrendingDown, DollarSign, Users, Package, FileText } from "lucide-react";
import { Button } from "../../components/ui/button";

export function AnalyticsView() {
  const monthlyData = [
    { month: "Jan", revenue: 45, expenses: 28 },
    { month: "Fév", revenue: 52, expenses: 32 },
    { month: "Mar", revenue: 48, expenses: 30 },
    { month: "Avr", revenue: 61, expenses: 35 },
    { month: "Mai", revenue: 55, expenses: 33 },
    { month: "Jun", revenue: 67, expenses: 38 },
    { month: "Jul", revenue: 58, expenses: 36 },
    { month: "Aoû", revenue: 62, expenses: 37 },
    { month: "Sep", revenue: 70, expenses: 40 },
    { month: "Oct", revenue: 65, expenses: 39 },
    { month: "Nov", revenue: 73, expenses: 42 },
    { month: "Déc", revenue: 68, expenses: 41 },
  ];

  const topProducts = [
    { name: "Transport Express", sales: 245, revenue: "61,250€", growth: "+12%" },
    { name: "Entreposage", sales: 189, revenue: "22,680€", growth: "+8%" },
    { name: "Manutention", sales: 156, revenue: "7,020€", growth: "+15%" },
    { name: "Palettes", sales: 842, revenue: "12,630€", growth: "+5%" },
  ];

  const maxRevenue = Math.max(...monthlyData.map(d => d.revenue));

  return (
    <div className="py-8">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#2D3194]/10 rounded-xl flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-[#2D3194]" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-[#2D3194]">Analytics</h1>
              <p className="text-gray-600">Vue d'ensemble de vos performances</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="border-2 border-gray-200 rounded-xl h-10 px-4">
              Ce mois
            </Button>
            <Button variant="outline" className="border-2 border-gray-200 rounded-xl h-10 px-4">
              Cette année
            </Button>
            <Button className="bg-[#2D3194] hover:bg-[#1f2266] text-white rounded-xl h-10 px-4">
              Export
            </Button>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <p className="text-gray-600 text-sm">Revenu Total</p>
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-green-600" />
            </div>
          </div>
          <p className="text-3xl font-bold text-[#2D3194]">720K€</p>
          <div className="flex items-center gap-1 mt-2 text-green-600 text-sm">
            <TrendingUp className="w-4 h-4" />
            <span>+18.5% vs année dernière</span>
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <p className="text-gray-600 text-sm">Dépenses</p>
            <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
              <TrendingDown className="w-5 h-5 text-red-600" />
            </div>
          </div>
          <p className="text-3xl font-bold text-[#2D3194]">431K€</p>
          <div className="flex items-center gap-1 mt-2 text-green-600 text-sm">
            <TrendingDown className="w-4 h-4" />
            <span>-3.2% optimisé</span>
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <p className="text-gray-600 text-sm">Marge Nette</p>
            <div className="w-10 h-10 bg-[#2D3194]/10 rounded-xl flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-[#2D3194]" />
            </div>
          </div>
          <p className="text-3xl font-bold text-[#2D3194]">289K€</p>
          <div className="flex items-center gap-1 mt-2 text-green-600 text-sm">
            <TrendingUp className="w-4 h-4" />
            <span>40.1% marge</span>
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <p className="text-gray-600 text-sm">Clients Actifs</p>
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
              <Users className="w-5 h-5 text-blue-600" />
            </div>
          </div>
          <p className="text-3xl font-bold text-[#2D3194]">156</p>
          <div className="flex items-center gap-1 mt-2 text-green-600 text-sm">
            <TrendingUp className="w-4 h-4" />
            <span>+24 ce mois</span>
          </div>
        </div>
      </div>

      {/* Revenue Chart */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-bold text-[#2D3194]">Revenus vs Dépenses 2023</h3>
            <p className="text-sm text-gray-600">Performance mensuelle en milliers d'euros</p>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#2D3194] rounded"></div>
              <span className="text-sm text-gray-600">Revenus</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-400 rounded"></div>
              <span className="text-sm text-gray-600">Dépenses</span>
            </div>
          </div>
        </div>

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
                    style={{ width: `${(data.revenue / maxRevenue) * 100}%` }}
                  >
                    <span className="text-xs font-semibold text-white">{data.revenue}K</span>
                  </div>
                </div>
                {/* Expenses Bar */}
                <div className="flex-1 relative h-8 bg-gray-50 rounded-lg overflow-hidden">
                  <div 
                    className="absolute left-0 top-0 h-full bg-red-400 rounded-lg transition-all duration-500 flex items-center justify-end pr-2"
                    style={{ width: `${(data.expenses / maxRevenue) * 100}%` }}
                  >
                    <span className="text-xs font-semibold text-white">{data.expenses}K</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Top Products */}
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#2D3194]/10 rounded-xl flex items-center justify-center">
                <Package className="w-5 h-5 text-[#2D3194]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#2D3194]">Top Produits/Services</h3>
                <p className="text-sm text-gray-600">Les plus performants</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {topProducts.map((product, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#2D3194]/10 rounded-lg flex items-center justify-center">
                    <span className="font-bold text-[#2D3194]">#{index + 1}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{product.name}</p>
                    <p className="text-sm text-gray-600">{product.sales} ventes</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-[#2D3194]">{product.revenue}</p>
                  <p className="text-sm text-green-600 font-semibold">{product.growth}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#2D3194]/10 rounded-xl flex items-center justify-center">
                <FileText className="w-5 h-5 text-[#2D3194]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#2D3194]">Statistiques Rapides</h3>
                <p className="text-sm text-gray-600">Ce mois</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border border-green-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-green-700 mb-1">Factures émises</p>
                  <p className="text-2xl font-bold text-green-900">124</p>
                </div>
                <div className="w-12 h-12 bg-green-200 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-green-700" />
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-blue-700 mb-1">Devis acceptés</p>
                  <p className="text-2xl font-bold text-blue-900">38</p>
                </div>
                <div className="w-12 h-12 bg-blue-200 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-blue-700" />
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl border border-orange-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-orange-700 mb-1">Paiements en attente</p>
                  <p className="text-2xl font-bold text-orange-900">32</p>
                </div>
                <div className="w-12 h-12 bg-orange-200 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-orange-700" />
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl border border-purple-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-purple-700 mb-1">Nouveaux clients</p>
                  <p className="text-2xl font-bold text-purple-900">24</p>
                </div>
                <div className="w-12 h-12 bg-purple-200 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
