import { Label } from "recharts"
import { Modal } from "../ui/modal"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { useEffect, useState } from "react"
import { type Document, type DocumentUpdateData } from "../../types/document.types"
import { useDocument } from "../../hooks/useDocument"

type ModalEditDocumentProps ={ 
  isDocumentModalOpen: boolean,
  setIsDocumentModalOpen: (isOpen: boolean) => void,
  document: Document
}

function ModalEditDocument({
  isDocumentModalOpen,
  setIsDocumentModalOpen,
  document
}: ModalEditDocumentProps) {

  const { errors, editDocument } = useDocument();

  const [documentFormData, setDocumentFormData] = useState<DocumentUpdateData>();

  useEffect(()=>{
    setDocumentFormData({
    name: document?.name,
    category: document?.category,
    description: document?.description,
  })
  }, [document])
  
  const handleDocumentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    editDocument(document.id as string, documentFormData as DocumentUpdateData);
    // if(!errors){
    //   setIsDocumentModalOpen(false);
    //   window.location.reload();
    // }
  }

  return (
    <>
    <Modal
        title="Modifer un Document"
        isOpen={isDocumentModalOpen}
        onClose={() => setIsDocumentModalOpen(false)}
      >
        <div className="p-6">
          {errors && <p className="text-red-500 mb-4 text-center">{errors}</p>}
          <form onSubmit={handleDocumentSubmit}>
            <div className="mb-4">
              <Label className="mb-2">Nom du Document</Label>
              <Input
                type="text"
                id="docName"
                value={documentFormData?.name}
                onChange={(e) =>
                  setDocumentFormData({
                    ...documentFormData,
                    name: e.target.value,
                  } as DocumentUpdateData)
                }
                className="w-full h-12 border-gray-200 rounded-xl"
              />
            </div>

            <div className="mb-4">
              <Label className="mb-2">Categorie</Label>
              <Input
                type="text"
                id="category"
                value={documentFormData?.category}
                onChange={(e) =>
                  setDocumentFormData({
                    ...documentFormData,
                    category: e.target.value,
                  } as DocumentUpdateData)
                }
                className="w-full h-12 border-gray-200 rounded-xl"
              />
            </div>

            <div className="mb-4">
              <Label className="mb-2">Description</Label>
              <Input
                type="text"
                id="description"
                value={documentFormData?.description}
                onChange={(e) =>
                  setDocumentFormData({
                    ...documentFormData,
                    description: e.target.value,
                  } as DocumentUpdateData)
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
  )
}

export default ModalEditDocument