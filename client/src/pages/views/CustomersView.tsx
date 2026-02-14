import { CreditCard, Search, TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Modal } from "../../components/ui/modal";
import { useState } from "react";

export function CustomersView() {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isExpenseModalOpen, setIsExpenseModalOpen] = useState(false);
  const [paymentFormData, setPaymentFormData] = useState({
    client: "",
    amount: "",
    date: "",
    method: "Virement",
    reference: "",
    notes: "",
  });
  const [expenseFormData, setExpenseFormData] = useState({
    description: "",
    amount: "",
    date: "",
    category: "Transport",
    vendor: "",
    notes: "",
  });

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Payment data:", paymentFormData);
    setIsPaymentModalOpen(false);
    setPaymentFormData({ client: "", amount: "", date: "", method: "Virement", reference: "", notes: "" });
  };

  const handleExpenseSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Expense data:", expenseFormData);
    setIsExpenseModalOpen(false);
    setExpenseFormData({ description: "", amount: "", date: "", category: "Transport", vendor: "", notes: "" });
  };

  const transactions = [
    { id: 1, type: "Paiement", description: "Client - Société XYZ", date: "15/01/2024", amount: "+2,450.00", category: "Vente", status: "Confirmé" },
    { id: 2, type: "Dépense", description: "Carburant véhicules", date: "14/01/2024", amount: "-680.00", category: "Transport", status: "Payé" },
    { id: 3, type: "Paiement", description: "Client - Logistique Pro", date: "12/01/2024", amount: "+3,800.00", category: "Vente", status: "Confirmé" },
    { id: 4, type: "Dépense", description: "Location entrepôt", date: "10/01/2024", amount: "-5,200.00", category: "Immobilier", status: "Payé" },
    { id: 5, type: "Dépense", description: "Fournitures bureau", date: "08/01/2024", amount: "-245.00", category: "Administratif", status: "En attente" },
    { id: 6, type: "Paiement", description: "Client - Express Ltd", date: "05/01/2024", amount: "+890.00", category: "Vente", status: "Confirmé" },
  ];

  return (
    <div className="py-8">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-[#2D3194]/10 rounded-xl flex items-center justify-center">
            <CreditCard className="w-5 h-5 text-[#2D3194]" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#2D3194]">Paiements & Dépenses</h1>
            <p className="text-gray-600">Suivez vos flux de trésorerie</p>
          </div>
        </div>
      </div>

      {/* Action Bar */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Rechercher une transaction..."
            className="pl-10 h-12 border-gray-200 rounded-xl"
          />
        </div>
        <div className="flex gap-3">
          <Button className="bg-white hover:bg-gray-50 text-green-600 border-2 border-green-600 h-12 px-6 rounded-xl" onClick={() => setIsPaymentModalOpen(true)}>
            <ArrowDownRight className="w-5 h-5 mr-2" />
            Enregistrer Paiement
          </Button>
          <Button className="bg-[#2D3194] hover:bg-[#1f2266] text-white h-12 px-6 rounded-xl" onClick={() => setIsExpenseModalOpen(true)}>
            <ArrowUpRight className="w-5 h-5 mr-2" />
            Ajouter Dépense
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <p className="text-gray-600 text-sm">Paiements reçus</p>
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
          </div>
          <p className="text-3xl font-bold text-green-600">+285K€</p>
          <p className="text-gray-600 text-sm mt-2">Ce mois</p>
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <p className="text-gray-600 text-sm">Dépenses</p>
            <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
              <TrendingDown className="w-5 h-5 text-red-600" />
            </div>
          </div>
          <p className="text-3xl font-bold text-red-600">-128K€</p>
          <p className="text-gray-600 text-sm mt-2">Ce mois</p>
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <p className="text-gray-600 text-sm">Solde net</p>
            <div className="w-10 h-10 bg-[#2D3194]/10 rounded-xl flex items-center justify-center">
              <CreditCard className="w-5 h-5 text-[#2D3194]" />
            </div>
          </div>
          <p className="text-3xl font-bold text-[#2D3194]">157K€</p>
          <p className="text-green-600 text-sm mt-2">+18.2%</p>
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <p className="text-gray-600 text-sm">En attente</p>
            <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
              <CreditCard className="w-5 h-5 text-orange-600" />
            </div>
          </div>
          <p className="text-3xl font-bold text-orange-600">42K€</p>
          <p className="text-gray-600 text-sm mt-2">8 transactions</p>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Type</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Description</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Catégorie</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Date</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Montant (€)</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Statut</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        transaction.type === "Paiement" 
                          ? "bg-green-100" 
                          : "bg-red-100"
                      }`}>
                        {transaction.type === "Paiement" ? (
                          <ArrowDownRight className="w-5 h-5 text-green-600" />
                        ) : (
                          <ArrowUpRight className="w-5 h-5 text-red-600" />
                        )}
                      </div>
                      <span className={`font-semibold ${
                        transaction.type === "Paiement" 
                          ? "text-green-700" 
                          : "text-red-700"
                      }`}>
                        {transaction.type}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-900">{transaction.description}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700">
                      {transaction.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{transaction.date}</td>
                  <td className="px-6 py-4">
                    <span className={`font-bold ${
                      transaction.amount.startsWith("+") 
                        ? "text-green-600" 
                        : "text-red-600"
                    }`}>
                      {transaction.amount}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                      transaction.status === "Confirmé" || transaction.status === "Payé"
                        ? "bg-green-100 text-green-700" 
                        : "bg-orange-100 text-orange-700"
                    }`}>
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Payment Modal */}
      <Modal title="" isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)}>
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Enregistrer un Paiement</h2>
          <form onSubmit={handlePaymentSubmit}>
            <div className="mb-4">
              <Label htmlFor="client">Client</Label>
              <Input
                type="text"
                id="client"
                value={paymentFormData.client}
                onChange={(e) => setPaymentFormData({ ...paymentFormData, client: e.target.value })}
                className="w-full h-12 border-gray-200 rounded-xl"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="amount">Montant (€)</Label>
              <Input
                type="text"
                id="amount"
                value={paymentFormData.amount}
                onChange={(e) => setPaymentFormData({ ...paymentFormData, amount: e.target.value })}
                className="w-full h-12 border-gray-200 rounded-xl"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="date">Date</Label>
              <Input
                type="date"
                id="date"
                value={paymentFormData.date}
                onChange={(e) => setPaymentFormData({ ...paymentFormData, date: e.target.value })}
                className="w-full h-12 border-gray-200 rounded-xl"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="method">Méthode de paiement</Label>
              <select
                id="method"
                value={paymentFormData.method}
                onChange={(e) => setPaymentFormData({ ...paymentFormData, method: e.target.value })}
                className="w-full h-12 border-gray-200 rounded-xl"
              >
                <option value="Virement">Virement</option>
                <option value="Chèque">Chèque</option>
                <option value="Espèces">Espèces</option>
              </select>
            </div>
            <div className="mb-4">
              <Label htmlFor="reference">Référence</Label>
              <Input
                type="text"
                id="reference"
                value={paymentFormData.reference}
                onChange={(e) => setPaymentFormData({ ...paymentFormData, reference: e.target.value })}
                className="w-full h-12 border-gray-200 rounded-xl"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="notes">Notes</Label>
              <Input
                type="text"
                id="notes"
                value={paymentFormData.notes}
                onChange={(e) => setPaymentFormData({ ...paymentFormData, notes: e.target.value })}
                className="w-full h-12 border-gray-200 rounded-xl"
              />
            </div>
            <Button type="submit" className="bg-[#2D3194] hover:bg-[#1f2266] text-white h-12 px-6 rounded-xl">
              Enregistrer
            </Button>
          </form>
        </div>
      </Modal>

      {/* Expense Modal */}
      <Modal title="" isOpen={isExpenseModalOpen} onClose={() => setIsExpenseModalOpen(false)}>
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Ajouter une Dépense</h2>
          <form onSubmit={handleExpenseSubmit}>
            <div className="mb-4">
              <Label htmlFor="description">Description</Label>
              <Input
                type="text"
                id="description"
                value={expenseFormData.description}
                onChange={(e) => setExpenseFormData({ ...expenseFormData, description: e.target.value })}
                className="w-full h-12 border-gray-200 rounded-xl"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="amount">Montant (€)</Label>
              <Input
                type="text"
                id="amount"
                value={expenseFormData.amount}
                onChange={(e) => setExpenseFormData({ ...expenseFormData, amount: e.target.value })}
                className="w-full h-12 border-gray-200 rounded-xl"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="date">Date</Label>
              <Input
                type="date"
                id="date"
                value={expenseFormData.date}
                onChange={(e) => setExpenseFormData({ ...expenseFormData, date: e.target.value })}
                className="w-full h-12 border-gray-200 rounded-xl"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="category">Catégorie</Label>
              <select
                id="category"
                value={expenseFormData.category}
                onChange={(e) => setExpenseFormData({ ...expenseFormData, category: e.target.value })}
                className="w-full h-12 border-gray-200 rounded-xl"
              >
                <option value="Transport">Transport</option>
                <option value="Immobilier">Immobilier</option>
                <option value="Administratif">Administratif</option>
                <option value="Vente">Vente</option>
              </select>
            </div>
            <div className="mb-4">
              <Label htmlFor="vendor">Fournisseur</Label>
              <Input
                type="text"
                id="vendor"
                value={expenseFormData.vendor}
                onChange={(e) => setExpenseFormData({ ...expenseFormData, vendor: e.target.value })}
                className="w-full h-12 border-gray-200 rounded-xl"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="notes">Notes</Label>
              <Input
                type="text"
                id="notes"
                value={expenseFormData.notes}
                onChange={(e) => setExpenseFormData({ ...expenseFormData, notes: e.target.value })}
                className="w-full h-12 border-gray-200 rounded-xl"
              />
            </div>
            <Button type="submit" className="bg-[#2D3194] hover:bg-[#1f2266] text-white h-12 px-6 rounded-xl">
              Enregistrer
            </Button>
          </form>
        </div>
      </Modal>
    </div>
  );
}