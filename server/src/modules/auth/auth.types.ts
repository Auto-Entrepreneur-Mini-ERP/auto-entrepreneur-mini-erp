import type { ActivityType } from "../../../generated/prisma/enums.js"

export interface registerSchemaInput {
    firstName: string,
    lastName: string,
    email: string,
    businessName: string,
    activityType: ActivityType,
    ice: string,
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

export interface resetPasswordInput {
    password: string,
    passwordConfirmation: string
}