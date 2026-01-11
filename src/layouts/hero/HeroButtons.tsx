import Button from "../../components/buttons/Button"
import { FaFileDownload } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useFadeInAnimation } from "../../hooks/useFadeInAnimation";
import { useRef } from "react";
import { scrollIntoView } from "../../utils/scrollIntoView";

const HeroButtons = () => {
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  useFadeInAnimation(ref1,0.5,true,0.1,0,5);
  useFadeInAnimation(ref2,0.5,true,0.1,0,5);
  return (
    <div className="flex flex-nowrap justify-between gap-5 items-center">
        <div ref={ref1}><Button cb={()=>scrollIntoView('#contact')} text="Hire Me" Icon={FaArrowRight}/></div>
        <div ref={ref2}><a href="/resume.pdf" download className="flex items-center h-full px-2 py-2 rounded-(--border-radius) text-white gap-1" style={{backgroundImage:"var(--gradient-blue)",boxShadow:"var(--box-shadow)"}}>Resume <FaFileDownload /> </a></div>
    </div>
  )
}

export default HeroButtons