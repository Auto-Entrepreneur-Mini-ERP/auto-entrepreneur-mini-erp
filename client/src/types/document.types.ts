
export interface Document {
    id: string,
    name: string,
    type: string,
    category?: string,
    creationDate?: string,
}

export interface DocumentCreateData {
    name: string,
    category?: string,
    description?: string,
}

export interface DocumentUpdateData {
    name: string,
    category?: string,
    description?: string,
}