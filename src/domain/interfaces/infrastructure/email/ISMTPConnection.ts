import { Transporter } from "nodemailer";

export default interface ISMTPConnection {
  getSmtpConnection(): Transporter;
}
