/**
 * this hook will take the whole header as param
 * when scroll down , it will hide it 
 * when scroll up it will show it 
 * by default it will always show the header
 */
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { RefObject } from "react";
gsap.registerPlugin(ScrollTrigger)
export const useAutoHideNav = (navRef:RefObject<HTMLDivElement | null>) => {
    useGSAP(()=>{
    if(!navRef.current) return;
    const showAnim = gsap.from(navRef.current,{
        yPercent: -100,
        duration:0.3,
        ease:"power2.out",
        paused:true,
    })
    .progress(1);
    const trigger = ScrollTrigger.create({
        start:0,
        end:"max",
        onUpdate(self) {
            if(self.direction === 1){
                showAnim.reverse();
            }
            else{
                showAnim.play();
            }
        }
    })
    return () => {
        trigger.kill();
    }
},{scope:navRef,dependencies:[]});
};
