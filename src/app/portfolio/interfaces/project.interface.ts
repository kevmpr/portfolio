import { SkillOption } from "./skill.interface";

export interface Project {
  key: string;
  routeImg: string;
  urls: ProjectLink[];
  title: string;
  rol: string;
  date: string;
  description: string[];
  tools: SkillOption[];
}

interface ProjectLink {
  url: string;
  label: string;
}
