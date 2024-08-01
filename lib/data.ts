import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import portfolio from "@/public/portfolio.png";
import hangman from "@/public/hangman.png";
import task from "@/public/Task_Tracker.png";
import jobseekr from "@/public/jobseekr.png"
import plang from "@/public/lang.png"
import bird from "@/public/bird.png"
import { title } from "process";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Student",
    location: "Binghamton, NY",
    description:
      "Student at Binghamton University pursuing a degree in Computer Science. I'm also a part of the Binghamton University Programming Team. I have been a part of the team for 1 years and have participated in 2 competitions. ",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2024",
  },
  {
    title: "Associate Software Engineer",
    location: "Pune, India",
    description:
      "As a Software Engineer at Accenture, I developed a robust notification micro-service for an e-commerce application, optimized SQL database schemas, and improved system performance by addressing memory leak issues. I collaborated in an Agile environment to enhance customer experience and security through seamless technology integrations.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Associate Software Engineer",
    location: "Pune, India",
    description:"At Edurun Group, I engineered a scalable job portal architecture using Django and Next.js, significantly enhancing performance and user retention. I implemented data sharding, optimized SQL operations, and integrated parallel processing solutions to achieve substantial reductions in latency and delivery time.",
      // "• Implemented a robust web services and Micro-services architecture with Node Js, Kubernetes and Docker, to seamlessly integrate with third-party systems. \n • Collaborated closely with a cross-functional development team to Enhance system scalability and reliability through the design and implementation of optimized server-side code, leading to a notable 30% boost in traffic capacity. \n• Implemented secure authentication and authorization solutions, ensuring the protection of sensitive customer data and reducing the risk of security breaches \n• Integrated the Salesforce CRM system with various third-party APIs, resulting in a 30% increase in lead conversion rates and a 20% increase in customer retention. \n• Engineered app integrations with REST, SOAP, and various other APIs to facilitate fraud detection within the payment processing system resulting in a notable reduction of 20% in fraudulent accounts, significantly enhancing security.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
] as const;

export const projectsData = [
  {
    title: "Jobseekr",
    description: "On Jobseekr you will receive job updates faster than linkedin, indeed or Glassdoor or any other portals.",
    tags: ["NextJs","Django","Python","Redis","PostgreSQL"],
    imageUrl: jobseekr,
    LiveDemo: "https://www.jobseekr.io/",
    SourceCode: "https://www.jobseekr.io/",
  },
  {
    title: "Language Populartiy",
    description: "On Jobseekr you will receive job updates faster than linkedin, indeed or Glassdoor or any other portals.",
    tags: ["NextJs","Django","Python","Redis","PostgreSQL"],
    imageUrl: plang,
    LiveDemo: "https://plang-pop.vercel.app/",
    SourceCode: "https://plang-pop.vercel.app/",
  },
  {
    title: "Cross Border Money Transfer - Remittance App",
    description:
      "Built end-to-end web application for cheap and fast international money transfers.",
    tags: ["Nextjs", "PostgreSQL", "Kibana", "Sanity CMS"],
    imageUrl: bird,
    LiveDemo: "https://bird-xi.vercel.app/",
    SourceCode: "https://bird-xi.vercel.app/",
  },
  // {
  //   title: "Task Tracker",
  //   description:
  //     "The app allows users to save, delete and edit tasks with ease.It features a user-friendly interface and intuitive navigation.",
  //   tags: ["React", "Express js", "MongoDB"],
  //   imageUrl: task,
  //   LiveDemo: "https://lighthall-team60-tasks.vercel.app/",
  //   SourceCode: "https://github.com/Kartik1745/Lighthall-level2",
  // },
  // {
  //   title: "Portfolio",
  //   description:
  //     "A simple portfolio website built with Next.js and Tailwind CSS.",
  //   tags: ["React", "Next.js", "Tailwind", "Framer", "TypeScript"],
  //   imageUrl: portfolio,
  //   LiveDemo: "https://kportfolio.vercel.app/",
  //   SourceCode: "https://github.com/Kartik1745/Newportfolio",
  // },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Django",
  "Kafka",
  "Redis",
  "Tailwind",
  "MongoDB",
  "SQL",
  "Express",
  "PostgreSQL",
  "Python",
  "C++",
] as const;
