export default interface IBillManager {
  sendBill(soldCartId: number): Promise<boolean>;
}
