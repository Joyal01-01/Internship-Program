import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.startsWith("Bearer") ? authHeader.split(" ")[1] : null;

  if (!token) {
    return res.status(401).json({ message: "invalid token" });
  }

  try {
    const jwtSecret = process.env.JWT_SECRET || "fallback-secret";
    const decoded = jwt.verify(token, jwtSecret);
    (req as any).user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "invalid or expired token" });
  }
};