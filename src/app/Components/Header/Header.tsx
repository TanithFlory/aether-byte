import Image from "next/image";
import images from "@/app/Constants/images";
import { WrapperDiv } from "@/app/Utils/WrapperDiv";
function Header() {
  return (
    <header className="bg-primary min-h-[700px]">
      <WrapperDiv className="gap-4 pb-3 items-center min-h-[700px] pt-[92px]">
        <div className="max-w-[582px]">
          <h1 className="text-fs-800 font-bold text-center lg:leading-[72px]">
            Providing stellar tech solutions for early startups!
          </h1>
          <p className="mt-6 text-fs-300 font-light text-clr-text text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>
        <div className="h-full w-full max-w-[600px] max-h-[361px]">
          <Image
            src={images.desktopImage}
            alt="Desktop"
            width={600}
            height={361}
          />
        </div>
      </WrapperDiv>
    </header>
  );
}

export default Header;
