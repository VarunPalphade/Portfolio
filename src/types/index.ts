export interface ProjectType {
  id: number;
  title: string;
  year: string;
  description: string;
  bullets: string[];
  technologies: string[];
}

export interface ExperienceType {
  id: number;
  position: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
}

export interface EducationType {
  degree: string;
  institution: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}