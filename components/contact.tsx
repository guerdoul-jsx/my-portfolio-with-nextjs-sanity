"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { sendEmail } from "@/actions/send-email";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export default function Contact({ base_email }: { base_email: string }) {
  const { ref } = useSectionInView("Contact");

  const [loading, setLoading] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const { executeRecaptcha } = useGoogleReCaptcha();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!executeRecaptcha) {
        toast.error("reCAPTCHA not yet available");
        return;
      }

      const gRecaptchaToken = await executeRecaptcha("inquirySubmit");

      const response = await fetch("/api/recaptcha", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ gRecaptchaToken }),
      }).then((res) => res.json());

      if (response?.success === true) {
        console.log(`Success with score: ${response?.score}`);

        let formData = new FormData();
        formData.append("senderEmail", email);
        formData.append("message", message);

        const { data, error } = await sendEmail(formData);

        if (error) {
          toast.error(error);
          return;
        }
        toast.success("Email sent successfully!");
      } else {
        console.log(`Failure with score: ${response?.data?.score}`);
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

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
        <a className="underline font-extrabold" href={`mailto:${base_email}`}>
          contact@guerdoul.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        onSubmit={handleSubmit}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
          onChange={(e) => setMessage(e.target.value)}
        />
        <SubmitBtn loading={loading} />
      </form>
    </motion.section>
  );
}
