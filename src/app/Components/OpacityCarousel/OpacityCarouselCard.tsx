import { WrapperDiv } from "@/app/Utils/Wrappers";
import { ICarouselCard } from "@/app/types";
import Image from "next/image";

interface IProps extends ICarouselCard {
  visibility: boolean;
}

function OpacityCarouselCard({
  image,
  description,
  title,
  visibility,
}: IProps) {
  return (
    <div
      className={`h-full absolute w-full ${visibility && "animate-fadeIn"} ${
        !visibility ? "opacity-0 z-0" : " "
      }`}
    >
      <div>
        <Image src={image} alt={`${title}-img`} fill className="object-cover" />
      </div>
      <WrapperDiv className="h-full w-full">
        <h1 className="text-left">Hello</h1>
      </WrapperDiv>
    </div>
  );
}

export default OpacityCarouselCard;
