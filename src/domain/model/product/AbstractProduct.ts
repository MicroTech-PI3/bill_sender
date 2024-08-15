export default abstract class AbstractProduct {
  constructor(
    protected name: string,
    protected price: number,
    protected description: string,
    protected quantity: number
  ) {}

  public getName() {
    return this.name;
  }

  public getPrice() {
    return this.price;
  }

  public getDescription() {
    return this.description;
  }

  public getQuantity() {
    return this.quantity;
  }

  public setName(name: string) {
    this.name = name;
  }

  public setPrice(price: number) {
    this.price = price;
  }

  public setDescription(description: string) {
    this.description = description;
  }

  public setQuantity(quantity: number) {
    this.quantity = quantity;
  }

  public abstract isNull(): boolean;
}
