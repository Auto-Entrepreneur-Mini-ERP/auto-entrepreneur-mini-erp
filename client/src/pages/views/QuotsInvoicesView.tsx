import { FileText, Plus, Search, Eye, Download, Send } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Modal } from "../../components/ui/modal";
import { useState } from "react";

export function QuotsInvoicesView() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isInvoiceModalOpen, setIsInvoiceModalOpen] = useState(false);
  const [quoteFormData, setQuoteFormData] = useState({
    client: "",
    date: "",
    validUntil: "",
    items: "",
    amount: "",
    notes: "",
  });
  const [invoiceFormData, setInvoiceFormData] = useState({
    client: "",
    date: "",
    dueDate: "",
    items: "",
    amount: "",
    notes: "",
  });

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Quote data:", quoteFormData);
    setIsQuoteModalOpen(false);
    setQuoteFormData({ client: "", date: "", validUntil: "", items: "", amount: "", notes: "" });
  };

  const handleInvoiceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Invoice data:", invoiceFormData);
    setIsInvoiceModalOpen(false);
    setInvoiceFormData({ client: "", date: "", dueDate: "", items: "", amount: "", notes: "" });
  };

  const documents = [
    { id: "QT-2024-001", type: "Devis", client: "Société XYZ", date: "15/01/2024", amount: "2,450.00", status: "En attente" },
    { id: "INV-2024-045", type: "Facture", client: "Logistique Pro", date: "12/01/2024", amount: "3,800.00", status: "Payée" },
    { id: "QT-2024-002", type: "Devis", client: "Transport ABC", date: "10/01/2024", amount: "1,200.00", status: "Accepté" },
    { id: "INV-2024-044", type: "Facture", client: "Distribution SA", date: "08/01/2024", amount: "5,600.00", status: "En attente" },
    { id: "INV-2024-043", type: "Facture", client: "Express Ltd", date: "05/01/2024", amount: "890.00", status: "Payée" },
    { id: "QT-2024-003", type: "Devis", client: "Cargo Solutions", date: "03/01/2024", amount: "4,200.00", status: "Refusé" },
  ];

  return (
    <div className="py-8">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-[#2D3194]/10 rounded-xl flex items-center justify-center">
            <FileText className="w-5 h-5 text-[#2D3194]" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#2D3194]">Devis & Factures</h1>
            <p className="text-gray-600">Gérez vos devis et factures clients</p>
          </div>
        </div>
      </div>

      {/* Action Bar */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Rechercher par numéro, client..."
            className="pl-10 h-12 border-gray-200 rounded-xl"
          />
        </div>
        <div className="flex gap-3">
          <Button className="bg-white hover:bg-gray-50 text-[#2D3194] border-2 border-[#2D3194] h-12 px-6 rounded-xl" onClick={() => setIsQuoteModalOpen(true)}>
            <Plus className="w-5 h-5 mr-2" />
            Nouveau Devis
          </Button>
          <Button className="bg-[#2D3194] hover:bg-[#1f2266] text-white h-12 px-6 rounded-xl" onClick={() => setIsInvoiceModalOpen(true)}>
            <Plus className="w-5 h-5 mr-2" />
            Nouvelle Facture
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
          <p className="text-gray-600 text-sm mb-2">Devis en cours</p>
          <p className="text-3xl font-bold text-[#2D3194]">18</p>
          <p className="text-gray-600 text-sm mt-2">45,200€ total</p>
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
          <p className="text-gray-600 text-sm mb-2">Factures payées</p>
          <p className="text-3xl font-bold text-green-600">124</p>
          <p className="text-gray-600 text-sm mt-2">Ce mois</p>
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
          <p className="text-gray-600 text-sm mb-2">En attente paiement</p>
          <p className="text-3xl font-bold text-orange-600">32</p>
          <p className="text-gray-600 text-sm mt-2">68,900€</p>
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
          <p className="text-gray-600 text-sm mb-2">CA du mois</p>
          <p className="text-3xl font-bold text-[#2D3194]">285K€</p>
          <p className="text-green-600 text-sm mt-2">+12.5%</p>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Numéro</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Type</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Client</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Date</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Montant (€)</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Statut</th>
                <th className="text-right px-6 py-4 text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {documents.map((doc) => (
                <tr key={doc.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <span className="font-semibold text-[#2D3194]">{doc.id}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                      doc.type === "Devis" 
                        ? "bg-blue-100 text-blue-700" 
                        : "bg-purple-100 text-purple-700"
                    }`}>
                      {doc.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-900">{doc.client}</td>
                  <td className="px-6 py-4 text-gray-600">{doc.date}</td>
                  <td className="px-6 py-4 font-semibold text-gray-900">{doc.amount}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                      doc.status === "Payée" 
                        ? "bg-green-100 text-green-700" 
                        : doc.status === "En attente"
                        ? "bg-orange-100 text-orange-700"
                        : doc.status === "Accepté"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-red-100 text-red-700"
                    }`}>
                      {doc.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="Voir">
                        <Eye className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="Télécharger">
                        <Download className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-blue-50 rounded-lg transition-colors" title="Envoyer">
                        <Send className="w-4 h-4 text-blue-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quote Modal */}
      <Modal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)}>
        <div className="p-6">
          <h2 className="text-xl font-bold text-[#2D3194] mb-4">Nouveau Devis</h2>
          <form onSubmit={handleQuoteSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="client">Client</Label>
                <Input
                  type="text"
                  id="client"
                  value={quoteFormData.client}
                  onChange={(e) => setQuoteFormData({ ...quoteFormData, client: e.target.value })}
                  className="h-10 border-gray-200 rounded-xl"
                />
              </div>
              <div>
                <Label htmlFor="date">Date</Label>
                <Input
                  type="date"
                  id="date"
                  value={quoteFormData.date}
                  onChange={(e) => setQuoteFormData({ ...quoteFormData, date: e.target.value })}
                  className="h-10 border-gray-200 rounded-xl"
                />
              </div>
              <div>
                <Label htmlFor="validUntil">Valide jusqu'au</Label>
                <Input
                  type="date"
                  id="validUntil"
                  value={quoteFormData.validUntil}
                  onChange={(e) => setQuoteFormData({ ...quoteFormData, validUntil: e.target.value })}
                  className="h-10 border-gray-200 rounded-xl"
                />
              </div>
              <div>
                <Label htmlFor="items">Articles</Label>
                <Input
                  type="text"
                  id="items"
                  value={quoteFormData.items}
                  onChange={(e) => setQuoteFormData({ ...quoteFormData, items: e.target.value })}
                  className="h-10 border-gray-200 rounded-xl"
                />
              </div>
              <div>
                <Label htmlFor="amount">Montant (€)</Label>
                <Input
                  type="text"
                  id="amount"
                  value={quoteFormData.amount}
                  onChange={(e) => setQuoteFormData({ ...quoteFormData, amount: e.target.value })}
                  className="h-10 border-gray-200 rounded-xl"
                />
              </div>
              <div>
                <Label htmlFor="notes">Notes</Label>
                <Input
                  type="text"
                  id="notes"
                  value={quoteFormData.notes}
                  onChange={(e) => setQuoteFormData({ ...quoteFormData, notes: e.target.value })}
                  className="h-10 border-gray-200 rounded-xl"
                />
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <Button type="submit" className="bg-[#2D3194] hover:bg-[#1f2266] text-white h-10 px-6 rounded-xl">
                Créer Devis
              </Button>
            </div>
          </form>
        </div>
      </Modal>

      {/* Invoice Modal */}
      <Modal isOpen={isInvoiceModalOpen} onClose={() => setIsInvoiceModalOpen(false)}>
        <div className="p-6">
          <h2 className="text-xl font-bold text-[#2D3194] mb-4">Nouvelle Facture</h2>
          <form onSubmit={handleInvoiceSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="client">Client</Label>
                <Input
                  type="text"
                  id="client"
                  value={invoiceFormData.client}
                  onChange={(e) => setInvoiceFormData({ ...invoiceFormData, client: e.target.value })}
                  className="h-10 border-gray-200 rounded-xl"
                />
              </div>
              <div>
                <Label htmlFor="date">Date</Label>
                <Input
                  type="date"
                  id="date"
                  value={invoiceFormData.date}
                  onChange={(e) => setInvoiceFormData({ ...invoiceFormData, date: e.target.value })}
                  className="h-10 border-gray-200 rounded-xl"
                />
              </div>
              <div>
                <Label htmlFor="dueDate">Date d'échéance</Label>
                <Input
                  type="date"
                  id="dueDate"
                  value={invoiceFormData.dueDate}
                  onChange={(e) => setInvoiceFormData({ ...invoiceFormData, dueDate: e.target.value })}
                  className="h-10 border-gray-200 rounded-xl"
                />
              </div>
              <div>
                <Label htmlFor="items">Articles</Label>
                <Input
                  type="text"
                  id="items"
                  value={invoiceFormData.items}
                  onChange={(e) => setInvoiceFormData({ ...invoiceFormData, items: e.target.value })}
                  className="h-10 border-gray-200 rounded-xl"
                />
              </div>
              <div>
                <Label htmlFor="amount">Montant (€)</Label>
                <Input
                  type="text"
                  id="amount"
                  value={invoiceFormData.amount}
                  onChange={(e) => setInvoiceFormData({ ...invoiceFormData, amount: e.target.value })}
                  className="h-10 border-gray-200 rounded-xl"
                />
              </div>
              <div>
                <Label htmlFor="notes">Notes</Label>
                <Input
                  type="text"
                  id="notes"
                  value={invoiceFormData.notes}
                  onChange={(e) => setInvoiceFormData({ ...invoiceFormData, notes: e.target.value })}
                  className="h-10 border-gray-200 rounded-xl"
                />
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <Button type="submit" className="bg-[#2D3194] hover:bg-[#1f2266] text-white h-10 px-6 rounded-xl">
                Créer Facture
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}