import { MessageMedia } from "whatsapp-web.js";
import IMessageBill from "../../domain/interfaces/infrastructure/whatsapp/helper/IMessageBill";

export default class MessageBill implements IMessageBill {
  async getFileMedia(pdfBase64: string): Promise<MessageMedia> {
    const media = new MessageMedia(
      "application/pdf",
      pdfBase64,
      "Microtech_Factura.pdf"
    );
    return media;
  }
}
