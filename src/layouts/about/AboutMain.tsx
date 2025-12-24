import { useRef } from "react";
import SvgMorph from "../../animations/SvgMorph";
import AboutCards from "../../components/cards/AboutCards";
import { text } from "../../constants/About/AboutMeScript";
import { useFadeInAnimation } from "../../hooks/useFadeInAnimation";

const AboutMain = () => {
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  useFadeInAnimation(ref1, 0.5,true, 0.1, -100, 0);
  useFadeInAnimation(ref2, 0.5,true, 0.1, 100, 0);
  return (
    <div className="w-[85%] mx-auto flex flex-col justify-between h-[70dvh] md:flex-row gap-5">
      <div className="basis-1/4 sm:w-[70%] md:w-full md:basis-[30%] mx-auto" ref={ref1}><AboutCards text={text[0]} pos="left"/></div>
      <div className="basis-1/3 flex justify-center md:items-center"><div className="w-1/2 sm:w-1/4 md:w-1/2"><SvgMorph /></div></div>
      <div className="basis-1/3 sm:w-[70%] mx-auto md:basis-1/3 md:w-full flex items-end" ref={ref2}><AboutCards text={text[1]} pos="right"/></div>
    </div>
  );
};

export default AboutMain;
