import { MessageMedia } from "whatsapp-web.js";

export default interface IMessageBill {
  getFileMedia(soldCartId: number): Promise<MessageMedia>;
}
