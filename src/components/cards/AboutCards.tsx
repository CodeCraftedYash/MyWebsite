import { useRef } from "react";
import Leaves from "../shapes/Leaves";
import useMotionAnimationHook from "../../hooks/useMotionAnimationHook";

const AboutCards = ({
  text,
  pos = "right",
}: {
  text: string;
  pos: "left" | "right";
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useMotionAnimationHook(ref, "[data-motion]", 25, 0, 5, 0, true, 0.5, 1.5);
  const classNameLeaf =
    "w-12 absolute top-0 " +
    (pos == "left"
      ? "left-0 -translate-8 -rotate-45"
      : "right-0 translate-x-8 -translate-y-8 rotate-45");
  const classNameBox =
    "bg-(--color-shapes) w-1/2 h-full z-20 rounded-(--border-radius) absolute top-0 " +
    (pos == "left"
      ? "left-0 -translate-4"
      : "right-0 translate-x-4 -translate-y-4");
  return (
    <div className="relative text-(--color-text-dark) tracking-wide" ref={ref}>
      <div className="bg-(--color-surface) rounded-(--border-radius) p-4 z-30 relative">
        <h4>{text}</h4>
      </div>
      <div className={classNameBox}>
         <div className={classNameLeaf}>
        <div className="origin-bottom" data-motion>
          <Leaves />
        </div>
      </div>
      </div>
     
    </div>
  );
};

export default AboutCards;
