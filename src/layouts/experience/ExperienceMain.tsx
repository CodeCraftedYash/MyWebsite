import { useRef } from "react";
import ExperienceCard from "../../components/cards/ExperienceCard";
import { experienceData } from "../../constants/Experience/experience";
import Shine from "../../components/overlayEffects/Shine";
import { useCardsSlideIn } from "../../hooks/useCardsSlideIn";
const ExperienceMain = () => {
  const cardsRef = useRef<HTMLDivElement>(null);
  useCardsSlideIn(cardsRef);
  const data = experienceData;
  return (
    <div className="w-full md:w-[80%] mx-auto z-50">
      <div className="w-[80%] mx-auto flex flex-col gap-20" ref={cardsRef}>
        {data.map((item, index) => (
          <div key={index} className="h-full rounded-(--border-radius)" style={{boxShadow:"var(--box-shadow)"}}>
            <Shine
              color="#ffffff66"
              direction={0}
              duration={1.5}
              rotation={45}
              type="enter"
              width="7%"
            >
              <ExperienceCard data={item} />
            </Shine>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceMain;
