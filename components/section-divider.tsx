"use client";

import React from "react";
import { motion } from "framer-motion";

const SectionDevider = ({ hideDivider }: { hideDivider?: boolean }) => {
  return (
    <>
      {hideDivider ? (
        <div className="my-15 sm:my-24" />
      ) : (
        <motion.div
          className="bg-gray-200 sm:h-16 sm:w-1 w-full h-0.5 my-16 sm:my-my-24 rounded-full sm:block dark:bg-opacity-20"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.125,
          }}
        ></motion.div>
      )}
    </>
  );
};

export default SectionDevider;
