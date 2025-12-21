import type { projectDataType } from "../../types/projectCard";
import img1 from '../../assets/trackle.webp'
import img2 from '../../assets/weatherApp.webp';

/**
 * cannot find module error !
 * create and paste this into src/global.d.ts
 * declare module '*.webp' {
  const ref: string;
  export default ref;
}
 */

export const projectsData: projectDataType[] = [
  {
    title: "Trackle",
    desc: "A full-stack student management system built for tutors and educational institutions to track homework, test performance, and overall progress with interactive dashboards and analytics.",
    image: img1, 
    vid: "https://res.cloudinary.com/yashmishra/video/upload/v1766249721/trackle_npqlnq.mp4",
    open: "https://trackle-by-yash-mishra.vercel.app/",
    git: "https://github.com/CodeCraftedYash/trackle",
    skills: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Zustand",
      "Recharts",
      "Express.js",
      "MongoDB",
      "Cloudinary",
    ],
    errMsg: "",
  },
  {
  title: "Weather App",
  desc: "A weather forecast app built with TypeScript that shows current weather data and trends using an external weather API.",
  image: img2,
  vid: "https://res.cloudinary.com/yashmishra/video/upload/v1766249718/weatherApp_jdjixu.mp4",
  open: "https://weather-app-roan-zeta-64.vercel.app/",
  git: "https://github.com/CodeCraftedYash/weather-app",
  skills: [
    "React", "TypeScript", "API Integration", "Tailwind CSS"
  ],
  errMsg: ""
}
];
