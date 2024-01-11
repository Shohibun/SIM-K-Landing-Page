import React from "react";
import User from "../../images/user-profile.jpeg";
import {
  Button,
  Datepicker,
  FileInput,
  Label,
  Radio,
  TextInput,
} from "flowbite-react";
import { HiMail } from "react-icons/hi";

export default function ProfileContent() {
  return (
    <div className="container flex justify-center items-center mt-28">
      <div className="w-10/12 rounded-md shadow-2xl p-10">
        <h1 className="text-center font-bold text-4xl custom-font-color mb-10">
          My Profile
        </h1>

        <form action="" method="post">
          <div className="grid md:grid-cols-10 gap-10">
            <div className="md:col-span-4">
              <img
                src={User}
                alt="userProfile"
                className="w-10/12 rounded-full mx-auto"
              />

              <div className="w-3/5 mx-auto mt-4">
                <div>
                  <Label
                    htmlFor="file-upload-helper-text"
                    value="Upload file"
                  />
                </div>
                <FileInput
                  id="file-upload-helper-text"
                  helperText="SVG, PNG, JPG or GIF (MAX. 800x400px)."
                />
              </div>
            </div>

            <div className="md:col-span-6">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="username" value="Username" />
                </div>
                <TextInput
                  id="username"
                  type="text"
                  placeholder="liosa_cosplay"
                  className="w-96"
                  required
                  shadow
                />
              </div>

              <div>
                <div className="mb-2 mt-4 block">
                  <Label htmlFor="name" value="Name" />
                </div>
                <TextInput
                  id="name"
                  type="text"
                  placeholder="Liosa Cosplay"
                  className="w-96"
                  required
                  shadow
                />
              </div>

              <div>
                <div className="mb-2 mt-4 block">
                  <Label htmlFor="phoneNumber" value="Phone Number" />
                </div>
                <TextInput
                  id="phoneNumber"
                  type="text"
                  placeholder="+62782345678"
                  className="w-96"
                  required
                  shadow
                />
              </div>

              <div>
                <div className="mb-2 mt-4 mt-4 block">
                  <Label htmlFor="email" value="Email" />
                </div>
                <TextInput
                  id="email"
                  type="email"
                  icon={HiMail}
                  placeholder="liosacosplay@gmail.com"
                  className="w-96"
                  required
                  shadow
                />
              </div>

              <div>
                <div className="mb-2 mt-4 block">
                  <Label htmlFor="gender" value="Gender" />
                </div>
                <div className="flex items-center gap-2">
                  <Radio
                    id="male"
                    name="countries"
                    value="Male"
                    defaultChecked
                  />
                  <Label htmlFor="male">Male</Label>
                </div>
                <div className="flex items-center mt-1 gap-2">
                  <Radio id="female" name="countries" value="Female" />
                  <Label htmlFor="female">Female</Label>
                </div>
              </div>

              <div>
                <div className="mb-2 mt-4 block">
                  <Label htmlFor="dateOfBirth" value="Date of Birth" />
                </div>
                <Datepicker className="w-96" />
              </div>
            </div>
          </div>

          <Button className="custom-bg-color w-80 py-1 mx-auto mt-8">
            Save
          </Button>
        </form>
      </div>
    </div>
  );
}
