import { useRef } from "react"
import BasicShapes from "../../components/shapes/BasicShapes"
import SquarePattern from "../../components/shapes/SquarePattern"
import useMotionAnimationHook from "../../hooks/useMotionAnimationHook"

const DesignSkill = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  useMotionAnimationHook(ref,"[data-anim]",30,5,6,1,true,3,3.5)
  return (
    <div className="absolute w-full h-full top-0 left-0 -z-10 overflow-hidden" ref={ref}>
        <div className=' absolute flex flex-col gap-5 -rotate-45 bottom-0  w-full translate-x-2/5'>
        <div className='w-full h-5 overflow-hidden'><BasicShapes type='rectangle' /></div>
        <div className='w-full h-5 overflow-hidden '><BasicShapes type='rectangle' /></div>
        </div>

        <div className="w-[30%] md:absolute top-1/6 left-10 hidden "><SquarePattern /></div>
        <div className="hidden md:absolute w-[10%] bottom-1/9 rotate-45 left-10"><BasicShapes type="triangle" /></div>

        <div className="absolute w-1/10 md:w-[5%] -z-10 top-12 -left-2" data-anim>
          <BasicShapes type="circle" />
          <div className="absolute top-1/2 translate-x-8/5 -translate-y-1/2 w-1/2 -z-20 rotate-90"><BasicShapes type="triangle" /></div>
          <div className="absolute -top-2/7 left-1/2 -translate-x-1/2 w-1/2 -z-20"><BasicShapes type="triangle" /></div>
          <div className="absolute -bottom-2/7 left-1/2 -translate-x-1/2 w-1/2 -z-20 rotate-180"><BasicShapes type="triangle" /></div>
        </div>

        <div className="absolute w-1/10 md:w-[5%] -z-10 top-5  -right-2" data-anim>
          <BasicShapes type="circle" />
          <div className="absolute top-1/2 -translate-x-4/5 -translate-y-1/2 w-1/2 -z-20"><BasicShapes type="circle" /></div>
          <div className="absolute -top-2/7 left-1/2 -translate-x-1/2 w-1/2 -z-20"><BasicShapes type="circle" /></div>
          <div className="absolute -bottom-2/7 left-1/2 -translate-x-1/2 w-1/2 -z-20"><BasicShapes type="circle" /></div>
        </div>
        <div className="w-[5%] absolute bottom-[5%] left-2 md:left-[5%]" data-anim><SquarePattern /></div>
        <div className="w-[4%] absolute bottom-[40%] left-2 md:left-[8%] rotate-180" data-anim><SquarePattern /></div>
        <div className="w-[8%] absolute bottom-[50%] right-2 md:right-[8%] -rotate-90" data-anim><SquarePattern /></div>
    </div>
  )
}

export default DesignSkill