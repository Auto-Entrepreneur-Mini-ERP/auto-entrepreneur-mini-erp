// export enum ActivityTypes{
//     COMMERCE = "COMMERCE",
//     SERVICE = "SERVICE",
//     MIXTE = "MIXTE"
// }

export interface RegisterFormData {
    firstname: string,
    lastname: string,
    email: string,
    businessName: string,
    activityType: string,
    ice: string,
    password: string,
    passwordConfirmation: string
}

export interface LoginFormData {
    email: string,
    password: string
}