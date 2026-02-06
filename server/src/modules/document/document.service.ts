import type { DocumentCreateInput, DocumentUpdateInput } from "./document.types.js";

const getAllDocuments = async (autoentrepreneurId: string) => {

};

const getOneDocument = async (autoentrepreneurId: string, ) => {
    
};

const createDocument = async (autoentrepreneurId: string, data: DocumentCreateInput) => {
    
};

const updateDocument = async (autoentrepreneurId: string, documentId: string,  data: DocumentUpdateInput) => {
    
};

const deleteDocument = async (autoentrepreneurId: string, documentId: string) => {
    
};

export const documentService = {
    getAllDocuments,
    getOneDocument,
    createDocument,
    updateDocument,
    deleteDocument
};