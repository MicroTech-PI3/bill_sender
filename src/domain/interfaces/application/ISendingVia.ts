export default interface ISendingVia {
  setSendingVia(sendingVia: string, customerId: number): Promise<boolean>;
}
