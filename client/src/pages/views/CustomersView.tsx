import {
  Search,
  Users,
  MapPin,
  Mail,
  Phone,
  Calendar,
  Eye,
  Trash2,
} from "lucide-react";

 

import {
  User,
  
  Building2,
  Globe,
  Hash,
  CheckCircle2,
  X,
  Save,
  Plus,
  Loader2,
} from "lucide-react";
import { Button } from "../../components/ui/button";

import { useState } from "react";
import { Input } from "../../components/ui/input";

import { useGetAllCustomers, useUpdateCustomer, useDeleteCustomer, useCreateCustomer } from "../../hooks/useCustomers";
import type { Customer } from "../../types/customers.types";
import { emptyCustomer } from "../../hooks/useCustomers";
 import { z } from "zod";
  



type CustomerProfileProps = {
  mode: string;
  customer: Customer;
  onCancel: () => void;
};
 

 
const baseUserSchema = z.object({
  firstName: z.string().min(2, "First name is too short"),
  lastName: z.string().min(2, "Last name is too short"),
  email: z.string().email("Invalid email format"),
  phone: z.string().min(10, "Invalid phone number"),
  address: z.string().min(5, "Address is required"),
});

const baseCustomerSchema = z.object({
  user: baseUserSchema,
  ice: z.string().length(15, "ICE must be exactly 15 characters"),
  city: z.string().min(1, "City is required"),
  country: z.string().min(1, "Country is required"),
  isActive: z.boolean(),
});

const customerSchema = baseCustomerSchema;



type ValidationErrors = Record<string, string>;



export function CustomerProfile({
  mode,
  customer,
  onCancel,
}: CustomerProfileProps) {
  const [showSuccess, setShowSuccess] = useState(false);
  const [profile, setProfile] = useState<Customer>(customer);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { updateCustomer } = useUpdateCustomer();
  const { createtCustomer } = useCreateCustomer();

  const handleUserChange = (field: keyof Customer["user"], value: string) => {
    setProfile((prev) => ({
      ...prev,
      user: { ...prev.user, [field]: value },
    }));
  };

  const handleCustomerChange = (field: keyof Customer, value: string) => {
    setProfile((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = async () => {
    const result = customerSchema.safeParse(profile);
    if (!result.success) {
      const formatted: ValidationErrors = {};
      result.error.issues.forEach((issue) => {
        formatted[issue.path.join(".")] = issue.message;
      });
      setErrors(formatted);
      return;
    }

    try {
      setIsSubmitting(true);
      setErrors({});
      console.log(mode);
      if (mode === "ADD") {
        const created = await createtCustomer(result.data);
        if (created) {
          setShowSuccess(true);
        }
      } else {
        await updateCustomer(customer.id, result.data);
        setShowSuccess(true);
      }
    } catch (err) {
      console.error("Save failed:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    setProfile(customer);
    setErrors({});
    onCancel();
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    onCancel(); // go back after success
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-xl shadow-lg w-[420px] max-w-[90%] p-6 flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-green-500" />
            </div>
            <h2 className="text-base font-semibold text-gray-800 text-center">
              {mode === "ADD"
                ? "Client ajouté !"
                : "Modifications enregistrées !"}
            </h2>
            <p className="text-gray-500 text-xs text-center">
              {mode === "ADD"
                ? "Le client a été créé avec succès."
                : "Les informations ont été mises à jour."}
            </p>
            <Button onClick={handleSuccessClose} className="w-full h-9 text-sm">
              Continuer
            </Button>
          </div>
        </div>
      )}
      <div className="bg-white border-b border-gray-100 px-8 py-6">
        <h1 className="text-3xl font-bold text-[#2D3194]">Client details</h1>
      </div>

      <div className="px-8 py-8 flex justify-center">
        <div className="w-full max-w-2xl">
          <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm space-y-6">
            {/* Prénom + Nom */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="flex items-center gap-1.5 text-sm font-medium text-gray-700 mb-2">
                  <User className="w-4 h-4 text-gray-400" />
                  Prénom
                </label>
                <Input
                  value={profile.user.firstName}
                  onChange={(e) =>
                    handleUserChange("firstName", e.target.value)
                  }
                  className={errors["user.firstName"] ? "border-red-500" : ""}
                />
                {errors["user.firstName"] && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors["user.firstName"]}
                  </p>
                )}
              </div>
              <div>
                <label className="flex items-center gap-1.5 text-sm font-medium text-gray-700 mb-2">
                  <User className="w-4 h-4 text-gray-400" />
                  Nom
                </label>
                <Input
                  value={profile.user.lastName}
                  onChange={(e) => handleUserChange("lastName", e.target.value)}
                  className={errors["user.lastName"] ? "border-red-500" : ""}
                />
                {errors["user.lastName"] && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors["user.lastName"]}
                  </p>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="flex items-center gap-1.5 text-sm font-medium text-gray-700 mb-2">
                <Mail className="w-4 h-4 text-gray-400" />
                Email
              </label>
              <Input
                type="email"
                value={profile.user.email}
                onChange={(e) => handleUserChange("email", e.target.value)}
                className={errors["user.email"] ? "border-red-500" : ""}
              />
              {errors["user.email"] && (
                <p className="text-red-500 text-xs mt-1">
                  {errors["user.email"]}
                </p>
              )}
            </div>

            {/* Téléphone */}
            <div>
              <label className="flex items-center gap-1.5 text-sm font-medium text-gray-700 mb-2">
                <Phone className="w-4 h-4 text-gray-400" />
                Téléphone
              </label>
              <Input
                value={profile.user.phone}
                onChange={(e) => handleUserChange("phone", e.target.value)}
                className={errors["user.phone"] ? "border-red-500" : ""}
              />
              {errors["user.phone"] && (
                <p className="text-red-500 text-xs mt-1">
                  {errors["user.phone"]}
                </p>
              )}
            </div>

            {/* Adresse */}
            <div>
              <label className="flex items-center gap-1.5 text-sm font-medium text-gray-700 mb-2">
                <MapPin className="w-4 h-4 text-gray-400" />
                Adresse
              </label>
              <Input
                value={profile.user.address}
                onChange={(e) => handleUserChange("address", e.target.value)}
                className={errors["user.address"] ? "border-red-500" : ""}
              />
              {errors["user.address"] && (
                <p className="text-red-500 text-xs mt-1">
                  {errors["user.address"]}
                </p>
              )}
            </div>

            {/* Ville */}
            <div>
              <label className="flex items-center gap-1.5 text-sm font-medium text-gray-700 mb-2">
                <Building2 className="w-4 h-4 text-gray-400" />
                Ville
              </label>
              <Input
                value={profile.city}
                onChange={(e) => handleCustomerChange("city", e.target.value)}
                className={errors["city"] ? "border-red-500" : ""}
              />
              {errors["city"] && (
                <p className="text-red-500 text-xs mt-1">{errors["city"]}</p>
              )}
            </div>

            {/* Pays */}
            <div>
              <label className="flex items-center gap-1.5 text-sm font-medium text-gray-700 mb-2">
                <Globe className="w-4 h-4 text-gray-400" />
                Pays
              </label>
              <Input
                value={profile.country}
                onChange={(e) =>
                  handleCustomerChange("country", e.target.value)
                }
                className={errors["country"] ? "border-red-500" : ""}
              />
              {errors["country"] && (
                <p className="text-red-500 text-xs mt-1">{errors["country"]}</p>
              )}
            </div>

            {/* ICE */}
            <div>
              <label className="flex items-center gap-1.5 text-sm font-medium text-gray-700 mb-2">
                <Hash className="w-4 h-4 text-gray-400" />
                ICE
              </label>
              <Input
                value={profile.ice}
                onChange={(e) => handleCustomerChange("ice", e.target.value)}
                className={errors["ice"] ? "border-red-500" : ""}
              />
              {errors["ice"] && (
                <p className="text-red-500 text-xs mt-1">{errors["ice"]}</p>
              )}
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-6 border-t border-gray-100">
              <Button
                variant="outline"
                onClick={handleCancel}
                disabled={isSubmitting}
              >
                <X className="w-4 h-4 mr-1.5" />
                Annuler
              </Button>
              <Button onClick={handleSave} disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-1.5 animate-spin" />
                    {mode === "ADD" ? "Ajoutement..." : "Enregistrement..."}
                  </>
                ) : mode === "ADD" ? (
                  <>
                    <Plus className="w-4 h-4 mr-1.5" />
                    Ajouter
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4 mr-1.5" />
                    Enregistrer
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




// export function CustomersView() {
//   const { allCustomers: customers, loading } = useGetAllCustomers();
//   const { deleteCustomer  } = useDeleteCustomer();


  
//   const [showProfile, setShowProfile] = useState(false);
//   const [mode, setMode] = useState("ADD");
//   const [currentCustomer, setCurrentCustomer] = useState<Customer>(emptyCustomer);
//    const [searchTerm, setSearchTerm] = useState("");

//   const handleAddClient = (customer: Customer | null) => {
//     if (customer === null) {
//       customer = emptyCustomer;
//     }
//     setMode("ADD")
//     setCurrentCustomer(customer);
//     setShowProfile(true);
//   };
//    const handleShowClient = (customer: Customer | null) => {
//      if (customer === null) {
//        customer = emptyCustomer;
//      }
//      setMode("UPDATE");
//      setCurrentCustomer(customer);
//      setShowProfile(true);
//   };
//    const handleDeleteClient = async (customer: Customer  ) => {
//       deleteCustomer(customer.id)
//    };

//   const activeCustomers = customers.filter((c) => c.isActive).length;
//   const inactiveCustomers = customers.filter((c) => !c.isActive).length;
//   const totalCustomers = customers.length;

//   const filteredCustomers = customers.filter(
//     (customer) =>
//       customer.user.firstName
//         .toLowerCase()
//         .includes(searchTerm.toLowerCase()) ||
//       customer.user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       customer.user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       customer.city.toLowerCase().includes(searchTerm.toLowerCase()),
//   );
//   const [showDeleted, setShowDeleted] = useState(false)

//   const formatDate = (dateString: string) => {
//     return new Date(dateString).toLocaleDateString("fr-FR");
//   };
//   if (loading) return <p>Customers is loading</p>;
 
//   return showProfile ? (
//     <CustomerProfile
//       mode={mode}
//       customer={currentCustomer}
//       onCancel={() => setShowProfile(false)}
//     ></CustomerProfile>
//   ) : (
      
//       showDeleted ? (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
//           <div className="bg-white rounded-xl shadow-lg w-[420px] max-w-[90%] p-6 flex flex-col items-center gap-3">
//             <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
//               <CheckCircle2 className="w-6 h-6 text-green-500" />
//             </div>
//             <h2 className="text-base font-semibold text-gray-800 text-center">
//               {mode === "ADD"
//                 ? "Client ajouté !"
//                 : "Modifications enregistrées !"}
//             </h2>
//             <p className="text-gray-500 text-xs text-center">
//               {mode === "ADD"
//                 ? "Le client a été créé avec succès."
//                 : "Les informations ont été mises à jour."}
//             </p>
//             <Button onClick={handleSuccessClose} className="w-full h-9 text-sm">
//               Continuer
//             </Button>
//           </div>
//         </div>
//       ) : (
//         <div className = "min-h-screen font-outfit p-8">
//       <div className="mb-8 animate-slideDown">
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             gap: "0.75rem",
//             marginBottom: "0.5rem",
//           }}
//         >
//           <div
//             style={{
//               width: "48px",
//               height: "48px",
//               background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//               borderRadius: "14px",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               boxShadow: "0 8px 24px rgba(102, 126, 234, 0.3)",
//             }}
//           >
//             <Users size={24} color="white" strokeWidth={2.5} />
//           </div>
//           <h1
//             style={{
//               fontSize: "2rem",
//               fontWeight: "700",
//               background: "linear-gradient(135deg, #2d3748 0%, #4a5568 100%)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               margin: 0,
//             }}
//           >
//             Gestion des Clients
//           </h1>
//         </div>
//         <p
//           style={{
//             color: "#64748b",
//             fontSize: "0.95rem",
//             margin: 0,
//             paddingLeft: "60px",
//             fontWeight: "400",
//           }}
//         >
//           Suivez et gérez votre portefeuille clients
//         </p>
//       </div>
//       {/* Search Bar */}

//       <div className="mb-6 animate-slideDown flex items-center gap-3 max-w-xl">
//         {/* Search */}
//         <div className="relative flex-1">
//           <Search
//             className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
//             size={20}
//           />
//           <input
//             type="text"
//             placeholder="Rechercher un client..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="w-full pl-12 pr-4 py-3 text-sm border-2 border-slate-200 rounded-[12px] bg-white outline-none transition-all duration-200 font-inherit focus:border-indigo-500 focus:shadow-[0_0_0_4px_rgba(102,126,234,0.1)]"
//           />
//         </div>

//         {/* Add Button */}
//         <Button
//           onClick={() => handleAddClient(null)}
//           style={{
//             backgroundColor: "#4F46E5", // Indigo 600
//             color: "white",
//             padding: "0.625rem 1rem", // 10px 16px
//             borderRadius: "12px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             transition: "all 0.2s ease-in-out",
//           }}
//           onMouseEnter={
//             (e) => (e.currentTarget.style.backgroundColor = "#4338CA") // Indigo 700 hover
//           }
//           onMouseLeave={
//             (e) => (e.currentTarget.style.backgroundColor = "#4F46E5") // reset
//           }
//         >
//           Ajouter
//         </Button>
//       </div>

//       {/* Stats Cards */}
//       <div className="grid gap-5 mb-8 grid-cols-1 sm:grid-cols-2 gap-2 lg:grid-cols-3">
//         {[
//           {
//             label: "Clients actifs",
//             value: activeCustomers,
//             color: "#10b981",
//             bgColor: "#d1fae5",
//             icon: "✓",
//             delay: "0.2s",
//           },
//           {
//             label: "Clients inactifs",
//             value: inactiveCustomers,
//             color: "#ef4444",
//             bgColor: "#fee2e2",
//             icon: "⊗",
//             delay: "0.3s",
//           },
//           {
//             label: "Total",
//             value: totalCustomers,
//             color: "#667eea",
//             bgColor: "#e0e7ff",
//             icon: "∑",
//             delay: "0.4s",
//           },
//         ].map((stat, idx) => (
//           <div
//             key={idx}
//             className="bg-white p-6 rounded-[16px] border border-slate-200 shadow-sm cursor-pointer transition-transform transition-shadow duration-200"
//             style={{
//               animation: `slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${stat.delay} backwards`,
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.transform = "translateY(-4px)";
//               e.currentTarget.style.boxShadow =
//                 "0 12px 24px rgba(0, 0, 0, 0.08)";
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.transform = "translateY(0)";
//               e.currentTarget.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.05)";
//             }}
//           >
//             <div className="flex items-center justify-between mb-3">
//               <span className="text-sm font-medium text-slate-500">
//                 {stat.label}
//               </span>
//               <div
//                 className="flex items-center justify-center rounded-[10px]"
//                 style={{
//                   width: "36px",
//                   height: "36px",
//                   background: stat.bgColor,
//                   fontSize: "1.1rem",
//                   fontWeight: 700,
//                   color: stat.color,
//                 }}
//               >
//                 {stat.icon}
//               </div>
//             </div>
//             <div
//               className="font-bold"
//               style={{ fontSize: "2rem", color: stat.color }}
//             >
//               {stat.value}
//             </div>
//           </div>
//         ))}
//       </div>
//       {/* Customers Table */}
//       <div
//         style={{
//           background: "white",
//           borderRadius: "16px",
//           border: "1px solid #e2e8f0",
//           overflow: "hidden",
//           boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
//         }}
//       >
//         {/* Table Header */}
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "1.5fr 1fr 1fr 1fr 0.8fr 0.6fr",
//             gap: "1rem",
//             padding: "1.25rem 1.5rem",
//             background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
//             borderBottom: "2px solid #e2e8f0",
//             fontSize: "0.8rem",
//             fontWeight: "700",
//             color: "#475569",
//             textTransform: "uppercase",
//             letterSpacing: "0.05em",
//           }}
//         >
//           <div>Client</div>
//           <div>Localisation</div>
//           <div>Contact</div>
//           <div>Date d'inscription</div>
//           <div style={{ textAlign: "center" }}>Statut</div>
//           <div style={{ textAlign: "center" }}>Action</div>
//         </div>

//         {/* Table Body */}
//         <div>
//           {filteredCustomers.map((customer, idx) => (
//             <div
//               key={customer.id}
//               style={{
//                 display: "grid",
//                 gridTemplateColumns: "1.5fr 1fr 1fr 1fr 0.8fr 0.6fr",
//                 gap: "1rem",
//                 padding: "1.25rem 1.5rem",
//                 borderBottom:
//                   idx < filteredCustomers.length - 1
//                     ? "1px solid #f1f5f9"
//                     : "none",
//                 transition: "all 0.2s ease",
//                 cursor: "pointer",
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.background = "#f8fafc";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.background = "transparent";
//               }}
//             >
//               {/* Client Info */}
//               <div
//                 style={{
//                   display: "flex",
//                   flexDirection: "column",
//                   gap: "0.25rem",
//                 }}
//               >
//                 <div
//                   style={{
//                     fontSize: "0.95rem",
//                     fontWeight: "600",
//                     color: "#1e293b",
//                   }}
//                 >
//                   {customer.user.firstName} {customer.user.lastName}
//                 </div>
//                 <div
//                   style={{
//                     fontSize: "0.85rem",
//                     color: "#64748b",
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "0.35rem",
//                   }}
//                 >
//                   <Mail size={13} />
//                   {customer.user.email}
//                 </div>
//                 <div
//                   style={{
//                     fontSize: "0.8rem",
//                     color: "#94a3b8",
//                     fontFamily: "monospace",
//                     marginTop: "0.15rem",
//                   }}
//                 >
//                   ICE: {customer.ice}
//                 </div>
//               </div>

//               {/* Location */}
//               <div
//                 style={{
//                   display: "flex",
//                   flexDirection: "column",
//                   gap: "0.25rem",
//                   justifyContent: "center",
//                 }}
//               >
//                 <div
//                   style={{
//                     fontSize: "0.9rem",
//                     fontWeight: "500",
//                     color: "#334155",
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "0.4rem",
//                   }}
//                 >
//                   <MapPin size={14} style={{ color: "#667eea" }} />
//                   {customer.city}
//                 </div>
//                 <div
//                   style={{
//                     fontSize: "0.85rem",
//                     color: "#64748b",
//                   }}
//                 >
//                   {customer.country}
//                 </div>
//               </div>

//               {/* Contact */}
//               <div
//                 style={{
//                   display: "flex",
//                   flexDirection: "column",
//                   gap: "0.25rem",
//                   justifyContent: "center",
//                 }}
//               >
//                 <div
//                   style={{
//                     fontSize: "0.85rem",
//                     color: "#475569",
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "0.4rem",
//                   }}
//                 >
//                   <Phone size={13} style={{ color: "#10b981" }} />
//                   {customer.user.phone}
//                 </div>
//                 <div
//                   style={{
//                     fontSize: "0.8rem",
//                     color: "#94a3b8",
//                   }}
//                 >
//                   {customer.user.address.split(",")[0]}
//                 </div>
//               </div>

//               {/* Date */}
//               <div
//                 style={{
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "center",
//                   gap: "0.25rem",
//                 }}
//               >
//                 <div
//                   style={{
//                     fontSize: "0.9rem",
//                     fontWeight: "500",
//                     color: "#334155",
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "0.4rem",
//                   }}
//                 >
//                   <Calendar size={13} style={{ color: "#f59e0b" }} />
//                   {formatDate(customer.creationDate)}
//                 </div>
//               </div>

//               {/* Status */}
//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//               >
//                 <span
//                   style={{
//                     padding: "0.375rem 0.875rem",
//                     borderRadius: "20px",
//                     fontSize: "0.8rem",
//                     fontWeight: "600",
//                     background: customer.isActive ? "#d1fae5" : "#fee2e2",
//                     color: customer.isActive ? "#065f46" : "#991b1b",
//                     border: `1px solid ${customer.isActive ? "#a7f3d0" : "#fecaca"}`,
//                   }}
//                 >
//                   {customer.isActive ? "Actif" : "Inactif"}
//                 </span>
//               </div>

//               {/* Actions */}
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "center",
//                   gap: "0.75rem",
//                   alignItems: "center",
//                 }}
//               >
//                 <Button
//                   onClick={() => handleShowClient(customer)}
//                   variant="ghost"
//                   size="icon"
//                 >
//                   <Eye className="w-4 h-4" />
//                 </Button>
//                 <Button variant="ghost" size="icon"
//                   onClick={() => handleDeleteClient(customer)}>
//                   <Trash2 className="w-4 h-4 text-red-500" />
//                 </Button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       {/* Animations */}
//       <style>{`
//         @keyframes slideDown {
//           from {
//             opacity: 0;
//             transform: translateY(-20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes slideUp {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }
//       `}</style>
//     </div>)
      
   
//   );

 
// }
export function CustomersView() {
  const { allCustomers: customers = [], loading } = useGetAllCustomers();
  const { deleteCustomer } = useDeleteCustomer();

  const [showProfile, setShowProfile] = useState(false);
  const [mode, setMode] = useState<"ADD" | "UPDATE">("ADD");
  const [currentCustomer, setCurrentCustomer] =
    useState<Customer>(emptyCustomer);
  const [searchTerm, setSearchTerm] = useState("");

  // DELETE STATES
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [customerToDelete, setCustomerToDelete] = useState<Customer | null>(
    null,
  );
  const [showDeleteSuccess, setShowDeleteSuccess] = useState(false);

  const handleAddClient = (customer: Customer | null) => {
    setMode("ADD");
    setCurrentCustomer(customer ?? emptyCustomer);
    setShowProfile(true);
  };

  const handleShowClient = (customer: Customer | null) => {
    setMode("UPDATE");
    setCurrentCustomer(customer ?? emptyCustomer);
    setShowProfile(true);
  };

  const handleDeleteClient = (customer: Customer) => {
    setCustomerToDelete(customer);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    if (!customerToDelete?.id) return;

    try {
      await deleteCustomer(customerToDelete.id);
      setShowDeleteModal(false);
      setCustomerToDelete(null);
      setShowDeleteSuccess(true);
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.user.firstName
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      customer.user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.city.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString("fr-FR");

  if (loading) return <p>Customers is loading...</p>;

  if (showProfile) {
    return (
      <CustomerProfile
        mode={mode}
        customer={currentCustomer}
        onCancel={() => setShowProfile(false)}
      />
    );
  }

  return (
    <div className="min-h-screen p-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Gestion des Clients</h1>
        <p className="text-slate-500 text-sm">
          Suivez et gérez votre portefeuille clients
        </p>
      </div>

      {/* Search + Add */}
      <div className="mb-6 flex items-center gap-3 max-w-xl">
        <input
          type="text"
          placeholder="Rechercher un client..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 px-4 py-2 border rounded-md text-sm bg-[#4F46E5"
        />
        <Button onClick={() => handleAddClient(null)}>Ajouter</Button>
      </div>

      {/* TABLE */}
      <div
        style={{
          background: "white",
          borderRadius: "16px",
          border: "1px solid #e2e8f0",
          overflow: "hidden",
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
        }}
      >
        <table className="w-full border-collapse">
          <thead>
            <tr
              style={{
                background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
                borderBottom: "2px solid #e2e8f0",
                fontSize: "0.9rem",
                fontWeight: "700",
                color: "#475569",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              <th className="text-left px-6 py-4">Client</th>
              <th className="text-left px-6 py-4">Localisation</th>
              <th className="text-left px-6 py-4">Contact</th>
              <th className="text-left px-6 py-4">Date d'inscription</th>
              <th className="text-center px-6 py-4">Statut</th>
              <th className="text-center px-6 py-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredCustomers.map((customer, idx) => (
              <tr
                key={customer.id}
                style={{
                  borderBottom:
                    idx < filteredCustomers.length - 1
                      ? "1px solid #f1f5f9"
                      : "none",
                  transition: "all 0.2s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#f8fafc")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "transparent")
                }
              >
                {/* CLIENT */}
                <td className="px-6 py-6 align-top">
                  <div className="flex flex-col gap-2">
                    <div
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: 600,
                        color: "#1e293b",
                      }}
                    >
                      {customer.user.firstName} {customer.user.lastName}
                    </div>
                    <div
                      style={{
                        fontSize: "0.85rem",
                        color: "#64748b",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <Mail size={13} />
                      {customer.user.email}
                    </div>
                    <div
                      style={{
                        fontSize: "0.8rem",
                        color: "#94a3b8",
                        fontFamily: "monospace",
                      }}
                    >
                      ICE: {customer.ice}
                    </div>
                  </div>
                </td>

                {/* LOCATION */}
                <td className="px-6 py-6 align-top">
                  <div className="flex flex-col gap-2">
                    <div
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: 500,
                        color: "#334155",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <MapPin size={14} style={{ color: "#667eea" }} />
                      {customer.city}
                    </div>
                    <div style={{ fontSize: "0.85rem", color: "#64748b" }}>
                      {customer.country}
                    </div>
                  </div>
                </td>

                {/* CONTACT */}
                <td className="px-6 py-6 align-top">
                  <div
                    style={{
                      fontSize: "0.85rem",
                      color: "#475569",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <Phone size={13} style={{ color: "#10b981" }} />
                    {customer.user.phone}
                  </div>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: "#94a3b8",
                      marginTop: "6px",
                    }}
                  >
                    {customer.user.address.split(",")[0]}
                  </div>
                </td>

                {/* DATE */}
                <td className="px-6 py-6 align-top">
                  <div
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 500,
                      color: "#334155",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <Calendar size={13} style={{ color: "#f59e0b" }} />
                    {formatDate(customer.creationDate)}
                  </div>
                </td>

                {/* STATUS */}
                <td className="px-6 py-6 text-center align-middle">
                  <span
                    style={{
                      padding: "0.375rem 0.875rem",
                      borderRadius: "20px",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      background: customer.isActive ? "#d1fae5" : "#fee2e2",
                      color: customer.isActive ? "#065f46" : "#991b1b",
                      border: `1px solid ${customer.isActive ? "#a7f3d0" : "#fecaca"}`,
                    }}
                  >
                    {customer.isActive ? "Actif" : "Inactif"}
                  </span>
                </td>

                {/* ACTIONS */}
                <td className="px-6 py-6 text-center align-middle">
                  <div className="flex justify-center gap-3">
                    <Button
                      onClick={() => handleShowClient(customer)}
                      variant="ghost"
                      size="icon"
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button
                      onClick={() => handleDeleteClient(customer)}
                      variant="ghost"
                      size="icon"
                    >
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* DELETE CONFIRM MODAL */}
      {showDeleteModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white rounded-lg shadow-lg w-[400px] p-6">
            <h2 className="font-semibold mb-2">Supprimer ce client ?</h2>
            <p className="text-sm text-gray-500 mb-4">
              Cette action est irréversible.
            </p>

            <div className="flex justify-end gap-3">
              <Button variant="ghost" onClick={() => setShowDeleteModal(false)}>
                Annuler
              </Button>
              <Button variant="destructive" onClick={confirmDelete}>
                Supprimer
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* DELETE SUCCESS MODAL */}
      {showDeleteSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white rounded-lg shadow-lg w-[400px] p-6 text-center">
            <h2 className="font-semibold text-green-600 mb-2">
              Client supprimé
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Le client a été supprimé avec succès.
            </p>
            <Button onClick={() => setShowDeleteSuccess(false)}>
              Continuer
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
