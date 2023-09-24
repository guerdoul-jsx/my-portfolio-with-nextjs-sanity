"use client";

import { usePathname } from "next/navigation";
import React from "react";

export default function Footer() {
  const pathName = usePathname();
  return (
    <footer
      className={`mb-10 px-4 text-center text-gray-500 ${
        pathName.includes("admin") && `hidden`
      }`}
    >
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear().toString()} Mahmoud. All rights
        reserved.
      </small>
    </footer>
  );
}
