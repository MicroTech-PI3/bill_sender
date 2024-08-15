import AbstractPerson from "./AbstractPerson";

export default abstract class NullAbstractPerson extends AbstractPerson {
  constructor() {
    super("Name not found", "Last name not found", 0o0, "Email not found");
  }

  public setName(name: string): void {
    return;
  }

  public setEmail(email: string): void {
    return;
  }

  public setLastName(lastName: string): void {
    return;
  }

  public setPhoneNumber(phoneNumber: number): void {
    return;
  }

  public isNull(): boolean {
    return true;
  }
}
