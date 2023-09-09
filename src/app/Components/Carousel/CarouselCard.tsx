import Image from "next/image";
import images from "@/app/Constants/images";
interface IProps {
  description: string;
  image: string;
  title: string;
  width: number | string;
}

function CarouselCard({ description, image, title, width }: IProps) {
  return (
    <div style={{ width:`${width}px` }} className="group cursor-default">
      <div className="overflow-hidden ">
        <Image
          src={images[image]}
          alt={title}
          className=" transition-all duration-500 ease-in-out group-hover:scale-110"
        />
      </div>
      <div className="px-[40px] py-[30px] min-h-[240px] bg-secondary hover:bg-hover">
        <h3 className="text-fs-300 font-bold mb-4">{title}</h3>
        <p className="text-fs-200">{description}</p>
      </div>
    </div>
  );
}

export default CarouselCard;
