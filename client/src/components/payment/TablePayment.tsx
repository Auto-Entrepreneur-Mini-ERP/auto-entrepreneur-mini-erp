import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { useEffect } from "react";

function TablePayment() {

    useEffect(()=>{

    }, []);

    const transactions = [
    { id: 1, type: "Paiement", description: "Client - Société XYZ", date: "15/01/2024", amount: "+2,450.00", category: "Vente", status: "Confirmé" },
    { id: 2, type: "Paiement", description: "Client - Logistique Pro", date: "12/01/2024", amount: "+3,800.00", category: "Vente", status: "Confirmé" },
    { id: 3, type: "Paiement", description: "Client - Express Ltd", date: "05/01/2024", amount: "+890.00", category: "Vente", status: "Confirmé" },
  ];

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
                  Nom du Client
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
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr
                  key={transaction.id}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          transaction.type === "Paiement"
                            ? "bg-green-100"
                            : "bg-red-100"
                        }`}
                      >
                        {transaction.type === "Paiement" ? (
                          <ArrowDownRight className="w-5 h-5 text-green-600" />
                        ) : (
                          <ArrowUpRight className="w-5 h-5 text-red-600" />
                        )}
                      </div>
                      <span
                        className={`font-semibold ${
                          transaction.type === "Paiement"
                            ? "text-green-700"
                            : "text-red-700"
                        }`}
                      >
                        {transaction.type}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-900">
                    {transaction.description}
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700">
                      {transaction.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {transaction.date}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`font-bold ${
                        transaction.amount.startsWith("+")
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {transaction.amount}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                        transaction.status === "Confirmé" ||
                        transaction.status === "Payé"
                          ? "bg-green-100 text-green-700"
                          : "bg-orange-100 text-orange-700"
                      }`}
                    >
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default TablePayment;
