import Cart from "../cart/Cart";
import Time from "../time/Time";

export default abstract class AbstractSoldCart {
  constructor(
    protected cart: Cart,
    protected time: Time,
    protected date: Date
  ) {}

  public getCart() {
    return this.cart;
  }

  public getTime() {
    return this.time;
  }

  public getDate() {
    return this.date;
  }

  public setCart(cart: Cart) {
    this.cart = cart;
  }

  public setTime(time: Time) {
    this.time = time;
  }

  public setDate(date: Date) {
    this.date = date;
  }

  public abstract isNull(): boolean;
}
