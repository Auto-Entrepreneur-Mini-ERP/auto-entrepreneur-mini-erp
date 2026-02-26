import type { DocumentCreateInput, DocumentOutput, DocumentUpdateInput } from "./document.types.js";
export declare const documentService: {
    getAllDocuments: (autoentrepreneurId: string, page: number, limit: number) => Promise<{
        id: string;
        name: string;
        type: string;
        AutoEntrepreneurId: string;
        description: string | null;
        category: string | null;
        fileUrl: string;
        fileSize: number;
        uploadDate: Date;
    }[]>;
    getOneDocument: (autoentrepreneurId: string, documentId: string) => Promise<{
        id: string;
        name: string;
        type: string;
        AutoEntrepreneurId: string;
        description: string | null;
        category: string | null;
        fileUrl: string;
        fileSize: number;
        uploadDate: Date;
    } | null>;
    createDocument: (autoentrepreneurId: string, data: DocumentCreateInput, file: Express.Multer.File) => Promise<DocumentOutput>;
    updateDocument: (autoentrepreneurId: string, documentId: string, data: DocumentUpdateInput) => Promise<{
        id: string;
        name: string;
        type: string;
        AutoEntrepreneurId: string;
        description: string | null;
        category: string | null;
        fileUrl: string;
        fileSize: number;
        uploadDate: Date;
    }>;
    deleteDocument: (autoentrepreneurId: string, documentId: string) => Promise<boolean>;
};
//# sourceMappingURL=document.service.d.ts.map