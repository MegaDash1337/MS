# Use this small program to generate updated models after editing .proto files

from glob import glob
import os
from typing import Callable


PLUGIN_PATH = "D:/VS Code/JS/MS/ms/node_modules/.bin/protoc-gen-ts.cmd"


proto_path = "D:/VS Code/JS/MS/Protobuf Sources"
output_ts_path = "D:/VS Code/JS/MS/ms/src/ProtobufModels"
output_csharp_path = "C:/"


def main():
    change_input_proto_path = input(f"The default path to .proto files is {proto_path}. Do you want to change it? (y/n): ")

    if change_input_proto_path == "y":
        path = input("Enter new path: ")
        change_proto_path(path)
    
    change_output_ts_path = input(f"The default TypeScript output path is {output_ts_path} Do you want to change it? (y/n): ")

    if change_output_ts_path == "y":
        path = input("Enter new path: ")
        change_ts_path(path)

    change_output_csharp_path = input(f"The default C# output path is {output_csharp_path} Do you want to change it? (y/n): ")

    if change_output_csharp_path == "y":
        path = input("Enter new path: ")
        change_csharp_path(path)


    files = filter(lambda f: os.path.isfile(f"{proto_path}/{f}"), os.listdir(proto_path))

    for i in range(len(files)):
        print(f"{i}. {files[i]}")

    choice = int(input("Choose file to update and type its number or type -1 to update all files: "))

    if (choice == -1):
        for file in files:
            update_file(f"{proto_path}/{file}")
            ending()
    
    try:
        update_file(f"{proto_path}/{files[choice]}")
        ending()
    except IndexError:
        print("Invalid index!")
        exit(-1)



def change_proto_path(path):
    if not os.path.exists(path):
        print("This path does not exist. Exiting...")
        exit(-1)

    global proto_path

    proto_path = path


def change_ts_path(path):
    if not os.path.exists(path):
        print("This path does not exist. Exiting...")
        exit(-1)

    global output_ts_path

    output_ts_path = path


def change_csharp_path(path):
    if not os.path.exists(path):
        print("This path does not exist. Exiting...")
        exit(-1)

    global output_csharp_path

    output_csharp_path = path


def filter(fn: Callable, list: list):
    temp = []

    for el in list:
        if fn(el):
            temp.append(el)

    return temp


def update_file(path):
    command = f"protoc --plugin=protoc-gen-ts=\"{PLUGIN_PATH}\" --ts_out=\"{output_ts_path}\" --csharp_out=\"{output_csharp_path}\" --proto_path=\"{proto_path}\"  \"{path}\""

    try:
        os.system(command)
    except:
        print("Error!")
        exit(-1)

    print(f"Updated file {path}, files created at {output_ts_path} and {output_csharp_path}")


def ending():
    print("Done!")
    exit(0)


if __name__ == "__main__":
    main()
