import { useRef, useState } from "react";
import { navItems } from "../../constants/Nav/nav";
import { scrollIntoView } from "../../utils/scrollIntoView";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeFill } from "react-icons/ri";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useSectionTracker } from "../../hooks/useSectionTracker";

gsap.registerPlugin(ScrollTrigger);

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  useSectionTracker(setActive);
  const refMenu = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline>(null);
  const closeOnScroll = useRef(false);

  useGSAP(() => {
    if (!refMenu.current) return;
    tlRef.current = gsap.timeline({ paused: true });
    tlRef.current.fromTo(
      refMenu.current,
      { xPercent: 100,autoAlpha:0 },
      {
        autoAlpha:1,
        xPercent: 0,
        duration: 0.5,
        ease: "power3.out",
      }
    );
  }, []);

  useGSAP(() => {
    if (!open) return;

    const trigger = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate() {
        if(!closeOnScroll.current) return;
        closeOnScroll.current = false;
        setOpen(false);
      },
    });
    return () => trigger.kill();
  }, [open]);
  
    useGSAP(() => {
      if(!tlRef.current) return;
      if(open){
        closeOnScroll.current = true;
        tlRef.current.play();
      } else {
        tlRef.current.reverse();
      }
    },[open]);
  return (
    <div className="relative z-100">
      <div className="text-3xl" onClick={() => setOpen((prev) => !prev)}>
        {open ? <RiCloseLargeFill /> : <GiHamburgerMenu />}
      </div>
      <div
        className="flex flex-col gap-5 absolute top-10 -right-9 bg-(--color-surface)/80 pr-10 pl-2 py-2 rounded-(--border-radius)"
        ref={refMenu}
      >
        {navItems.map((el, index) => (
          <div
            className="flex flex-nowrap items-center gap-1 font-bold hover:cursor-pointer hover:scale-120 transition-all duration-200 ease-in-out "
            key={index}
             onClick={() => {
              setOpen(false);
              scrollIntoView(el.to);
            }}
            style={{
              color:
                active == el.text.toLowerCase()
                  ? "var(--color-accent)"
                  : "var(--color-text-dark)",
            }}
          >
            <el.icons />
            <h3>{el.text}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HamburgerMenu;
