import React from "react";

const Footer = () => {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        <span className="font-semibold">About this website:</span>
        {"  "} built with React & Next.js (App Router & Server Actions),
        TypeScript, tailwind CSS, Frame Montion , React Email & Resend, Vercel
        hosting.
      </small>
    </footer>
  );
};

export default Footer;
