import type { Request, Response } from "express";
import { documentService } from "./document.service.js";
import type { DocumentCreateInput, DocumentUpdateInput } from "./document.types.js";

const getAllDocuments = async (req: Request, res: Response) => {
    const autoEntrepreneurId = req.AutoEntrepreneurID;

    const page = req.query.page ? parseInt(req.query.page as string, 10) : 1;
    const limit = req.query.limit ? parseInt(req.query.limit as string, 10) : 10;

    const documents = await documentService.getAllDocuments(autoEntrepreneurId as string, page as number, limit as number);
    res.status(200).json(documents);
};

const getOneDocument = async (req: Request, res: Response) => {
    const autoEntrepreneurId = req.AutoEntrepreneurID;
    const { documentId } = req.params;

    const document = await documentService.getOneDocument(autoEntrepreneurId as string, documentId as string);
    res.status(200).json(document);
};

const createDocument = async (req: Request, res: Response) => {
    const autoEntrepreneurId = req.AutoEntrepreneurID;
    const body = req.body;

    const newDocument = await documentService.createDocument(autoEntrepreneurId as string, body as DocumentCreateInput);
    res.status(200).json(newDocument);
};

const updateDocument = async (req: Request, res: Response) => {
    const autoEntrepreneurId = req.AutoEntrepreneurID;
    const {documentId} = req.params;
    const body = req.body;

    const updatedDocument = await documentService.updateDocument(autoEntrepreneurId as string, documentId as string, body as DocumentUpdateInput);
    res.status(200).json(updatedDocument);
};

const deleteDocument = async (req: Request, res: Response) => {
    const autoEntrepreneurId = req.AutoEntrepreneurID;
    const {documentId} = req.params;

    const result = await documentService.deleteDocument(autoEntrepreneurId as string, documentId as string);
    res.status(200).json(result);
};

export const documentController = {
    getAllDocuments,
    getOneDocument,
    createDocument,
    updateDocument,
    deleteDocument
};