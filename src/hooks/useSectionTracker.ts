import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { navItems } from "../constants/Nav/nav";

gsap.registerPlugin( ScrollTrigger )

export const useSectionTracker = (setActive:(val:string)=>void)=>{
 useGSAP(() => {
    const triggers = navItems.map((item)=>(
        ScrollTrigger.create({
            trigger:item.to,
            start:'top center',
            end:'bottom center',
            onEnter: ()=> setActive(item.text.toLocaleLowerCase()),
            onEnterBack:()=> setActive(item.text.toLocaleLowerCase())
        })
    ))
    return () => {
        triggers.forEach(t=>t.kill());
    }
 },[])
}