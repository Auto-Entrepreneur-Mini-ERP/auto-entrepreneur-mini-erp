export interface autoAntrepreneurProfile {
    firstName: string,
    lastName: string,
    phone?: string,
    address?: string,
    businessName: string,
    activityType?: string;
    ice?: string;
    logo?: string;
}

export interface AutoentrepreneurUpdateData {
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