export default interface ICreateChatId {
  createIdByNumber(soldCartId: number): Promise<string>;
}
