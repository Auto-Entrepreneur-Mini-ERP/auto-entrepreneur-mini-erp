import { Outlet, useNavigate, useLocation } from "react-router";
import { useEffect, useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { ContentHeader } from "../components/ContentHeader";
import { useAutoEntrepreneur } from "../hooks/useAutoEntrepreneur";

export function DashboardLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { headerData, getHeaderData } = useAutoEntrepreneur();
  // Route protection disabled for inspection
  useEffect(() => {
    const isAuthenticated = document.cookie;
    if (!isAuthenticated) {
      navigate("/login");
    }
    getHeaderData();    
  }, [navigate]);

  // Map URL paths to sidebar sections
  const pathToSection: Record<string, string> = {
    "/app/dashboard": "Dashboard",
    "/app/articles-services": "Articles & Services",
    "/app/quots-invoices": "Quots & Invoices",
    "/app/payments-expenses": "Payments & Expenses",
    "/app/customers": "Customers",
    "/app/ca-declaration": "CA Declaration",
    "/app/cnss-payment": "CNSS Payment",
    "/app/analytics": "Analytics",
    "/app/profile": "Profile",
  };

  const activeSection = pathToSection[location.pathname] || "Dashboard";

  const handleSectionChange = (section: string) => {
    const sectionToPath: Record<string, string> = {
      "Dashboard": "/app/dashboard",
      "Articles & Services": "/app/articles-services",
      "Quots & Invoices": "/app/quots-invoices",
      "Payments & Expenses": "/app/payments-expenses",
      "Customers": "/app/customers",
      "CA Declaration": "/app/ca-declaration",
      "CNSS Payment": "/app/cnss-payment",
      "Analytics": "/app/analytics",
    };
    
    const path = sectionToPath[section];
    if (path) {
      navigate(path);
      setIsSidebarOpen(false); // Close sidebar after navigation on mobile
    }
  };

  return (
    <div className="min-h-screen bg-white flex">
      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 xl:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed left-0 top-0 h-screen w-full max-w-[300px] min-w-[230px] z-50
        transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        xl:translate-x-0
      `}>
        <Sidebar activeSection={activeSection} onSectionChange={handleSectionChange} />
      </div>

      {/* Main content */}
      <main className="flex-1 xl:ml-[230px] 2xl:ml-[300px] w-full">
        <ContentHeader
          onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
          isSidebarOpen={isSidebarOpen}
          autoEData={headerData}
        />
        <div className="px-4 sm:px-8 pb-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}