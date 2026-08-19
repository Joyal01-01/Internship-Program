import { Request, Response } from "express";
import { UserService } from "../Service/User.service";
import { EmailService } from "../Service/email.service";

export class UserController {
  static async createUser(req: Request, res: Response) {
    try {
      const result = await UserService.createUser(req.body);

      return res.status(201).json({
        success: true,
        message: "User created successfully",
        data: result,
      });
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Internal server error.";
      console.log(error);

      if (
        message === "Email already exists" ||
        message === "Username already exists" ||
        message === "User already exist."
      ) {
        return res.status(409).json({
          success: false,
          message,
        });
      }

      return res.status(500).json({
        success: false,
        message: "Internal server error.",
      });
    }
  }

  static async getUsers(req: Request, res: Response) {
    try {
      const result = await UserService.getUsers();

      return res.status(200).json({
        success: true,
        message: "Users fetched successfully",
        data: result,
      });
    } catch (error: unknown) {
      console.log(error);

      return res.status(500).json({
        success: false,
        message: "Internal server error.",
      });
    }
  }

  static async getUserByID(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);

      const user = await UserService.getUserByID(id);

      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found.",
        });
      }

      return res.status(200).json({
        success: true,
        message: "User fetched successfully.",
        data: user,
      });
    } catch (error: unknown) {
      console.log(error);

      return res.status(500).json({
        success: false,
        message: "Internal server error.",
      });
    }
  }

  static async deleteUserByID(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);

      const user = await UserService.deleteUserByID(id);

      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found.",
        });
      }

      return res.status(200).json({
        success: true,
        message: `User with id ${id} deleted successfully.`,
      });
    } catch (error: unknown) {
      console.log(error);

      return res.status(500).json({
        success: false,
        message: "Internal server error.",
      });
    }
  }

  static async updateUser(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);

      const user = await UserService.updateUser(id, req.body);

      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found.",
        });
      }

      return res.status(200).json({
        success: true,
        message: "User updated successfully.",
        data: user,
      });
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Internal server error.";
      console.log(error);

      if (
        message === "Email already exists" ||
        message === "Username already exists" ||
        message === "User already exist."
      ) {
        return res.status(409).json({
          success: false,
          message,
        });
      }

      return res.status(500).json({
        success: false,
        message: "Internal server error.",
      });
    }
  }

  static async patchUser(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);

      const user = await UserService.patchUser(id, req.body);

      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found.",
        });
      }

      return res.status(200).json({
        success: true,
        message: "User patched successfully.",
        data: user,
      });
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Internal server error.";
      console.log(error);

      if (
        message === "Email already exists" ||
        message === "Username already exists" ||
        message === "User already exist."
      ) {
        return res.status(409).json({
          success: false,
          message,
        });
      }

      return res.status(500).json({
        success: false,
        message: "Internal server error.",
      });
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const { username, password } = req.body;
      const result = await UserService.login(username, password);

      return res.status(200).json({
        message: "login successful",
        data: result.token,
      });
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Internal server error";

      if (message === "Invalid username or password") {
        return res.status(401).json({ message });
      }

      return res.status(500).json({ message: "internal server error" });
    }
  }

  static async contactUs(req: Request, res: Response) {
    try {
      const { name, email, message } = req.body;
      await EmailService.sendEmail(
        "joyalpoudel234@gmail.com",
        `New Contact from Submission from ${name}`,
        `<p><strong>Email:</strong> ${email}, </p><p><strong>Message:</strong> ${message}</p>`,
      );
      return res.status(200).json({ success: true, message: "Message sent successfully." });
    } catch (error: unknown) {
        console.log(error);
      return res.status(500).json({ message:error });   
    }
  }
}