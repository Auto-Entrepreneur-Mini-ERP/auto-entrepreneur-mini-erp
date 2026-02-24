import { useState, useEffect } from "react";
import { Bell, User, Sun, Moon, Calendar, Menu, X, Package, AlertTriangle } from "lucide-react";
import { productApi, type Product } from "../api/catalogApi";

interface ContentHeaderProps {
  onMenuClick: () => void;
  isSidebarOpen: boolean;
  autoEData: {
    firstName: string;
    lastName: string;
    businessName: string;
  };
}

const stockStatus = (p: Product): "low" | "ok" | "empty" => {
  const qty = p.product.stockQuantity;
  const thresh = p.product.alertThreshold;
  if (qty === 0) return "empty";
  if (qty <= thresh) return "low";
  return "ok";
};

const formatPrice = (n: number) =>
  n.toLocaleString("fr-MA", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export function ContentHeader({ onMenuClick, isSidebarOpen, autoEData }: ContentHeaderProps) {
  const [isDark, setIsDark] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [alertProducts, setAlertProducts] = useState<Product[]>([]);

  // Get current date
  const today = new Date();
  const day = today.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric" });
  const month = today.toLocaleDateString("fr-FR", { month: "long" });
  const year = today.getFullYear();

  // Fetch low-stock alerts on mount and every 5 minutes
  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        const products = await productApi.getAlerts();
        setAlertProducts(products);
      } catch {
        // Silently fail — alerts are informational only
      }
    };
    fetchAlerts();
    const interval = setInterval(fetchAlerts, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const alertCount = alertProducts.length;

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-100 mb-8">
      <div className="flex items-center justify-between px-4 sm:px-8 py-4">
        {/* Left - Mobile & Tablet Menu Button + Current Period */}
        <div className="flex items-center gap-3">
          {/* Mobile & Tablet Menu Button */}
          <button
            onClick={onMenuClick}
            className="xl:hidden w-10 h-10 rounded-[12px] bg-gray-50 hover:bg-[#2D3194]/5 flex items-center justify-center transition-all duration-300 hover:border hover:border-[#2D3194]"
            aria-label="Toggle menu"
          >
            {isSidebarOpen ? (
              <X className="w-5 h-5 text-[#2D3194]" strokeWidth={2} />
            ) : (
              <Menu className="w-5 h-5 text-[#2D3194]" strokeWidth={2} />
            )}
          </button>

          {/* Current Period */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-[12px] bg-[#2D3194]/5 flex items-center justify-center">
              <Calendar className="w-5 h-5 text-[#2D3194]" strokeWidth={2} />
            </div>
            <div className="hidden sm:block">
              <p className="text-[#1A1A1A] font-medium">{day}, {month}</p>
              <p className="text-[#7A7A7A] text-sm">{year}</p>
            </div>
          </div>
        </div>

        {/* Right - Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Dark/Light Toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="w-10 h-10 rounded-[12px] bg-gray-50 hover:bg-[#2D3194]/5 flex items-center justify-center transition-all duration-300 hover:border hover:border-[#2D3194]"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-[#7A7A7A]" strokeWidth={2} />
            ) : (
              <Moon className="w-5 h-5 text-[#7A7A7A]" strokeWidth={2} />
            )}
          </button>

          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="w-10 h-10 rounded-[12px] bg-gray-50 hover:bg-[#2D3194]/5 flex items-center justify-center transition-all duration-300 hover:border hover:border-[#2D3194] relative"
              aria-label="Notifications"
            >
              <Bell className="w-5 h-5 text-[#7A7A7A]" strokeWidth={2} />
              {/* Dynamic stock alert badge */}
              {alertCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] bg-red-500 rounded-full flex items-center justify-center px-1">
                  <span className="text-white text-[10px] font-bold leading-none">
                    {alertCount > 99 ? "99+" : alertCount}
                  </span>
                </span>
              )}
            </button>

            {/* Notifications Dropdown */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 max-w-[calc(100vw-2rem)] bg-white rounded-[18px] shadow-[0_4px_24px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between px-4 pt-4 pb-3 border-b border-gray-50">
                  <h3 className="text-[#1A1A1A] font-semibold text-sm">Notifications</h3>
                  {alertCount > 0 && (
                    <span className="px-2 py-0.5 bg-red-100 text-red-600 text-xs font-semibold rounded-full">
                      {alertCount} alerte{alertCount > 1 ? "s" : ""} stock
                    </span>
                  )}
                </div>

                <div className="max-h-72 overflow-y-auto">
                  {alertCount === 0 ? (
                    <div className="flex flex-col items-center justify-center py-10 px-4 text-gray-400">
                      <Bell className="w-8 h-8 mb-2 opacity-30" />
                      <p className="text-sm text-center">Aucune alerte de stock</p>
                      <p className="text-xs text-center mt-1">Tous vos produits sont bien approvisionnés</p>
                    </div>
                  ) : (
                    <div className="p-2 space-y-1">
                      {/* Section: Stock alerts */}
                      <p className="px-2 pt-1 pb-0.5 text-xs font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3 text-amber-500" /> Alertes de stock
                      </p>
                      {alertProducts.map((p) => {
                        const status = stockStatus(p);
                        return (
                          <div
                            key={p.id}
                            className="flex items-center gap-3 p-3 bg-gray-50 hover:bg-[#2D3194]/5 rounded-[12px] transition-all cursor-pointer"
                          >
                            <div
                              className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${
                                status === "empty" ? "bg-red-100" : "bg-amber-100"
                              }`}
                            >
                              <Package
                                className={`w-4 h-4 ${
                                  status === "empty" ? "text-red-600" : "text-amber-600"
                                }`}
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm text-[#1A1A1A] font-medium truncate">{p.name}</p>
                              <p className={`text-xs ${status === "empty" ? "text-red-500" : "text-amber-600"}`}>
                                {status === "empty"
                                  ? "Rupture de stock"
                                  : `Stock: ${p.product.stockQuantity} / seuil ${p.product.alertThreshold}`}
                              </p>
                            </div>
                            <span
                              className={`shrink-0 text-xs font-bold ${
                                status === "empty" ? "text-red-500" : "text-amber-600"
                              }`}
                            >
                              {formatPrice(p.product.unitPrice)} MAD
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {alertCount > 0 && (
                  <div className="p-2 border-t border-gray-50">
                    <a
                      href="/app/articles-services"
                      className="block w-full text-center text-xs text-[#2D3194] font-medium py-2 hover:bg-[#2D3194]/5 rounded-xl transition-colors"
                    >
                      Voir le catalogue →
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Profile */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block text-right">
              <p className="text-[#1A1A1A] font-medium text-sm">
                {autoEData.firstName} {autoEData.lastName}
              </p>
              <p className="text-[#7A7A7A] text-xs">{autoEData.businessName}</p>
            </div>
            <button
              className="w-10 h-10 rounded-[12px] bg-gradient-to-br from-[#2D3194] to-[#4850C8] flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
              aria-label="Profil"
            >
              <User className="w-5 h-5 text-white" strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}