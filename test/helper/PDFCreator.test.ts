import Customer from "../../src/domain/model/customer/Customer";
import Employee from "../../src/domain/model/employee/Employee";
import Product from "../../src/domain/model/product/Product";
import SoldCart from "../../src/domain/model/soldCart/SoldCart";
import Supplier from "../../src/domain/model/supplier/Supplier";
import PDFCreator from "../../src/helper/PDFCreator";

describe("PDFCreator", () => {
  let pdfCreator: PDFCreator;
  let soldCart: SoldCart;

  beforeEach(() => {
    pdfCreator = new PDFCreator();
    const customer = new Customer(
      "Isabel",
      "González",
      3007892894,
      "hola@hola.com",
      19023
    );
    const employee = new Employee(
      "Isabel",
      "González",
      3007892894,
      "hola@hola.com",
      19023,
      "Avenida 2"
    );
  });

  it("should get a PDF", async () => {});
});
