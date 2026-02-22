import { ArrowDownRight, File, RefreshCw, Search } from "lucide-react"
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { useEffect, useState } from "react";
import ModalCreateDocument from "../../components/document/ModalCreateDocument";
import TableDocument from "../../components/document/TableDocument";
import { useDocument } from "../../hooks/useDocument";
import type { Document } from "../../types/document.types";

export function DocumentsView() {
    const { documents, fetchDocuments } = useDocument();

    const [isDocumentModalOpen, setIsDocumentModalOpen] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
      fetchDocuments();
    }, []);

    const handleDocumentSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
    }

    return (
        <div className="py-8">
            {/* Header */}
            <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-[#2D3194]/10 rounded-xl flex items-center justify-center">
                        <File className="w-5 h-5 text-[#2D3194]" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-[#2D3194]">Documents</h1>
                        <p className="text-gray-600">Gerer vos documents personelle</p>
                    </div>
                </div>
            </div>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                        type="text"
                        placeholder="Rechercher un document..."
                        className="pl-10 h-12 border-gray-200 rounded-xl"
                        onChange={e => handleDocumentSearch(e)}
                    />
                </div>
                <div className="flex gap-3">
                    <button
                        onClick={() => { window.location.reload(); setLoading(true); }}
                        className="h-12 px-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors flex items-center gap-2 text-gray-600"
                    >
                        <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
                        <span className="hidden sm:inline text-sm">Actualiser</span>
                    </button>
                    <Button className="bg-[#2D3194] hover:bg-[#1f2266] text-white h-12 px-6 rounded-xl" onClick={() => setIsDocumentModalOpen(true)}>
                        <ArrowDownRight className="w-5 h-5 mr-2" />
                        Ajouter un Document
                    </Button>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm">
                <TableDocument documents={documents as Document[]} />
            </div>

            {/* Document Modal */}
            <ModalCreateDocument isPaymentModalOpen={isDocumentModalOpen} setIsPaymentModalOpen={setIsDocumentModalOpen} />
        </div>
    )
}
