import { WrapperDiv, CardsWrapper } from "@/app/Utils/Wrappers";
import servicesData from "./ServicesData";
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <section className="bg-secondary text-black px-4">
      <WrapperDiv>
        <div className="text-center">
          <span className="font-bold text-fs-300">Our Services</span>
          <div className="flex justify-center items-center gap-4 flex-wrap">
            <h2 className="text-fs-600 font-bold max-w-[550px]">
              We all have to eat, so why not do it beautifully?
            </h2>
            <p className="max-w-[550px]">
              Through True Rich Attended does no end it his mother since
              favourable real had half every him case in packages enquire we up
              ecstatic.. Through True Rich Attended does no end it his mother
            </p>
          </div>
        </div>
        <CardsWrapper className="w-full mt-4">
          {servicesData.map(({ id, title, desc, Icon }) => {
            return (
              <ServiceCard Icon={Icon} key={id} title={title} desc={desc} />
            );
          })}
        </CardsWrapper>
      </WrapperDiv>
    </section>
  );
}
export default Services;
