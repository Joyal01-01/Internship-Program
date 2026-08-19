import { Router } from "express";
import { StudentController } from "../Controller/student.controller";

const router = Router()

router.post("/student", StudentController.createStundet)
export default router;