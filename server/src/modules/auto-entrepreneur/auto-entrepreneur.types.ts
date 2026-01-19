
export enum TypeActivite {
    COMMERCE = "COMMERCE",
    PRESTATION_SERVICE = "PRESTATION_SERVICE",
    MIXTE = "MIXTE"
}

export interface AutoEntrepreneur {
    id: string;
    nom: string;
    prenom: string;
    email: string;
    password?: string;
    telephone?: string;
    address?: string;
    typeActivite?: string;
    tauxImposition?: number;
    ice?: string;
    logo?: string;
    dateCreation: Date;
    dateMiseAJour: Date;
    jwtToken?: string;
}

export interface AutoEntrepreneurProfileInput {
    id: string;
}

export interface AutoEntrepreneurUpdateInput {
    id: string;
    prenom?: string;
    nom?: string;
    telephone?: string;
    address?: string;
    typeActivite?: string;
    ice?: string
    logo?: string;
}