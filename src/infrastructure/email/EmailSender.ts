import IBillGenerator from "../../domain/interfaces/application/IBillGenerator";
import IEmailSender from "../../domain/interfaces/infrastructure/email/IEmailSender";
import ISMTPConnection from "../../domain/interfaces/infrastructure/email/ISMTPConnection";
import RSoldCart from "../repository/retriever/RSoldCart";

export default class EmailSender implements IEmailSender {
  constructor(
    private readonly smtpConnection: ISMTPConnection,
    private readonly rSoldCart: RSoldCart,
    private readonly billGenerator: IBillGenerator
  ) {}

  async sendEmail(soldCartId: number, message: string): Promise<boolean> {
    const soldCart = await this.rSoldCart.getSoldCart(soldCartId);
    const email = soldCart.getCustomer().getEmail();
    const pdfBase64 = await this.billGenerator.getElectronicBill(soldCartId);

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
