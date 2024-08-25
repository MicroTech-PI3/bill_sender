import PDFCreator from "../../src/helper/PDFCreator";

describe("PDFCreator", () => {
  let pdfCreator: PDFCreator;

  beforeEach(() => {
    pdfCreator = new PDFCreator();
  });

  it("should get a PDF", async () => {
    const pdf = await pdfCreator.getPDF();
  });
});
