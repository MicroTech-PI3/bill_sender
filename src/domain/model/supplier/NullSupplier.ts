import NullAbstractPerson from "../person/NullAbstractPerson";

export default class NullSupplier extends NullAbstractPerson {
  private city: string;

  constructor() {
    super();
    this.city = "City not found";
  }

  public getCity() {
    return this.city;
  }

  public setCity(city: string) {
    return;
  }
}
