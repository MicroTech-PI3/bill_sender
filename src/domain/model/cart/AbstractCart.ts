import Employee from "../employee/Employee";

export default abstract class AbstractCart {
  constructor(protected employee: Employee, protected products: Purch) {}
}
