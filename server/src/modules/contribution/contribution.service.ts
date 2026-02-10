import { prisma } from "../../lib/prisma.js";
import { pagination } from "../../utils/pagination.js";
import { autoentrepreneurExists } from "../auto-entrepreneur/utils/autoentrepreneurExists.js";
import type { ContributionUpdateInput } from "./contribution.types.js";
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

    const contribution = await prisma.contribution.findMany({
        where:{
            id: contributionId,
            AutoEntrepreneurId: autoEntrepreneurId,
        }
    });
    return contribution;
};

const modifyContributionStatus = async (autoEntrepreneurId: string, contributionId: string, data: ContributionUpdateInput) => {
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
    modifyContributionStatus
}