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
        A motivated backend developer with <span className="font-bold">2 years</span> of experience building robust web services and integrations{" "}
        <span className="font-bold"></span> With a Master's Degree in <span className="font-bold">Computer Science</span> and a passion for solving complex problems, I specialize
        in crafting <span className="font-bold">scalable</span> and reliable <span className="font-bold">backend</span> systems.
        
      </p>

      <p>
        My journey began during my first job at <span className="font-bold">Accenture</span>, where I worked 
        on implementing <span className="font-bold">microservices architectures</span> and optimizing 
        <span className="font-bold">server-side</span> code. I collaborated closely with cross-functional teams 
        to boost system <span className="font-bold">scalability</span> and enable the integration of various third-party APIs. 
        Outside of work, you'll find me dabbling in 
        side projects like building a video narration app with OpenAI or a responsive notes app with React. 
        These allow me to expand my skills and keep up with the latest industry trends. If you're looking for 
        a passionate <span className="font-bold">Backend developer</span> with the skills to translate your ideas into high-quality software, 
        I'd love to connect! <span className="font-bold">Let's build something amazing together.</span>
      </p>
    </motion.section>
  );
}
