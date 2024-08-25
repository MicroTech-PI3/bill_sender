import SoldCart from "../../model/soldCart/SoldCart";

export default interface IRSoldCart {
  getSoldCart(id: number): Promise<SoldCart>;
  getSoldCarts(): Promise<SoldCart[]>;
}
