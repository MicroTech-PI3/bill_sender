export default interface IBillGenerator {
  getElectronicBill(soldCartId: number): Promise<void>;
}
