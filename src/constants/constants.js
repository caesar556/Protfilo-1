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
  project1,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

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
    borderColor: "border-orange-800",
  },
  {
    name: "CSS 3",
    icon: css,
    borderColor: "border-sky-700",
  },
  {
    name: "JavaScript",
    icon: javascript,
    borderColor: "border-yellow-400",
  },
  {
    name: "TypeScript",
    icon: typescript,
    borderColor: "border-sky-700",
  },
  {
    name: "React JS",
    icon: reactjs,
    borderColor: "border-sky-400",
  },
  {
    name: "Redux Toolkit",
    icon: redux,
    borderColor: "border-purple-700",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    borderColor: "border-sky-400",
  },
  {
    name: "Node JS",
    icon: nodejs,
    borderColor: "border-green-600",
  },
  {
    name: "MongoDB",
    icon: mongodb,
    borderColor: "border-green-700",
  },
  {
    name: "git",
    icon: git,
    borderColor: "border-orange-900",
  },
];
const experiences = [
  {
    title: "Mastering React.js",
    icon: reactjs,
    iconBg: "#4F46E5",
    date: "May 2022 - December 2024",
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
    date: "January 2023 - December 2024",
    points: [
      "Ventured into backend development to understand server-side technologies.",
      "Mastered Express.js for building APIs and managing server requests.",
      "Gained experience in handling databases and designing scalable systems.",
    ],
  },
];

const projects = [
  {
    name: "E-commerce Api project",
    description:
      "Built a scalable e-commerce backend API using Express.js and MongoDB, featuring JWT authentication, role-based access, and full CRUD operations for products, users, and orders.",
    tags: [
      {
        name: "Express js",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: "/images/project1.jpg",
    source_code_link: "https://github.com/caesar556/E-App-v01",
  },
  {
    name: "Courses Details Page",
    description:
      "Developed a responsive course details page featuring video lessons using React Player, with dynamic content display and progress tracking for a seamless learning experience.",
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
    image: "/images/project2.jpg",
    source_code_link: "https://github.com/caesar556/It-Legend",
    secUrl: "https://it-legend-three.vercel.app/",
  },
  {
    name: "E-App – E-commerce Web Application",

    description:
      "Next.js, TailwindCSS, Shadcn, Express.js Built a full-stack eCommerce application with user authentication, role-based access, product management, and dashboards for both users and admins.",
    tags: [
      {
        name: "Next.js",
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
    image: "/images/project3.jpg",
    source_code_link: "https://github.com/caesar556/E-App-v01",
    secUrl: "https://e-app-v01-48lx.vercel.app/",
  },
];

export { services, experiences, technologies, projects };
