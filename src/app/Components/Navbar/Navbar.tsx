import Image from "next/image";
import Link from "next/link";
function Navbar() {
  return (
    <nav className="w-screen h-[92px] bg-primary-opaque fixed top-0 z-[9999]">
      <div className="w-full flex justify-around mx-auto h-full items-center">
        <Link href={"/home"}>
          {/* <Image src="" alt="Logo" /> */}
        </Link>
        <ul className="flex gap-[1.2rem] text-clr-text text-fs-200 decoration no-underline list-none font-bold">
          {["Home", "About us", "Features", "FAQ"].map((item, index) => {
            return (
              <li className="hover:text-white" key={index}>
                <Link href={`/${item.toLowerCase().split(" ")[0]}`}>
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
