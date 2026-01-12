export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  email: string;
  phone: string;
  linkedin: string;
  location: string;
  openToRelocate: boolean;
  yearsOfExperience: number;
}

export interface About {
  summary: string;
  highlights: string[];
}

export interface Highlight {
  icon: string;
  title: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  tools: string[];
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  graduationYear: string;
}

export interface ResumeData {
  personal: PersonalInfo;
  about: About;
  highlights: Highlight[];
  skills: SkillCategory[];
  experience: Experience[];
  education: Education;
  certifications: string[];
}
