import React from 'react';

export interface Project {
  title: string;
  tech: string[];
  description: string[];
  link?: string;
}

export interface Experience {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  achievements: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  score: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Certificate {
  name: string;
  issuer: string;
  date: string;
}

export interface ResumeData {
  name: string;
  role: string;
  summary: string;
  contact: {
    phone: string;
    email: string;
    location: string;
    linkedin: string;
    github: string;
  };
  skills: SkillCategory[];
  experience: Experience[];
  education: Education[];
  projects: Project[];
  certificates: Certificate[];
}

// Module declaration for Spline to fix "Missing property" errors
declare module '@splinetool/react-spline' {
  export default function Spline(props: any): any;
}