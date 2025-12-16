import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Vectorize } from "../utils/vector";
import type { ShineParams } from "../types/shineParamType";

type ShineAnimationArgs = Pick<
  ShineParams,
  "direction" | "duration" | "rotation" | "type"
> & {
  ref: React.RefObject<HTMLDivElement | null>;
  containerRef: React.RefObject<HTMLDivElement | null>;
};

export function useShineAnimation({
  ref,
  containerRef,
  direction,
  duration,
  rotation,
  type,
}: ShineAnimationArgs) {
  const {x,y} = Vectorize(direction);
  useGSAP(
    () => {
      const el = ref.current;
      const container = containerRef.current;
      if (!el || !container) return;
      const { width: w, height: h } = container.getBoundingClientRect();

    const isHorizontal = Math.abs(x) > Math.abs(y);
    const distance = Math.hypot(w, h);

    gsap.set(el, {
        x: isHorizontal ? -x * distance/2 : -x * distance,
        y: isHorizontal ? -y * distance : -y * distance/2,
        rotation,
        top: isHorizontal ? "50%" : "0%",
        left: isHorizontal ? "0%" : "50%",
    });

    const tl = gsap.timeline({ paused: true });

    tl.to(el, {
      x: x * distance,
      y: y * distance,
      duration: duration,
      ease: "none",
      repeat: type === "default" ? -1 : type === "hover" ? -1 : 0,
    });
    const onHover = () => tl.play();
    const onEnter = () => tl.restart();
    const onLeave = () => tl.pause(0);
    if( type === "hover"){
    container.addEventListener("mouseenter",onHover);
    container.addEventListener("mouseleave",onLeave)
  }
    if( type === "default"){
      tl.play();
    }
    if( type === "enter"){
      container.addEventListener("mouseenter",onEnter)
    }
    if( type === "exit" ){
      container.addEventListener("mouseleave",onEnter)
    }
      return () => {
        tl.kill();
        container.removeEventListener("mouseenter",onHover);
        container.removeEventListener("mouseenter",onEnter);
        container.removeEventListener("mouseleave",onEnter);  
      };
  }, [direction, type]);
}
