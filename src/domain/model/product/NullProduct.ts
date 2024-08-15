import NullCategory from "../category/NullCategory";
import NullSupplier from "../supplier/NullSupplier";
import Supplier from "../supplier/Supplier";
import AbstractProduct from "./AbstractProduct";

export default class NullProduct extends AbstractProduct {
  constructor() {
    super(
      "Name not found",
      0,
      "Description not found",
      0,
      new NullSupplier(),
      new NullCategory()
    );
  }

  public setName(name: string) {
    return;
  }

  public setPrice(price: number) {
    return;
  }

  public setDescription(description: string) {
    return;
  }

  public setQuantity(quantity: number) {
    return;
  }

  public setSupplier(supplier: Supplier) {
    return;
  }

  public isNull(): boolean {
    return true;
  }
}
