import HollowCirclePattern from '../../components/shapes/HollowCirclePattern'
import Leaves from '../../components/shapes/Leaves'
import BasicShapes from '../../components/shapes/BasicShapes'
import useMotionAnimationHook from '../../hooks/useMotionAnimationHook'
import { useRef } from 'react'

const ProjectDesign = () => {
  const ref = useRef<HTMLDivElement>(null); 
  useMotionAnimationHook(ref,"[data-anim]",30,0,30,0,true,2,2.5);
  return (
    <div className='absolute top-0 left-0 w-full h-full overflow-hidden -z-10' ref={ref}>
        <div className='absolute bottom-0 translate-y-1/2 w-1/2'><HollowCirclePattern /></div>
        <div className='absolute w-[15%] sm:w-[10%] md:w-[5%] top-20 left-0 origin-bottom-left' data-anim><div className='rotate-95 translate-y-1/2'><Leaves /></div></div>
        <div className='absolute w-[15%] sm:w-[10%] md:w-[5%] bottom-20 right-0 origin-top-right' data-anim><div className='-rotate-95 -translate-y-1/2'><Leaves /></div></div>
        
        <div className=' absolute flex flex-col gap-5 rotate-45 top-0  w-full translate-x-2/5'>
        <div className='w-full h-5 overflow-hidden'><BasicShapes type='rectangle' /></div>
        <div className='w-full h-5 overflow-hidden '><BasicShapes type='rectangle' /></div>
        </div>
    </div>
  )
}

export default ProjectDesign