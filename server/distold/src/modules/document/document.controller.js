import { documentService } from "./document.service.js";
const getAllDocuments = async (req, res) => {
    const autoEntrepreneurId = req.AutoEntrepreneurID;
    const page = req.query.page ? parseInt(req.query.page, 10) : 1;
    const limit = req.query.limit ? parseInt(req.query.limit, 10) : 10;
    const documents = await documentService.getAllDocuments(autoEntrepreneurId, page, limit);
    res.status(200).json(documents);
};
const getOneDocument = async (req, res) => {
    const autoEntrepreneurId = req.AutoEntrepreneurID;
    const { documentId } = req.params;
    const document = await documentService.getOneDocument(autoEntrepreneurId, documentId);
    res.status(200).json(document);
};
const createDocument = async (req, res) => {
    const autoEntrepreneurId = req.AutoEntrepreneurID;
    const body = req.body;
    const file = req.file;
    const newDocument = await documentService.createDocument(autoEntrepreneurId, body, file);
    res.status(200).json(newDocument);
};
const updateDocument = async (req, res) => {
    const autoEntrepreneurId = req.AutoEntrepreneurID;
    const { documentId } = req.params;
    const body = req.body;
    const updatedDocument = await documentService.updateDocument(autoEntrepreneurId, documentId, body);
    res.status(200).json(updatedDocument);
};
const deleteDocument = async (req, res) => {
    const autoEntrepreneurId = req.AutoEntrepreneurID;
    const { documentId } = req.params;
    const result = await documentService.deleteDocument(autoEntrepreneurId, documentId);
    res.status(200).json(result);
};
export const documentController = {
    getAllDocuments,
    getOneDocument,
    createDocument,
    updateDocument,
    deleteDocument
};
//# sourceMappingURL=document.controller.js.map