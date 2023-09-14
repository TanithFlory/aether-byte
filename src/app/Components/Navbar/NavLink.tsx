import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";
interface DropDownItem {
  title: string;
  items: string[];
}

interface IProps {
  dropdownItems: DropDownItem[];
  title: string;
}

function NavLink({ title, dropdownItems }: IProps) {
  return (
    <li className="pl-[10px] pr-[6px] flex items-center text-primary cursor-pointer hover:bg-hover relative custom-navlink-hover group">
      <div className="text-fs-200">{title}</div>
      <div className="group-hover:rotate-180">
        {dropdownItems.length ? (
          <RiArrowDropDownLine className="h-10 w-6" />
        ) : null}
      </div>
      {dropdownItems.length ? (
        <ul className="cursor-default shadow-lg rounded-bl-md rounded-br-md max-w-[1200px] flex gap-4 p-[18px] bg-white transition-all duration-500 ease-in-out opacity-0 invisible group-hover:visible absolute top-[70px] left-[50%] translate-x-[-50%]">
          {dropdownItems?.map((data, index) => {
            return (
              <li key={index}>
                {data.title && (
                  <h3 className="font-bold text-fs-200 border-b-2 border-[#bbbbbbc3] pb-[10px] whitespace-nowrap">
                    {data.title}
                  </h3>
                )}
                <ul>
                  {data.items.map((item, index) => {
                    return (
                      <li
                        className="text-fs-100 font-bold py-[10px] whitespace-nowrap"
                        key={`dropdown-item-${index}`}
                      >
                        <Link href={`/${item.toLowerCase().replace(" ", "-")}`}>
                          {item}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      ) : null}
    </li>
  );
}

export default NavLink;
