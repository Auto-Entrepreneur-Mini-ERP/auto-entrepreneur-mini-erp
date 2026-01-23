
export interface registerSchemaInput {
    nom: string,
    prenom: string,
    email: string,
    password: string,
    passwordConfirmation: string,
    telephone?: string;
    address?: string;
    typeActivite?: "COMMERCE" | "PRESTATION_SERVICE" | "MIXTE";
    tauxImposition?: number;
    ice?: string;
}

export interface loginSchemaInput {
    email: string,
    password: string
}