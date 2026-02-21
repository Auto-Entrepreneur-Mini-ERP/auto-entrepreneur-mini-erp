import { CreditCard, Search, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Modal } from "../../components/ui/modal";
import { useState } from "react";

import { Card, CardContent } from "../../components/ui/card";
import { ChevronDownIcon } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../components/ui/collapsible"
import TablePayment from "../../components/payment/TablePayment";
import ModalCreatePayment from "../../components/payment/ModalCreatePayment";

export function PaymentsExpensesView() {
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

  const [openPayments, setOpenPayments] = useState(true);
  // const [openDepences, setOpenDepences] = useState(true);

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
            Enregistrer un Paiement
          </Button>
          <Button className="bg-[#2D3194] hover:bg-[#1f2266] text-white h-12 px-6 rounded-xl" onClick={() => setIsExpenseModalOpen(true)}>
            <ArrowUpRight className="w-5 h-5 mr-2" />
            Ajouter une Dépense
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
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
      </div> */}

      {/* Table Payments */}
      <Card className="mx-auto w-full max-w-sm mt-4">
        <CardContent>
          <Collapsible open={openPayments} onOpenChange={setOpenPayments} className="data-[state=open]:bg-muted rounded-md w-full">
            <CollapsibleTrigger className="my-2" asChild>
              <Button variant="ghost" className="group w-full text-md hover:bg-none">
                Paiements
                <ChevronDownIcon className="ml-auto group-data-[state=open]:rotate-180" />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="flex flex-col items-center gap-2 mb-2 mt-2 w-full">
              <TablePayment  />
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
      </Card>

      {/* Table Depense */}
      <Card className="mx-auto w-full max-w-sm mt-4">
        <CardContent>
          <Collapsible open={openPayments} onOpenChange={setOpenPayments} className="data-[state=open]:bg-muted rounded-md w-full">
            <CollapsibleTrigger className="my-2" asChild>
              <Button variant="ghost" className="group w-full text-md hover:bg-none">
                Depenses
                <ChevronDownIcon className="ml-auto group-data-[state=open]:rotate-180" />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="flex flex-col items-center gap-2 mb-2 mt-2 w-full">
              Depenses table
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
      </Card>

      {/* Payment Modal */}
      <ModalCreatePayment isPaymentModalOpen={isPaymentModalOpen} setIsPaymentModalOpen={setIsPaymentModalOpen} />

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