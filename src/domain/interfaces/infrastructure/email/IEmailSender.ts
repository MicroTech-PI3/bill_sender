export default interface IEmailSender {
  sendEmail(soldCartId: number, message: string): Promise<boolean>;
}
