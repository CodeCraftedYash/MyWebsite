import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { ScrollTriggerHookType } from "../types/scrollTriggerHookType";
gsap.registerPlugin(ScrollTrigger);

export const useScrollTrigger:ScrollTriggerHookType = (
  trigger,
  start,
  end,
  once,
  scrub,
  pin,
  onEnter,
  onReEnter
) => {
  useGSAP(() => {
    if (!trigger.current) return;

    const st = ScrollTrigger.create({
      trigger: trigger.current,
      start,
      end,
      once,
      scrub,
      pin,
      onEnter,
      ...(onReEnter && { onEnterBack: onReEnter }),
    });

    return () => st.kill();
  }, [trigger, start, end, once, scrub, pin, onEnter, onReEnter]);
}
