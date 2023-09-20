"use client";

import React from "react";
import SectionHeading from "../section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/use-section-in-view";
const About = () => {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      className=""
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 100 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        <span className="font-bold">Hello, I&apos;m Bill Nyberg.</span> I&apos;m
        a <span className="font-bold">front-end, developer.</span> with{" "}
        <span className="font-bold">+5 years</span> of experience in the field.
        I take pride in building <span className="italic">sites & apps</span>{" "}
        that offer great user experiences. My primary expertise lies in{" "}
        <span className="underline">React (Next.js)</span>
      </p>
      <p>
        <span className="italic">When I&apos;m not coding,</span> I enjoy
        outdoor activities, reading tech blogs, and working on DIY electronics
        projects. I am also passionate about {"  "}
        <span className="font-medium">
          open-source contributions and keeping up with latest trends in
          frontend development.
        </span>
      </p>
    </motion.section>
  );
};

export default About;
