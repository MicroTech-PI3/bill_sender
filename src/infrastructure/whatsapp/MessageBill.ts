import { MessageMedia } from "whatsapp-web.js";
import IBillGenerator from "../../domain/interfaces/application/IBillGenerator";
import IMessageBill from "../../domain/interfaces/infrastructure/whatsapp/helper/IMessageBill";

export default class MessageBill implements IMessageBill {
  constructor(private readonly billGenerator: IBillGenerator) {}

  async getFileMedia(soldCartId: number): Promise<MessageMedia> {
    const pdfBase64 = await this.billGenerator.getElectronicBill(soldCartId);
    const media = new MessageMedia(
      "application/pdf",
      pdfBase64,
      "Microtech_Factura.pdf"
    );
    return media;
  }
}
