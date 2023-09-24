import { groq } from "next-sanity";
import { client } from "./lib/client";
import { ProfileInfo } from "@/types";

export const getExperiences = async () => {
  const experience = await client.fetch(groq`
      *[_type == "experience"] | order(startDate){
        _id,
      _updatedAt,
      _type,
      startDate,
      endDate,
      description,
      location,
      title,
  }
    `);

  return experience;
};

export const getProjects = async () => {
  const projects = await client.fetch(groq`
    *[_type == "projects"]{
      _id,
      _createdAt,
      description,
      link,
      github,
      title,
      tags,
      "imageUrl" : imageUrl.asset->url 
    }
    `);

  return projects;
};

export const getSkills = async () => {
  const experience = await client.fetch(groq`
      *[_type == "skills"]{
        _id,
        title
      }
    `);

  return experience;
};

export const getProfileInfo = async (): Promise<ProfileInfo[]> => {
  const info: ProfileInfo[] = await client.fetch(groq`
  *[_type == "profile"]{
      role,
      facebook,
      linkedin,
      year1,
      github,
      phone,
      _id,
      _updatedAt,
      email,
      lastname,
      firstname,
      "imageUrl": imageUrl.asset -> url
  }
  `);
  return info;
};
