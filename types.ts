import { links } from "@/lib/data";

export type SectionName = (typeof links)[number]["name"];
export type ExperienceType = {
  title: string;
  _id: string;
  _updatedAt: string;
  _type: string;
  startDate: string;
  endDate: string;
  description: string;
  location: string;
};

export type SkillsType = {
  _id: string;
  title: string;
};

export type ProjectsType = {
  description: string;
  imageUrl: string;
  link: string;
  github: string;
  tags: string[];
  title: string;
  _createdAt: string;
  _id: string;
};

export type ProfileInfo = {
  linkedin: string;
  year1: number;
  phone: string;
  _id: string;
  _updatedAt: string;
  email: string;
  facebook: string;
  github: string;
  lastname: string;
  firstname: string;
  imageUrl: string;
  role: string;
};
