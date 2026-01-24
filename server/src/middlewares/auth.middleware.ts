import type { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/errorHandler.js";
import { JWT } from "../utils/jwt.js";
import { env } from "../config/env.js";
import { prisma } from "../lib/prisma.js";
import type { JwtPayload } from "jsonwebtoken";


// Extend Express Request type
declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        email?: string;
      };
    }
  }
}

/**
 * Middleware li kaychecki cookie JWT
 * Katset req.user ila token valid
 */
export const requireAuth = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ success: false, error: "Unauthorized: token missing" });
  }

  let decoded: JwtPayload;
  try {
    decoded = JWT.verifyToken(token, env.JWT_SECRET as string) as JwtPayload;
  } catch (err) {
    return res.status(401).json({ success: false, error: "Invalid token" });
  }

  if (!decoded || !decoded.id || !decoded.exp) {
    return res.status(401).json({ success: false, error: "Invalid token payload" });
  }

  const now = Math.floor(Date.now() / 1000);
  if (decoded.exp < now) {
    return res.status(401).json({ success: false, error: "Token expired" });
  }

  const user = await prisma.autoEntrepreneur.findUnique({
    where: { id: decoded.id },
  });

  if (!user) {
    return res.status(401).json({ success: false, error: "Invalid token: user not found" });
  }

  req.user = { id: user.id, email: user.email ?? undefined };

  next();
};

/**
 * Middleware optional: kayset req.user ila kayn cookie, sinon kaykhalik tcontinue
 */
export const optionalAuth = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.token;
  if (!token) return next();

  try {
    const decoded = JWT.verifyToken(token, env.JWT_SECRET as string) as JwtPayload;
    if (decoded?.id) {
      const user = await prisma.autoEntrepreneur.findUnique({ where: { id: decoded.id } });
      if (user) {
        req.user = { id: user.id, email: user.email ?? undefined };
      }
    }
  } catch {
    // ignore invalid token
  }

  next();
};
