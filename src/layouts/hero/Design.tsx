import { useRef } from "react"
import BeakPattern from "../../components/shapes/BeakPattern"
import HollowCirclePattern from "../../components/shapes/HollowCirclePattern"
import SquarePattern from "../../components/shapes/SquarePattern"
import useMotionAnimationHook from "../../hooks/useMotionAnimationHook"

const Design = () => {
  const ref = useRef<HTMLDivElement|null>(null)
  useMotionAnimationHook(ref,"[data-anim]",12,5,5,1,true,3,2);
  return (
    <div className="absolute top-0 w-full h-full overflow-hidden z-1 " ref={ref}>
         <div className="absolute w-4/7 md:w-2/7 lg:translate-x-1/5 bottom-0 translate-y-1/2" style={{filter:"var(--drop-shadow)"}}><HollowCirclePattern /></div>
        
        <div className="absolute w-[10%] rotate-90 right-10 top-1/2 -translate-y-1/3 sm:top-1/3 md:w-[5%] md:rotate-180 md:top-1/2"><SquarePattern /></div>

        <div className="sm:block absolute hidden rotate-80 top-2/5 right-1/4 w-[3%] lg:top-35 lg:right-1/3 "><SquarePattern /></div>

        <div className="absolute hidden rotate-80 top-15 left-15 w-[6%] md:block"><SquarePattern /></div>

        <div className="absolute w-[30%] max-w-52 left-[10%] bottom-[35%] -rotate-45 min-w-0 sm:rotate-12 sm:bottom-[45%] md:inset-auto md:right-0 md:rotate-150 md:w-[20%] md:max-w-80 lg:w-[25%] xl:w-[30%]  xl:max-w-92 xl:rotate-150">
          <div
           data-anim><BeakPattern /></div>
          </div>

    </div>
  )
}

export default Design