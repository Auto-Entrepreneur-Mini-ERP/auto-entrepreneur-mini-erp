import { useState } from "react";
import { documentApi } from "../api/document.api";
import type { Document, DocumentCreateData, DocumentUpdateData } from "../types/document.types";

export const useDocument = () => {

    const [documents, setDocuments] = useState<Document[]>();
    const [document, setDocument] = useState<Document>();
    const [errors, setErrors] = useState<string>();

    const fetchDocuments = async () => {
        const res = await documentApi.getAllDocuments();
        if (res.data) {
            setDocuments(res.data);
            return;
        }
    }

    const getOneDocument = async (documentId: string) => {
        const res = await documentApi.getDocumentById(documentId);

        if (res.data) {
            setDocument(res.data);
            return;
        }
    }

    const createDocument = async (data: FormData) => {
        const res = await documentApi.createDocument(data);

        if (res.data.statusCode && res.data.statusCode !== 200) {
            setErrors(res.data.message);
            return;
        }
    }

    const editDocument = async (documentId: string, data: DocumentUpdateData) => {
        const res = await documentApi.editDocument(documentId, data);

        if (res.data.statusCode && res.data.statusCode !== 200) {
            setErrors(res.data.message);
            return;
        }
    }

    const deleteDocument = async (documentId: string) => {
        const res = await documentApi.deleteDocument(documentId);
        if (res.data.statusCode && res.data.statusCode !== 200) {
            setErrors(res.data.message);
            return;
        }
        return res.data;
    }

    return {
        errors,
        documents,
        document,
        fetchDocuments,
        getOneDocument,
        createDocument,
        editDocument,
        deleteDocument,
    };
}