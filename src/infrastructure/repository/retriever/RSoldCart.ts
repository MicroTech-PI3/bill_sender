import IRSoldCart from "../../../domain/interfaces/infrastructure/IRSoldCart";
import SoldCart from "../../../domain/model/soldCart/SoldCart";
import SoldCartProvider from "../provider/SoldCartProvider";

export default class RSoldCart implements IRSoldCart {
  constructor(private readonly soldCartProvider: SoldCartProvider) {}

  async getSoldCart(id: number): Promise<SoldCart> {
    return await this.soldCartProvider.find(id);
  }
  async getSoldCarts(): Promise<SoldCart[]> {
    return await this.soldCartProvider.findAll();
  }
}
