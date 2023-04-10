import Link from "next/link";
import {
  FaEnvelopeSquare,
  FaGithubSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";
import { useSpring, animated } from "@react-spring/web";

interface Props {
  developer: Developer[];
}

function Sidebar({ developer }: Props) {
  const sideBar = useSpring({
    delay: 4000,
    from: { opacity: 0 },
    to: { opacity: 1 },
  });
  return (
    <>
      <div className="flex">
        <animated.div
          style={sideBar}
          className="group fixed ml-5 flex flex-col items-center self-end">
          {/* icons */}
          <div className="my-2 space-y-3 text-gray-200">
            <Link href={developer[0].eMail} target="__blank">
              <div className="flex flex-shrink-0 items-center rounded-2xl p-3 transition duration-200 hover:bg-white/5 hover:text-red-500">
                <FaEnvelopeSquare className="h-6 w-6 " />
              </div>
            </Link>
            <Link href={developer[0].linkedin} target="__blank">
              <div className="flex flex-shrink-0 items-center rounded-2xl p-3 transition duration-200 hover:bg-white/5 hover:text-red-500">
                <FaLinkedin className="h-6 w-6 " />
              </div>
            </Link>
            <Link href={developer[0].github} target="__blank">
              <div className="flex flex-shrink-0 items-center rounded-2xl p-3 transition duration-200 hover:bg-white/5 hover:text-red-500">
                <FaGithubSquare className="h-6 w-6 " />
              </div>
            </Link>
            <Link href={developer[0].twitter} target="__blank">
              <div className="flex flex-shrink-0 items-center rounded-2xl p-3 transition duration-200 hover:bg-white/5 hover:text-red-500">
                <FaTwitterSquare className="h-6 w-6 " />
              </div>
            </Link>
          </div>
          <div className="h-20 w-0 rounded-3xl border border-red-500/75 shadow-red-500 transition duration-300 hover:shadow-sm group-hover:border-red-500"></div>
        </animated.div>
      </div>
    </>
  );
}

export default Sidebar;
