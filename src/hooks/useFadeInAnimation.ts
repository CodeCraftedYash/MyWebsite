import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import type { fadeInHookType } from "../types/fadeInHookType";

export const useFadeInAnimation : fadeInHookType = (
  ref,
  duration,
  delay,
  x,
  y,
) => {
  useGSAP(() => {
    if (!ref.current) return;

    gsap.set(ref.current, { autoAlpha: 0,x,y });
    gsap.to(ref.current, {
      autoAlpha: 1,
      duration,
      ease: "power2.in",
      delay,
      x:0,
      y:0
    });
  },[ref,duration,delay,x,y]);
};
