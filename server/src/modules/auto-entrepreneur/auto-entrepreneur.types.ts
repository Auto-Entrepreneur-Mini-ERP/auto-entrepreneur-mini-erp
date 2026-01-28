
export enum TypeActivite {
    COMMERCE = "COMMERCE",
    PRESTATION_SERVICE = "SERVICE",
    MIXTE = "MIXTE"
}

export interface User {
    email: string,
    firstName: string;
    lastName: string;
    phone?: string;
    address?: string;
    creationDate: Date;
    updateDate: Date;
}

export interface AutoEntrepreneur {
    id: string,
    password?: string,
    businessName: string;
    activityType?: string;
    taxRate?: number;
    ice?: string;
    logo?: string;
    creationDate: Date;
    updateDate: Date;
    jwtToken?: string;
    passwordResetToken?: string
    passwordResetTokenExpiration?: bigint
    user: User
}

export interface AutoEntrepreneurUpdateInput {
    autoEntrepreneur?:{
        businessName?: string;
        ice?: string
        logo?: string;
    },
    user?:{
        firstName?: string;
        lastName?: string;
        phone?: string;
        address?: string;
    }
}