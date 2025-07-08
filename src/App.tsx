import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { resumeDataEn, resumeDataNl } from './data/resumeData';
import { translations } from './data/translations';
import { useLanguage } from './hooks/useLanguage';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const { language, toggleLanguage } = useLanguage();
  
  const resumeData = language === 'en' ? resumeDataEn : resumeDataNl;
  const t = translations[language];

  // Handle scroll to section
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -80; // Header height offset
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'skills', 'education', 'projects'];
      let currentSection = activeSection;
      
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = sectionId;
            break;
          }
        }
      }
      
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  // Update page title
  useEffect(() => {
    document.title = `${resumeData.name} | ${resumeData.title}`;
  }, [resumeData.name, resumeData.title]);

  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      <Header 
        className="pdf-export-hide"
        activeSection={activeSection} 
        onSectionChange={scrollToSection}
        language={language}
        onLanguageToggle={toggleLanguage}
        translations={t}
        resumeData={resumeData}
      />
      
      {/* Main content container for PDF generation */}
      <div id="resume-content">
        <AboutSection data={resumeData} translations={t} />
        <ExperienceSection experiences={resumeData.experience} translations={t} />
        <SkillsSection 
          skillCategories={resumeData.skillCategories} 
          languages={resumeData.languages} 
          translations={t}
        />
        <EducationSection education={resumeData.education} translations={t} />
        <ProjectsSection projects={resumeData.projects} translations={t} />
      </div>
      
      <Footer className="pdf-export-hide" data={resumeData} translations={t} />
      <ScrollToTop className="pdf-export-hide" translations={t} />
    </div>
  );
}

export default App;