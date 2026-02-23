import { Download, Eye, Pen } from "lucide-react";
import { useInvoice } from "../../hooks/useInvoice";
import { useEffect, useState } from "react";
import ModalViewInvoice from "./ModalViewInvoice";
import ModalEditInvoice from "./ModalEditeInvoice";
import type { Invoice } from "../../types/invoice.types";


// ${doc.status === "Payée"
//                       ? "bg-green-100 text-green-700"
//                       : doc.status === "En attente"
//                         ? "bg-orange-100 text-orange-700"
//                         : doc.status === "Accepté"
//                           ? "bg-blue-100 text-blue-700"
//                           : "bg-red-100 text-red-700"
//                       }

function TableInvoice() {
  const { invoices, invoice, fetchInvoices, getOneInvoice } = useInvoice();
  // const [page, setPage] = useState<number>(1);

  const [isViewInvoiceModalOpen, setIsViewInvoiceModalOpen] = useState(false);
  const [isEditInvoiceModalOpen, setIsEditInvoiceModalOpen] = useState(false);

  // const handlePageChange = (newPage: number) => {
  //   setPage(newPage);
  //   fetchInvoices(newPage, 5);
  // }

  useEffect(() => {
    fetchInvoices(1, 10);
  }, []);

  const handleViewInvoice = async (invoiceId: string) => {
    await getOneInvoice(invoiceId);
    setIsViewInvoiceModalOpen(true);
  };

  const handleEditInvoice = async (invoiceId: string) => {
    await getOneInvoice(invoiceId);
    setIsEditInvoiceModalOpen(true);
  };

  return (
    <>
      {/* Table Invoice */}
      <div className="w-full bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                  Numéro
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                  Type
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                  Client
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                  Date
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
              {invoices.length > 0 &&
                invoices.map((doc) => (
                  <tr
                    key={doc.invoiceNumber}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <span className="font-semibold text-[#2D3194]">
                        {doc.invoiceNumber}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-700`}
                      >
                        Facture
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-900">
                      {doc.customer.user.firstName} {doc.customer.user.lastName}
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {doc.issueDate.toString().split("T")[0]}
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      {doc.totalAmount}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold `}
                      >
                        {doc.status.toString()}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => handleViewInvoice(doc.id)}
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                          title="Voir"
                        >
                          <Eye className="w-4 h-4 text-gray-600" />
                        </button>
                        <button
                          className="p-2 hover:bg-blue-50 rounded-lg transition-colors"
                          title="Modifier"
                        >
                          <Pen
                            onClick={() => handleEditInvoice(doc.id)}
                            className="w-4 h-4 text-blue-600"
                          />
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

          {invoices.length === 0 && (
            <div className="p-3 text-center text-gray-500">
              Aucune facture trouvée.
            </div>
          )}
        </div>
      </div>
      <ModalViewInvoice
        invoice={invoice as Invoice}
        isInvoiceModalOpen={isViewInvoiceModalOpen}
        setIsInvoiceModalOpen={setIsViewInvoiceModalOpen}
      />
      <ModalEditInvoice
        invoice={invoice as Invoice}
        isInvoiceModalOpen={isEditInvoiceModalOpen}
        setIsInvoiceModalOpen={setIsEditInvoiceModalOpen}
      />
    </>
  );
}

export default TableInvoice;
