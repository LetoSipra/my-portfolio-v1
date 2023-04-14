import About from "@/components/About";
import Header from "@/components/Header";
import Landing from "@/components/Landing";
import Projects from "@/components/Projects";
import Head from "next/head";
import { gql } from "graphql-request";
import Contact from "@/components/Contact";
import Sidebar from "@/components/Sidebar";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import NavMenu from "@/components/NavMenu";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import { client } from "@/utility/GraphQLClient";

interface Props {
  projects: Projects[];
  developer: Developer[];
}

export default function Home({ projects, developer }: Props) {
  const [visibleSection, setVisibleSection] = useState<string>("");
  const [navMenuOpen, setNavMenuOpen] = useState<boolean>(false);
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const welcome = useRef() as MutableRefObject<HTMLDivElement>;
  const about = useRef() as MutableRefObject<HTMLDivElement>;
  const project = useRef() as MutableRefObject<HTMLDivElement>;
  const contact = useRef() as MutableRefObject<HTMLDivElement>;
  console.log(developer);

  const getDimensions = (element: HTMLElement) => {
    const { height } = element.getBoundingClientRect();
    const offsetTop = element.offsetTop;
    const offsetBottom = offsetTop + height;

    return {
      height,
      offsetTop,
      offsetBottom,
    };
  };

  const sectionRefs = [
    { section: "Welcome", ref: welcome },
    { section: "About", ref: about },
    { section: "Project", ref: project },
    { section: "Contact", ref: contact },
  ];

  const enableScroll = () => {
    window.onscroll = () => {};
  };
  const disableScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollLeft = document.documentElement.scrollLeft;

    window.onscroll = () => {
      window.scrollTo(scrollLeft, scrollTop);
    };
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    const selected = sectionRefs.find(({ section, ref }) => {
      const element = ref.current;
      if (element) {
        const { offsetBottom, offsetTop } = getDimensions(element);
        return scrollPosition > offsetTop && scrollPosition < offsetBottom;
      }
    });

    if (selected && selected.section !== visibleSection) {
      setVisibleSection(selected.section);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleSection]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!isMobile) {
      disableScroll();
      setTimeout(() => {
        enableScroll();
      }, 3000);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Yusuf Akçay</title>
        <meta
          name="description"
          content="Yusuf Akçay A Full Stack Web Developer Portfolio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={developer[0].logo.url} />
      </Head>

      <Header
        welcome={welcome}
        about={about}
        project={project}
        contact={contact}
        currentPage={visibleSection}
        setNavMenuOpen={setNavMenuOpen}
        navMenuOpen={navMenuOpen}
        developer={developer}
      />

      <main className="flex">
        <NavMenu
          welcome={welcome}
          about={about}
          project={project}
          contact={contact}
          navMenuOpen={navMenuOpen}
          setNavMenuOpen={setNavMenuOpen}
        />

        {/* left container */}
        <section className=" hidden max-h-screen flex-[0.1]  md:flex ">
          <Sidebar developer={developer} />
        </section>

        {/* main container */}
        <section className="w-full border-[blue] md:flex-[0.8]">
          <div ref={welcome} className="mt-[136px] h-fit scroll-m-[96px]">
            <Landing developer={developer} />
          </div>

          <div ref={about} className="my-14 h-fit -scroll-m-[16px]">
            <About developer={developer} />
          </div>

          <div ref={project} className="h-fit -scroll-m-[36px] xl:mx-10">
            <Projects projects={projects} />
          </div>

          <div ref={contact} className="-scroll-m-[96px] p-16">
            <Contact developer={developer} />
          </div>

          <div className="mb-0.5 text-center font-mono text-gray-200/80">
            Designed & Created by Yusuf Akçay{" "}
            <Link
              href="api/hygraphApi"
              target="_blank"
              className="text-blue-500">
              Check CMS Api
            </Link>
          </div>
        </section>

        {/* right container */}
        <section className="hidden flex-[0.1] md:flex "></section>
      </main>
    </>
  );
}

const QUERY = gql`
  {
    developer {
      name
      slug
      surname
      landing
      aboutEntry
      aboutMid
      aboutFinal
      skills
      photo {
        url
      }
      logo {
        url
      }
      contact
      eMail
      linkedin
      github
      twitter
      resume {
        url
      }
    }
    projects {
      title
      slug
      desc
      cover {
        url
      }
      tech
      type
      github
      website
      devStatus
    }
  }
`;
export async function getStaticProps() {
  const { projects }: Props = await client.request(QUERY);
  const { developer }: Props = await client.request(QUERY);
  return {
    props: {
      projects,
      developer,
    },
    revalidate: 600,
  };
}
