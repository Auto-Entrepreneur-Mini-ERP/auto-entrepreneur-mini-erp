import type { LoginFormData, RegisterFormData } from "../types/auth.types";
import { api } from "./axios";

const register = async (data: RegisterFormData) => {
    const autoE = await api.post("/auth/register", data);
    return autoE;
}

const login = async (data: LoginFormData) => {
    const autoE = await api.post("/auth/login", data);    
    return autoE;
}

export const authApi = {
    register,
    login
}