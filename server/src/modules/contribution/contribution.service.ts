import { Prisma } from "../../../generated/prisma/browser.js";
import { prisma } from "../../lib/prisma.js";
import { pagination } from "../../utils/pagination.js";
import { autoentrepreneurExists } from "../auto-entrepreneur/utils/autoentrepreneurExists.js";
import type { ContributionCreateInput, ContributionUpdateStatusInput } from "./contribution.types.js";
import { contributionExists } from "./utils/contributionExists.js";

const getAllContributions = async (autoEntrepreneurId: string, page: number, limit: number) => {
    autoentrepreneurExists(autoEntrepreneurId);

    const startIndex = pagination.paginationIndex(page, limit);
    const contributions = await prisma.contribution.findMany({
        skip: startIndex,
        take: limit,
        where:{
            AutoEntrepreneurId: autoEntrepreneurId
        }
    });
    return contributions;
};

const getOneContribution = async (autoEntrepreneurId: string, contributionId: string) => {
    autoentrepreneurExists(autoEntrepreneurId);
    contributionExists(contributionId);

    const contribution = await prisma.contribution.findUnique({
        where:{
            id: contributionId,
            AutoEntrepreneurId: autoEntrepreneurId,
        }
    });
    return contribution;
};

const createContribution = async (autoEntrepreneurId: string, data: ContributionCreateInput) => {
    autoentrepreneurExists(autoEntrepreneurId);

    const ContributionCreateData: Prisma.ContributionCreateInput = {
        period: data.period,
        year: new Date().getFullYear(),
        amount: data.amount,
        dueDate: data.dueDate,
        reference: data.reference,
        AutoEntrepreneur: {
            connect:{
                id: autoEntrepreneurId
            }
        }
    };

    const contribution = await prisma.contribution.create({
        data: ContributionCreateData
    });
    return contribution;
};

const modifyContributionStatus = async (autoEntrepreneurId: string, contributionId: string, data: ContributionUpdateStatusInput) => {
    autoentrepreneurExists(autoEntrepreneurId);
    contributionExists(contributionId);

    const contribution = await prisma.contribution.update({
        where:{
            id: contributionId,
            AutoEntrepreneurId: autoEntrepreneurId,
        },
        data: {
            status: data.status
        }
    });
    return contribution;
};

export const contributionService = {
    getAllContributions,
    getOneContribution,
    createContribution,
    modifyContributionStatus
}