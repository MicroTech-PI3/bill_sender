import IRSoldCart from "../../../domain/interfaces/infrastructure/IRSoldCart";
import ICreateChatId from "../../../domain/interfaces/infrastructure/whatsapp/helper/ICreateChatId";

export default class CreateChatId implements ICreateChatId {
  constructor(private readonly rSoldCart: IRSoldCart) {}

  public async createIdByNumber(soldCartId: number): Promise<string> {
    const customersPhoneNumber = await this.rSoldCart
      .getSoldCart(soldCartId)
      .then((soldCart) => {
        return soldCart.getCustomer().getPhoneNumber();
      })
      .catch((error) => {
        console.error(error);
        return -1;
      });
    return `57${customersPhoneNumber}@c.us`;
  }
}
