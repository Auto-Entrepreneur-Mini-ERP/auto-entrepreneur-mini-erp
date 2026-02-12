import type { LoginFormData, RegisterFormData } from "../types/auth.types";
import { api } from "./axios";

export const register = async (data: RegisterFormData) => {
    const autoE = await api.post("/auth/register", data);
    return autoE;
}

export const login = async (data: LoginFormData) => {
    const autoE = await api.post("/auth/login", data);
    return autoE;
}