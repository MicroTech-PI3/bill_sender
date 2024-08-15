import SoldCart from "../../model/soldCart/SoldCart";

export default interface IRSoldCart {
  getSoldCart(id: number): SoldCart;
  getSoldCarts(): SoldCart[];
}
