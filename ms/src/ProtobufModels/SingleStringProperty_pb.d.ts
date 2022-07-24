// package: 
// file: SingleStringProperty.proto

import * as jspb from "google-protobuf";

export class SingleStringProperty extends jspb.Message {
  getProperty(): string;
  setProperty(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleStringProperty.AsObject;
  static toObject(includeInstance: boolean, msg: SingleStringProperty): SingleStringProperty.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SingleStringProperty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleStringProperty;
  static deserializeBinaryFromReader(message: SingleStringProperty, reader: jspb.BinaryReader): SingleStringProperty;
}

export namespace SingleStringProperty {
  export type AsObject = {
    property: string,
  }
}

