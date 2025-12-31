import type { RefObject } from "react";

export type fadeInHookType = (
    ref: RefObject<HTMLElement | HTMLDivElement | null>,
      duration: number,
      gate:boolean,
      delay?: number,
      x?: number,
      y?: number,    
    ) => void