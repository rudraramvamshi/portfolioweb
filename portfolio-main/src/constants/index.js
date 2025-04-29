import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  // typescript,
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
  flat,
  hosp,
  meridian,
  illu,
  github,
  self,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },

  {
    id: "project",
    title: "Projects",
  },
  {
    id: "training",
    title: "Certifications",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  // {
  //   title: "Android Developer",
  //   icon: mobile,
  // },
  // {
  //   title: "Data Scientist",
  //   icon: backend,
  // },
  {
    title: "UI/UX Designer",
    icon: creator,
  },
  {
    title: "Web Developer",
    icon: web,
  },

];


const technologies = [

  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },

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
    name: "tailwind",
    icon: tailwind,
  },

  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Illustrator",
    icon: illu,
  },
  {
    name: "git",
    icon: git,
  },






];

const experiences = [
  {
    title: "Bachelor of Technology - CSE",
    company_name: "Lovely Professional University",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Sep 2022 - Present",
    points: [
      "Studying core Computer Science concepts including Data Structures, Algorithms, and Design.",
      "Completed projects in UIUX design, web applications.",
      "Certified in Ux Design, Frameworks for Frontend Development via Coursera.",
      "Active participant in coding contests and real-world tech projects."
    ],
  },
  {
    title: "Intermediate Education - MPC",
    company_name: "Narayana Junior College",
    icon: tesla,
    iconBg: "#383E56",
    date: "Apr 2020 - Mar 2022",
    points: [
      "Focused on Mathematics, Physics, and Chemistry with strong academic performance.",
      "Developed a strong foundation in analytical problem solving and quantitative reasoning.",
      "Participated in design exhibitions and designing clubs during this time."
    ],
  },
  {
    title: "Matriculation",
    company_name: "Meridian High School",
    icon: meridian,
    iconBg: "#383E56",
    date: "Apr 2019 - Mar 2020",
    points: [
      "Achieved academic excellence and secured 1st rank in Mathematics.",
      "Built a strong foundation in logical reasoning and computer fundamentals.",
      "Actively participated in school-level competitions and science fairs."
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "FlatFinder",
    description:
      "FlatFinder is a web app designed and developed to helps bachelors and students easily find rental rooms by connecting them directly with property owners, using simple filters and a user-friendly interface.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: "React-JS",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: flat,
    source_code_link: "https://github.com/rudraramvamshi",
  },
  {
    name: "Doctor Appointment App",
    description:
      "Doctor Appointment App allows users to book appointments, pay consultation fees online, and receive real-time notifications about their turn, reducing wait times and improving hospital visit efficiency.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      // {
      //   name: "Dataanalytics",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "ipl",
      //   color: "pink-text-gradient",
      // },
    ],
    image: hosp,
    source_code_link: "https://www.behance.net/gallery/215903839/TurnTime-Doctor-Appointment-Application-UX-Case-Study",
  },
  {
    name: "Self Checkout App",
    description:
      "Self-Checkout App enables shoppers to scan and pay for items directly through their phones, helping them skip long queues and enjoy a faster, contactless shopping experience.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      // {
      //   name: "css",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "javascript",
      //   color: "pink-text-gradient",
      // },
    ],
    image: self,
    source_code_link: "https://www.behance.net/gallery/208838315/EasyExit-Self-Checkout-Application-UX-Case-Study",
  },
];

export { services, technologies, experiences, testimonials, projects };
