import { useSpring, animated } from "@react-spring/web";
import { useMediaQuery } from "react-responsive";

interface Props {
  developer: Developer[];
}

function Landing({ developer }: Props) {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const headTitle1 = useSpring({
    delay: () => {
      if (isMobile) {
        return 500;
      } else return 3000;
    },
    from: { y: 100, opacity: 0 },
    to: { y: 0, opacity: 1 },
  });
  const headTitle2 = useSpring({
    delay: () => {
      if (isMobile) {
        return 500;
      } else return 3250;
    },
    from: { y: 100, opacity: 0 },
    to: { y: 0, opacity: 1 },
  });
  const headTitle3 = useSpring({
    delay: () => {
      if (isMobile) {
        return 500;
      } else return 3500;
    },
    from: { y: 100, opacity: 0 },
    to: { y: 0, opacity: 1 },
  });
  const miniAbout = useSpring({
    delay: () => {
      if (isMobile) {
        return 500;
      } else return 3750;
    },
    from: { y: 100, opacity: 0 },
    to: { y: 0, opacity: 1 },
  });

  const rings = useSpring({
    delay: () => {
      if (isMobile) {
        return 500;
      } else return 3175;
    },
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return (
    <>
      <div className="relative mx-5 flex md:mx-14 xl:mx-0 xl:ml-56 xl:max-w-3xl">
        <div className="py-10 lg:py-20">
          <h1 className="flex flex-col py-10 text-4xl font-semibold tracking-wide sm:text-6xl md:text-5xl lg:text-6xl xl:text-7xl">
            <animated.span
              style={headTitle1}
              className="mb-5 block bg-gradient-to-r from-red-500 to-red-300 bg-clip-text py-1 text-3xl text-transparent lg:text-4xl">
              Hello, my name is
            </animated.span>
            <animated.span
              style={headTitle2}
              className="block bg-gradient-to-r from-slate-300 to-slate-500 bg-clip-text py-1 text-transparent">
              Yusuf a Full-Stack
            </animated.span>
            <animated.span
              style={headTitle3}
              className="block bg-gradient-to-r from-slate-500 to-slate-300 bg-clip-text py-1 text-transparent">
              Web Developer from Turkey.
            </animated.span>
          </h1>
          <animated.p
            style={miniAbout}
            className="my-3 ml-2 text-xl tracking-wide text-gray-300 lg:text-2xl">
            {developer[0].landing}
          </animated.p>
        </div>
        <animated.div
          style={rings}
          className="absolute right-0 -z-50 rounded-full border-r border-t border-solid border-red-500/90 p-40"></animated.div>
        <animated.div
          style={rings}
          className="absolute bottom-0 -z-50 rounded-full border-b border-l border-solid border-red-500/90 p-40"></animated.div>
      </div>
    </>
  );
}

export default Landing;
