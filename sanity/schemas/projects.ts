import { Rule } from "sanity";

export const schemaProjects = {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "github",
      title: "Github",
      type: "url",
      validation: (Rule: Rule) => Rule.isRequired(),
    },
    {
      name: "link",
      title: "Website Link",
      type: "url",
      validation: (Rule: Rule) => Rule.isRequired(),
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
      options: {
        layout: "tags",
      },
    },
    {
      name: "imageUrl",
      title: "Image URL",
      type: "image",
      options: {
        hotspot: true, // Enable image hotspot for cropping
      },
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
};
