import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaEnvelopeSquare,
  FaGithubSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";

interface Props {
  developer: Developer[];
}

function Contact({ developer }: Props) {
  const [isSeen, setIsSeen] = useState<boolean>(false);

  useEffect(() => {
    const contact: any = document.querySelector(".contact");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("showAnm", entry.isIntersecting);
          if (entry.isIntersecting) {
            setIsSeen(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.75 }
    );
    if (isSeen) return;
    observer.observe(contact);
  });
  return (
    <>
      <div
        className="contact 
            mx-auto my-52 max-w-md translate-y-52
         space-y-10 text-center tracking-wider opacity-0 blur-xl filter transition-all duration-300">
        <h1 className="rounded-3xl border-b-2 border-red-500 bg-gradient-to-r from-red-500 to-gray-500 bg-clip-text pb-5 text-4xl font-semibold tracking-wide text-transparent md:text-5xl">
          Contact
        </h1>
        <p className="font-poppins text-2xl text-gray-200">
          {developer[0].contact}
        </p>
        <div className="flex flex-col items-start space-y-3 pt-10 text-lg text-red-500">
          <Link href={developer[0].eMail} target="__blank">
            <div className="flex flex-shrink-0 items-center rounded-2xl p-3 transition duration-200 hover:bg-white/5">
              <FaEnvelopeSquare className="mr-1 h-6 w-6" />
              business@yusufakcay.dev
            </div>
          </Link>
          <Link href={developer[0].linkedin} target="__blank">
            <div className="flex flex-shrink-0 items-center rounded-2xl p-3 transition duration-200 hover:bg-white/5">
              <FaLinkedin className="mr-1 h-6 w-6" />
              Linkedin
            </div>
          </Link>
          <Link href={developer[0].github} target="__blank">
            <div className="flex flex-shrink-0 items-center rounded-2xl p-3 transition duration-200 hover:bg-white/5">
              <FaGithubSquare className="mr-1 h-6 w-6" />
              Github
            </div>
          </Link>
          <Link href={developer[0].twitter} target="__blank">
            <div className="flex flex-shrink-0 items-center rounded-2xl p-3 transition duration-200 hover:bg-white/5">
              <FaTwitterSquare className="mr-1 h-6 w-6" />
              Twitter
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Contact;
