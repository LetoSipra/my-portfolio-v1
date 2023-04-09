import { useEffect, useState } from "react";
import { HiChevronRight } from "react-icons/hi2";

function About() {
  const [isSeen, setIsSeen] = useState<boolean>(false);

  useEffect(() => {
    const about: any = document.querySelector(".about");
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
      { threshold: 0.2 }
    );
    if (isSeen) return;
    observer.observe(about);
  });

  return (
    <>
      <div
        className={`about my-20 translate-y-52 opacity-0 
            blur-xl filter transition-all duration-500
         lg:my-40 xl:mx-10`}>
        <h1 className="mx-5 block rounded-3xl border-b-2 border-red-500 bg-gradient-to-r from-red-500 to-cyan-200 bg-clip-text py-10 pl-5 text-3xl font-semibold tracking-wide text-transparent sm:mx-10 md:mx-14 md:text-5xl">
          About me
        </h1>
        <div className=" tracking-wide sm:mx-14 lg:flex lg:items-start lg:space-x-5">
          <div className="relative my-10 space-y-10 px-2 text-lg tracking-wide text-gray-300 lg:max-w-md 2xl:max-w-2xl">
            <div className="absolute bottom-0 right-0 -z-50 hidden rounded-full border-b border-r border-solid border-red-500/50 p-64 lg:flex"></div>
            <p className="">
              Hi! My name is Yusuf. My interest in development started on early
              childhood when I decided keep my favorite counter strike mod
              alive. Failing relentlessly while cutting editing the Amxmodx
              scripts (pawn language) that look jiberish to me did pay off
              after... well failing enough. I build what was in my mind at that
              time and launch more then 5 private server that make succsess and
              loved. That was the first development taste for me.
            </p>
            <p>
              Nowadays, I'm continuously learning new web technologies,
              database's, serverless functions by building awesome side projects
              and growing as a developer. For me every challenge is a stepping
              stone through my goal.
            </p>
            <p>And my goal is becoming a full-stack.</p>
            <div className="space-y-3">
              <h1 className="font-bold">My Skills :</h1>
              <div className="flex space-x-3 font-mono text-sm font-bold">
                <ul className="space-y-5">
                  <li className="flex items-center">
                    <HiChevronRight className="h-6 w-6 flex-shrink-0 text-red-500" />{" "}
                    Javascript (ES6+)
                  </li>
                  <li className="flex items-center">
                    <HiChevronRight className="h-6 w-6 flex-shrink-0 text-red-500 " />{" "}
                    Typescript
                  </li>
                  <li className="flex items-center">
                    <HiChevronRight className="h-6 w-6 flex-shrink-0 text-red-500 " />{" "}
                    Next.js & React.js
                  </li>
                </ul>
                <ul className="space-y-5">
                  <li className="flex items-center">
                    <HiChevronRight className="h-6 w-6 flex-shrink-0 text-red-500 " />{" "}
                    Responsive Layouts
                  </li>
                  <li className="flex items-center">
                    <HiChevronRight className="h-6 w-6 flex-shrink-0 text-red-500 " />{" "}
                    Semantic HTML
                  </li>
                  <li className="flex items-center">
                    <HiChevronRight className="h-6 w-6 flex-shrink-0 text-red-500 " />{" "}
                    CSS
                  </li>
                </ul>
                <ul className="space-y-5">
                  <li className="flex items-center">
                    <HiChevronRight className="h-6 w-6 flex-shrink-0 text-red-500 " />{" "}
                    Serverless
                  </li>
                  <li className="flex items-center">
                    <HiChevronRight className="h-6 w-6 flex-shrink-0 text-red-500 " />{" "}
                    Node.js
                  </li>
                  <li className="flex items-center">
                    <HiChevronRight className="h-6 w-6 flex-shrink-0 text-red-500 " />{" "}
                    Api's
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-sm rounded-xl border-b-2 border-l-2 border-solid border-red-500 pb-3 pl-3 transition duration-300 hover:border-white/10 lg:mx-0 lg:mt-10 lg:h-fit lg:max-w-sm">
            <img
              src="https://gcdnb.pbrd.co/images/wrZMbYJqg77A.jpg?o=1"
              className="h-full w-full rounded-xl border border-white/25 object-fill outline outline-white/10 transition duration-300 hover:border-red-500 hover:outline-red-500/50"
              alt=""
            />
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default About;
