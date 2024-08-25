import NullCustomer from "../customer/NullCustomer";
import Employee from "../employee/Employee";
import NullEmployee from "../employee/NullEmployee";
import PurchaseItem from "../purchaseItem/PurchaseItem";
import AbstractSoldCart from "./AbstractSoldCart";

export default class NullSoldCart extends AbstractSoldCart {
  constructor() {
    super(new Date(), -1, new NullEmployee(), [], new NullCustomer());
  }

  public isNull(): boolean {
    return true;
  }

  public setDate(date: Date) {
    return;
  }

  public setId(id: number) {
    return;
  }

  public setEmployee(employee: Employee) {
    return;
  }

  public setProducts(products: PurchaseItem[]) {
    return;
  }

  public setCustomer(customer: NullCustomer) {
    return;
  }
}
