import AbstractPerson from "../person/AbstractPerson";

export default class Customer extends AbstractPerson {
  public isNull(): boolean {
    return false;
  }
}
