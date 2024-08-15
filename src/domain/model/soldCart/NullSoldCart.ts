import Cart from "../cart/Cart";
import NullCart from "../cart/NullCart";
import Time from "../time/Time";
import AbstractSoldCart from "./AbstractSoldCart";

export default class NullSoldCart extends AbstractSoldCart {
  constructor() {
    super(new NullCart(), new Time("00:00:00"), new Date(), -1);
  }

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
