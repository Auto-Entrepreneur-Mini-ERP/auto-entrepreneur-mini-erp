export interface DocumentOutput {
    id: string;
    name: string;
    type: string;
    category?: string;
    fileUrl: string;
    fileSize: number;
    description?: string;
    uploadDate?: Date | string;
    AutoEntrepreneurId: string;
}
export interface DocumentCreateInput {
    name: string;
    category?: string;
    description?: string;
}
export interface DocumentUpdateInput {
    name: string;
    category?: string;
    fileUrl: string;
    description?: string;
}
//# sourceMappingURL=document.types.d.ts.map