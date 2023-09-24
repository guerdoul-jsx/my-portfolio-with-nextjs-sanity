import { Rule } from "sanity";

export const schemaExperiences = {
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "The title of the Experience",
      validation: (Rule: Rule) => Rule.required().min(10),
    },
    {
      name: "location",
      title: "Location",
      type: "string",
      description: "The location of the Experience",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      description: "A description of the Experience",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "startDate", // Renamed from 'date' to 'startDate'
      title: "Start Date", // Updated title
      type: "date",
      options: {
        dateFormat: "YYYY", // Format to display only the year
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "endDate", // New 'endDate' field
      title: "End Date", // Title for the 'endDate' field
      type: "date",
      options: {
        dateFormat: "YYYY", // Format to display only the year
      },
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "location",
      media: "icon",
    },
  },
};
