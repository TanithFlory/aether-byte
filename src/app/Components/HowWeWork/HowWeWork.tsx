import images from "@/app/Constants/images";
import Image from "next/image";
import HowWeWorkCards from "./HowWeWorkCards";
import { SectionWrapper, WrapperDiv } from "@/app/Utils/Wrappers";

function HowWeWork() {
  return (
    <SectionWrapper className="bg-secondary text-black p-1">
      <WrapperDiv className="gap-20">
        <div className="max-w-[405px] flex flex-col gap-4">
          <h2 className="text-fs-700 font-bold">How we work</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
          <div className="flex gap-2 cursor-pointer">
            <span className="text-darkblue font-bold">
              Get in touch with us{" "}
            </span>
            <Image src={images.arrowRight} alt="Arrow Right" />
          </div>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-10 w-full max-w-[670px] place-items-center">
          <HowWeWorkCards />
        </div>
      </WrapperDiv>
    </SectionWrapper>
  );
}

export default HowWeWork;
