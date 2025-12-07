import type { RefObject } from "react";

export type ScrollTriggerHookType = (
  trigger: RefObject<HTMLElement | HTMLDivElement | null>,
  start: string,
  end: string,
  once: boolean,
  scrub: boolean | number | undefined,
  pin: boolean | HTMLElement | null | undefined,
  onEnter: () => void,
  onReEnter?: () => void
) => void;
