import AbstractPerson from "../person/AbstractPerson";

export default class Supplier extends AbstractPerson {
  private city: string;

  constructor(
    name: string,
    lastName: string,
    phoneNumber: number,
    email: string,
    city: string
  ) {
    super(name, lastName, phoneNumber, email);
    this.city = city;
  }

  public getCity() {
    return this.city;
  }

  public setCity(city: string) {
    this.city = city;
  }

  public isNull(): boolean {
    return false;
  }
}
