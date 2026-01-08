import { useRef, useState } from "react"
import Header from "../../components/header/Header"
import SkillsLayout from "../../layouts/skill/SkillsLayout";
import { useScrollTrigger } from "../../hooks/useScrollTrigger";
import DesignSkill from "../../layouts/skill/DesignSkill";

const SkillsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [ active, setActive ] = useState<boolean>(false);
  useScrollTrigger(ref,"top 80%","top 60%",true,false,false,()=>setActive(true));
  return (
    <div className="min-h-dvh py-20 flex flex-col gap-10 z-50 relative bg-(--color-background)" id="skills" >
      <div className="text-(--color-text-dark)">{active && <Header text="Skills"/>}</div>
      <div className="w-full md:w-[80%] mx-auto" ref={ref}><SkillsLayout /></div>
      <DesignSkill />
    </div>
  )
}

export default SkillsSection