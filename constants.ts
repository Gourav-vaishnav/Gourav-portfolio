import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  name: "Gourav Vaishnav",
  role: "Full Stack Web Developer",
  summary: "Enthusiastic and well-rounded Bachelor of Computer Applications student at Dr. NSAM First Grade College, Bengaluru, with a strong foundation in modern web development technologies including Python, JavaScript, React, and Next.js. Passionate about building efficient, scalable, and user-centric applications. Proven ability to deliver impactful solutions through hands-on project experience, seeking an internship or entry-level developer role to apply and grow my expertise.",
  contact: {
    phone: "+91 9632555568",
    email: "vaisgourav80@gmail.com",
    location: "Karnataka, Bengaluru",
    linkedin: "https://linkedin.com/in/gourav-vaishnav-895456332",
    github: "https://github.com/Gourav-vaishnav"
  },
  skills: [
    {
      name: "Frontend",
      skills: ["React", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Framer", "Spline"]
    },
    {
      name: "Backend",
      skills: ["Python", "Express.js", "Django", "FastAPI", "REST APIs", "GraphQL", "SQL", "MongoDB", "Redis"]
    },
    {
      name: "Tools & Platforms",
      skills: ["Git", "GitHub", "Docker", "Kubernetes", "API Integration", "Figma"]
    },
    {
      name: "Deployment & Cloud",
      skills: ["AWS (EC2, S3, Lambda)", "Firebase", "Vercel", "Netlify", "CI/CD (GitHub Actions, Jenkins)"]
    },
    {
      name: "Design & Methodology",
      skills: ["UI/UX Design", "Agile/Scrum"]
    }
  ],
  experience: [
    {
      role: "Python Trainee",
      company: "Siddhrans Technologies",
      period: "July 2025 – Present",
      achievements: [
        "Developed REST APIs in Python and integrated with SQL databases.",
        "Implemented authentication using JWT and OAuth2 for secure applications.",
        "Collaborated in Agile teams to deliver API integration projects."
      ]
    },
    {
      role: "Web Development Intern",
      company: "VaultOfCode",
      companyUrl: "https://www.linkedin.com/company/vaultofcodes/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_companies%3BgQvYRJkyQXysoQkHq1L8%2BA%3D%3D",
      period: "May 2025 – June 2025",
      achievements: [
        "Contributed to full stack projects using React, Node.js, and MongoDB.",
        "Enhanced frontend performance by optimizing state management with Redux.",
        "Participated in code reviews and applied Git workflows for collaborative development."
      ]
    }
  ],
  projects: [
    {
      title: "Event Platform",
      tech: ["React.js", "Node.js", "MongoDB"],
      description: [
        "Built with React.js, Node.js, and MongoDB.",
        "Engineered event setup feature achieving 70% faster process.",
        "Scaled system to support 1,000+ concurrent attendees."
      ],
      link: "https://github.com/Gourav-vaishnav/Event-Flow"
    },
    {
      title: "E-commerce Product Platform",
      tech: ["React", "Node.js", "Express", "Redux"],
      description: [
        "Developed React frontend with Node.js/Express backend.",
        "Optimized Redux state management, reducing page load time by 30%.",
        "Integrated secure checkout (COD, Paytm), reducing cart abandonment by 18%."
      ]
    }
  ],
  education: [
    {
      degree: "Bachelors of Computer Applications",
      institution: "Dr. NSAM First Grade College",
      period: "2023-2026",
      score: "CGPA: 8.5"
    },
    {
      degree: "Commerce (CEBA)",
      institution: "Dr. NSAM PU College",
      period: "2022-2023",
      score: "Percentage: 79.5"
    }
  ],
  certificates: [
    {
      name: "Master FSD Roadmap with Practical Presentation",
      issuer: "SkillEcted",
      date: "Aug 2025"
    },
    {
      name: "Fundamentals of Web Apps",
      issuer: "IBM SkillsBuild",
      date: "Aug 2025"
    },
    {
      name: "Learning GitHub",
      issuer: "LinkedIn Learning",
      date: "Dec 2024"
    },
    {
      name: "Python Bootcamp",
      issuer: "LetsUpgrade",
      date: "Nov 2024"
    },
    {
      name: "HTML CSS Bootcamp",
      issuer: "LetsUpgrade",
      date: "Jan 2025"
    }
  ]
};