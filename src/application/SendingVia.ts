import ISendingVia from "../domain/interfaces/application/ISendingVia";
import ICustomerSetter from "../domain/interfaces/infrastructure/repository/setter/ICustomerSetter";

export default class SendingVia implements ISendingVia {
  constructor(private readonly customerSetter: ICustomerSetter) {}

  async setSendingVia(
    sendingVia: string,
    customerId: number
  ): Promise<boolean> {
    const viaRegex = /^(W|E|WE)$/;
    if (!viaRegex.test(sendingVia)) {
      throw new Error("Invalid sending via");
    }
    return await this.customerSetter.updateBillVia(sendingVia, customerId);
  }
}
