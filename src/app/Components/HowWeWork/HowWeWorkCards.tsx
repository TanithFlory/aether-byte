import images from "@/app/Constants/images";
import Image from "next/image";

function HowWeWorkCards() {
  const cardDetails = [
    {
      title: "Strategy",
      desc: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .",
    },
    {
      title: "Wireframing",
      desc: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .",
    },
    {
      title: "Design",
      desc: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .",
    },
    {
      title: "Development",
      desc: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .",
    },
  ];
  return (
    <>
      {cardDetails.map(({ title, desc }, index) => {
        return (
          <div className="max-w-[280px]" key={index}>
            <div className="relative inline-block">
              <Image
                src={images.numberBg}
                alt="number"
                className="bg-[#2405F2] rounded-xl"
              />
              <span className="font-bold text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                0{index + 1}
              </span>
            </div>
            <h3 className="text-fs-500 font-bold">{title}</h3>
            <p>{desc}</p>
          </div>
        );
      })}
    </>
  );
}
export default HowWeWorkCards;
