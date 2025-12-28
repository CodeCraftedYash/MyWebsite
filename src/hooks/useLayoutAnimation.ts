/**
 * it selects the card from the container who have data-skill-card 
 * for mobile screen applies right slide + fade in animation
 * for pc screens applies custom slide + fade in animation using the direction variable 
 * the x , y defined within direction are used to set the initial hidden position
 * currently it supporst 4 cards if you want to increase the number of cards , you only have to define the direction varible  
 */
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { RefObject } from "react";

gsap.registerPlugin( ScrollTrigger );

export default function useLayoutAnimation (ref:RefObject<HTMLElement | HTMLDivElement | null>) {
     useGSAP(()=>{
    const container = ref.current;
    if(!container)
      return;
    const children = gsap.utils.toArray<HTMLElement>(container.querySelectorAll('[data-skill-card]'));
    const mm = gsap.matchMedia();
    const direction = [{x:0,y:-100},{x:-100,y:0},{x:100,y:0},{x:0,y:100}]
    mm.add("(max-width: 767px)", () => {
      children.forEach((card)=>{
        gsap.fromTo(card,
          {
            autoAlpha:0,
            x:40,
          },
          { 
            autoAlpha:1,
            x:0,
            scrollTrigger: {
              trigger: card,
              start: "top 60%",
              end:"top 60%",
              toggleActions: " play none none none",
              once:true
            }
          }
        )
      })
    } )
   mm.add("(min-width: 767px)",()=>{
      gsap.fromTo(children,
        {
          autoAlpha:0,
          x: (i) => direction[i].x,
          y: (i) => direction[i].y,
        },
        {
          autoAlpha:1,
          x:0,
          y:0,
          stagger:0.5,
          duration:1,
          scrollTrigger:{
            trigger:container,
            start:"top 45%",
            end:"top 100%",
            toggleActions:"play none none none"
          }
        }
      )
   })
  },[])
}