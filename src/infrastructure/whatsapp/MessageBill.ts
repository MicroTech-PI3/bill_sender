import { MessageMedia } from "whatsapp-web.js";
import IBillGenerator from "../../domain/interfaces/application/IBillGenerator";
import IMessageBill from "../../domain/interfaces/infrastructure/whatsapp/helper/IMessageBill";
import SoldCart from "../../domain/model/soldCart/SoldCart";

export default class MessageBill implements IMessageBill {
  constructor(private readonly billGenerator: IBillGenerator) {}

  async getFileMedia(soldCart: SoldCart): Promise<MessageMedia> {
    const pdfBase64 = await this.billGenerator.getElectronicBill(soldCart);
    const media = new MessageMedia(
      "application/pdf",
      pdfBase64,
      "Microtech_Factura.pdf"
    );
    return media;
  }
}
