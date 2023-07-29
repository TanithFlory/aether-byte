import images from "@/app/Constants/images";
import Image from "next/image";

function FeaturesCards() {
  const cardDetails = [
    {
      title: "Uses Client First",
      desc: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
    },
    {
      title: "Two Free Revision Round",
      desc: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
    },
    {
      title: "Template Customization",
      desc: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
    },
    {
      title: "24/7 Support",
      desc: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
    },
    {
      title: "Quick Delivery",
      desc: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
    },
    {
      title: "Hands-on approach",
      desc: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
    },
  ];
  return (
    <>
      {cardDetails.map(({ title, desc }, index) => {
        return (
          <div
            className="bg-white rounded min-h-[316px] text-black p-10 flex flex-col align-center justify-center gap-5"
            key={index}
          >
            <Image src={images[`featureIcon${index}`]} alt="Feature Icon" />
            <h3 className="font-bold text-fs-300">{title}</h3>
            <p>{desc}</p>
          </div>
        );
      })}
    </>
  );
}

export default FeaturesCards;
