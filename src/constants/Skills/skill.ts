import { reactIcon ,nextjsIcon ,typescriptIcon ,tailwindIcon ,gsapIcon ,nodejsIcon ,expressIcon ,restApiIcon ,mongoDBIcon ,mongooseIcon ,gitIcon ,githubIcon ,postmanIcon, htmlIcon, cssIcon, javascriptIcon } from './index';
export type SkillItem = {
  name: string;
  imgSrc: string;
};

export type SkillGroup = {
  title: string;
  skills: SkillItem[];
};

export const skillsData: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", imgSrc: htmlIcon },
      { name: "CSS", imgSrc: cssIcon },
      { name: "Javascript", imgSrc: javascriptIcon },
      { name: "React", imgSrc: reactIcon },
      { name: "Next.js", imgSrc: nextjsIcon },
      { name: "TypeScript", imgSrc: typescriptIcon },
      { name: "Tailwind CSS", imgSrc: tailwindIcon },
      { name: "GSAP", imgSrc: gsapIcon },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", imgSrc: nodejsIcon },
      { name: "Express", imgSrc: expressIcon },
      { name: "REST APIs", imgSrc: restApiIcon },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", imgSrc: mongoDBIcon },
      { name: "Mongoose", imgSrc: mongooseIcon },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", imgSrc: gitIcon },
      { name: "GitHub", imgSrc: githubIcon },
      { name: "Postman", imgSrc: postmanIcon },
    ],
  },
];
