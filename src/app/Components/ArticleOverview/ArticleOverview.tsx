import { WrapperDiv } from "@/app/Utils/Wrappers";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface IProps {
  content: React.ReactNode;
  image: StaticImageData;
  id: string;
}

function ArticleOverview({ content, image, id }: IProps) {
  return (
    <article className="bg-secondary text-black py-10 px-4" id={id}>
      <WrapperDiv className="flex-col">
        <div className="">
          <h3 className="font-bold text-fs- mb-2">Overview</h3>
          <div className="text-fs-400 mb-6">Making Banks Future-ready</div>
        </div>
        <div className="flex gap-8 justify-between max-md:flex-col-reverse max-md:items-center">
          <div className="basis-[45%]">{content}</div>
          <div className="flex-1">
            <Image src={image} className="rounded-lg" alt="overview-img" />
          </div>
        </div>
      </WrapperDiv>
    </article>
  );
}

export default ArticleOverview;
