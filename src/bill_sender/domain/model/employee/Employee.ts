import AbstractPerson from "../person/AbstractPerson";

export default class Employee extends AbstractPerson {
  private address: string;

  constructor(
    name: string,
    lastName: string,
    phoneNumber: number,
    email: string,
    address: string
  ) {
    super(name, lastName, phoneNumber, email);
    this.address = address;
  }

  public getAddress() {
    return this.address;
  }

  public setAddress(address: string) {
    this.address = address;
  }

  public isNull(): boolean {
    return false;
  }
}
