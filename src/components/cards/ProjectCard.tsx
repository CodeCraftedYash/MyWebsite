import { useRef } from "react";
import { projectDataType } from "../../types/projectCard";
import { openURL } from "../../utils/openURL";
import Button from "../buttons/Button";
import { FaArrowRight } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({
  title,
  desc,
  git,
  image,
  skills,
  vid,
  open,
}: projectDataType) => {
  const ref = useRef<HTMLVideoElement>(null);
  const handleMouseEnter = () => {
    const video = ref.current;
    if (!video) return;
    video.currentTime = 0;
    video.play().catch(() => {});
  };
  const handleMouseExit = () => {
    const video = ref.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  };
  return (
    <div
      className="p-3 rounded-(--border-radius) bg-(--color-surface) text-white flex flex-col justify-between h-full "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseExit}
      onTouchStart={handleMouseEnter}
      onTouchEnd={handleMouseExit}
    >
      <div className="flex flex-col gap-4">
        <div className="w-full rounded-(--border-radius) aspect-video">
          <video
            ref={ref}
            src={vid}
            poster={image}
            muted
            loop
            playsInline
            preload="none"
            className="w-full h-full object-cover rounded-(--border-radius)"
          />
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold tracking-wide ">{title}</h3>
          <h3>{desc}</h3>
           <h3>
            <span className="font-medium">Techonologies - </span>
            {skills.join(", ")}
          </h3>
        </div>
      </div>
      <div className="flex flex-nowrap gap-10 mt-4 justify-end">
        <Button Icon={FaArrowRight} text="Go" cb={() => openURL(open)} />
        <Button Icon={FaGithub} text="Git" cb={() => openURL(git)} />
      </div>
     
    </div>
  );
};

export default ProjectCard;
