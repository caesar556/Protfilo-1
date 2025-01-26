import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  icon1,
  icon2,
  icon3,
  icon4,
  mongodb,
  git,
  project1
} from "../assets";


export const navLinks = [
  {
    id: "home",
    title: "Home"
  },
  {
    id: "about",
    title: "About"
  },
  {
    id: "contact",
    title: "Contact"
  },
]

const services = [
  {
    title: "Web Developer",
    icon: icon2,
  },
  {
    title: "Backend Developer",
    icon: icon3,
  },
  {
    title: "Full Stack Developer",
    icon: icon1,
  },
  {
    title: "Software Designer",
    icon: icon4,
  },

];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
    borderColor: "border-orange-800"
  },
  {
    name: "CSS 3",
    icon: css,
    borderColor: "border-sky-700"
  },
  {
    name: "JavaScript",
    icon: javascript,
    borderColor: "border-yellow-400"
  },
  {
    name: "TypeScript",
    icon: typescript,
    borderColor: "border-sky-700"
  },
  {
    name: "React JS",
    icon: reactjs,
    borderColor: "border-sky-400"
  },
  {
    name: "Redux Toolkit",
    icon: redux,
    borderColor: "border-purple-700"
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    borderColor: "border-sky-400"
  },
  {
    name: "Node JS",
    icon: nodejs,
    borderColor: "border-green-600"
  },
  {
    name: "MongoDB",
    icon: mongodb,
    borderColor: "border-green-700"
  },
  {
    name: "git",
    icon: git,
    borderColor: "border-orange-900"
  },
];
const experiences = [
  {
    title: "Mastering React.js",
    icon: reactjs,
    iconBg: "#4F46E5",
    date: "May 2023 - December 2024",
    points: [
      "Delved into React.js to create dynamic and component-based user interfaces.",
      "Learned state management and how to build reusable, efficient components.",
      "Enhanced user experiences by implementing real-time interactivity.",
    ],
  },
  {
    title: "Backend Development",
    icon: nodejs,
    iconBg: "#22C55E",
    date: "January 2024 - December 2024",
    points: [
      "Ventured into backend development to understand server-side technologies.",
      "Mastered Express.js for building APIs and managing server requests.",
      "Gained experience in handling databases and designing scalable systems.",
    ],
  },
];

const projects = [
  {
    name: "Crud project",
    description: "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/",
  },
  {
    name: "Admin Dashboard",
    description: "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/",
  },
  {
    name: "E Shop",
    description: "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/",
  }
];


export {
  services,
  experiences,
  technologies,
  projects
}