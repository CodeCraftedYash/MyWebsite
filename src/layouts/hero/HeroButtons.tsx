import Button from "../../components/buttons/Button"
import { FaFileDownload } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useFadeInAnimation } from "../../hooks/useFadeInAnimation";
import { useRef } from "react";

const HeroButtons = () => {
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  useFadeInAnimation(ref1,0.5,0.1,0,5);
  useFadeInAnimation(ref2,0.5,0.1,0,5);
  return (
    <div className="flex flex-nowrap justify-between gap-5">
        <div ref={ref1}><Button cb={()=>alert("button was clicked")} text="Hire Me" Icon={FaArrowRight}/></div>
        <div ref={ref2}><Button cb={()=>alert("button was clicked")} text="CV" Icon={FaFileDownload}/></div>
    </div>
  )
}

export default HeroButtons