import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import MorphSVGPlugin from "gsap/MorphSVGPlugin";
import { useRef } from "react";
import KidSvg from "../components/svgs/KidSvg";
import TeenSvg from "../components/svgs/TeenSvg";
import ManSvg from "../components/svgs/ManSvg";

gsap.registerPlugin(MorphSVGPlugin);

const SvgMorph = () => {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const container = ref.current;
    if (!container) return;

gsap.set(".teen, .man", { autoAlpha: 0 });
    const tl = gsap.timeline({ repeat: -1 });
    tl.delay(1.5)
    tl.to(".boy_extra",{autoAlpha:0,duration:0.3,delay:1.5})
    .to("#main_boy_hair",{morphSVG:"#template_teen_hair",duration:0.3},"<")
    .to("#main_boy_face",{morphSVG:"#template_teen_face",duration:0.3},"<")
    .to("#main_boy_body",{morphSVG:"#template_teen_body",duration:0.3},"<")
    .to(".teen",{autoAlpha:1,duration:0.3})
    .to(".boy",{autoAlpha:0,duration:0.3})
    .to(".teen_extra",{autoAlpha:0,duration:0.3,delay:1.5})
    .to("#main_teen_hair",{morphSVG:"#template_man_hair",duration:0.5},"<")
    .to("#main_teen_face",{morphSVG:"#template_man_face",duration:0.5},"<")
    .to("#main_teen_body",{morphSVG:"#template_man_body",duration:0.5},"<")
    .to(".man",{autoAlpha:1,duration:0.3})
    .to(".teen",{autoAlpha:0,duration:0.3})
    .to(".man_extra",{autoAlpha:0,duration:0.3,delay:1.5})
    .to("#main_boy_hair",{morphSVG:"#template_boy_hair",duration:0})
    .to("#main_boy_face",{morphSVG:"#template_boy_face",duration:0})
    .to("#main_boy_body",{morphSVG:"#template_boy_body",duration:0})
    .to("#main_man_hair",{morphSVG:"#template_boy_hair",duration:0.5},"<")
    .to("#main_man_face",{morphSVG:"#template_boy_face",duration:0.5},"<")
    .to("#main_man_body",{morphSVG:"#template_boy_body",duration:0.5},"<")
    .to(".boy",{autoAlpha:1,duration:0.3})
    .to(".man",{autoAlpha:0,duration:0.3})

  }, []);

  return (
    <div className="relative aspect-square" ref={ref}>
      <div className="absolute top-0 left-0 w-full opacity-0 pointer-events-none">
        <KidSvg idSuffix="template"/>
        <TeenSvg idSuffix="template"/>
        <ManSvg idSuffix="template"/>
      </div>
      <div className="absolute top-0 left-0 w-full ">
        <KidSvg idSuffix="main"/>
      </div>
      <div className="absolute top-0 left-0 w-full ">
        <TeenSvg idSuffix="main"/>
      </div>
      <div className="absolute top-0 left-0 w-full">
        <ManSvg idSuffix="main" />
      </div>
    </div>
  );
};

export default SvgMorph;
