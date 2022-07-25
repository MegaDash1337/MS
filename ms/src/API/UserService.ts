import SingleStringProperty from "../Models/SingleStringProperty.ts";
import User from "../Models/User";
import { SERVER, SERVER_API } from "./APIConfig.ts";

async function CheckShortname(shortName: string): Promise<boolean | void> {
  const sn = new SingleStringProperty(shortName);

  const response = await fetch(SERVER_API + "users/check_shortname/", {
    method: "POST",
    body: JSON.stringify(sn),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await response.json();
}

async function Register(user: User): Promise<User | SingleStringProperty> {
  const response = await fetch(SERVER_API + "users/register/", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error((await response.json()).property);
  }

  return await response.json();
}

async function GetByShortName(shortName: string) {
  const response = await fetch(SERVER_API + "users/by_short_name/", {
    method: "POST",
    body: JSON.stringify(new SingleStringProperty(shortName)),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await response.json();
}

export { CheckShortname, Register, GetByShortName };
