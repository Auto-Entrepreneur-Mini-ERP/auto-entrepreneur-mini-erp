//  import { Prisma } from "../../../generated/prisma/browser.
//  import { prisma } from "../../lib/prisma.js";
//  import { pagination } from "../../utils/pagination.js";
//  import { autoentrepreneurExists } from "../auto-entrepreneur/utils/autoentrepreneurExists.js";
//  import type {
//    ContributionCreateInput,
//    ContributionUpdateStatusInput,
//  } from "./contribution.types.js";
//  import { PaymentStatus } from "./contribution.types.js";
//  import { contributionExists } from "./utils/contributionExists.js";
//  const getAllContributions = async (
//    autoEntrepreneurId: string,
//    page: number,
//    limit: number,
//    year?: number,
//    status?: PaymentStatus,
//  ) => {
//    await autoentrepreneurExists(autoEntrepreneurId);
//    const startIndex = pagination.paginationIndex(page, limit);
//    const contributions = await prisma.contribution.findMany({
//      skip: startIndex,
//      take: limit,
//      where: {
//        AutoEntrepreneurId: autoEntrepreneurId,
//        ...(year && { year }),
//        ...(status && { status }),
//      },
//      orderBy: {
//        dueDate: "desc",
//      },
//    });
//    return contributions;
//  };
//  const getOneContribution = async (
//    autoEntrepreneurId: string,
//    contributionId: string,
//  ) => {
//    await autoentrepreneurExists(autoEntrepreneurId);
//    await contributionExists(contributionId);
//    const contribution = await prisma.contribution.findUnique({
//      where: {
//        id: contributionId,
//        AutoEntrepreneurId: autoEntrepreneurId,
//      },
//    });
//    return contribution;
// };
// import { Prisma } from "../../../generated/prisma/browser.js";
// import { prisma } from "../../lib/prisma.js";
// import { pagination } from "../../utils/pagination.js";
// import { autoentrepreneurExists } from "../auto-entrepreneur/utils/autoentrepreneurExists.js";
// import type {
//   ContributionCreateInput,
//   ContributionUpdateStatusInput,
// } from "./contribution.types.js";
// import { PaymentStatus } from "./contribution.types.js";
// import { contributionExists } from "./utils/contributionExists.js";
// const getAllContributions = async (
//   autoEntrepreneurId: string,
//   page: number,
//   limit: number,
//   year?: number,
//   status?: PaymentStatus,
// ) => {
//   await autoentrepreneurExists(autoEntrepreneurId);
//   const startIndex = pagination.paginationIndex(page, limit);
//   const contributions = await prisma.contribution.findMany({
//     skip: startIndex,
//     take: limit,
//     where: {
//       AutoEntrepreneurId: autoEntrepreneurId,
//       ...(year && { year }),
//       ...(status && { status }),
//     },
//     orderBy: {
//       dueDate: "desc",
//     },
//   });
//   return contributions;
// };
// const getOneContribution = async (
//   autoEntrepreneurId: string,
//   contributionId: string,
// ) => {
//   await autoentrepreneurExists(autoEntrepreneurId);
//   await contributionExists(contributionId);
//   const contribution = await prisma.contribution.findUnique({
//     where: {
//       id: contributionId,
//       AutoEntrepreneurId: autoEntrepreneurId,
//     },
//   });
//   return contribution;
// };
// const createContribution = async (
//   autoEntrepreneurId: string,
//   data: ContributionCreateInput,
// ) => {
//   await autoentrepreneurExists(autoEntrepreneurId);
//   const contributionCreateData: Prisma.ContributionCreateInput = {
//     period: data.period,
//     year: data.year ?? new Date().getFullYear(),
//     ...(data.quarter && { quarter: data.quarter }),
//     amount: data.amount,
//     dueDate: data.dueDate,
//     reference: data.reference,
//     AutoEntrepreneur: {
//       connect: {
//         id: autoEntrepreneurId,
//       },
//     },
//   };
//   const contribution = await prisma.contribution.create({
//     data: contributionCreateData,
//   });
//   return contribution;
// };
// const modifyContributionStatus = async (
//   autoEntrepreneurId: string,
//   contributionId: string,
//   data: ContributionUpdateStatusInput,
// ) => {
//   await autoentrepreneurExists(autoEntrepreneurId);
//   await contributionExists(contributionId);
//   const contribution = await prisma.contribution.update({
//     where: {
//       id: contributionId,
//       AutoEntrepreneurId: autoEntrepreneurId,
//     },
//     data: {
//       status: data.status,
//       ...(data.status === PaymentStatus.PAID && { paymentDate: new Date() }),
//     },
//   });
//   return contribution;
// };
// export const contributionService = {
//   getAllContributions,
//   getOneContribution,
//   createContribution,
//   modifyContributionStatus,
// };
import { Prisma } from "../../../generated/prisma/browser.js";
import { prisma } from "../../lib/prisma.js";
import { pagination } from "../../utils/pagination.js";
import { autoentrepreneurExists } from "../auto-entrepreneur/utils/autoentrepreneurExists.js";
import { PaymentStatus } from "./contribution.types.js";
import { contributionExists } from "./utils/contributionExists.js";
const getAllContributions = async (autoEntrepreneurId, page, limit, year, status) => {
    await autoentrepreneurExists(autoEntrepreneurId);
    const startIndex = pagination.paginationIndex(page, limit);
    const contributions = await prisma.contribution.findMany({
        skip: startIndex,
        take: limit,
        where: {
            AutoEntrepreneurId: autoEntrepreneurId,
            ...(year && { year }),
            ...(status && { status }),
        },
        orderBy: {
            dueDate: "desc",
        },
    });
    return contributions;
};
const getOneContribution = async (autoEntrepreneurId, contributionId) => {
    await autoentrepreneurExists(autoEntrepreneurId);
    await contributionExists(contributionId);
    const contribution = await prisma.contribution.findUnique({
        where: {
            id: contributionId,
            AutoEntrepreneurId: autoEntrepreneurId,
        },
    });
    return contribution;
};
const createContribution = async (autoEntrepreneurId, data) => {
    await autoentrepreneurExists(autoEntrepreneurId);
    const contributionCreateData = {
        period: data.period,
        year: new Date().getFullYear(),
        amount: data.amount,
        dueDate: new Date(data.dueDate),
        paymentDate: new Date(data.paymentDate),
        status: data.status,
        reference: data.reference,
        AutoEntrepreneur: {
            connect: {
                id: autoEntrepreneurId,
            },
        },
    };
    const contribution = await prisma.contribution.create({
        data: contributionCreateData,
    });
    return contribution;
};
const modifyContributionStatus = async (autoEntrepreneurId, contributionId, data) => {
    await autoentrepreneurExists(autoEntrepreneurId);
    await contributionExists(contributionId);
    const contribution = await prisma.contribution.update({
        where: {
            id: contributionId,
            AutoEntrepreneurId: autoEntrepreneurId,
        },
        data: {
            status: data.status,
        },
    });
    return contribution;
};
export const contributionService = {
    getAllContributions,
    getOneContribution,
    createContribution,
    modifyContributionStatus,
};
//# sourceMappingURL=contribution.service.js.map