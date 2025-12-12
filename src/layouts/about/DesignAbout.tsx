import { useRef } from "react"
import BasicShapes from "../../components/shapes/BasicShapes"
import SquarePattern from "../../components/shapes/SquarePattern"
import useMotionAnimationHook from "../../hooks/useMotionAnimationHook"

const DesignAbout = () => {
  const ref= useRef(null)
  useMotionAnimationHook(ref,"[data-anim]",12,5,6,1,true,3,4)
  return (
    <div className="w-full h-full absolute top-0 left-0" ref={ref}>
        <div className="absolute w-[30%] z-10 right-0 translate-x-1/4 top-2"><BasicShapes type="rectangle"/></div>
        <div className="w-2/5 absolute left-0 bottom-1/3 -translate-x-1/2 md:left-0 md:bottom-0 md:translate-3/5 md:-translate-x-1/4"><BasicShapes type="circle" /></div>
        <div className="absolute w-12 rotate-90 left-12"><SquarePattern /></div>
    </div>
  )
}

export default DesignAbout