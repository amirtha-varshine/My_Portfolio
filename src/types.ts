export interface ProfileData {
  name: string;
  titles: string[];
  tagline: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  linkedIn: string;
  github: string;
  resumeUrl: string;
  avatarUrl: string;
  stats: {
    label: string;
    value: string;
    sublabel: string;
  }[];
  highlights: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: {
    name: string;
    level?: string;
    icon?: string;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tech: string[];
  description: string;
  image: string;
  date?: string;
  githubUrl?: string;
  liveUrl?: string;
  isResearch?: boolean;
  highlights?: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location?: string;
  period: string;
  points: string[];
  badge?: string;
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  cgpa: string;
  maxCgpa: string;
  coursework: string[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  image: string;
  credentialUrl?: string;
  category?: string;
}

export interface AchievementItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  impactBadge?: string;
}
