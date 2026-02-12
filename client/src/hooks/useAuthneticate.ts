import { useState } from "react";
import { authApi } from "../api/auth.api";
import type { RegisterFormData } from "../types/auth.types";

export const useAuthenticate = () => {
    const [errors, setErrors] = useState<string[]>([]);

    const login = async (email: string, password: string) => {
        const result = await authApi.login({email, password});  
             
        if(result.data.statusCode && result.data.statusCode !== 200){
            return setErrors(prev => [...prev, result.data?.message]);
        }
        
        return result.data;
    }

    const register = async (registerData: RegisterFormData) => {
        const result = await authApi.register(registerData);
        if(result.status !== 200){
            return setErrors(prev => [...prev]);
        }
        return true;
    }

    return {
        errors,
        login,
        register
    };
};
