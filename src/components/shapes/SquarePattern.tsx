import { useRef } from "react";
import BasicShapes from "./BasicShapes";
import useMotionAnimationHook from "../../hooks/useMotionAnimationHook";

const SquarePattern = () => {
  const ref = useRef<HTMLDivElement|null>(null);
  useMotionAnimationHook(ref,"data-anim", 25, 3,5,1,true,2,3);
  return (
    <div className="aspect-square flex flex-col flex-nowrap origin-center" ref={ref}>
      <div className="w-[15%] ml-[60%]" data-anim>
        <BasicShapes type="square" />
      </div>
      <div className="flex flex-nowrap mt-auto">
        <div className="w-[70%]" data-anim>
          <BasicShapes type="square" />
        </div>
        <div className="w-[15%] ml-auto -mt-[5%]" data-anim>
          <BasicShapes type="square" data-anim/>
        </div>
      </div>
    </div>
  );
};

export default SquarePattern;
