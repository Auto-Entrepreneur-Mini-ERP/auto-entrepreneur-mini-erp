import { Prisma } from "../../../generated/prisma/client.js";
import { aws } from "../../lib/aws.js";
import { prisma } from "../../lib/prisma.js";
import { pagination } from "../../utils/pagination.js";
import { autoentrepreneurExists } from "../auto-entrepreneur/utils/autoentrepreneurExists.js";
import type { DocumentCreateInput, DocumentUpdateInput } from "./document.types.js";
import { documentExists } from "./utils/documentExists.js";

const getAllDocuments = async (autoentrepreneurId: string, page: number, limit: number) => {
    autoentrepreneurExists(autoentrepreneurId);

    const startIndex = pagination.paginationIndex(page, limit);

    const documents = await prisma.document.findMany({
        skip: startIndex,
        take: limit,
        where:{
            AutoEntrepreneurId: autoentrepreneurId,
        }
    });
    
    return documents;
};

const getOneDocument = async (autoentrepreneurId: string, documentId: string) => {
    autoentrepreneurExists(autoentrepreneurId);

    // get file from S3 bucket

    const document = await prisma.document.findUnique({
        where:{
            id: documentId,
            AutoEntrepreneurId: autoentrepreneurId,
        }
    });
    
    return document;
};

const createDocument = async (autoentrepreneurId: string, data: DocumentCreateInput, file: Express.Multer.File) => {
    autoentrepreneurExists(autoentrepreneurId);    

    //upload file to  AWS S3 bucket
    await aws.s3Upload(file);

    const fileUrl: string = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/uploads/${Date.now()}-${file.originalname}`;
    const DocumentInputData: Prisma.DocumentCreateInput = {
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

const updateDocument = async (autoentrepreneurId: string, documentId: string,  data: DocumentUpdateInput) => {
    autoentrepreneurExists(autoentrepreneurId);
    documentExists(documentId);

    const DocumentUpdateData: Prisma.DocumentUpdateInput = {
        name: data.name,
        category: data.category || null,
        description: data.description || null,
        AutoEntrepreneur:{
            connect:{
                id: autoentrepreneurId
            }
        }
    };

    const updatedDoc = await prisma.document.update({
        where: {
            id: documentId,
            AutoEntrepreneurId: autoentrepreneurId,
        },
        data: DocumentUpdateData
    });

    return updatedDoc;
};

const deleteDocument = async (autoentrepreneurId: string, documentId: string) => {
    autoentrepreneurExists(autoentrepreneurId);
    documentExists(documentId);

    await prisma.document.delete({
        where:{
            id: documentId,
            AutoEntrepreneurId: autoentrepreneurId
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