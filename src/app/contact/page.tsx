import Image from "next/image";
import images from "../Constants/images";
import ContactForm from "../Components/ContactForm/ContactForm";
import { WrapperDiv } from "../Utils/WrapperDiv";
import { AiOutlineMail } from "react-icons/ai";
function Contact() {
  return (
    <section className="bg-primary min-h-screen relative">
      <WrapperDiv className="pt-[92px] relative z-10 gap-10 min-h-screen items-center">
        <div className="max-w-[450px] flex flex-col gap-10">
          <h1 className="text-fs-700 font-bold">Get In Touch</h1>
          <p className="text-fs-300">
            Have a question? Connect with an Ambee expert to know how our
            climate intelligence can help your organization.
          </p>
          <a href="mailto:" className="flex items-center gap-4 text-fs-400">
            <AiOutlineMail className="h-[50px] w-[50px]"/>
            <span>contactus@aetherbyte.com</span>
          </a>
        </div>
        <ContactForm />
      </WrapperDiv>
      <Image
        src={images.contactLinesBg}
        alt="Background Lines"
        className="absolute top-0 h-full w-full object-cover z-0 opacity-[0.15]"
      />
    </section>
  );
}

export default Contact;
