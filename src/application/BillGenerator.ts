import IBillGenerator from "../domain/interfaces/driven/application/IBillGenerator";

export default class BillGenerator implements IBillGenerator {
  async getElectronicBill(soldCartId: number): Promise<void> {
    console.log(`Bill for sold cart ${soldCartId} generated`);
  }
}
