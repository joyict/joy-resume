export interface Education {
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
  highlights?: string[];
}

export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  contact: {
    email: string;
    phone: string;
    location: string;
    website?: string;
    linkedin?: string;
    github?: string;
  };
  education: Education[];
  experience: Experience[];
  skillCategories: SkillCategory[];
  projects: Project[];
  languages: { language: string; proficiency: string }[];
}

export interface Translations {
  nav: {
    about: string;
    experience: string;
    skills: string;
    education: string;
    projects: string;
    download: string;
  };
  sections: {
    about: string;
    professionalExperience: string;
    skillsExpertise: string;
    education: string;
    projects: string;
    keyAchievements: string;
    languages: string;
    professionalSummary: string;
  };
  buttons: {
    downloadResume: string;
    viewProject: string;
    scrollToTop: string;
  };
  labels: {
    email: string;
    phone: string;
    location: string;
    website: string;
    linkedin: string;
    github: string;
  };
}

export type Language = 'en' | 'nl';