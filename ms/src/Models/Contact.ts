export default class Contact {
  constructor(id: number, name: string, shortName: string) {
    this.Id = id;
    this.Name = name;
    this.Shortname = shortName;
  }

  public Id: number;
  public Name: string;
  public Shortname: string;
}
