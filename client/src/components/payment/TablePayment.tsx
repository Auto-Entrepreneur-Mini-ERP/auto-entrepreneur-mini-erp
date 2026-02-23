import { Download, Eye, Handshake } from "lucide-react";
import { useState } from "react";
import { usePayment } from "../../hooks/usePayment";
import ModalViewPayment from "./ModalViewPayment";
import type { Payment } from "../../types/payment.types";

type TablePaymentProps = {
  payments: Payment[]
}

function TablePayment({
  payments,
}: TablePaymentProps) {

  const { errors, onePayment, getOnePayment, reconsiliatePayment } = usePayment();

  const [isViewPaymentModalOpen, setIsViewPaymentModalOpen] = useState(false);
  // const [isEditPaymentModalOpen, setIsEditPaymentModalOpen] = useState(false);

  const handleViewPayment = (id: string) => {
    getOnePayment(id);
    setIsViewPaymentModalOpen(true);
  };

  const handleReconsiliate = (paymentId: string) => {
    reconsiliatePayment(paymentId);
    if(!errors){
      window.location.reload();
    }
  };


  // const handleEditPayment = (id: string) => {
  //   getOnePayment(id);
  //   setIsEditPaymentModalOpen(true)
  // };

  return (
    <>
      {/* Table */}
      <div className=" w-full bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                  Referance
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                  N° Facture
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                  Date de Paiement
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                  Methode de Paiement
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                  Montant (DHs)
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                  Statut
                </th>
                <th className="text-center px-6 py-4 text-sm font-semibold text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {payments?.length > 0 && payments?.map((transaction: Payment) => (
                <tr
                  key={transaction.id}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <span className="font-semibold text-[#2D3194]">
                      {transaction.reference}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-900">
                    {transaction.Invoice.invoiceNumber}
                  </td>
                  <td className="px-6 py-4">
                    {transaction.paymentDate.toString().split("T")[0]}
                  </td>
                  <td className="px-6 py-4 text-gray-600 text-center">
                    <span className="font-semibold text-green-700">
                      {transaction.paymentMethod}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    {transaction.amount} DHs
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold 
                        ${transaction.isReconciled
                          ? "bg-green-100 text-green-700"
                          : "bg-orange-100 text-orange-700"
                        }`}
                    >
                      {transaction.isReconciled ? "Reconsilliee" : "Non Reconsilliee"}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => handleViewPayment(transaction.id)}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        title="Voir"
                      >
                        <Eye className="w-4 h-4 text-gray-600" />
                      </button>
                      {/* <button
                        className="p-2 hover:bg-blue-50 rounded-lg transition-colors"
                        title="Modifier"
                      >
                        <Pen
                          onClick={() => handleEditPayment(transaction.id)}
                          className="w-4 h-4 text-blue-600"
                        />
                      </button> */}
                      <button
                      onClick={() => handleReconsiliate(transaction.id)}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        title="Rapprocher"
                      >
                        <Handshake className="w-4 h-4 text-gray-600" />
                      </button>
                      <button
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        title="Télécharger"
                      >
                        <Download className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {payments?.length === 0 && (
            <div className="p-3 text-center text-gray-500">
              Aucune Paiement trouvée.
            </div>
          )}
        </div>
      </div>

      <ModalViewPayment payment={onePayment as Payment} isPaymentModalOpen={isViewPaymentModalOpen} setIsPaymentModalOpen={setIsViewPaymentModalOpen}/>
    </>
  );
}

export default TablePayment;
