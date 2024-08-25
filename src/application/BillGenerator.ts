import IBillGenerator from "../domain/interfaces/application/IBillGenerator";
import SoldCart from "../domain/model/soldCart/SoldCart";
import PDFCreator from "../helper/PDFCreator";

export default class BillGenerator implements IBillGenerator {
  constructor(private readonly pdfCreator: PDFCreator) {}

  async getElectronicBill(soldCart: SoldCart): Promise<string> {
    const pdf = await this.pdfCreator.createPDF(soldCart);
    const base64String = Buffer.from(pdf).toString("base64");
    return base64String;
  }
}
