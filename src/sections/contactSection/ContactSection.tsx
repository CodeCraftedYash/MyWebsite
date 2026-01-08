import Header from "../../components/header/Header";
import { useScrollTrigger } from "../../hooks/useScrollTrigger";
import ContactMain from "../../layouts/contact/ContactMain";
import { useRef, useState } from "react";
import DesignContact from "../../layouts/contact/DesignContact";

const ContactSection = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [active,setActive] = useState(false);
  useScrollTrigger(ref,"top center","bottom bottom",true,false,false,()=>setActive(true))
  return (
    <div
      className="min-h-dvh bg-(--color-background) text-(--color-text-dark) overflow-hidden flex flex-col gap-20 py-20 relative z-50"
      id="contact"
      ref={ref}
    >
      {
      active && 
      <Header text="Contact Me" />
  } 
  {
    active &&  <ContactMain />
  }
  <DesignContact />
    </div>
  );
};

export default ContactSection;
