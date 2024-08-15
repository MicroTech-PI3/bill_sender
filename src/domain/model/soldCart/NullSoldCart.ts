import Cart from "../cart/Cart";
import Time from "../time/Time";
import AbstractSoldCart from "./AbstractSoldCart";

export default class NullSoldCart extends AbstractSoldCart {
  public isNull(): boolean {
    return true;
  }

  public setCart(cart: Cart) {
    return;
  }

  public setTime(time: Time) {
    return;
  }

  public setDate(date: Date) {
    return;
  }
}
