import IEmailSender from "../../domain/interfaces/infrastructure/email/IEmailSender";
import ISMTPConnection from "../../domain/interfaces/infrastructure/email/ISMTPConnection";

export default class EmailSender implements IEmailSender {
  constructor(private readonly smtpConnection: ISMTPConnection) {}

  async sendEmail(
    email: string,
    pdfBase64: string,
    message: string
  ): Promise<boolean> {
    const mailOptions = {
      from: "MicroTech <billing@microtech.com>",
      to: email,
      subject: "¡Esta es la factura por tu compra! 🛒",
      text: message,
      attachments: [
        {
          filename: "Factura_MicroTech.pdf",
          content: pdfBase64,
          encoding: "base64",
          contentType: "application/pdf",
        },
      ],
    };

    this.smtpConnection
      .getSmtpConnection()
      .sendMail(mailOptions, (error, info) => {
        if (error) {
          return false;
        }
        return true;
      });

    return false;
  }
}
