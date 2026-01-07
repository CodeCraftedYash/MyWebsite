import { RiArrowRightUpBoxLine } from "react-icons/ri";
import { openURL } from "../../utils/openURL";
import { experienceDataType } from "../../types/experienceData";

const ExperienceCard = ({data}:{data:experienceDataType}) => {
  if(!data){
    return;
  }
  return (
    <div className="w-full leading-7 bg-(--color-surface) p-4 rounded-(--border-radius) flex flex-col lg:flex-row items-center justify-center gap-4 text-(--color-text-dark)" style={{boxShadow:"var(--box-shadow)"}}>
      <div className="h-full">
        <h5 className="font-bold" style={{fontSize:"var(--font-size-sub-heading)"}}>{data.cName}</h5>
        <h3 className="font-medium">{data.position}</h3>
        <h3 className="font-light">{data.period}</h3>
        <ul className="list-disc pl-4">{
            data.accomplishments.map((item,index) =>(
                <li className="" key={index}>{item}</li>
            ))
        }</ul>
        </div>
          <div className="w-full group hover:cursor-pointer relative" onClick={()=>openURL(data.cLink)}>
            <img src={data.img} alt="company image" className="w-full aspect-square object-cover rounded-(--border-radius) overflow-hidden" />
            <RiArrowRightUpBoxLine className="text-4xl absolute top-5 right-5 opacity-70 text-(--color-background) group-hover:text-(--color-accent)" />
          </div>
        
    </div>
  )
}

export default ExperienceCard