import { useRef } from "react";
import SkillCard from "../../components/cards/SkillCard";
import { skillsData } from "../../constants/Skills/skill";
import useLayoutAnimation from "../../hooks/useLayoutAnimation";

const SkillsLayout = () => {
  const ref = useRef<HTMLDivElement>(null);
  useLayoutAnimation(ref);
  return (
    <div className="flex mx-auto flex-wrap  transition-all duration-200 gap-20 justify-center">
      <div className="flex flex-col  w-[80%] gap-8" ref={ref}>
        <div className="opacity-0" data-skill-card>
          <SkillCard item={skillsData[1]} />
        </div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="flex flex-col gap-8 md:basis-1/2">
            <div className=" opacity-0" data-skill-card>
              <SkillCard item={skillsData[2]} />
            </div>
            <div className=" opacity-0" data-skill-card>
              <SkillCard item={skillsData[3]} />
            </div>
          </div>
          <div className="md:basis-1/2 opacity-0" data-skill-card>
            <SkillCard item={skillsData[0]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsLayout;
