"use client";

import PrimaryButton from "@/app/Utils/PrimaryButton";
import TextInput from "@/app/Utils/TextInput";
import { BasicDetails, DropDown } from "./FormInputs";
import { useState } from "react";
import { IContactForm } from "@/app/types";

function ContactForm() {
  const [formData, setFormData] = useState<IContactForm>({
    full_name: "",
    email_id: "",
    organization: "",
    query: "",
    message: "",
  });

  function formChangeHandler(
    e: React.FormEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const target = e.target as HTMLInputElement;
    setFormData((prev) => {
      return {
        ...prev,
        [target.name]: target.value,
      };
    });
  }
  return (
    <form className="bg-[#1a1b3d] p-6 h-[400px] w-full max-w-[550px] flex-[1 1 100%]">
      <div className="flex flex-col gap-4 h-full ">
        <div className="flex gap-4 flex-wrap items-center justify-center">
          <BasicDetails onChange={formChangeHandler} formData={formData}/>
          <DropDown onChange={formChangeHandler} formData={formData}/>
        </div>
        <div className="flex flex-col h-full">
          <label className="mb-2 text-fs-100">Message</label>
          <TextInput
            placeholder="Enter your full Email ID"
            type="text"
            textArea={true}
            className="h-[70%] resize-none"
            maxLength={208}
          />
        </div>
        <button
          className="w-full flex justify-center cursor-pointer"
          type="submit"
        >
          <PrimaryButton color="secondary" className="max-w-[250px]">
            Submit
          </PrimaryButton>
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
