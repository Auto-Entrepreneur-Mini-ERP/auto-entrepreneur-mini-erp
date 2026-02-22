import type { DocumentCreateData, DocumentUpdateData } from "../types/document.types";
import { api } from "./axios"

const getAllDocuments = async () => {
    const response = await api.get("/document");
    return response;
}

const getDocumentById = async (documentId: string) => {
    const response = await api.get("/document" + documentId);
    return response;
}

const createDocument = async (data: FormData) => {
    const response = await api.post("/document", data);
    return response;
}

const editDocument = async (documentId: string, data: DocumentUpdateData) => {
    const response = await api.put("/document" + documentId, data);
    return response;
}

const deleteDocument = async (documentId: string) => {
    const response = await api.delete("/document" + documentId);
    return response;
}

export const documentApi = {
    getAllDocuments,
    getDocumentById,
    createDocument,
    editDocument,
    deleteDocument,
}