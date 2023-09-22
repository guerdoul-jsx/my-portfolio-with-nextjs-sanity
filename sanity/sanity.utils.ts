import { groq } from "next-sanity";
import { client } from "./lib/client";

export const getExperiences = async () => {
  const experience = await client.fetch(groq`
        *[_type == "experience"]{
          _id,
        _updatedAt,
        _type,
        "icon" : icon.asset->url,
        _type,
        _type,
        description,
        location,
        title,
        date,
        }
    `);

  return experience;
};
