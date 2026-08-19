import { Request, Response, NextFunction } from "express"
import multer from "multer"
export const errorHandler = (error:any, req:Request, res:Response, next:NextFunction) => {

    if (error instanceof multer.MulterError) {
        console.log("Error in multer");
        console.log(error.message);
            return res.status(400).json({
                message: "File upload error",
                error: error.message
            });
        }

    if (error.message === "Only JPEG, PNG, WEBP images are allowed") {
            return res.status(403).json({
                message: error.message,
            })
        }
    
        if (error) {
            console.log("Other upload error");
            console.log(error);
                return res.status(500).json({
                message: "Error handling files"
            });
        }
    
    next();
}