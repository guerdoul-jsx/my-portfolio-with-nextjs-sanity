"use client";

import { SectionName } from "@/types";
import React, { useState, createContext, useContext } from "react";

type ActiveSectionContextType = {
  activeSetion: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

type Props = {
  children: React.ReactNode;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

const ActiveSectionContextProvider = ({ children }: Props) => {
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);
  const [activeSetion, setActiveSection] = useState<SectionName>("Home");
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSetion,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

export default ActiveSectionContextProvider;

export const useActiveSectionContext = () => {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
};
