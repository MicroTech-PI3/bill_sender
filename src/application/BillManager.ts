import IBillGenerator from "../domain/interfaces/application/IBillGenerator";
import IRSoldCart from "../domain/interfaces/infrastructure/IRSoldCart";
import SoldCart from "../domain/model/soldCart/SoldCart";
import EmailSender from "../infrastructure/email/EmailSender";
import WhatsApp from "../infrastructure/whatsapp/WhatsApp";

export default class BillManager {
  constructor(
    private readonly whatsapp: WhatsApp,
    private readonly emailSender: EmailSender,
    private readonly rSoldCart: IRSoldCart,
    private readonly sendingVia: ISendingVia,
    private readonly billGenerator: IBillGenerator
  ) {}

  async sendBill(soldCartId: number): Promise<void> {
    const soldCart = await this.rSoldCart.getSoldCart(soldCartId);
    const pdfBase64 = await this.billGenerator.getElectronicBill(soldCart);
  }

  private async sendToWhatsApp(
    soldCart: SoldCart,
    pdfBase64: string
  ): Promise<void> {
    await this.whatsapp.sendMessage(
      pdfBase64,
      soldCart.getCustomer().getPhoneNumber(),
      "Esta es la factura por tu compra!"
    );
  }

  private async sendToEmail(
    soldCart: SoldCart,
    pdfBase64: string
  ): Promise<void> {
    await this.emailSender.sendEmail(
      soldCart.getCustomer().getEmail(),
      pdfBase64,
      "Esta es la factura por tu compra!"
    );
  }

  async setBillSendingVia(sendingVia: ISendingVia): Promise<void> {
    this.sendingVia = sendingVia;
  }
}
