import { Download, Pen, Trash2 } from "lucide-react";
import type { Document } from "../../types/document.types";
import { useState } from "react";
import ModalEditDocument from "./ModalEditDocument";
import { useDocument } from "../../hooks/useDocument";
import { Link } from "react-router";

type TableDocument = {
  documents: Document[];
};

function TableDocument({ documents }: TableDocument) {
  const { errors, document, getOneDocument, deleteDocument } = useDocument();

  const [isEditDocumentModalOpen, setIsEditDocumentModalOpen] =
    useState<boolean>(false);

  const handleEditDocument = async (documentId: string) => {
    getOneDocument(documentId);
    setIsEditDocumentModalOpen(true);
  };

  const handleDeleteDocument = async (documentId: string) => {
    deleteDocument(documentId);
    if (!errors) {
      window.location.reload();
    }
  };

  const handleDownloadDocument = async (documentId: string) => {
    getOneDocument(documentId);
  };

  return (
    <>
      {/* Table */}
      <div className=" w-full bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                  Order
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                  Nom du Document
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                  Type
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                  Categorie
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                  Date de Creation
                </th>
                <th className="text-center px-6 py-4 text-sm font-semibold text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {documents &&
                documents?.map((doc: Document) => (
                  <tr
                    key={doc.id}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <span className="font-semibold text-[#2D3194]">
                        {documents.indexOf(doc)+1}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-semibold text-[#2D3194]">
                        {doc.name}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-900">
                      {doc.type.split("/")[1].toLocaleUpperCase()}
                    </td>
                    <td className="px-6 py-4">{doc.category}</td>
                    <td className="px-6 py-4 text-gray-600">
                      {doc.uploadDate?.toString().split("T")[0]}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          className="p-2 hover:bg-blue-50 rounded-lg transition-colors"
                          title="Modifier"
                        >
                          <Pen
                            onClick={() => handleEditDocument(doc.id)}
                            className="w-4 h-4 text-blue-600"
                          />
                        </button>

                        <button
                          onClick={() => handleDownloadDocument(doc.id)}
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                          title="Télécharger"
                        >
                          <Link to={doc.fileUrl as string}>
                            <Download className="w-4 h-4 text-gray-600" />
                          </Link>
                        </button>
                        <button
                          onClick={() => handleDeleteDocument(doc.id)}
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                          title="Voir"
                        >
                          <Trash2 className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          {documents?.length === 0 && (
            <div className="p-3 text-center text-gray-500">
              Aucune Document trouvée.
            </div>
          )}
        </div>
      </div>

      <ModalEditDocument
        document={document as Document}
        isDocumentModalOpen={isEditDocumentModalOpen}
        setIsDocumentModalOpen={setIsEditDocumentModalOpen}
      />
    </>
  );
}

export default TableDocument;
