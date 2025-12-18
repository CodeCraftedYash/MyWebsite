import type { ReactNode } from "react";

export type ShineParams = {
  children: ReactNode;
  duration: number;
  width: string;
  direction: number;
  rotation: number;
  type: "hover" | "default" | "enter" | "exit";
  color: string;
};