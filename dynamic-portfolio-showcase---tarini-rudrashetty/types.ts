
export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  codechef?: string;
  leetcode?: string;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  duration: string;
  grade: string;
  specialization?: string;
}

export interface ExperienceEntry {
  role: string;
  company: string;
  duration: string;
  description: string[];
  logoUrl?: string; // Optional: for company logo
}

export interface PositionEntry {
  role: string;
  organization: string;
  duration: string;
  description: string[];
}

export interface ProjectEntry {
  name: string;
  description: string;
  sourceCodeUrl?: string;
  liveUrl?: string;
  researchPaperUrl?: string;
  technologies: string[];
  imageUrl?: string;
}

export interface Skills {
  languages: string[];
  librariesFrameworks: string[];
  toolsPlatforms: string[];
  concepts: string[];
  other: string[];
}

export interface Certification {
  name: string;
  issuer?: string; // Optional: e.g., Microsoft, Salesforce
}

export interface Achievement {
  title: string;
  description?: string; 
  year?: string | number; // Optional
}

export interface ExtraCurricular {
  activity: string;
  description: string;
}

export interface LanguageProficiency {
  language: string;
  proficiency: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  profileImageUrl: string;
  contact: ContactInfo;
  profileSummary: string;
  education: EducationEntry[];
  experience: ExperienceEntry[];
  positions: PositionEntry[];
  projects: ProjectEntry[];
  technicalSkills: Skills;
  certifications: Certification[];
  achievements: Achievement[];
  extraCurricular: ExtraCurricular[];
  languageProficiency: LanguageProficiency[];
}
