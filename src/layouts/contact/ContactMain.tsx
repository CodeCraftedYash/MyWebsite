import { useGSAP } from "@gsap/react";
import MailMe from "../../layouts/contact/MailMe";
import SocialMedia from "./SocialMedia";
import gsap from "gsap";
import { useRef } from "react";

const ContactMain = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  useGSAP(()=>{
    if(!textRef.current) return;
    const texts = gsap.utils.toArray<HTMLSpanElement>(textRef.current.children);
    const nextElement = textRef.current.nextElementSibling;
    const lastElement = nextElement?.nextElementSibling ;
    if(!lastElement) return;
    gsap.set([texts,nextElement,lastElement],{
      autoAlpha:0,
      yPercent:50,
    })
    const tl = gsap.timeline();
    tl.to(texts,{
      autoAlpha:1,yPercent:0,duration:0.4,stagger:0.3,ease:"sine.inOut"
    })
    .to(nextElement,{
      autoAlpha:1,yPercent:0,duration:0.5
    })
    .to(lastElement,{
      autoAlpha:1,yPercent:0,duration:0.5
    })
  })
  return (
        <div className="flex flex-col text-(--color-text-dark) w-[80%] md:w-[50%] relative mx-auto  gap-4">
          <h5 className="flex flex-col font-bold tracking-wide text-7xl md:text-8xl" ref={textRef}>
            <span>LETS'S</span>
            <span className="text-(--color-accent)">WORK</span>
            <span>TOGETHER</span>
          </h5>
          <h4 className="font-light">Got a project in mind? Let's create somthing amazing together. Drop me a message !</h4>
          <div className="border-2 mb-2 w-fit px-1.5 py-0.5 rounded-(--border-radius) border-(--color-text-dark)/40 transition-all duration-200 ease-in-out hover:scale-110"><MailMe /></div>
          <SocialMedia />
      </div>
  )
}

export default ContactMain