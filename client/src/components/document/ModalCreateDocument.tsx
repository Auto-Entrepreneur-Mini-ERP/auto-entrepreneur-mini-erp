import { Modal } from "../ui/modal"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { useState } from "react"
import { type DocumentCreateData } from "../../types/document.types"
import { useDocument } from "../../hooks/useDocument"
import { Label } from "../ui/label"

type ModalCreateDocumentProps = {
  isDocumentModalOpen: boolean,
  setIsDocumentModalOpen: (isOpen: boolean) => void
}

function ModalCreateDocument({
  isDocumentModalOpen,
  setIsDocumentModalOpen
}: ModalCreateDocumentProps) {
  const { errors, createDocument } = useDocument();

  const [documentFormData, setDocumentFormData] = useState<DocumentCreateData>();

  const handleDocumentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", documentFormData?.name as string);
    formData.append("category", documentFormData?.category as string);
    formData.append("description", documentFormData?.description as string);

    if (documentFormData?.document) {
      formData.append("document", documentFormData.document);
    }

    await createDocument(formData as FormData);
    
    if (!errors) {
      setIsDocumentModalOpen(false);
      window.location.reload();
    }
  }

  return (
    <>
      <Modal
        title="Enregistrer un Document"
        isOpen={isDocumentModalOpen}
        onClose={() => setIsDocumentModalOpen(false)}
      >
        <div className="p-6">
          {errors && <p className="text-red-500 mb-4 text-center">{errors}</p>}
          <form onSubmit={handleDocumentSubmit}>
            <div className="mb-4">
              <Label htmlFor="docName" className="mb-2">Nom du Document</Label>
              <Input
                type="text"
                id="docName"
                value={documentFormData?.name}
                onChange={(e) =>
                  setDocumentFormData({
                    ...documentFormData,
                    name: e.target.value,
                  } as DocumentCreateData)
                }
                className="w-full h-12 border-gray-200 rounded-xl"
              />
            </div>

            <div className="mb-4">
              <Label htmlFor="category" className="mb-2">Categorie</Label>
              <Input
                type="text"
                id="category"
                value={documentFormData?.category}
                onChange={(e) =>
                  setDocumentFormData({
                    ...documentFormData,
                    category: e.target.value,
                  } as DocumentCreateData)
                }
                className="w-full h-12 border-gray-200 rounded-xl"
              />
            </div>

            <div className="mb-4">
              <Label htmlFor="description" className="mb-2">Description</Label>
              <Input
                type="text"
                id="description"
                value={documentFormData?.description}
                onChange={(e) =>
                  setDocumentFormData({
                    ...documentFormData,
                    description: e.target.value,
                  } as DocumentCreateData)
                }
                className="w-full h-12 border-gray-200 rounded-xl"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="document" className="flex items-center justify-center h-12 border rounded-xl cursor-pointer hover:bg-gray-50">
                Choisir un fichier
              </Label>
              <Input
                id="document"
                type="file"
                className="hidden"
                onChange={(e) =>
                  setDocumentFormData({
                    ...documentFormData,
                    document: e.target.files?.[0] || null,
                  } as DocumentCreateData)
                }
              />
              {/* <X className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 z-10" /> */}
              {documentFormData?.document && (
                <p className="text-sm text-center text-gray-500 mt-2">
                  Fichier: {documentFormData.document.name}
                </p>
              )}
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
  )
}

export default ModalCreateDocument