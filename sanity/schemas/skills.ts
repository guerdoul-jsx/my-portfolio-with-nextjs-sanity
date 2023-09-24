import { Rule } from "sanity";

export const schemaSkills = {
  name: "skills",
  title: "Skills",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: Rule) => Rule.isRequired(),
    },
  ],
};
