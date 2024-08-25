import IBillGenerator from "../domain/interfaces/application/IBillGenerator";
import IBillManager from "../domain/interfaces/application/IBillManager";
import ISoldCartRetriever from "../domain/interfaces/infrastructure/repository/retriever/ISoldCartRetriever";
import SoldCart from "../domain/model/soldCart/SoldCart";
import EmailSender from "../infrastructure/email/EmailSender";
import WhatsApp from "../infrastructure/whatsapp/WhatsApp";

export default class BillManager implements IBillManager {
  constructor(
    private readonly whatsapp: WhatsApp,
    private readonly emailSender: EmailSender,
    private readonly rSoldCart: ISoldCartRetriever,
    private readonly billGenerator: IBillGenerator
  ) {}

  async sendBill(soldCartId: number): Promise<boolean> {
    try {
      const soldCart = await this.rSoldCart.getSoldCart(soldCartId);
      const pdfBase64 = await this.billGenerator.getElectronicBill(soldCart);
      const sendingVia = soldCart.getCustomer().getBillVia();

      if (sendingVia === "W") {
        await this.sendToWhatsApp(soldCart, pdfBase64);
        return true;
      } else if (sendingVia === "E") {
        await this.sendToEmail(soldCart, pdfBase64);
        return true;
      } else if (sendingVia === "WE") {
        await this.sendToWhatsApp(soldCart, pdfBase64);
        await this.sendToEmail(soldCart, pdfBase64);
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
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
}
