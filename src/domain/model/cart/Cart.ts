import AbstractCart from "./AbstractCart";

export default class Cart extends AbstractCart {
  public isNull(): boolean {
    return false;
  }
}
