import Employee from "../employee/Employee";
import PurchaseItem from "../purchaseItem/PurchaseItem";

export default abstract class AbstractCart {
  constructor(
    protected employee: Employee,
    protected products: PurchaseItem[]
  ) {}

  public getEmployee() {
    return this.employee;
  }

  public getProducts() {
    return this.products;
  }

  public setEmployee(employee: Employee) {
    this.employee = employee;
  }

  public setProducts(products: PurchaseItem[]) {
    this.products = products;
  }

  public abstract isNull(): boolean;
}
