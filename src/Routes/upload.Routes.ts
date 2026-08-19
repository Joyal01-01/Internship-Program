import { Router } from "express";
import { uploadImage } from "../middleware/multer.middleware";


const router = Router()

router.post("/upload-single", uploadImage.single("image"),(req,res)=> {
    if(!req.file) return res.status(400).json({
        messege:"Files are required"
    });
    res.status(200).json({messege:"file saved successfully.", fileName: req.file.filename})
} )

router.post("/upload-gallery", uploadImage.array("images", 10), (req, res)=>{
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        message: "Gallery files are required",
      });
    }
    const files = req.files as Express.Multer.File[];
    res.json({const: files.length, files: files.map((f) => f.filename)})
})

router.post("/upload-product",
    uploadImage.fields([
        {name: "thumbnail", maxCount: 1},
        {name: "gallery", maxCount: 5}
    ]),

    (req, res)=>{
        const files=req.files as {[feild:string]:Express.Multer.File[]}
        if (!files.thumbnail || files.thumbnail.length === 0) {
            return res.status(400).json({
                message: "Thumbnail file is required"
            });
        }

        const galleryFiles = files.gallery || [];
        res.json({thumbnail:files.thumnail?.[0]?.fieldname,gallery:galleryFiles.map((f)=>f.filename)})
    }

);  

export default router