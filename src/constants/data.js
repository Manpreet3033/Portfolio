import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,

} from "../assets";
import spotify from '../assets/spotify.png'
import cpp from "../assets/tech/cpp.png";
import java from "../assets/tech/java.png";
import octanet from "../assets/company/octanet.jpeg";
import codsoft from "../assets/company/CodSoft.jpeg";
import bharat from "../assets/company/bharat.jpeg";
import studyadda from "../assets/StudyAdda.png";
import edufree from "../assets/EduFree.png";
import blog from "../assets/Blog.png";
import swift from "../assets/tech/swiftui.jpeg";
import diceroll from "../assets/DiceRoll.png";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  {
    title: "Web Developer",
    icon: html,
  },
  {
    title: "React Developer",
    icon: reactjs,
  },
  {
    title: "Java Developer",
    icon: java,
  },
  {
    title: "C++ Developer",
    icon: cpp,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "SwiftUI",
    icon: swift,
  },
];

export const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "Bharat Intern",
    icon: bharat,
    iconBg: "#fff",
    date: "Oct 2023 - Nov 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "C++ Developer Intern",
    company_name: "CodSoft",
    icon: codsoft,
    iconBg: "#fff",
    date: "Oct 2023 - Nov 2023",
    points: [
      "Developing and maintaining Different C++ applications such as To-Do-List and Tic-Tac-Toe Game.",
      "Implemened user-freindly terminal based Tic-Tac-Toe Game.",
    ],
  },
  {
    title: "Java Developer Intern",
    company_name: "Octanet",
    icon: octanet,
    iconBg: "#fff",
    date: "Sept 2023 - Oct 2023",
    points: [
      "Developing and maintaining an ATM user Interface application using Swing and other related technologies.",
      "Collaborating with other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-platform compatibility.",
    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const testimonials = [
  {
    testimonial: "Coming Soon",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
  {
    testimonial: "Coming Soon",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
  {
    testimonial: "Coming Soon",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
];

const projects = [
  {
    name: "StudyAdda LMS Project",
    description:
      "A full Stack Learning Management System project where user can login signup and instructors can Create courses and Student can enroll in them and both have a personalized dashboard design also.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "blue-text-gradient",
      },
    ],
    image: studyadda,
    source_code_link: "https://github.com/Manpreet3033/StudyAdda",
  },
  {
    name: "Spotify App using React Native",
    description:
      "A spotify clone app using react native where user can login using spotify account and also they can fetch their liked songs and listen to them for 30 secs",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "stylesheet",
        color: "pink-text-gradient",
      },
    ],
    image: spotify,
    source_code_link:
      "https://github.com/Manpreet3033/Spotify-React-Native-Project",
  },
  {
    name: "EDUFREE LMS System",
    description:
      "Another LMS Project i am currently working on with. Stay Tuned for Updates",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion",
        color: "pink-text-gradient",
      },
    ],
    image: edufree,
    source_code_link: "https://github.com/Manpreet3033/Personal-LMS-Project",
  },
];

export { technologies, testimonials, projects };
