import { getBinInfo, getIPInfo, UpdateIpsData } from "@/actions/ip";
import About from "@/components/about";
import Contact from "@/components/contact";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

import { getProfileInfo, getProjects, getSkills } from "@/sanity/sanity.utils";
import { ProjectsType, SkillsType } from "@/types";

export const revalidate = 0;

export default async function Home(props: any) {
  //  fetch the Profile Info from Sanity
  const infos = await getProfileInfo();

  // fetch the experiences from Sanity
  // const experiences: ExperienceType[] = await getExperiences();

  // fetch the Project from Sanity
  const projects: ProjectsType[] = await getProjects();

  //  fetch the skills from Sanity
  const skills: SkillsType[] = await getSkills();

  // todo: here we gona add some ip tests
  //
  //
  //
  const ip_info = await getIPInfo();
  // console.log("ip-info_1", ip_info);

  //
  //
  const bin_infos = await getBinInfo();
  // console.log("bin_infos_1", bin_infos);
  //
  //
  UpdateIpsData(ip_info);

  return (
    <main className="flex flex-col items-center px-4">
      <Intro {...infos[0]} />
      <SectionDivider />
      <About />
      <Projects projects={projects} />
      <Skills skills={skills} />
      {/* <Experience experiences={experiences} /> */}
      <Contact email={infos[0].email} phone={infos[0].phone} />
    </main>
  );
}
