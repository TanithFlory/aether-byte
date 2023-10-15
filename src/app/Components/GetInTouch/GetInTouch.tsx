import { WrapperDiv } from "@/app/Utils/WrapperDiv";
import images from "@/app/Constants/images";
import Image from "next/image";
import PrimaryButton from "@/app/Utils/PrimaryButton";
import Link from "next/link";
function GetInTouch() {
  return (
    <section className="bg-primary text-white">
      <WrapperDiv className="py-24">
        <div className="relative h-[300px] w-full ">
          <Image
            src={images.getInTouch.src}
            alt="Get In Touch"
            className="object-cover absolute top-0 left-0 w-full h-[300px] rounded-xl"
            width={750}
            height={300}
          />
          <div className="h-full z-5 relative flex flex-col justify-center items-center bg-[rgba(0,0,0,0.5)]">
            <h2 className="text-fs-600 font-bold">Get in touch with us.</h2>
            <Link href={"/contact"} className="max-w-[236px] w-full">
              <PrimaryButton color="lightGreen">Contact us</PrimaryButton>
            </Link>
          </div>
        </div>
      </WrapperDiv>
    </section>
  );
}

export default GetInTouch;
