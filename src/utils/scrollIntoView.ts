import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export const scrollIntoView = (id:string) =>{
    gsap.to(window,{
        scrollTo: {
            y: `${id}`,
            autoKill:true
        },
        duration:0.6,
        ease:"power2.out"
    })
}