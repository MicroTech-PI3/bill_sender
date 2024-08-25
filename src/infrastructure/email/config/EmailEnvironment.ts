export default class EmailEnvironment {
  public readonly smtpUser: string;
  public readonly smtpPassword: string;
  public readonly smtpPort: number;
  public readonly smtpServer: string;

  constructor() {
    this.smtpServer = process.env.SMTP_SERVER ?? "";
    this.smtpPort = parseInt(process.env.SMTP_PORT ?? "587");
    this.smtpUser = process.env.SMTP_LOGIN ?? "";
    this.smtpPassword = process.env.SMTP_PASSWORD ?? "";
  }
}
