import multer from "multer";
import path from "path";
import { Request } from "express";

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "uploads/"),
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${(file.originalname)}`;
        cb(null, uniqueName)
    }
})

export const upload = multer({storage, limits: {fileSize: 5 * 1024 * 1024}})

export const imageFilter = (req: Request, file: Express.Multer.File, cb:
    multer.FileFilterCallback) => {
        const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
        if(!allowedTypes.includes(file.mimetype)){
            return cb(new Error("Only JPEG, PNG, WEBP images are allowed"))
        }
        cb(null, true);
    };
    
export const uploadImage = multer({
    storage,
    fileFilter: imageFilter,
    limits: {fileSize: 2 * 1024 * 1024}
})