import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Modal } from "../../components/ui/modal";

type ModalCreatePaymentProps = {
  setIsPaymentModalOpen: ()=>{} void
}

function ModalCreatePayment({}: ModalCreatePaymentProps) {

  const handlePaymentSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log("Payment data:", paymentFormData);
      setIsPaymentModalOpen(false);
      setPaymentFormData({ client: "", amount: "", date: "", method: "Virement", reference: "", notes: "" });
    };

  return (
    <>
      <Modal
        title=""
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
      >
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Enregistrer un Paiement
          </h2>
          <form onSubmit={handlePaymentSubmit}>
            <div className="mb-4">
              <Label htmlFor="client">Client</Label>
              <Input
                type="text"
                id="client"
                value={paymentFormData.client}
                onChange={(e) =>
                  setPaymentFormData({
                    ...paymentFormData,
                    client: e.target.value,
                  })
                }
                className="w-full h-12 border-gray-200 rounded-xl"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="amount">Montant (€)</Label>
              <Input
                type="text"
                id="amount"
                value={paymentFormData.amount}
                onChange={(e) =>
                  setPaymentFormData({
                    ...paymentFormData,
                    amount: e.target.value,
                  })
                }
                className="w-full h-12 border-gray-200 rounded-xl"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="date">Date</Label>
              <Input
                type="date"
                id="date"
                value={paymentFormData.date}
                onChange={(e) =>
                  setPaymentFormData({
                    ...paymentFormData,
                    date: e.target.value,
                  })
                }
                className="w-full h-12 border-gray-200 rounded-xl"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="method">Méthode de paiement</Label>
              <select
                id="method"
                value={paymentFormData.method}
                onChange={(e) =>
                  setPaymentFormData({
                    ...paymentFormData,
                    method: e.target.value,
                  })
                }
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
                onChange={(e) =>
                  setPaymentFormData({
                    ...paymentFormData,
                    reference: e.target.value,
                  })
                }
                className="w-full h-12 border-gray-200 rounded-xl"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="notes">Notes</Label>
              <Input
                type="text"
                id="notes"
                value={paymentFormData.notes}
                onChange={(e) =>
                  setPaymentFormData({
                    ...paymentFormData,
                    notes: e.target.value,
                  })
                }
                className="w-full h-12 border-gray-200 rounded-xl"
              />
            </div>
            <Button
              type="submit"
              className="bg-[#2D3194] hover:bg-[#1f2266] text-white h-12 px-6 rounded-xl"
            >
              Enregistrer
            </Button>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default ModalCreatePayment;
