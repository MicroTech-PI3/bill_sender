import NullAbstractPerson from "../person/NullAbstractPerson";
import ISupplier from "./types/ISupplier";

export default class NullSupplier
  extends NullAbstractPerson
  implements ISupplier
{
  city: string;
  brand: string;

  constructor() {
    super();
    this.city = "City not found";
  }

  public getCity() {
    return this.city;
  }

  public getBrand() {
    return this.brand;
  }

  public setCity(city: string) {
    return;
  }

  public setBrand(brand: string): void {
    return;
  }
}
