
export interface DocumentOutput {
    id: string,
    name: string,
    type: string,
    category?: string,
    fileUrl: string,
    fileSize: number,
    description?: string,
    AutoEntrepreneurId: string,
};

export interface DocumentCreateInput {
    name: string,
    category?: string,
    description?: string,
};

export interface DocumentUpdateInput {
    name: string,
    category?: string,
    fileUrl: string,
    description?: string,
};