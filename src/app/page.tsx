import Image from "next/image";
import { Button, Dropdown, DropdownItem, HelperText, Label, TextInput } from "flowbite-react";
import updateUserProfile from "./server";

export default function Home() {

  async function submitSurvey(formData: FormData) {
    'use server';

    const rawFormData = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      age: formData.get("age"),
      gender: formData.get("gender"),
    }
    await updateUserProfile(rawFormData)
  }

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">


        {/* Main Form Component */}
        <form className="flex max-w-md flex-col gap-4" action={submitSurvey}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="firstName">First Name</Label>
            </div>
            <HelperText>
              Enter first name.
            </HelperText>
            <TextInput name="firstName" id="firstName" type="text" sizing="md" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="lastName">Last Name</Label>
            </div>
            <HelperText>
              Enter last name.
            </HelperText>
            <TextInput name="lastName" id="lastName" type="text" sizing="md" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="age">Age</Label>
            </div>
            <HelperText>
              Enter age.
            </HelperText>
            <TextInput name="age" id="age" type="text" sizing="md" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="gender">Gender</Label>
            </div>
            <HelperText>
              Enter gender.
            </HelperText>
            {/* On select update the label */}
            <Dropdown name="gender" id="gender" label="Select a gender">
              <DropdownItem value="male">Male</DropdownItem>
              <DropdownItem value="female">Female</DropdownItem>
              <DropdownItem value="other">Other</DropdownItem>
            </Dropdown>
          </div>

          <Button type="submit">Submit</Button>
        </form>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
