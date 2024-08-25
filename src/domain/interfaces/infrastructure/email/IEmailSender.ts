export default interface IEmailSender {
  sendEmail(
    email: string,
    pdfBase64: string,
    message: string
  ): Promise<boolean>;
}
