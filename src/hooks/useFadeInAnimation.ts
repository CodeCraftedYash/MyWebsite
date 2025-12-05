import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import type { RefObject } from "react";

export const useFadeInAnimation = <T extends HTMLElement>(
  ref: RefObject<T | null>,
  duration: number,
  delay: number = 0,
  x: number = 0,
  y: number = 0,
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
  });
};
