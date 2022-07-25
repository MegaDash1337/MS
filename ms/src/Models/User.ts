export default class User {
  constructor(
    name: string,
    password: string,
    email: string,
    shortName: string
  ) {
    this.Name = name;
    this.Password = password;
    this.Email = email;
    this.ShortName = shortName;
  }

  public Name: string;
  public Password: string;
  public Email: string;
  public ShortName: string;
}
