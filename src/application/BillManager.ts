import IRSoldCart from "../domain/interfaces/infrastructure/IRSoldCart";
import EmailSender from "../infrastructure/email/EmailSender";
import WhatsApp from "../infrastructure/whatsapp/WhatsApp";

export default class BillManager {
  constructor(
    private readonly whatsapp: WhatsApp,
    private readonly emailSender: EmailSender,
    private readonly rSoldCart: IRSoldCart,
    private readonly sendingVia: ISendingVia
  ) {}

  async sendBill(soldCartId: number, bill: string): Promise<void> {
    await this.whatsapp.sendBillToCustomer(customerId, bill);
    await this.emailSender.sendBillToCustomer(customerId, bill);
  }
}
