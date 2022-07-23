import User from "../ProtobufModels/User_pb.d";

async function SendRegister(
  name: string,
  password: string,
  shortName: string
): Promise<void> {
  var user = new User.User();
}
