import { useRef, useState } from "react";
import ProjectCard from "../../components/cards/ProjectCard";
import Header from "../../components/header/Header";
import Shine from "../../components/overlayEffects/Shine";
import { projectsData } from "../../constants/Project/projects";
import { useScrollTrigger } from "../../hooks/useScrollTrigger";
import { useFadeInAnimation } from "../../hooks/useFadeInAnimation";
import ProjectDesign from "../../layouts/project/ProjectDesign";

const ProjectSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const refCard = useRef<HTMLDivElement>(null)
  const [active,setActive] = useState(false);
  const projectCards = projectsData.map((item)=>(
    <div key={item.title} className=" md:w-1/3 row rounded-(--border-radius)">
             <div className="hover:scale-105 transition-all duration-200 rounded-(--border-radius) h-full" style={{boxShadow:"var(--box-shadow)"}}><Shine  color="#ffffff66" direction={0} duration={1.5} rotation={45} type="enter" width="10%" > <ProjectCard title={item.title} desc={item.desc} errMsg={item.errMsg} image={item.image} skills={item.skills} git={item.git} open={item.open} vid={item.vid} /> </Shine>
             </div>
            </div>
  ))
  useScrollTrigger(ref,'top center','bottom bottom',true,false,false,()=>setActive(true))
  useFadeInAnimation(refCard,0.5,active,0.3,0,20)
  return (
    <div id="projects" className="min-h-screen bg-(--color-background)  relative z-50" ref={ref}>
       <div className="flex flex-col gap-20 py-10 text-(--color-text-dark)">
      {active && <Header text="My Works" />}
      <div className="flex flex-col md:flex-row gap-20 w-[80%] md:w-[95%] mx-auto mt-5 md:mt-0 justify-center opacity-0" ref={refCard}>
        {projectCards}
      </div>
      </div>
      <ProjectDesign />
    </div>
  );
};

export default ProjectSection;
