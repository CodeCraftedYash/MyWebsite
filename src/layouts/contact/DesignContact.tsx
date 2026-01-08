import { useRef } from "react"
import BasicShapes from "../../components/shapes/BasicShapes"
import LeavesSvg from "../../components/svgs/LeavesSvg"
import useMotionAnimationHook from "../../hooks/useMotionAnimationHook"

const DesignContact = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    useMotionAnimationHook(containerRef,"[data-anim]",12,0,6,0,true,2,3);
  return (
    <div className="w-full h-full absolute top-0 left-0 -z-10" ref={containerRef}>
        <div className="w-[40%] sm:w-[35%] md:w-[32%] lg:w-[30%] absolute top-10 -left-30" data-anim><BasicShapes type="circle" /></div>
        <div className="w-16 absolute bottom-10 left-2 "><div className="rotate-90"><LeavesSvg /></div></div>
        <div className="w-[20%] absolute top-10 right-2" data-anim><div className="rotate-180"><BasicShapes type="triangle" /></div></div>
        <div className="w-16 absolute bottom-10 right-2 " data-anim><LeavesSvg /></div>
    </div>
  )
}

export default DesignContact