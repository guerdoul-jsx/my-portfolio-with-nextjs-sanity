import { Rule } from "sanity";

export const schemaProfile = {
  name: "profile",
  title: "Profile",
  type: "document",
  fields: [
    {
      name: "firstname",
      title: "First Name",
      type: "string",
      validation: (Rule: Rule) => Rule.isRequired(),
    },
    {
      name: "lastname",
      title: "Last Name",
      type: "string",
      validation: (Rule: Rule) => Rule.isRequired(),
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule: Rule) => Rule.email().isRequired(),
    },
    {
      name: "phone",
      title: "Phone Number",
      type: "string",
      validation: (Rule: Rule) => Rule.isRequired(),
    },
    {
      name: "role",
      title: "Role",
      type: "string",
      validation: (Rule: Rule) => Rule.isRequired(),
    },
    {
      name: "year1",
      title: "Year Of Experience",
      type: "number",
      validation: (Rule: Rule) => Rule.isRequired(),
    },
    {
      name: "facebook",
      title: "Facebook",
      type: "string",
    },
    {
      name: "github",
      title: "Github",
      type: "string",
    },
    {
      name: "linkedin",
      title: "Linkedin",
      type: "string",
    },
    {
      name: "instagram",
      title: "Instagram",
      type: "string",
    },
    {
      name: "twitter",
      title: "Twitter",
      type: "string",
    },
    {
      name: "imageUrl",
      title: "Image Profile",
      type: "image",
      options: {
        hotspot: true, // Enable image hotspot for cropping
      },
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
};
