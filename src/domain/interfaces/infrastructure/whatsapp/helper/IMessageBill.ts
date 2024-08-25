import { MessageMedia } from "whatsapp-web.js";

export default interface IMessageBill {
  getFileMedia(pdfBase64: string): Promise<MessageMedia>;
}
