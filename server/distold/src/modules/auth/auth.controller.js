import { authService } from "./auth.service.js";
const register = async (req, res) => {
    const autoEntrepreneur = await authService.createAutoEntrepreneur(req.body);
    return res.status(201).json(autoEntrepreneur);
};
const login = async (req, res) => {
    const autoEntrepreneur = await authService.loginAutoEntrepreneur(req.body);
    return res.status(200).json(autoEntrepreneur);
};
const forgotPassword = async (req, res) => {
    const result = await authService.forgotPassword(req.body.email);
    return res.status(200).json({
        otp: result
    });
};
const otpVerify = async (req, res) => {
    const { email } = req.query;
    const { otp } = req.body;
    const result = await authService.otpVerification(email, otp);
    return res.status(200).json({
        otp: result
    });
};
const resetPassword = async (req, res) => {
    const { id } = req.query;
    const result = await authService.resetPassword(id, req.body);
    return res.status(200).json(result);
};
const logout = async (req, res) => {
    const { id } = req.params;
    const result = await authService.logout(id);
    return res.status(200).json(result);
};
export const authController = {
    register,
    login,
    forgotPassword,
    otpVerify,
    resetPassword,
    logout,
};
//# sourceMappingURL=auth.controller.js.map