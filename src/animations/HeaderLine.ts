import gsap from "gsap";

export const animateHeaderLine = (el: HTMLElement,textEl: HTMLElement) => {
  gsap.set(el, { autoAlpha: 0, scaleX: 0 });
  gsap.set(textEl, {autoAlpha:0,y:10});
  const tl = gsap.timeline({ease:"power2.in"});
  tl.to(el, {
    autoAlpha: 1,
    duration: 0.2,
  })
  .to(textEl, {
    autoAlpha: 1,
    duration: 0.8,
    y:0
  },"<")
  .to(el, {
    scaleX: 1,
    duration: 0.5,
    ease: "power2.out"
  },"<")
};
