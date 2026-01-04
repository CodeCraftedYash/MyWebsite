import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { RefObject } from "react";


gsap.registerPlugin( ScrollTrigger );

export const useCardsSlideIn = (cardsRef:RefObject<HTMLDivElement | null>) => {
    useGSAP(()=>{
        if(!cardsRef.current) return;
    const cards = gsap.utils.toArray<HTMLDivElement>(cardsRef.current.children);
    cards.forEach((item) => {
      gsap.set(item,{
        xPercent:50,
        autoAlpha:0,
      })
      gsap.to(item,{
        xPercent:0,
        autoAlpha:1,
        duration:0.4,
        ease:"sine.in",
        scrollTrigger: {
          trigger:item,
          start:"top center",
          end:"bottom center",
          toggleActions: "play none none none",
        }
      })
    })
  },[])
}