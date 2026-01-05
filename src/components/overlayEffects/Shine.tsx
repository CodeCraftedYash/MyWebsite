import { useRef } from "react";
import type { ShineParams } from "../../types/shineParamType";
import { useShineAnimation } from "../../hooks/useShineAnimation";

const Shine = ({
  children,
  duration = 1,
  width = "10%",
  direction = 0,
  rotation = 0,
  type = "default",
  color = "white",
}: ShineParams) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  useShineAnimation({
    ref: ref,
    containerRef:containerRef,
    direction,
    duration,
    rotation,
    type,
  });
  return (
    <div
      className="relative overflow-hidden rounded-(--border-radius) h-full"
      ref={containerRef}
    >
      {children}
      <div
        className="absolute h-full scale-y-200 left-0 top-1/2 -translate-y-1/2
"
        style={{ width: width, transform: `rotate(${rotation}deg)` }}
        ref={ref}
      >
        <div
          className="w-full h-full opacity-100"
          style={{
            backgroundColor: "transparent",
            backgroundImage: `linear-gradient(to right,transparent,${color},transparent)`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Shine;
