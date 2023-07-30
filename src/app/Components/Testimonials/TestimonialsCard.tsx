interface IProps {
  desc: string;
  name: string;
  role: string;
}

function TestimonialsCard({ desc, name, role }: IProps) {
  return (
    <div className="flex-grow-0 flex-shrink-0 flex-auto w-full max-w-[843px]">
      <p className="text-fs-500 text-bold text-justify">{desc}</p>
      <div className="flex items-center gap-3 mt-10 ">
        <div className="h-[50px] w-[50px] bg-primary rounded-full"></div>
        <div>
          <h5>{name}</h5>
          <span>{role}</span>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsCard;
