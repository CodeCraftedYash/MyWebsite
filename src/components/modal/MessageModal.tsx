import { useGSAP } from "@gsap/react";
import { useRef } from "react"
import gsap from "gsap";
import { RiCheckDoubleFill } from "react-icons/ri";
import { RiCloseLargeFill } from "react-icons/ri";

const MessageModal = ({text = 'success',success = true}:{text:string,success:boolean}) => {
    const ref = useRef(null);
    
    useGSAP(()=>{
        if(!ref.current) return;
        gsap.set(ref.current,{
            yPercent:100,
            autoAlpha:0,
        })
        gsap.to(ref.current,{
            yPercent:0,
            autoAlpha:1,
            duration:0.5,
            ease:"expo.inOut"
        })
        gsap.to(ref.current,{
            yPercent:-100,
            autoAlpha:0,
            duration:0.5,
            delay:1,
            ease:"power2.inOut"
        })
    })
  return (
    <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center" ref={ref} style={{fontSize:"var(--font-size-base)"}}>
        <div className="min-w-full translate-x-[110%] flex items-center gap-1" style={{color:success ? "#65cd1a" : "#d10d09"}}>
            <h5 className="font-bold text-nowrap whitespace-nowrap">{text}</h5>
            {success?<RiCheckDoubleFill className="text-2xl" />:<RiCloseLargeFill />}
        </div>
    </div>
  )
}

export default MessageModal