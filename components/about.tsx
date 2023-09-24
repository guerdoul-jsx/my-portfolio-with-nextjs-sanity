"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/use-section-in-view";

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
        My name is <span className="font-medium">Mahmoud</span>, and I'm a{" "}
        <span className="font-medium"> full-stack developer</span>, passionate
        about open source and technology that has a positive impact on people's
        lives.{" "}
        <span className="font-medium">
          I enjoy creating beautiful and user-friendly web interfaces
        </span>
        .{" "}
        <span className="italic">
          by constantly exploring and experimenting with new tools and
          techniques.
        </span>{" "}
        In my spare,<span className="underline">time</span> I go out with
        friends or read blogs and articles from experts{" "}
        <span className="font-medium">
          to stay up-to-date with the latest trends in the industry.
        </span>
      </p>
    </motion.section>
  );
}
