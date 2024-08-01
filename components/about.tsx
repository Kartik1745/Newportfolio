"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        A motivated Full Stack developer with <span className="font-bold">3 years</span> of experience building robust web services and integrations{" "}
        <span className="font-bold"></span> With a Master's Degree in <span className="font-bold">Computer Science</span> and a passion for solving complex problems, I specialize
        in crafting <span className="font-bold">scalable</span> and reliable <span className="font-bold">backend</span> systems.
        
      </p>

      <p>
        With expertise in <span className="font-bold">JavaScript, TypeScript and, Python</span> and a Master’s in Computer Science from Binghamton University, 
        I have developed and optimized high-performance applications in both frontend and backend roles at Accenture and Edurun Group. 
        My notable projects include engineering scalable solutions for Jobseekr.io and a cross-border money transfer app. Passionate 
        about innovation, I excel in Agile environments, collaborating with cross-functional teams to deliver user-centric solutions 
        and drive technological advancements.

        {/* My journey began during my first job at <span className="font-bold">Accenture</span>, where I worked 
        on implementing <span className="font-bold">microservices architectures</span> and optimizing 
        <span className="font-bold">server-side</span> code. I collaborated closely with cross-functional teams 
        to boost system <span className="font-bold">scalability</span> and enable the integration of various third-party APIs. 
        Outside of work, you'll find me dabbling in 
        side projects like building a video narration app with OpenAI or a responsive notes app with React. 
        These allow me to expand my skills and keep up with the latest industry trends. If you're looking for 
        a passionate <span className="font-bold">Backend developer</span> with the skills to translate your ideas into high-quality software, 
        I'd love to connect! <span className="font-bold">Let's build something amazing together.</span> */}
      </p>
    </motion.section>
  );
}
