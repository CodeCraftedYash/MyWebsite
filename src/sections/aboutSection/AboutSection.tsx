import { useRef, useState } from "react";
import Header from "../../components/header/Header";
import { useFadeInAnimation } from "../../hooks/useFadeInAnimation";
import { useScrollTrigger } from "../../hooks/useScrollTrigger";
import AboutMain from "../../layouts/about/AboutMain";

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const refContainer = useRef<HTMLDivElement>(null);
  const [view, setView] = useState<boolean>(false);
  useFadeInAnimation(ref, 0.5, 1, 0, 0);
  useScrollTrigger(ref, "top 70%", "bottom 100%", true, false, false, () =>
    setView(true)
  );
  return (
    <div
      className="min-h-screen bg-(--color-primary) bg-linear-120 from-(--color-primary) to-(--color-secondary)"
      ref={ref}
    >
      {view && (
        <div
          ref={refContainer}
          className="flex flex-col gap-20 pt-10 relative overflow-hidden"
        >
          <div className="relative z-50">
            <Header text="About Me" />
          </div>
          <div className="relative z-50">
            <AboutMain />
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutSection;
