import ICreateChatId from "../../../domain/interfaces/infrastructure/whatsapp/helper/ICreateChatId";

export default class CreateChatId implements ICreateChatId {
  public async createIdByNumber(phoneNumber: number): Promise<string> {
    return `57${phoneNumber}@c.us`;
  }
}
