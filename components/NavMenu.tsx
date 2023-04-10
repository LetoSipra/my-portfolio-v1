import { Dispatch, SetStateAction, MutableRefObject } from "react";
import { HiX } from "react-icons/hi";

interface Props {
  navMenuOpen: boolean;
  setNavMenuOpen: Dispatch<SetStateAction<boolean>>;
  welcome: MutableRefObject<HTMLDivElement>;
  about: MutableRefObject<HTMLDivElement>;
  project: MutableRefObject<HTMLDivElement>;
  contact: MutableRefObject<HTMLDivElement>;
}

function NavMenu({
  navMenuOpen,
  setNavMenuOpen,
  welcome,
  about,
  project,
  contact,
}: Props) {
  const handleClick = (ref: MutableRefObject<HTMLDivElement>) => {
    setNavMenuOpen(false);
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <section
        className={`fixed right-0 top-0 z-50 
    flex h-full transform bg-[#141517] shadow-xl transition-all delay-300 duration-500  ease-out 
    ${navMenuOpen ? "w-full" : " w-0"} `}>
        <div className={`m-auto`}>
          <HiX
            className={`absolute right-12 top-6 h-11 w-11 cursor-pointer hover:bg-white/5 rounded-xl text-red-500 opacity-0 transition-all duration-1000 ${
              navMenuOpen ? "visible opacity-100 ease-in-out" : "invisible"
            }`}
            onClick={() => setNavMenuOpen(false)}
          />
          <ul
            className={`flex flex-col space-y-10 text-6xl text-gray-200 opacity-0 transition-opacity duration-1000 ${
              navMenuOpen ? "visible opacity-100 ease-linear" : "invisible"
            }`}>
            <li
              className="cursor-pointer rounded-2xl p-5 transition duration-200 hover:bg-white/5 hover:text-red-500"
              onClick={() => handleClick(welcome)}>
              Welcome
            </li>
            <li
              className="cursor-pointer rounded-2xl p-5 transition duration-200 hover:bg-white/5 hover:text-red-500"
              onClick={() => handleClick(about)}>
              About
            </li>
            <li
              className="cursor-pointer rounded-2xl p-5 transition duration-200 hover:bg-white/5 hover:text-red-500"
              onClick={() => handleClick(project)}>
              Projects
            </li>
            <li
              className="cursor-pointer rounded-2xl p-5 transition duration-200 hover:bg-white/5 hover:text-red-500"
              onClick={() => handleClick(contact)}>
              Contact
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default NavMenu;
