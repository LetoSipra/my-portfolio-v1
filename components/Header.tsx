import {
  useCallback,
  useEffect,
  useState,
  MutableRefObject,
  SetStateAction,
  Dispatch,
} from "react";
import { useTrail, animated, useSpring } from "@react-spring/web";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";

interface Props {
  welcome: MutableRefObject<HTMLDivElement>;
  about: MutableRefObject<HTMLDivElement>;
  project: MutableRefObject<HTMLDivElement>;
  contact: MutableRefObject<HTMLDivElement>;
  currentPage: string;
  setNavMenuOpen: Dispatch<SetStateAction<boolean>>;
  navMenuOpen: boolean;
  developer: Developer[];
}

function Header({
  welcome,
  about,
  project,
  contact,
  currentPage,
  setNavMenuOpen,
  navMenuOpen,
  developer,
}: Props) {
  const [scroll, setScroll] = useState(true);
  const [componentDidMount, setcomponentDidMount] = useState<boolean>(false);
  const [y, setY] = useState(0);
  const navList = [
    { label: "Welcome", scrollTo: welcome },
    { label: "About", scrollTo: about },
    { label: "Projects", scrollTo: project },
    { label: "Contact", scrollTo: contact },
  ];
  const [trails, api] = useTrail(navList.length, () => ({
    from: { y: -100, opacity: 0 },
    to: { y: 0, opacity: 1 },
  }));
  const logo = useSpring({
    from: { y: -10, opacity: 0 },
    to: { y: 0, opacity: 1 },
  });

  const handleNavigation = useCallback(
    (e: any) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        setScroll(true);
      } else if (y < window.scrollY) {
        setScroll(false);
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  });

  useEffect(() => {
    setcomponentDidMount(true);
    setScroll(true);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 ${
          scroll ? "flex" : "hidden"
        } z-50 h-24 w-full rounded-3xl border-b border-red-500/40 bg-[#141517]/90`}>
        <div className="flex w-full items-center md:mx-auto md:flex-[0.8]">
          <Link href={"/"}>
            <animated.img
              style={logo}
              src={developer[0].logo.url}
              className="ml-5 h-[50px] cursor-pointer object-contain transition duration-300 hover:opacity-75"
              alt=""
            />
          </Link>
          <ul
            className={`mx-10 hidden w-full justify-end space-x-5 font-mono text-red-500 transition duration-200 md:flex
          ${
            currentPage === "Welcome" &&
            "[&>*:nth-child(1)]:font-extrabold [&>*:nth-child(1)]:shadow-sm [&>*:nth-child(1)]:shadow-red-500/50"
          }
          ${
            currentPage === "About" &&
            "[&>*:nth-child(2)]:font-extrabold [&>*:nth-child(2)]:shadow-sm [&>*:nth-child(2)]:shadow-red-500/50"
          }
          ${
            currentPage === "Project" &&
            "[&>*:nth-child(3)]:font-extrabold [&>*:nth-child(3)]:shadow-sm [&>*:nth-child(3)]:shadow-red-500/50"
          }
          ${
            currentPage === "Contact" &&
            "[&>*:nth-child(4)]:font-extrabold [&>*:nth-child(4)]:shadow-sm [&>*:nth-child(4)]:shadow-red-500/50"
          }
          `}>
            {trails.map((props: any, i: number) => (
              <animated.li
                key={i}
                style={props}
                className={`cursor-pointer rounded-xl px-3 py-2 transition duration-300 hover:bg-white/5
                ${
                  !currentPage &&
                  "first:font-extrabold first:shadow-sm first:shadow-red-500/25"
                }`}
                onClick={() => {
                  navList[i].scrollTo.current.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}>
                {navList[i].label}
              </animated.li>
            ))}
          </ul>
          {!navMenuOpen && (
            <div
              onClick={() => setNavMenuOpen(true)}
              className={`mx-10 flex w-full transform justify-end opacity-0 transition-all duration-1000 ease-in-out md:hidden ${
                componentDidMount && "opacity-100"
              }`}>
              <HiMenu className="h-16 w-16 cursor-pointer rounded-full p-3 text-slate-400 transition duration-200 hover:bg-white/5" />
            </div>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
