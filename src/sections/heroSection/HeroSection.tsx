import { useRef } from "react";
import PeacockSvg from "../../components/svgs/PeacockSvg";
import { useFadeInAnimation } from "../../hooks/useFadeInAnimation";
import Header from "../../layouts/hero/Header";
import HeroButtons from "../../layouts/hero/HeroButtons";
import Profile from "../../layouts/hero/Profile";

const HeroSection = () => {
  const ref = useRef(null);
  useFadeInAnimation(ref,0.5,0.1,0,10)
  return (
    <div className="flex flex-col bg-(--color-primary) h-dvh"
    style={{backgroundImage:"var(--gradient-bg)"}}>
    <div className="h-16 md:h-0"></div>
    <div className=" grow  flex flex-col md:flex-row px-[2vw]">
      <div className="basis-[50%] flex flex-col z-20">
        <div className="basis-[55%] md:basis-[50%] flex items-end justify-center md:justify-end">
          <div className="flex flex-nowrap gap-5 items-center justify-center md:items-end md:justify-end">
          <div><Profile /></div>
          <div className="basis-[40%]" ref={ref}><Header /></div>
          </div>
        </div>
        <div className="grow min-h-0 flex items-start justify-center md:justify-end">
          <div className="basis-1/4 mt-4 -mr-[40%] md:mr-[15%]"><HeroButtons /></div>
        </div>
      </div>
      <div className="grow flex justify-end items-end z-20">
        <div className="basis-[45%] md:mr-25 sm:basis-[40%] md:basis-[70%] lg:basis-[50%] "><PeacockSvg /></div>
      </div>
    </div>
    </div>
  );
};

export default HeroSection;
