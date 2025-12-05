import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function useMotionAnimationHook(
  container: React.RefObject<HTMLElement | null>,
  selector: string,
  rotation: number,
  movement: number,
  rSnap: number,
  mSnap: number,
  repeat: boolean,
  durationMin: number,
  durationMax: number
) {
  useGSAP(
    (context) => {
      if (!container.current) return;
      const select = context.selector!;
      const elements = select(selector);
      if (!elements || !elements.length) return;
      elements.forEach((el: HTMLDivElement) => {
        gsap.to(el, {
          x: () => gsap.utils.random(-movement, movement, mSnap),
          y: () => gsap.utils.random(-movement, movement, mSnap),
          rotate: () => gsap.utils.random(-rotation, rotation, rSnap),
          repeat: repeat ? -1 : 0,
          repeatRefresh: true,
          duration: () => gsap.utils.random(durationMin, durationMax),
        });
      });
    },
    { scope: container }
  );
}
