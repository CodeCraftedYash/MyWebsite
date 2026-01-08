import { useRef } from "react"
import BasicShapes from "../../components/shapes/BasicShapes"
import SquarePattern from "../../components/shapes/SquarePattern"
import LeavesSvg from "../../components/svgs/LeavesSvg"
import useMotionAnimationHook from "../../hooks/useMotionAnimationHook"

const DesignExperience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useMotionAnimationHook(containerRef,"[data-anim]",30,5,5,5,true,2,3);
  return (
    <div className="w-full h-full absolute top-0 left-0 -z-10" ref={containerRef}>
        <div className="w-12 absolute top-16 left-10 " data-anim> <div className="rotate-120"><SquarePattern /></div></div>
        <div className="w-12 absolute top-1/2 left-1 sm:left-5 md:left-10  " data-anim> <div className="rotate-160"><SquarePattern /></div></div>
        <div className="absolute top-10 right-16 w-8 sm:w-12 md:w-14 sm:right-18 md:right-32" data-anim>
            <div className=""><BasicShapes type="circle"/></div>
            <div className="w-full absolute top-1/2 -translate-y-1/2 translate-x-[105%]"><BasicShapes type="rectangle" /></div>
            <div className="w-full absolute top-1/2 -translate-y-1/2 -translate-x-[105%]"><BasicShapes type="rectangle" /></div>
        </div>
        <div className="w-12 absolute top-40 left-5 md:left-30 lg:left-50" data-anim>
          <LeavesSvg />
        </div>
        <div className="w-12 absolute bottom-10 right-2 md:right-30 lg:right-50" data-anim>
          <div className="rotate-180"><LeavesSvg /></div>
        </div>
    </div>
  )
}

export default DesignExperience