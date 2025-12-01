import BasicShapes from "./BasicShapes"

const BeakPattern = () => {
  return (
    <div className="flex flex-nowrap gap-[5%] origin-center ">
        <div className="w-full aspect-square"><BasicShapes type="circle"/></div>
        <div className=" w-full rotate-90"><BasicShapes type="triangle"/></div>
    </div>
  )
}

export default BeakPattern