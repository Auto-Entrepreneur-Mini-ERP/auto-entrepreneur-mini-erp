import { Download, Eye, Pen } from "lucide-react"

type DocumentProps = {
    documents: {
        id: string;
        type: string;
        client: string;
        date: string;
        amount: string;
        status: string;
    }[];
};

function TableQuote({ documents }: DocumentProps) {
    return (
        <>
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
                                        <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${doc.type === "Devis"
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
                                        <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${doc.status === "Payée"
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
                                            <button className="p-2 hover:bg-blue-50 rounded-lg transition-colors" title="Modifier">
                                                <Pen className="w-4 h-4 text-blue-600" />
                                            </button>
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
        </>
    )
}

export default TableQuote