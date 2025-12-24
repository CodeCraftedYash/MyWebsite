import { useRef, useState } from "react";
import Header from "../../components/header/Header";
import { useScrollTrigger } from "../../hooks/useScrollTrigger";
import AboutMain from "../../layouts/about/AboutMain";
import DesignAbout from "../../layouts/about/DesignAbout";

const AboutSection = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  const [view, setView] = useState<boolean>(false);
  useScrollTrigger(refContainer,'top center','bottom bottom',true,false,false,()=>setView(true))

  return (
    <div
      className="min-h-dvh bg-(--color-primary) bg-linear-120 from-(--color-primary) to-(--color-secondary) relative overflow-hidden"
      ref={refContainer}
      id="about"
    >
        <div
          className="flex flex-col gap-20 pt-10 relative overflow-hidden"
        >
           {view && <div className="relative z-50">
            <Header text="About Me" />
          </div>}
          {view && <div className="relative z-50">
            <AboutMain />
          </div>}
        </div>
      <DesignAbout />
    </div>
  );
};

export default AboutSection;
