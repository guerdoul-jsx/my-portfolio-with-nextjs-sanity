export const schemaProjects = {
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "The title of the project",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
      description: "The location of the project",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      description: "A description of the project",
    },
    {
      name: "icon",
      title: "Icon",
      type: "image",
      description: "An icon representing the project",
    },
    {
      name: "date",
      title: "Date",
      type: "date",
      description: "The date of the project",
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
