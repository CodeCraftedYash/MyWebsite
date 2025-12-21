import ProjectCard from "../../components/cards/ProjectCard";
import Header from "../../components/header/Header";
import Shine from "../../components/overlayEffects/Shine";
import { projectsData } from "../../constants/Project/projects";

const ProjectSection = () => {
  const projectCards = projectsData.map((item)=>(
    <div key={item.title} className=" w-full md:w-1/3 grow rounded-(--border-radius)">
             <div className="hover:scale-105 transition-all duration-200 rounded-(--border-radius) h-full" style={{boxShadow:"var(--box-shadow)"}}><Shine  color="#efefef" type="enter" width="10%" rotation={-15} duration={2} direction={0} > <ProjectCard title={item.title} desc={item.desc} errMsg={item.errMsg} image={item.image} skills={item.skills} git={item.git} open={item.open} vid={item.vid} /> </Shine>
             </div>
            </div>
  ))
  return (
    <div className="min-h-screen bg-(--color-primary) bg-linear-120 from-(--color-primary) to-(--color-secondary) flex flex-col gap-20">
      <Header text="My Works" />
      <div className="flex gap-20 w-[80%] mx-auto ">
        {projectCards}
      </div>
    </div>
  );
};

export default ProjectSection;
