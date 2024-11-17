"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { sendEmail } from "@/actions/send-email";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { BsPhone } from "react-icons/bs";

export default function Contact({
  email,
  phone,
}: {
  email: string;
  phone: string;
}) {
  const { ref } = useSectionInView("Contact");
  const whatsapp = `0${phone.replace("+212", "")}`;

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80 ">
        Feel free to contact me directly at{" "}
        <a className="underline font-extrabold" href={`mailto:${email}`}>
          contact@guerdoul.com
        </a>{" "}
        or by using Whatsapp
        <a
          className="underline font-extrabold"
          target="_blank"
          href={`https://api.whatsapp.com/send/?phone=${whatsapp}&text&type=phone_number&app_absent=0`}
        >
          {" "}
          {phone}{" "}
        </a>
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          console.log("FORM DATA", formData);

          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
