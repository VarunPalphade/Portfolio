import { ProjectType, ExperienceType, EducationType, SkillCategory } from '../types';

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "Data Service Application",
    year: "2025",
    description: "A TypeScript-based backend service for bulk CSV ingestion with intelligent data processing.",
    bullets: [
      "Developed a TypeScript-based backend service for bulk CSV ingestion of company and contact records.",
      "Implemented intelligent field-mapping logic (mandatory, semi-mandatory, optional) with built-in validation and automated follow-up tasks.",
      "Integrated the OpenRouter AI API to auto-populate missing data fields, cutting manual data entry efforts by over 60%."
    ],
    technologies: ["TypeScript", "CSV Processing", "AI Integration", "Data Validation"]
  },
  {
    id: 2,
    title: "Lead Generation Platform (Clarovate)",
    year: "2024 – 2025",
    description: "Full-stack solution with React and NestJS for secure lead generation and management.",
    bullets: [
      "Architected a full-stack solution with React (TypeScript) frontend and NestJS backend, featuring secure JWT authentication and password hashing via bcrypt.",
      "Automated email outreach using NodeMailer and Email Blaster, integrated within a CI/CD pipeline on GitLab.",
      "Containerized deployment with Docker and leveraged an Agentic RAG approach for dynamic AI-driven query generation."
    ],
    technologies: ["React", "TypeScript", "NestJS", "JWT", "Docker", "AI", "GitLab CI/CD"]
  },
  {
    id: 3,
    title: "Periodic Process Logger",
    year: "2024",
    description: "Python-based system for monitoring and logging active system processes.",
    bullets: [
      "Built a daemon to capture and log active system processes with timestamp accuracy.",
      "Automated scheduled email reports to stakeholders, enhancing system monitoring and uptime analytics.",
      "Managed version control and agile iterations using Git."
    ],
    technologies: ["Python", "System Monitoring", "Email Automation", "Git"]
  }
];

export const experience: ExperienceType[] = [
  {
    id: 1,
    position: "Software Engineering Intern",
    company: "Clarovate",
    duration: "January 2025 – Present",
    location: "Pune, India",
    description: [
      "Designed and implemented scalable full-stack features for an internal data platform using React, Tailwind CSS, Node.js, MongoDB, and TypeScript.",
      "Engineered a CSV ingestion pipeline with dynamic field mapping, robust validation, and automated task creation—reducing manual preprocessing time by 60%.",
      "Collaborated closely with product and QA teams to integrate RESTful APIs and streamline task-tracking workflows, ensuring reliable data delivery.",
      "Optimized API interactions and enhanced system performance through efficient query design and caching strategies."
    ]
  }
];

export const education: EducationType = {
  degree: "Master of Computer Applications",
  institution: "Fergusson College, Savitribai Phule Pune University"
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Python", "Java", "C", "C++", "JavaScript", "TypeScript"]
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React", "NestJS", "Tailwind CSS", "Node.js"]
  },
  {
    category: "Tools & Technologies",
    skills: ["Git", "Docker", "MongoDB", "MySQL", "RESTful APIs", "JWT", "bcrypt", "Power BI", "DAX", "Power Query"]
  }
];

export const aboutMe = `I'm a proactive software developer currently shaping scalable, high-impact platforms at Clarovate. With a Master's in Computer Applications and hands-on experience building end-to-end solutions in React, Node.js, and TypeScript, I thrive at the intersection of full-stack engineering and emerging AI/ML technologies. Driven by curiosity and precision, I continuously explore data analysis, machine learning algorithms, and large language models to deliver smarter, more efficient applications.

When I'm not writing code, you'll find me analyzing motorsports strategies—always looking for patterns and optimizations, whether on the track or in my applications.`;

export const quickFacts = [
  "Current Role: Software Engineering Intern @ Clarovate",
  "Interests: Data Analysis · Machine Learning · AI · LLMs",
  "Location: Pune, Maharashtra"
];

export const contactInfo = {
  email: "palphadevarun@gmail.com",
  linkedin: "linkedin.com/in/varun-palphade",
  github: "github.com/VarunPalphade",
  cvLink: "https://drive.google.com/file/d/1klXJ2pdr15WPYIbUNMkFXcB-xRnzgkX6/view?usp=drivesdk" // Add your Google Drive CV link here
};