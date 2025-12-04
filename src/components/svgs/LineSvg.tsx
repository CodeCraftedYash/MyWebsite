import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin)

const LineSvg = () => {
  const ref = useRef<SVGPathElement>(null);
  useGSAP(()=>{
    gsap.set(ref.current,{
      drawSVG:0
    })
    gsap.to(ref.current,{
    drawSVG:"100%",
    duration:1      
    })
  })
  return (
    <div>
      <svg
        viewBox="0 0 255 271"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_190_52)">
          <path
            d="M19.0776 1.70891C19.0776 1.70891 -16.9224 144.209 63.0776 215.709C143.078 287.209 247.578 240.709 247.578 240.709"
            stroke="var(--color-shapes)"
            strokeWidth="14"
            ref={ref}
          />
        </g>
      </svg>
    </div>
  );
};

export default LineSvg;
