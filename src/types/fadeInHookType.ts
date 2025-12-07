import type { RefObject } from "react";

export type fadeInHookType = (
    ref: RefObject<HTMLElement | HTMLDivElement | null>,
      duration: number,
      delay?: number,
      x?: number,
      y?: number,) => void