type skillCardParam = {
    item:{
        title:string;
        skills:{name:string,imgSrc:string}[]
    } 
}
const SkillCard = ({item}:skillCardParam) => {
  return (
    <div className=" mx-auto rounded-(--border-radius) px-2 py-4 flex flex-col gap-4" style={{boxShadow:"var(--box-shadow)"}}>
     <h3 className="font-bold border-b-4 border-(--color-shapes) w-fit mx-auto">{item.title}</h3>
              <div className="flex gap-4 flex-wrap justify-center">
                {/**all skills container : skill + image */
                item.skills.map((skill,i)=>(
                  <div key={i} className="flex flex-col flex-wrap items-center p-4  rounded-(--border-radius)">
                    <img src={skill.imgSrc} alt={skill.name} className="w-4 sm:w-6 md:w-12  aspect-square" />
                    <h3 className="">{skill.name}</h3>
                  </div>
                ))}
                </div>
                </div>
)}

export default SkillCard