import IRSoldCart from "../../../domain/interfaces/driven/IRSoldCart";
import SoldCart from "../../../domain/model/soldCart/SoldCart";

export default class RSoldCart implements IRSoldCart {
  getSoldCart(id: number): SoldCart {}
  getSoldCarts(): SoldCart[] {}
}
