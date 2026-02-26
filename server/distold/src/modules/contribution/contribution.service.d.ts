import type { ContributionCreateInput, ContributionUpdateStatusInput } from "./contribution.types.js";
import { PaymentStatus } from "./contribution.types.js";
export declare const contributionService: {
    getAllContributions: (autoEntrepreneurId: string, page: number, limit: number, year?: number, status?: PaymentStatus) => Promise<{
        year: number;
        id: string;
        creationDate: Date;
        reference: string;
        period: string;
        quarter: number | null;
        amount: import("@prisma/client-runtime-utils").Decimal;
        dueDate: Date;
        paymentDate: Date | null;
        status: import("../../../generated/prisma/enums.js").PaymentStatus;
        AutoEntrepreneurId: string;
    }[]>;
    getOneContribution: (autoEntrepreneurId: string, contributionId: string) => Promise<{
        year: number;
        id: string;
        creationDate: Date;
        reference: string;
        period: string;
        quarter: number | null;
        amount: import("@prisma/client-runtime-utils").Decimal;
        dueDate: Date;
        paymentDate: Date | null;
        status: import("../../../generated/prisma/enums.js").PaymentStatus;
        AutoEntrepreneurId: string;
    } | null>;
    createContribution: (autoEntrepreneurId: string, data: ContributionCreateInput) => Promise<{
        year: number;
        id: string;
        creationDate: Date;
        reference: string;
        period: string;
        quarter: number | null;
        amount: import("@prisma/client-runtime-utils").Decimal;
        dueDate: Date;
        paymentDate: Date | null;
        status: import("../../../generated/prisma/enums.js").PaymentStatus;
        AutoEntrepreneurId: string;
    }>;
    modifyContributionStatus: (autoEntrepreneurId: string, contributionId: string, data: ContributionUpdateStatusInput) => Promise<{
        year: number;
        id: string;
        creationDate: Date;
        reference: string;
        period: string;
        quarter: number | null;
        amount: import("@prisma/client-runtime-utils").Decimal;
        dueDate: Date;
        paymentDate: Date | null;
        status: import("../../../generated/prisma/enums.js").PaymentStatus;
        AutoEntrepreneurId: string;
    }>;
};
//# sourceMappingURL=contribution.service.d.ts.map