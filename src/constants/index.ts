import { Experience, Project, Service, Tech, Testimonial, Navlink } from "../@types";
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
  tailwind,
  nodejs,
  git,
  imusic,
  fairwork,
  fairworkBlog,
  imageProcessing,
  storeBE,
  storefront,
  amalitech,
  sapui,
  nextjs,
  company
} from "../assets";

export const navLinks: Navlink[] = [
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

const services: Service[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Node Developer",
    icon: backend,
  },
  {
    title: "SAP Fiori Developer",
    icon: creator,
  },
];

const technologies: Tech[] = [
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
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
    name: "git",
    icon: git,
  },
  {
    name: "SAPUI5",
    icon: sapui,
  }
];

const experiences: Experience[] = [
  {
    title: "SAP Fiori Application Developer",
    company_name: "Amalitech gGmbh",
    icon: amalitech,
    iconBg: "#383E56",
    date: "March 2023 - Present",
    points: [
      "Developing and maintaining web applications using SAPUI5, Fiori and other related technologies.",
      "Fetching data from V2 and V4 OData services as well as SuccessFactors and displaying them in a user friendly manner.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Exploring SAP Business Automation Process to automate business processes and make them more efficient.",
      "Upskilling in SAP Mobile Services for developing web and native applications in a quicker and more scalable way.",
    ],
  },
  {
    title: "NextJS Developer",
    company_name: "Tewaa Technologies",
    icon: company,
    iconBg: "#E6DEDD",
    date: "May 2023 - June 2023",
    points: [
      "Developed a school management web application using Next.js and other related technologies.",
      "Built custom components for pages of user dashboard.",
      "Implemented responsive design and ensured cross-browser compatibility.",
      "Made API requests using react-query for data caching and faster response to improve user experience."
     ],
  },
  {
    title: "Development Team Lead",
    company_name: "Amalitech gGmbh",
    icon: amalitech,
    iconBg: "#383E56",
    date: "Sep 2022 - Mar 2023",
    points: [
      "Liaised with the product owner and relevant stakeholders to bring out scalable and user-friendly freelance and recruitment platform (TheFairwork) and blog.",
      "Led the team to reduce code smells by 35% and bugs by 80% on TheFairWork platform through effective code review and bug fixes.",
      "Led the development team to upscale in Nextjs for TheFairWork blog implementation.",
      "Successfully built and delivered the TheFairWork blog.",
      "Conducted code reviews and provided constructive feedback to other developers.",
    ],
  },
  {
    title: "Outreach Team Member",
    company_name: "Amalitech gGmbh",
    icon: amalitech,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Feb 2023",
    points: [
      "Assist in the development and implementation of the marketing plan to operationalize the commencement of The Fairwork- a freelance platform that connects African Talents to businesses across the world who can benefit from their talent, hard work, and grit.",
      "Mining and compilation of emails and LinkedIn accounts of leads (potential clients) using LinkedIn.",
      "Design email copies and conduct outreach for TheFairwork.",
      "Perform A/B test and multivariate test to help validate email copies that enhance increased sign-up rate on The Fairwork platform.",
      "Prepare outreach presentations and review all contracts between clients and freelancers.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Amalitech gGmbh",
    icon: amalitech,
    iconBg: "#383E56",
    date: "Jun 2022 - Sep 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer Trainee",
    company_name: "Amalitech Training gGmbh",
    icon: amalitech,
    iconBg: "#E6DEDD",
    date: "Oct 2021 - May 2022",
    points: [
      "Training in JavaScript, ReactJs, NodeJs, PostgreSQL, Git, and GitHub.",
      "Training in modern programming practices.",
      "Collaborating with teams in sprint projects.",
      "Taking assessments and quizzes on CodeSignal platform and passing successfully."
    ],
  },
];

const testimonials: Testimonial[] = [
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

const projects: Project[] = [
  {
    name: "theFairwork",
    description:
      "An exceptional freelance project unlike the others that helps connects people together in the first place and in turn gets work done in a professional and smooth manner.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "material UI",
        color: "green-text-gradient",
      },
      {
        name: "react-query",
        color: "pink-text-gradient",
      },
    ],
    image: fairwork,
    source_code_link: "",
    demo: 'https://www.thefairwork.com/',
  },
  {
    name: "theFairwork Blog",
    description:
      "Blog for theFairwork platform where freelancers can create and manage blogs which will be reviewed and approved for upload by thefairwork administrators.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind css",
        color: "green-text-gradient",
      },
      {
        name: "react-query",
        color: "pink-text-gradient",
      },
    ],
    image: fairworkBlog,
    source_code_link: "",
    demo: 'https://blog.thefairwork.com/',
  },
  {
    name: "iMusic",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "chakra UI",
        color: "pink-text-gradient",
      },
    ],
    image: imusic,
    source_code_link: "https://github.com/Bentil-OkyereBoadu/imusic",
    demo: 'https://imusic-three.vercel.app/',
  },
  {
    name: "Store Front",
    description:
      "This project is a simple e-commerce website. Users are able to add products to the cart, view details of products, edit the cart, and place orders for products selected.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: storefront,
    source_code_link: "https://github.com/Bentil-Okyere-Boadu/store-frontend",
  },
  {
    name: "Storefront API",
    description:
      "This repo contains a Node and Express app for constructing a storefront API.",
    tags: [
      {
        name: "postgres",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "yellow-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: storeBE,
    source_code_link: "https://github.com/Bentil-Okyere-Boadu/nd0067-c2-creating-an-api-with-postgresql-and-express-project-starter",
  },
  {
    name: "Image Processing API",
    description:
      "Image Processing API with NodeJS, Express and TypeScript",
    tags: [
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "yellow-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: imageProcessing,
    source_code_link: "https://github.com/Bentil-Okyere-Boadu/ImageProcessingAPI",
  },
];

const about = "I'm a skilled software developer with experience in Typescript and Javascript, and expertise in frameworks like React, NextJs, NodeJs and SAPUI5. I am a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Lets work together to bring your ideas to life!"

export { services, technologies, experiences, testimonials, projects, about };
