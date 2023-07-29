import images from "@/app/Constants/images";
import Image from "next/image";
import HowWeWorkCard from "./HowWeWorkCard";

function HowWeWork() {
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
    <section className="bg-secondary text-black p-1">
      <div className="max-w-[1200px] flex gap-20 mx-auto py-24 flex-wrap justify-center">
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
        <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-10 w-full max-w-[670px] place-items-center">
          {cardDetails.map((data, index) => {
            return (
              <HowWeWorkCard
                title={data.title}
                desc={data.desc}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HowWeWork;
