import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Modal } from "../../components/ui/modal";
import type { PaymentCreateInput } from "../../types/payment.types";
import { type Invoice } from "../../types/invoice.types";
import { usePayment } from "../../hooks/usePayment";
import { CircleX } from "lucide-react";

type ModalCreatePaymentProps = {
  setIsPaymentModalOpen: (isOpen: boolean) => void;
  isPaymentModalOpen: boolean;
}

function ModalCreatePayment({
  setIsPaymentModalOpen,
  isPaymentModalOpen
}: ModalCreatePaymentProps) {


  const { errors, getInvoicesByNumber, createPayment } = usePayment();

  const [paymentFormData, setPaymentFormData] = useState<PaymentCreateInput>();

  const [invoiceSearch, setInvoiceSearch] = useState<Invoice[]>([]);
  const [showInvoiceSearch, setShowInvoiceSearch] = useState<boolean>(false);

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("paymentData", paymentFormData);
    
    await createPayment(paymentFormData as PaymentCreateInput);
    if (!errors) {
      setIsPaymentModalOpen(false);
      setPaymentFormData(undefined);
      window.location.reload();
    }
  };

  const handleInvoiceNumberChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentFormData({
      ...paymentFormData,
      invoiceNumber: e.target.value,
    } as PaymentCreateInput)
    // api call
    const invoiceNum = paymentFormData?.invoiceNumber;
    const res = await getInvoicesByNumber(invoiceNum as string);    
    if (res.length > 0) {
      setInvoiceSearch(res);
      setShowInvoiceSearch(true);
    }
  };

  const handleSelectedInvoiceNumber = (invoiceId: string, invoiceNumber: string) => {
    setPaymentFormData({
      ...paymentFormData,
      invoiceNumber,
      invoiceId,
    } as PaymentCreateInput)
    setShowInvoiceSearch(false);
  };


  return (
    <>
      <Modal
        title="Enregistrer un Paiement"
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
      >
        <div className="p-6">
          {/* {errors && <p className="text-red-500 mb-4 text-center">{errors}</p>} */}
          <form onSubmit={handlePaymentSubmit}>
            <div className="mb-4 relative">
              <Label className="mb-2" htmlFor="client">Numero du Facture</Label>
              <Input
                type="text"
                id="invoiceNumber"
                value={paymentFormData?.invoiceNumber}
                onChange={(e) => handleInvoiceNumberChange(e)}
                className="w-full h-12 border-gray-200 rounded-xl"
              />
              <CircleX className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 z-10 mt-3" onClick={() => setShowInvoiceSearch(false)} />
              {showInvoiceSearch && (
                <div className="absolute w-full border border-gray-200 rounded-xl mt-1 max-h-40 overflow-y-auto z-10 bg-white">
                  {invoiceSearch.length > 0 && invoiceSearch.map((invoice) => (
                    <div onClick={() => handleSelectedInvoiceNumber(invoice.id, invoice.invoiceNumber)} key={invoice.id} className="p-2 hover:bg-gray-100 cursor-pointer border-b">
                      {invoice.invoiceNumber}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="mb-4">
              <Label className="mb-2" htmlFor="amount">Montant Payee (DHs)</Label>
              <Input
                type="number"
                id="amount"
                value={paymentFormData?.amount}
                onChange={(e) =>
                  setPaymentFormData({
                    ...paymentFormData,
                    amount: parseFloat(e.target.value),
                  } as PaymentCreateInput)
                }
                className="w-full h-12 border-gray-200 rounded-xl"
              />
            </div>
            <div className="mb-4">
              <Label className="mb-2" htmlFor="date">Date de paiement</Label>
              <Input
                type="date"
                id="date"
                // value={
                //     new Date(paymentFormData?.paymentDate || new Date())
                //       .toISOString()
                //       .split("T")[0] || ""
                //   }
                onChange={(e) =>
                  setPaymentFormData({
                    ...paymentFormData,
                    paymentDate: new Date(e.target.value),
                  } as PaymentCreateInput)
                }
                className="w-full h-12 border-gray-200 rounded-xl"
              />
            </div>

            <div className="mb-4">
              <Label className="mb-2" htmlFor="method">Méthode de paiement</Label>
              <select
                id="paymentMethod"
                value={paymentFormData?.paymentMethod}
                onChange={(e) =>
                  setPaymentFormData({
                    ...paymentFormData,
                    paymentMethod: e.target.value,
                  } as PaymentCreateInput)
                }
                className="w-full h-12 border border-gray-500 rounded-xl bg-input-background"
              >
                <option value="CASH">Espèces</option>
                <option value="BANK_TRANSFER">Virement</option>
                <option value="CHECK">Chèque</option>
                <option value="OTHER">Autre</option>
              </select>
            </div>

            <div className="mb-4">
              <Label className="mb-2" htmlFor="reference">Numero du Transaction</Label>
              <Input
                type="number"
                id="reference"
                value={paymentFormData?.transactionNumber}
                onChange={(e) =>
                  setPaymentFormData({
                    ...paymentFormData,
                    transactionNumber: e.target.value,
                  } as PaymentCreateInput)
                }
                className="w-full h-12 border-gray-200 rounded-xl"
              />
            </div>
            <div className="mb-4">
              <Label className="mb-2" htmlFor="notes">Notes</Label>
              <Input
                type="text"
                id="notes"
                value={paymentFormData?.notes}
                onChange={(e) =>
                  setPaymentFormData({
                    ...paymentFormData,
                    notes: e.target.value,
                  } as PaymentCreateInput)
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
