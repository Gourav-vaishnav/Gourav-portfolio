import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import { RESUME_DATA } from './constants';

function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    // Check local storage or system preference
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  // JSON-LD Schema for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": RESUME_DATA.name,
    "jobTitle": RESUME_DATA.role,
    "url": "https://gourav-vaishnav-portfolio.vercel.app", // Hypothetical URL
    "sameAs": [
      RESUME_DATA.contact.linkedin,
      RESUME_DATA.contact.github
    ],
    "worksFor": {
        "@type": "Organization",
        "name": RESUME_DATA.experience[0].company
    },
    "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": RESUME_DATA.education[0].institution
    },
    "description": RESUME_DATA.summary
  };

  return (
    <div className="min-h-screen bg-light dark:bg-dark text-slate-900 dark:text-slate-100 transition-colors duration-300 selection:bg-primary/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
      </main>
      
      <Contact />
    </div>
  );
}

export default App;