import Card from "@/app/Utils/Card";

interface IProps {
  title: string;
  Icon: JSX.Element;
  desc: string;
}

function ServiceCard({ title, Icon, desc }: IProps) {
  return (
    <Card className="bg-primary text-white relative">
      <div className="w-[36px] aspect-[1/1] [&>svg]:h-full [&>svg]:w-full">
        {Icon}
      </div>
      <h2 className="text-fs-300 font-bold">{title}</h2>
      <div>{desc}</div>
      {/*todo: clip-path starting from center, covering whole div*/}
      <div className="h-full w-full absolute top-0 left-0 test-animation bg-white"></div>
    </Card>
  );
}
export default ServiceCard;
