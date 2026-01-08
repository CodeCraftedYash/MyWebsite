import { useRef, useState } from "react";
import Header from "../../components/header/Header";
import { useScrollTrigger } from "../../hooks/useScrollTrigger";
import ExperienceMain from "../../layouts/experience/ExperienceMain";
import DesignExperience from "../../layouts/experience/DesignExperience";

const ExperienceSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<boolean>(false);
  useScrollTrigger(ref, "top 80%", "top 60%", true, false, false, () =>
    setActive(true)
  );
  return (
    <div
      className="min-h-dvh py-20 flex flex-col gap-10 relative bg-(--color-background) z-50"
      id="experience"
      ref={ref}
    >
      <div className="text-(--color-text-dark) mb-12 z-50">
        {active && <Header text="Experience" />}
      </div>
      <ExperienceMain />
      <DesignExperience />
    </div>
  );
};

export default ExperienceSection;
