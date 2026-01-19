
export interface registerSchemaInput {
    nom: string,
    prenom: string,
    email: string,
    password: string,
    passwordConfirmation: string,
}

export interface loginSchemaInput {
    email: string,
    password: string
}

// export interface logoutSchemaInput {
//     id: string
// }