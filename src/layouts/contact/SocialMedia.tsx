import { useRef } from "react"
import { contact } from "../../constants/Contact/contact"
import { openURL } from "../../utils/openURL"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const SocialMedia = () => {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(()=>{
    if(!ref.current) return;
    const icons = gsap.utils.toArray<HTMLDivElement>(ref.current.children);
    gsap.set(icons,{
      autoAlpha:0,
    })
    gsap.to(icons,{
      autoAlpha:1,
      duration:0.5,
      stagger:0.5,
      delay:2,
      ease:"sine.inOut"
    })
  })
  return (
    <div className="flex gap-10 justify-center" ref={ref}>{
      contact.map((item,index) => (
        <div className="w-10 aspect-square flex flex-col items-center justify-center gap-1 hover:cursor-pointer hover:scale-110 transition-all duration-200 ease-in-out" key={index} onClick={ () => openURL(item.link)}>
          <img src={item.icon} alt={item.text}/>
          <h5 style={{fontSize:"var(--font-size-small)"}}>{item.text}</h5>
        </div>
      ))  
    }</div>
  )
}

export default SocialMedia