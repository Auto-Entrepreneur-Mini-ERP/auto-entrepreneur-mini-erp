import { Prisma } from "../../../generated/prisma/client.js";
import { aws } from "../../lib/aws.js";
import { prisma } from "../../lib/prisma.js";
import { pagination } from "../../utils/pagination.js";
import { autoentrepreneurExists } from "../auto-entrepreneur/utils/autoentrepreneurExists.js";
import { documentExists } from "./utils/documentExists.js";
const getAllDocuments = async (autoentrepreneurId, page, limit) => {
    autoentrepreneurExists(autoentrepreneurId);
    const startIndex = pagination.paginationIndex(page, limit);
    const documents = await prisma.document.findMany({
        skip: startIndex,
        take: limit,
        where: {
            AutoEntrepreneurId: autoentrepreneurId,
        }
    });
    return documents;
};
const getOneDocument = async (autoentrepreneurId, documentId) => {
    autoentrepreneurExists(autoentrepreneurId);
    const document = await prisma.document.findUnique({
        where: {
            id: documentId,
        }
    });
    return document;
};
const createDocument = async (autoentrepreneurId, data, file) => {
    autoentrepreneurExists(autoentrepreneurId);
    //upload file to  AWS S3 bucket
    const fileUrl = await aws.s3Upload(file);
    const DocumentInputData = {
        name: data.name,
        type: file.mimetype,
        category: data.category || null,
        fileUrl: fileUrl,
        fileSize: file.size,
        description: data.description || null,
        AutoEntrepreneur: {
            connect: {
                id: autoentrepreneurId
            }
        }
    };
    const newDoc = await prisma.document.create({
        data: DocumentInputData
    });
    return newDoc;
};
const updateDocument = async (autoentrepreneurId, documentId, data) => {
    autoentrepreneurExists(autoentrepreneurId);
    documentExists(documentId);
    const DocumentUpdateData = {
        name: data.name,
        category: data.category || null,
        description: data.description || null
    };
    console.log(data);
    console.log(DocumentUpdateData);
    const updatedDoc = await prisma.document.update({
        where: {
            id: documentId,
            AutoEntrepreneurId: autoentrepreneurId,
        },
        data: DocumentUpdateData
    });
    return updatedDoc;
};
const deleteDocument = async (autoentrepreneurId, documentId) => {
    autoentrepreneurExists(autoentrepreneurId);
    documentExists(documentId);
    await prisma.document.delete({
        where: {
            id: documentId,
        }
    });
    return true;
};
export const documentService = {
    getAllDocuments,
    getOneDocument,
    createDocument,
    updateDocument,
    deleteDocument
};
//# sourceMappingURL=document.service.js.map