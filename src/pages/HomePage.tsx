import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP,ScrollTrigger, ScrollSmoother);

const HomePage = () => {
  const main = useRef(null);
  const smoother = useRef<ScrollSmoother | null>(null)

  useGSAP(() => {
    smoother.current = ScrollSmoother.create({
      smooth: 1,
      effects: true,
    });

    return () => {
      smoother.current?.kill();
    };
  }, { scope: main });

  return (
    <div ref={main} id="smooth-wrapper">
      <div id="smooth-content">
      </div>
    </div>
  );
};

export default HomePage;
