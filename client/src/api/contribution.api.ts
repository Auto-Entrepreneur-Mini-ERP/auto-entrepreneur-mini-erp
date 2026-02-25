import { api } from "./axios";
import { PaymentStatus } from "../types/contribution.types";
import type { Contribution, CurrentContribution } from "../types/contribution.types";
 
 // ── types ──────────────────────────────────────────────────────────────────
 
 export interface GetContributionsParams {
   year?: number;
   status?: PaymentStatus;
 }
 
 // ── deserializer ───────────────────────────────────────────────────────────
 
 function deserializeContribution(raw: any): Contribution {
   return {
     ...raw,
     dueDate: new Date(raw.dueDate),
     paymentDate: raw.paymentDate ? new Date(raw.paymentDate) : undefined,
   };
 }
 
 // ── api functions ──────────────────────────────────────────────────────────
 
 const getAllContributions = async ({
   year,
   status,
 }: GetContributionsParams = {}): Promise<Contribution[]> => {
   const response = await api.get("/contributions", {
     params: {
       year,
       status,
     },
   });
   console.log(response)
 
   return response.data.map(deserializeContribution);
 };
 
 const getContributionById = async (
   contributionId: string,
 ): Promise<Contribution> => {
   const response = await api.get(`/contributions/${contributionId}`);
 
   return deserializeContribution(response.data);
 };
 
 const createContribution = async (
   data: Partial<Contribution>,
 ): Promise<Contribution> => {
   const response = await api.post("/contributions", data);
 
   return deserializeContribution(response.data);
 };
 
 const updateContributionStatus = async (
   id: string,
   status: PaymentStatus,
 ): Promise<Contribution> => {
   const response = await api.patch(`/contributions/${id}`, {
     status,
   });
 
   return deserializeContribution(response.data);
};
 
const getCurrentContribution = async (): Promise<CurrentContribution> => {
  const response = await api.get("/contributions/current");

  return response.data as CurrentContribution;
};
 
export const contributionApi = {
   getCurrentContribution,
   getAllContributions,
   getContributionById,
   createContribution,
   updateContributionStatus,
 };
 