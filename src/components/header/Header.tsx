import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { animateHeaderLine } from "../../animations/HeaderLine";

const Header = ({ text }: { text: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  useGSAP(()=>{
    if(!ref.current || !textRef.current) return;
    animateHeaderLine(ref.current,textRef.current)
  })
  return (
    <div className='w-fit mx-auto relative'>
      <h2 className="text-center opacity-0" ref={textRef}>{text}</h2>
      <div
        className="w-full h-4 bg-(--color-shapes) rounded-(--border-radius) scale-x-0"
        ref={ref}
      ></div>
    </div>
  );
};

export default Header;