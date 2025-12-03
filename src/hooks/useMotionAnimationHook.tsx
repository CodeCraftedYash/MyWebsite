import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function useMotionAnimationHook(container: React.RefObject<HTMLElement[]>,rotation:number,movement:number){
    useGSAP(()=>{
        container.current.forEach(el=>{
            if(!el)
            return;
        gsap.to(el,{
            x:()=>gsap.utils.random(-movement,1,movement),
            y:()=>gsap.utils.random(-movement,1,movement),
            rotate:()=>gsap.utils.random(-rotation,5,rotation),
            repeat:-1,
            repeatRefresh:true,
            duration:()=>gsap.utils.random(2,3)
        })
        })
        
    },[container])
}