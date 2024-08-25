import IBillGenerator from "../domain/interfaces/driven/application/IBillGenerator";
import IRSoldCart from "../domain/interfaces/driven/IRSoldCart";
import PDFCreator from "../helper/PDFCreator";

export default class BillGenerator implements IBillGenerator {
  constructor(
    private readonly pdfCreator: PDFCreator,
    private readonly rSoldCart: IRSoldCart
  ) {}

  async getElectronicBill(soldCartId: number): Promise<string> {
    const soldCart = await this.rSoldCart.getSoldCart(soldCartId);
    const pdf = await this.pdfCreator.createPDF(soldCart);
    const base64String = Buffer.from(pdf).toString("base64");
    return base64String;
  }
}
