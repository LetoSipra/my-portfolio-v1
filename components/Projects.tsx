import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import { HiOutlineExclamationTriangle } from "react-icons/hi2";
import { useEffect, useState } from "react";

interface Props {
  projects: Projects[];
}

function Projects({ projects }: Props) {
  const [isSeen, setIsSeen] = useState<boolean>(false);

  useEffect(() => {
    const projects = document.querySelectorAll(".project");
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
      { threshold: 1 }
    );
    projects.forEach((project: any) => {
      if (isSeen) return;
      observer.observe(project);
    });
  });

  return (
    <>
      <div className="my-10 flex w-full flex-col space-y-10 px-5 sm:px-0">
        <h1 className="mx-5 block rounded-3xl border-b-2 border-red-500 bg-gradient-to-r from-red-500 to-cyan-200 bg-clip-text py-10 pl-5 text-3xl font-semibold tracking-wide text-transparent sm:mx-10 md:mx-14 md:text-5xl">
          Projects
        </h1>
        {projects.map((project) => (
          <div
            className={`project mx-auto mt-[136px] max-w-sm translate-y-52 items-center space-y-7 rounded-3xl border border-red-500/50 bg-black/25 px-2 py-5 font-mono tracking-wide text-gray-200 opacity-0 outline outline-black/50 blur-xl filter transition duration-300 hover:border-red-500/75 hover:outline-black sm:max-w-md md:max-w-lg lg:flex lg:max-w-5xl lg:space-x-2 lg:p-5 xl:mx-14 xl:p-10 xl:odd:flex-row-reverse xl:odd:self-end xl:even:self-start
            `}
            key={project.slug}>
            <div className="w-full">
              <img
                src={project.cover.url}
                className="h-full w-full rounded-xl object-contain"
                alt=""
              />
              {project.devStatus && (
                <div className="mt-5 flex items-center justify-center">
                  <HiOutlineExclamationTriangle className="h-8 w-8 text-yellow-600" />
                  <p className="text-yellow-500">
                    This project still on heavy development !
                  </p>
                </div>
              )}
            </div>
            <div className="space-y-5 px-2 lg:max-w-sm">
              <h4 className="m-0 space-x-0 space-y-0 p-0 text-xs">
                {project.type}
              </h4>
              <h1 className="text-3xl text-red-500 md:text-4xl">
                {project.title}
              </h1>
              <p className="text-lg md:text-xl">{project.desc}</p>
              <p className="pt-5 text-sm text-red-500">{project.tech}</p>
              <div className="mx-5 flex items-center justify-end space-x-5">
                <HiExternalLink className="h-10 w-10 cursor-pointer rounded-md text-white transition duration-200 hover:bg-white/5 hover:text-red-500" />
                <Link href={project.github} target="_blank">
                  <FaGithub className="h-10 w-10 cursor-pointer rounded-md p-1 text-white transition duration-200 hover:bg-white/5 hover:text-red-500" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects;
