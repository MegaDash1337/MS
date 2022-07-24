import { User } from "../ProtobufModels/User_pb.d.ts";
import { SERVER_API } from "./APIConfig.ts";
import * as StringProp from "../ProtobufModels/SingleStringProperty_pb.d.ts";

async function SendRegister(
  name: string,
  password: string,
  shortName: string
): Promise<void> {
  var user = new User();
  user.setName(name);
  user.setPassword(password);
  user.setShortname(shortName);
  user.setRegistred(Date.now() / 1000);
}

async function CheckFreeShortname(shortName: string): Promise<boolean> {
  const param: StringProp.SingleStringProperty =
    new StringProp.SingleStringProperty();

  console.log(Object.getOwnPropertyNames(param));

  param.setProperty(shortName);

  $.post(
    SERVER_API + "users/check_shortname",
    param.serializeBinary(),
    (result) => {
      console.log(result);
    }
  );

  return true;
}

//async function CheckFreeEmail(email: string): boolean {}

export { SendRegister, CheckFreeShortname };
