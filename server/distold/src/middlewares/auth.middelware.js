import { AppError } from "../utils/errorHandler.js";
import { JWT } from "../utils/jwt.js";
import { env } from "../config/env.js";
import { prisma } from "../lib/prisma.js";
export const isAthenticated = async (req, res, next) => {
    const token = req.cookies.token;
    if (!token)
        throw new AppError("Token does not exist!", 401);
    const decoded = JWT.verifyToken(token, env.JWT_SECRET);
    if (!decoded)
        throw new AppError("Invalid Token!", 401);
    if (!decoded.exp)
        throw new AppError("Invalid Token!", 401);
    const dateNow = Math.floor(Date.now() / 1000);
    if (decoded.exp < dateNow)
        throw new AppError("Token expired!", 401);
    const autoEntrepreneur = await prisma.autoEntrepreneur.findUnique({
        where: { id: decoded.id },
        include: { user: true },
    });
    if (!autoEntrepreneur)
        throw new AppError("Invalid Token!", 401);
    req.AutoEntrepreneurID = autoEntrepreneur.id;
    next();
};
//# sourceMappingURL=auth.middelware.js.map