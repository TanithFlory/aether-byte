import { SectionWrapper, WrapperDiv } from "@/app/Utils/Wrappers";
import images from "@/app/Constants/images";
import Image from "next/image";
interface stat {
  count: string;
  countName: string;
}
interface IProps {
  stats: stat[];
  title: string;
}
function WorkStats({ title, stats }: IProps) {
  return (
    <SectionWrapper className="bg-black">
      <WrapperDiv className="max-md:flex-col-reverse max-md:items-center">
        <div className="basis-[50%] max-w-[50%] px-4">
          <h2 className="text-fs-300 mb-4">{title}</h2>
          <div className="flex flex-wrap gap-3">
            {stats.map(({ count, countName }, index) => {
              return (
                <div className="h-[145px] w-[145px] mb-6">
                  <h2 className="text-fs-700 font-bold gradient-text">
                    {count}
                  </h2>
                  <h2 className="text-fs-200 font-bold">{countName}</h2>
                </div>
              );
            })}
          </div>
        </div>
        <div className="basis-[50%] max-w-[50%] px-4">
          <Image src={images.workStats} alt="work-stats-img"  className="mx-auto"/>
        </div>
      </WrapperDiv>
    </SectionWrapper>
  );
}

export default WorkStats;
