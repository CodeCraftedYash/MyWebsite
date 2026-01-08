import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import HeroSection from "../sections/heroSection/HeroSection";
import DesignHero from "../layouts/hero/DesignHero";
import AboutSection from "../sections/aboutSection/AboutSection";
import ProjectSection from "../sections/projectSection/ProjectSection";
import Navbar from "../layouts/navbar/Navbar";
import SkillsSection from "../sections/skillsSection/SkillsSection";
import ExperienceSection from "../sections/experienceSection/ExperienceSection";
import ContactSection from "../sections/contactSection/ContactSection";
import Footer from "../layouts/footer/Footer";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

const HomePage = () => {
  const main = useRef(null);
  const smoother = useRef<ScrollSmoother | null>(null);

  useGSAP(
    () => {
      smoother.current = ScrollSmoother.create({
        smooth: 2,
        effects: true,
      });

      return () => {
        smoother.current?.kill();
      };
    },
    { scope: main }
  );

  return (
    <div ref={main} id="smooth-wrapper">
      <Navbar />
      <div id="smooth-content">
        <div className="relative">
          <HeroSection />
          <DesignHero />
        </div>
          <AboutSection />
          <SkillsSection />
          <ProjectSection />
          <ExperienceSection />
          <ContactSection />
          <Footer />
      </div>
    </div>
  );
};

export default HomePage;
