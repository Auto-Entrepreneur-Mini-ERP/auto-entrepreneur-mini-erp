import { Download, Eye, Pen, ThumbsDown, ThumbsUp } from "lucide-react";
import { useQuote } from "../../hooks/useQuote";
import { useEffect, useState } from "react";
import ModalViewQuote from "./ModalViewQuote";
import ModalEditQuote from "./ModalEditeQuote";
import type { Quote } from "../../types/quote.types";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

function TableQuote() {
    const { quotes, quote, quotesCount, fetchquotes, getOneQuote, acceptQuote, refuseQuote } = useQuote();
    const [page, setPage] = useState<number>(1);
    const limit = 10;

    const [isViewQuoteModalOpen, setIsViewQuoteModalOpen] = useState(false);
    const [isEditQuoteModalOpen, setIsEditQuoteModalOpen] = useState(false);

    const handlePageChange = (newPage: number) => {
        setPage(newPage);
        fetchquotes(newPage, limit);
    }

    useEffect(() => {
        fetchquotes(page, limit);
    }, []);

    const handleViewQuote = async (quoteId: string) => {
        await getOneQuote(quoteId);
        setIsViewQuoteModalOpen(true);
    };

    const handleEditQuote = async (quoteId: string) => {
        await getOneQuote(quoteId);
        setIsEditQuoteModalOpen(true);
    };

    const handleAcceptQuote = async (quoteId: string) => {
        await acceptQuote(quoteId);
        window.location.reload();
    }

    const handleRefuseQuote = async (quoteId: string) => {
        await refuseQuote(quoteId);
        window.location.reload();
    }

    return (
        <>
            <div className="w-full bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100">
                                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Numéro</th>
                                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Type</th>
                                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Client</th>
                                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Date du Devis</th>
                                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Valid Jusqu'a</th>
                                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Montant (DHs)</th>
                                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Statut</th>
                                <th className="text-center px-6 py-4 text-sm font-semibold text-gray-700">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {quotes.length > 0 &&
                                quotes.map((doc) => (
                                    <tr
                                        key={doc.id}
                                        className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                                    >
                                        <td className="px-6 py-4">
                                            <span className="font-semibold text-[#2D3194]">{doc.quoteNumber}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700`}>Devis</span>
                                        </td>
                                        <td className="px-6 py-4 text-gray-900">{doc.customer?.user?.firstName} {doc.customer?.user?.lastName}</td>
                                        <td className="px-6 py-4 text-gray-600">{doc.issueDate.toString().split("T")[0]}</td>
                                        <td className="px-6 py-4 text-gray-600">{doc.validityDate.toString().split("T")[0]}</td>
                                        <td className="px-6 py-4 font-semibold text-right text-gray-900">{doc.totalAmount}</td>
                                        <td className="px-6 py-4">
                                            <span
                                                className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold 
                                            ${doc.status.toString() === "ACCEPTED"
                                                        ? "bg-green-100 text-green-700"
                                                        : doc.status.toString() === "DRAFT"
                                                            ? "bg-orange-100 text-orange-700"
                                                            : doc.status.toString() === "REJECTED"
                                                                ? "bg-red-100 text-red-700"
                                                                : "bg-blue-100 text-blue-700"
                                                    }`}>
                                                {doc.status.toString()}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center justify-end gap-2">
                                                <button
                                                    onClick={() => handleAcceptQuote(doc.id)}
                                                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                                    title="Accepter Devis"
                                                >
                                                    <ThumbsUp className="w-4 h-4 text-gray-600" />
                                                </button>
                                                <button
                                                    onClick={() => handleRefuseQuote(doc.id)}
                                                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                                    title="Reffuser Devis"
                                                >
                                                    <ThumbsDown className="w-4 h-4 text-gray-600" />
                                                </button>
                                                <button
                                                    onClick={() => handleViewQuote(doc.id)}
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
                                                        onClick={() => handleEditQuote(doc.id)}
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

                    {quotes.length === 0 && (
                        <div className="p-3 text-center text-gray-500">Aucun devis trouvé.</div>
                    )}
                </div>
            </div>

            {quotesCount > limit && (
                <div className="mt-6 flex justify-center">
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious 
                                size='default'
                                    onClick={() => page > 1 && handlePageChange(page - 1)}
                                    className={page === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                                    
                                />
                            </PaginationItem>

                            {Array.from({ length: Math.ceil(quotesCount / limit) }, (_, i) => i + 1).map((pageNum) => (
                                <PaginationItem key={pageNum}>
                                    <PaginationLink
                                    size='default'
                                        onClick={() => handlePageChange(pageNum)}
                                        isActive={page === pageNum}
                                        
                                        className="cursor-pointer"
                                    >
                                        {pageNum}
                                    </PaginationLink>
                                </PaginationItem>
                            ))}

                            <PaginationItem>
                                <PaginationNext 
                                size='default'
                                    onClick={() => page < Math.ceil(quotesCount / limit) && handlePageChange(page + 1)}
                                    className={page === Math.ceil(quotesCount / limit) ? "pointer-events-none opacity-50" : "cursor-pointer"}
                                    
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            )}

            <ModalViewQuote
                quote={quote as Quote}
                isQuoteModalOpen={isViewQuoteModalOpen}
                setIsQuoteModalOpen={setIsViewQuoteModalOpen}
            />
            <ModalEditQuote
                quote={quote as Quote}
                isQuoteModalOpen={isEditQuoteModalOpen}
                setIsQuoteModalOpen={setIsEditQuoteModalOpen}
            />
        </>
    );
}

export default TableQuote;