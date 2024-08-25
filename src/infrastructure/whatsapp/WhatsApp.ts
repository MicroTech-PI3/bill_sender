import { Client, LocalAuth } from "whatsapp-web.js";
import qrcode from "qrcode-terminal";
import ICreateChatId from "../../domain/interfaces/infrastructure/whatsapp/helper/ICreateChatId";
import IMessageBill from "../../domain/interfaces/infrastructure/whatsapp/helper/IMessageBill";
import SoldCart from "../../domain/model/soldCart/SoldCart";

export default class WhatsApp {
  private client: Client;
  constructor(
    private readonly createChatId: ICreateChatId,
    private readonly messageBill: IMessageBill
  ) {
    this.client = new Client({
      puppeteer: {
        headless: true,
        args: ["--no-sandbox"],
      },
      authStrategy: new LocalAuth({ dataPath: "sessions" }),
    });

    this.client.on("qr", (qr) => {
      qrcode.generate(qr, { small: true });
    });

    this.client.on("ready", async () => {
      console.log("Client is ready!");
    });

    this.client.initialize();
  }

  async sendMessage(soldCart: SoldCart, message: string): Promise<void> {
    await this.client.sendMessage(
      await this.createChatId.createIdByNumber(
        soldCart.getCustomer().getPhoneNumber()
      ),
      await this.messageBill.getFileMedia(soldCart),
      {
        caption: message,
      }
    );
  }
}
