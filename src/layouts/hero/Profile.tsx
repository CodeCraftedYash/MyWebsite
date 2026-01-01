import { useRef } from "react";
import MyImage from "../../assets/yash.webp";
import LineSvg from "../../components/svgs/LineSvg";
import { useFadeInAnimation } from "../../hooks/useFadeInAnimation";
const Profile = () => {
  const ref = useRef<HTMLImageElement>(null);
  useFadeInAnimation(ref,0.5,true,0.3);
  return (
    <div className="relative w-fit">
      <img src={MyImage} ref={ref} fetchPriority="high" className="w-44 min-w-10 aspect-square rounded-full" style={{boxShadow:"var(--box-shadow)"}}/>
      <div className="absolute w-full h-full -left-8 -bottom-4"><LineSvg /></div>
    </div>
  );
};

export default Profile;