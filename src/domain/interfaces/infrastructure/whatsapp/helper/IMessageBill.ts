import { MessageMedia } from "whatsapp-web.js";
import SoldCart from "../../../../model/soldCart/SoldCart";

export default interface IMessageBill {
  getFileMedia(soldCart: SoldCart): Promise<MessageMedia>;
}
