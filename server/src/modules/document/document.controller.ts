import type { Request, Response } from "express";

const getAllDocuments = async (req: Request, res: Response) => {
    const autoEntrepreneurId = req.AutoEntrepreneurID;

};

const getOneDocument = async (req: Request, res: Response) => {
    const autoEntrepreneurId = req.AutoEntrepreneurID;
    const documentId = req.params;
};

const createDocument = async (req: Request, res: Response) => {
    const autoEntrepreneurId = req.AutoEntrepreneurID;
    const body = req.body;
};

const updateDocument = async (req: Request, res: Response) => {
    const autoEntrepreneurId = req.AutoEntrepreneurID;
    const documentId = req.params;
    const body = req.body;

    
};

const deleteDocument = async (req: Request, res: Response) => {
    const autoEntrepreneurId = req.AutoEntrepreneurID;
    const documentId = req.params;
};

export const documentController = {
    getAllDocuments,
    getOneDocument,
    createDocument,
    updateDocument,
    deleteDocument
};