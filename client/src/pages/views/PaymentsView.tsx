import { CreditCard, Search, ArrowDownRight } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Modal } from "../../components/ui/modal";
import { useState } from "react";
import TablePayment from "../../components/payment/TablePayment";

export function PaymentsView() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    client: "",
    amount: "",
    date: "",
    method: "Virement",
    reference: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Payment data:", formData);
    setIsModalOpen(false);
    setFormData({ client: "", amount: "", date: "", method: "Virement", reference: "", notes: "" });
  };

  return (
    <div className="py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-[#2D3194]/10 rounded-xl flex items-center justify-center">
            <CreditCard className="w-5 h-5 text-[#2D3194]" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#2D3194]">Paiements</h1>
            <p className="text-gray-600">Suivez les paiements reçus de vos clients</p>
          </div>
        </div>
      </div>

      {/* Action Bar */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Rechercher un paiement..."
            className="pl-10 h-12 border-gray-200 rounded-xl"
          />
        </div>
        <Button
          className="bg-green-600 hover:bg-green-700 text-white h-12 px-6 rounded-xl"
          onClick={() => setIsModalOpen(true)}
        >
          <ArrowDownRight className="w-5 h-5 mr-2" />
          Enregistrer Paiement
        </Button>
      </div>

      {/* Table */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm">
        <TablePayment />
      </div>

      {/* Modal */}
      <Modal title="Enregistrer un Paiement" isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="client">Client</Label>
              <Input
                type="text"
                id="client"
                value={formData.client}
                onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                className="w-full h-12 border-gray-200 rounded-xl mt-1"
              />
            </div>
            <div>
              <Label htmlFor="amount">Montant (MAD)</Label>
              <Input
                type="number"
                id="amount"
                value={formData.amount}
                onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                className="w-full h-12 border-gray-200 rounded-xl mt-1"
              />
            </div>
            <div>
              <Label htmlFor="date">Date</Label>
              <Input
                type="date"
                id="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full h-12 border-gray-200 rounded-xl mt-1"
              />
            </div>
            <div>
              <Label htmlFor="method">Méthode de paiement</Label>
              <select
                id="method"
                value={formData.method}
                onChange={(e) => setFormData({ ...formData, method: e.target.value })}
                className="w-full h-12 px-3 border border-gray-200 rounded-xl mt-1 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#2D3194]"
              >
                <option value="Virement">Virement</option>
                <option value="Chèque">Chèque</option>
                <option value="Espèces">Espèces</option>
              </select>
            </div>
            <div>
              <Label htmlFor="reference">Référence</Label>
              <Input
                type="text"
                id="reference"
                value={formData.reference}
                onChange={(e) => setFormData({ ...formData, reference: e.target.value })}
                className="w-full h-12 border-gray-200 rounded-xl mt-1"
              />
            </div>
            <div>
              <Label htmlFor="notes">Notes</Label>
              <Input
                type="text"
                id="notes"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full h-12 border-gray-200 rounded-xl mt-1"
              />
            </div>
            <div className="flex gap-3 pt-2">
              <Button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="flex-1 bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-200 h-12 rounded-xl"
              >
                Annuler
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-[#2D3194] hover:bg-[#1f2266] text-white h-12 rounded-xl"
              >
                Enregistrer
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}