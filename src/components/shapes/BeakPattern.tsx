import BasicShapes from "./BasicShapes"

const BeakPattern = () => {
  return (
    <div className="flex flex-nowrap gap-[5%]">
        <div className="w-[20%]"><BasicShapes type="circle"/></div>
        <div className="w-[12.5%] rotate-90"><BasicShapes type="triangle"/></div>
    </div>
  )
}

export default BeakPattern