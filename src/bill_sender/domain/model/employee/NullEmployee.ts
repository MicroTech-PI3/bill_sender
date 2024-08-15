import NullAbstractPerson from "../person/NullAbstractPerson";

export default class NullEmployee extends NullAbstractPerson {
  private address: string;

  constructor() {
    super();
    this.address = "Address not found";
  }

  public getAddress() {
    return this.address;
  }

  public setAddress(address: string) {
    return;
  }
}
