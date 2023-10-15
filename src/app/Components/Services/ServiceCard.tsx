import Card from "@/app/Utils/Card";

interface IProps {
  title: string;
  Icon: JSX.Element;
  desc: string;
}

function ServiceCard({ title, Icon, desc }: IProps) {
  return (
    <Card className="bg-primary text-white relative min-h-[400px]  cursor-default transition-all duration-500 ease-in hover:bg-secondary hover:text-primary group">
      <div className="flex flex-col gap-3 items-center z-10">
        <div className="w-[36px] aspect-[1/1] [&>svg]:h-full [&>svg]:w-full">
          {Icon}
        </div>
        <h2 className="text-fs-300 font-bold">{title}</h2>
        <p className="text-center">{desc}</p>
      </div>
      <div className="h-full w-full absolute top-0 left-0 bg-lightGreen z-0 opacity-0 [clip-path:circle(45%_at_50%_50%)] group-hover:animate-clipPath group-hover:opacity-100"></div>
    </Card>
  );
}
export default ServiceCard;
