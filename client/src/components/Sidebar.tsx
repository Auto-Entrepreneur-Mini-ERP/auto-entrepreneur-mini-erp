import { LayoutDashboard, Package, FileText, CreditCard, FileCheck, Building, User, LogOut } from "lucide-react";
import { useNavigate } from "react-router";
import Logo from "./Logo";

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear authentication
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
    
    // Redirect to login page
    navigate("/login");
  };

  const handleProfileClick = () => {
    navigate("/app/profile");
  };

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Articles & Services", icon: Package },
    { name: "Devis & Factures", icon: FileText },
    { name: "Paiments & Dépenses", icon: CreditCard },
    { name: "Déclaration Chiffre d'affaire", icon: FileCheck },
    { name: "Paiment CNSS", icon: Building },
  ];

  return (
    <aside className="h-screen bg-white border-r border-gray-100 flex flex-col overflow-hidden">
      {/* Logo Section */}
      <div className="px-4 py-4 flex-shrink-0">
        {/* <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-[#2D3194] rounded-2xl flex items-center justify-center shadow-sm">
            <span className="text-white font-bold text-lg">IC</span>
          </div>
          <div>
            <h2 className="text-[#2D3194]">ICSA ERP</h2>
            <p className="text-[#7A7A7A] text-sm">Plateforme Logistique</p>
          </div>
        </div> */}
        <Logo />
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 px-4 space-y-1.5 overflow-y-auto min-h-0">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.name;

          return (
            <button
              key={item.name}
              onClick={() => onSectionChange(item.name)}
              className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all duration-300 ${
                isActive
                  ? "bg-[#2D3194] text-white shadow-md"
                  : "text-[#1A1A1A] hover:bg-gray-50"
              }`}
            >
              <Icon className="w-5 h-5" strokeWidth={1.8} />
              <span className="font-medium text-sm">{item.name}</span>
              
              {/* Gold accent indicator */}
              {isActive && (
                <div className="ml-auto w-1.5 h-1.5 bg-[#F8BC00] rounded-full"></div>
              )}
            </button>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-gray-100 space-y-1.5 flex-shrink-0">
        <button 
          onClick={handleProfileClick}
          className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all duration-300 ${
            activeSection === "Profile"
              ? "bg-[#2D3194] text-white shadow-md"
              : "text-[#1A1A1A] hover:bg-gray-50"
          }`}
        >
          <User className="w-5 h-5" strokeWidth={1.8} />
          <span className="font-medium text-sm">Profil</span>
          {/* Gold accent indicator */}
          {activeSection === "Profile" && (
            <div className="ml-auto w-1.5 h-1.5 bg-[#F8BC00] rounded-full"></div>
          )}
        </button>
        
        <button 
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-[#1A1A1A] hover:bg-red-50 hover:text-red-600 transition-all duration-300"
        >
          <LogOut className="w-5 h-5" strokeWidth={1.8} />
          <span className="font-medium text-sm">Déconnexion</span>
        </button>
      </div>
    </aside>
  );
}