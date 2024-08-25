import nodemailer, { TransportOptions, Transporter } from "nodemailer";
import ISMTPConnection from "../../domain/interfaces/infrastructure/email/ISMTPConnection";
import EmailEnvironment from "./config/EmailEnvironment";

export default class SMTPConnection implements ISMTPConnection {
  private smtpConnection!: Transporter;

  constructor(private readonly emailEnvironment: EmailEnvironment) {
    this.start();
  }

  private start() {
    this.smtpConnection = nodemailer.createTransport({
      host: this.emailEnvironment.smtpServer,
      port: this.emailEnvironment.smtpPort,
      secure: false,
      auth: {
        user: this.emailEnvironment.smtpUser,
        pass: this.emailEnvironment.smtpPassword,
      },
    } as TransportOptions);
  }

  public getSmtpConnection(): Transporter {
    return this.smtpConnection;
  }
}
