import AbstractProduct from "./AbstractProduct";

export default class NullProduct extends AbstractProduct {
  constructor() {
    super("Name not found", 0, "Description not found", 0);
  }

  public setName(name: string) {
    return;
  }

  public setPrice(price: number) {
    return;
  }

  public setDescription(description: string) {
    return;
  }

  public setQuantity(quantity: number) {
    return;
  }

  public isNull(): boolean {
    return true;
  }
}
