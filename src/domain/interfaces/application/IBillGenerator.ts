import SoldCart from "../../model/soldCart/SoldCart";

export default interface IBillGenerator {
  getElectronicBill(soldCart: SoldCart): Promise<string>;
}
