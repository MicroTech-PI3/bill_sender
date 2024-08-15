import Employee from "../employee/Employee";
import NullEmployee from "../employee/NullEmployee";
import PurchaseItem from "../purchaseItem/PurchaseItem";
import AbstractCart from "./AbstractCart";

export default class NullCart extends AbstractCart {
  constructor() {
    super(new NullEmployee(), [], -1);
  }

  public isNull(): boolean {
    return true;
  }

  public setEmployee(employee: Employee) {
    return;
  }

  public setProducts(products: PurchaseItem[]) {
    return;
  }
}
