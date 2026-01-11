import { useRef, useState } from "react";
import { navItems } from "../../constants/Nav/nav";
import { useSectionTracker } from "../../hooks/useSectionTracker";
import { scrollIntoView } from "../../utils/scrollIntoView";
import HamburgerMenu from "./HamburgerMenu";
import { useAutoHideNav } from "../../hooks/useAutoHideNav";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  const HeaderRef = useRef(null);
  const [active, setActive] = useState("home");
  useSectionTracker(setActive);
  useAutoHideNav(HeaderRef);
  return (
    <header className="fixed w-full h-16 left-0 top-0 z-100 flex  justify-between px-8 items-center gap-5 text-(--color-text-dark)" ref={HeaderRef}>
      <div
        className="logo hover:cursor-pointer whitespace-nowrap"
        onClick={()=>{
          scrollIntoView("#home");
        }}
      >
        Yash Mishra
      </div>
      <nav className="hidden md:flex gap-5 items-center ">
        {navItems.map((el, index) => (
          <div
            className="flex flex-nowrap items-center gap-1 font-bold hover:cursor-pointer hover:scale-120 transition-all duration-200 ease-in-out "
            key={index}
            onClick={() => {
              scrollIntoView(el.to);
            }}
            style={{
              color : active == el.text.toLowerCase() ? "var(--color-accent)" : "var(--color-text-dark)"
            }}
          >
            <el.icons />
            <h3>{el.text}</h3>
          </div>
        ))}
        <ThemeSwitcher />
      </nav>
      <div className="md:hidden flex gap-5 flex-row-reverse items-center"><HamburgerMenu/><ThemeSwitcher /></div>
    </header>
  );
};

export default Navbar;
