import { Request, Response } from "express";
import { StudentService } from "../Service/student.service";

export class StudentController {
  static async createStundet(req: Request, res: Response) {
    try {
      const student = await StudentService.createStudent(req.body);

      return res.status(201).json({
        success: true,
        message: "Student created Successfully",
        data: student,
      });
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Internal server error";

      if (message === "Email already exists") {
        return res.status(409).json({
          success: false,
          message,
        });
      }

      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }
}