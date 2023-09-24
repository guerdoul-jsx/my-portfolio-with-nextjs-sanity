import { type SchemaTypeDefinition } from "sanity";
import { schemaExperiences } from "./schemas/experience";
import { schemaProjects } from "./schemas/projects";
import { schemaSkills } from "./schemas/skills";
import { schemaProfile } from "./schemas/profile";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [schemaProjects, schemaExperiences, schemaSkills, schemaProfile],
};
