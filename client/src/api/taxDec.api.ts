import { api } from "./axios";
import type {
  createTaxDeclarationInput,
  DeclarationStatus,
  TaxDeclaration,
} from "../../src/types/taxDeclaration.types";

const getAllTaxDeclaration = async () => {
  const taxDeclarations = await api.get("/taxDeclarations");
  return taxDeclarations.data;
};

const deleteTaxDeclaration = async (id: string) => {
  const isDeleted = await api.delete(`/taxDeclarations/${id}`);
  return isDeleted;
};

const getCurrentDeclarationData = async () => {
  const taxDeclaration = await api.get("/taxDeclarations/current");
  return taxDeclaration.data;
};

const createTaxDeclaration = async (
  data: createTaxDeclarationInput,
): Promise<TaxDeclaration> => {
  const response = await api.post(`/taxDeclarations`, data);
  return response.data;
};

const updateteTaxDeclaration = async (id : string , 
 status : DeclarationStatus 
): Promise<TaxDeclaration> => {
  const data = {
    status : status
  }
  const response = await api.patch(`/taxDeclarations/${id}`, data);
   return response.data;
};

export const taxDeclarationApi = {
  getAllTaxDeclaration,
  getCurrentDeclarationData,
  deleteTaxDeclaration,
  createTaxDeclaration,
  updateteTaxDeclaration,
};;
