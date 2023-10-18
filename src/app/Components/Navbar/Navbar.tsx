import Image from "next/image";
import NavLink from "./NavLink";

const navLinkData = [
  {
    title: "Services",
    dropdownItems: [
      {
        title: "Digital Foundation",
        items: ["Cloud Computing", "Cyber Security"],
      },
      {
        title: "Digital Development",
        items: ["Web Development", "App Development"],
      },
      {
        title: "Digital Process Operations",
        items: ["Digital Content", "Cognitive Automation", "Lending Solutions"],
      },
    ],
  },
  {
    title: "About us",
    dropdownItems: [
      {
        title: "About us",
        items: ["Newsroom", "Global Presence", "Strategies"],
      },
      {
        title: "​​‎",
        items: ["Newsroom", "Global Presence", "Strategies"],
      },
    ],
  },
  {
    title: "Trends and Insights",
    dropdownItems: [
      {
        title: "Stay updated",
        items: ["Trends", "Insights"],
      },
    ],
  },
  {
    title: "Careers",
    dropdownItems: [
      {
        title: "Careers Overview",
        items: ["Careers in Americas", "Careers in India"],
      },
    ],
  },
  {
    title: "FAQ",
    dropdownItems: [],
  },
];
function Navbar() {
  return (
    <nav className="w-screen h-[70px] bg-white sticky top-0 z-[9999] shadow-md">
      <div className="max-w-[1200px] w-full flex justify-between mx-auto h-full items-center">
        <a href={"/home"}>{/* <Image src="" alt="Logo" /> */}</a>
        <ul className="flex gap-[1.2rem] text-clr-text text-fs-200 decoration no-underline list-none font-bold h-full">
          {navLinkData.map((data, index) => {
            return (
              <NavLink
                title={data.title}
                dropdownItems={data.dropdownItems}
                key={index}
              />
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
