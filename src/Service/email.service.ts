import { Transporter } from "../configs/email.config";

export class EmailService {
  static async sendEmail(to: string, subject: string, html: string) {
    await Transporter.sendMail({
      from: `"Hello There"<${process.env.SMTP_USER || ""}>`,
      to,
      subject,
      html,
    });
  }
}

