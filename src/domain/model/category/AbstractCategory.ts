export default abstract class AbstractCategory {
  constructor(protected name: string, protected description: string) {}

  public getName() {
    return this.name;
  }

  public getDescription() {
    return this.description;
  }

  public setName(name: string) {
    this.name = name;
  }

  public setDescription(description: string) {
    this.description = description;
  }

  public abstract isNull(): boolean;
}
