import { useRef, useState } from "react"
import Header from "../../components/header/Header"
import { useScrollTrigger } from "../../hooks/useScrollTrigger";
import ExperienceCard from "../../components/cards/ExperienceCard";
import { experienceData } from "../../constants/Experience/experience";
import Shine from "../../components/overlayEffects/Shine";
import { useCardsSlideIn } from "../../hooks/useCardsSlideIn";

const ExperienceSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [ active, setActive ] = useState<boolean>(false);
  useScrollTrigger(ref,"top 80%","top 60%",true,false,false,()=>setActive(true));
  useCardsSlideIn(cardsRef);
  const data = experienceData;
  return (
    <div className="min-h-dvh py-10 flex flex-col gap-10 z-50 relative bg-(--color-background)" id="experience" ref={ref}>
      <div className="text-(--color-text-dark) mb-12">{active && <Header text="Experience"/>}</div>
      <div className="w-full md:w-[80%] mx-auto">
        <div className="w-[80%] mx-auto flex flex-col gap-20" ref={cardsRef}>{
          data.map(( item, index ) => (
            <div key = {index} className="h-full">
              <Shine color="#ffffff66" direction={0} duration={1.5} rotation={45} type="enter" width="7%"><ExperienceCard data = {item} /></Shine>
              </div>
          ))
        }</div>
      </div>
    </div>
  )
}

export default ExperienceSection