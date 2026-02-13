import { useState } from "react";
import { Bell, User, Sun, Moon, Calendar, Menu, X } from "lucide-react";

interface ContentHeaderProps {
  onMenuClick: () => void;
  isSidebarOpen: boolean;
  autoEData: {
    firstName: string,
    lastName: string,
    businessName: string,
  }
}

export function ContentHeader({ onMenuClick, isSidebarOpen, autoEData }: ContentHeaderProps) {
  const [isDark, setIsDark] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  // Get current date
  const today = new Date();
  const day = today.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric" });
  const month = today.toLocaleDateString("fr-FR", { month: "long" });
  const year = today.getFullYear();

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
              {/* Notification Badge */}
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Notifications Dropdown */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 max-w-[calc(100vw-2rem)] bg-white rounded-[18px] shadow-[0_4px_24px_rgba(0,0,0,0.08)] border border-gray-100 p-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[#1A1A1A] font-medium">Notifications</h3>
                    <span className="text-xs text-[#F8BC00] font-medium">3 Nouvelles</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="p-3 bg-gray-50 rounded-[12px] hover:bg-[#2D3194]/5 cursor-pointer transition-all">
                      <p className="text-sm text-[#1A1A1A]">Nouvelle facture #INV-2451 créée</p>
                      <p className="text-xs text-[#7A7A7A] mt-1">Il y a 2 minutes</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-[12px] hover:bg-[#2D3194]/5 cursor-pointer transition-all">
                      <p className="text-sm text-[#1A1A1A]">Alerte stock faible : Article A-245</p>
                      <p className="text-xs text-[#7A7A7A] mt-1">Il y a 1 heure</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-[12px] hover:bg-[#2D3194]/5 cursor-pointer transition-all">
                      <p className="text-sm text-[#1A1A1A]">Paiement reçu 2,5K€</p>
                      <p className="text-xs text-[#7A7A7A] mt-1">Il y a 3 heures</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* User Profile Menu */}
          <div className="relative">
            <button
              className="flex items-center gap-2 sm:gap-3 pl-2 sm:pl-3 pr-2 sm:pr-4 py-2 rounded-[12px] bg-gray-50 hover:bg-[#2D3194]/5 transition-all duration-300 hover:border hover:border-[#2D3194]"
            >
              <div className="w-8 h-8 rounded-[10px] bg-[#2D3194] flex items-center justify-center">
                <User className="w-4 h-4 text-white" strokeWidth={2} />
              </div>
              <div className="text-left hidden lg:block">
                <p className="text-sm text-[#1A1A1A] font-medium">{autoEData.firstName} {autoEData.lastName}</p>
                <p className="text-xs text-[#7A7A7A]">{autoEData.businessName}</p>
              </div>
            </button>

            {/* Profile Dropdown */}
            {/* {showProfile && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-[18px] shadow-[0_4px_24px_rgba(0,0,0,0.08)] border border-gray-100 p-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
                    <div className="w-12 h-12 rounded-[14px] bg-[#2D3194] flex items-center justify-center">
                      <User className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-[#1A1A1A] font-medium">Rajesh Kumar</p>
                      <p className="text-sm text-[#7A7A7A]">EMP-2451</p>
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <button className="w-full text-left px-3 py-2 rounded-[10px] hover:bg-gray-50 text-[#1A1A1A] text-sm transition-all">
                      Mon Profil
                    </button>
                    <button className="w-full text-left px-3 py-2 rounded-[10px] hover:bg-gray-50 text-[#1A1A1A] text-sm transition-all">
                      Paramètres
                    </button>
                    <button className="w-full text-left px-3 py-2 rounded-[10px] hover:bg-gray-50 text-[#1A1A1A] text-sm transition-all">
                      Aide & Support
                    </button>
                    <div className="border-t border-gray-100 my-2"></div>
                    <button className="w-full text-left px-3 py-2 rounded-[10px] hover:bg-red-50 text-red-600 text-sm transition-all">
                      Déconnexion
                    </button>
                  </div>
                </div>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </header>
  );
}