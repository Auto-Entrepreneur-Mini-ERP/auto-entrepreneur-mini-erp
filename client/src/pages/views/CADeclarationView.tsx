import { FileCheck, Calendar, Download, Send, AlertCircle, CheckCircle2 } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Modal } from "../../components/ui/modal";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { useState } from "react";

export function CADeclarationView() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    period: "",
    revenue: "",
    tvaCollected: "",
    tvaDeductible: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Declaration data:", formData);
    setIsModalOpen(false);
    setFormData({ period: "", revenue: "", tvaCollected: "", tvaDeductible: "", notes: "" });
  };

  const declarations = [
    { period: "Décembre 2023", dueDate: "15/01/2024", amount: "45,600", status: "Envoyée", date: "12/01/2024" },
    { period: "Novembre 2023", dueDate: "15/12/2023", amount: "52,300", status: "Validée", date: "10/12/2023" },
    { period: "Octobre 2023", dueDate: "15/11/2023", amount: "48,900", status: "Validée", date: "08/11/2023" },
    { period: "Septembre 2023", dueDate: "15/10/2023", amount: "51,200", status: "Validée", date: "12/10/2023" },
  ];

  return (
    <div className="py-8">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-[#2D3194]/10 rounded-xl flex items-center justify-center">
            <FileCheck className="w-5 h-5 text-[#2D3194]" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#2D3194]">Déclaration CA</h1>
            <p className="text-gray-600">Gérez vos déclarations de chiffre d'affaires</p>
          </div>
        </div>
      </div>

      {/* Alert Banner */}
      <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-xl mb-6">
        <div className="flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
          <div className="flex-1">
            <h3 className="font-bold text-orange-900 mb-1">Déclaration en attente</h3>
            <p className="text-sm text-orange-800 mb-3">
              La déclaration pour <strong>Janvier 2024</strong> doit être envoyée avant le <strong>15/02/2024</strong>
            </p>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white h-10 px-6 rounded-xl">
              <Send className="w-4 h-4 mr-2" />
              Préparer la déclaration
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <p className="text-gray-600 text-sm">CA Janvier 2024</p>
            <div className="w-10 h-10 bg-[#2D3194]/10 rounded-xl flex items-center justify-center">
              <Calendar className="w-5 h-5 text-[#2D3194]" />
            </div>
          </div>
          <p className="text-3xl font-bold text-[#2D3194]">58,240€</p>
          <p className="text-green-600 text-sm mt-2">+12.5% vs déc.</p>
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <p className="text-gray-600 text-sm">CA Total 2024</p>
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
            </div>
          </div>
          <p className="text-3xl font-bold text-green-600">58,240€</p>
          <p className="text-gray-600 text-sm mt-2">1 mois déclaré</p>
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <p className="text-gray-600 text-sm">CA Total 2023</p>
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
              <FileCheck className="w-5 h-5 text-blue-600" />
            </div>
          </div>
          <p className="text-3xl font-bold text-blue-600">582K€</p>
          <p className="text-gray-600 text-sm mt-2">12 mois déclarés</p>
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <p className="text-gray-600 text-sm">Prochaine échéance</p>
            <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-orange-600" />
            </div>
          </div>
          <p className="text-3xl font-bold text-orange-600">15/02</p>
          <p className="text-gray-600 text-sm mt-2">Dans 10 jours</p>
        </div>
      </div>

      {/* Current Period Card */}
      <div className="bg-gradient-to-br from-[#2D3194] to-[#1f2266] rounded-2xl p-8 mb-8 text-white shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Période en cours : Janvier 2024</h2>
            <p className="text-white/80">Date limite de déclaration : 15 Février 2024</p>
          </div>
          <div className="w-16 h-16 bg-[#F8BC00] rounded-2xl flex items-center justify-center">
            <Calendar className="w-8 h-8 text-[#2D3194]" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <p className="text-white/80 text-sm mb-2">Chiffre d'affaires</p>
            <p className="text-3xl font-bold">58,240€</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <p className="text-white/80 text-sm mb-2">TVA collectée</p>
            <p className="text-3xl font-bold">11,648€</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <p className="text-white/80 text-sm mb-2">Jours restants</p>
            <p className="text-3xl font-bold">10</p>
          </div>
        </div>

        <div className="flex gap-4 mt-6">
          <Button className="bg-[#F8BC00] hover:bg-[#e0ab00] text-[#2D3194] h-12 px-6 rounded-xl font-semibold flex-1">
            <Send className="w-5 h-5 mr-2" />
            Soumettre la déclaration
          </Button>
          <Button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 h-12 px-6 rounded-xl font-semibold">
            <Download className="w-5 h-5 mr-2" />
            Télécharger PDF
          </Button>
        </div>
      </div>

      {/* Historical Declarations */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h3 className="font-bold text-[#2D3194] text-lg">Historique des déclarations</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Période</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Date limite</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">CA déclaré (€)</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Date d'envoi</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Statut</th>
                <th className="text-right px-6 py-4 text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {declarations.map((declaration, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#2D3194]/10 rounded-xl flex items-center justify-center">
                        <FileCheck className="w-5 h-5 text-[#2D3194]" />
                      </div>
                      <span className="font-semibold text-gray-900">{declaration.period}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{declaration.dueDate}</td>
                  <td className="px-6 py-4 font-semibold text-gray-900">{declaration.amount}</td>
                  <td className="px-6 py-4 text-gray-600">{declaration.date}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                      declaration.status === "Validée" 
                        ? "bg-green-100 text-green-700" 
                        : "bg-blue-100 text-blue-700"
                    }`}>
                      {declaration.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="Télécharger">
                        <Download className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal for New Declaration */}
      <Modal title="" isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Préparer une nouvelle déclaration</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <Label htmlFor="period">Période</Label>
              <Input
                type="text"
                id="period"
                value={formData.period}
                onChange={(e) => setFormData({ ...formData, period: e.target.value })}
                required
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="revenue">Chiffre d'affaires (€)</Label>
              <Input
                type="number"
                id="revenue"
                value={formData.revenue}
                onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                required
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="tvaCollected">TVA collectée (€)</Label>
              <Input
                type="number"
                id="tvaCollected"
                value={formData.tvaCollected}
                onChange={(e) => setFormData({ ...formData, tvaCollected: e.target.value })}
                required
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="tvaDeductible">TVA déductible (€)</Label>
              <Input
                type="number"
                id="tvaDeductible"
                value={formData.tvaDeductible}
                onChange={(e) => setFormData({ ...formData, tvaDeductible: e.target.value })}
                required
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="notes">Notes</Label>
              <Input
                type="text"
                id="notes"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              />
            </div>
            <div className="flex justify-end">
              <Button type="submit" className="bg-[#F8BC00] hover:bg-[#e0ab00] text-[#2D3194] h-10 px-6 rounded-xl font-semibold">
                Soumettre
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}