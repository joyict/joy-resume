import React, { useState, useEffect } from 'react';
import { Download, Menu, X, Globe } from 'lucide-react';
import { generatePDF } from '../utils/pdfGenerator';
import { ResumeData, Translations, Language } from '../types';
import TypingEffect from './TypingEffect';

interface HeaderProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  language: Language;
  onLanguageToggle: () => void;
  translations: Translations;
  resumeData: ResumeData;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ 
  activeSection, 
  onSectionChange, 
  language, 
  onLanguageToggle, 
  translations: t, 
  resumeData,
  className = ""
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  const sections = [
    { id: 'about', label: t.nav.about },
    { id: 'experience', label: t.nav.experience },
    { id: 'skills', label: t.nav.skills },
    { id: 'education', label: t.nav.education },
    { id: 'projects', label: t.nav.projects }
  ];

  const handleDownload = async () => {
    try {
      setIsGeneratingPDF(true);
      await generatePDF(resumeData, t, `${resumeData.name.replace(' ', '_')}_Resume_${language.toUpperCase()}`);
    } catch (error) {
      console.error("Failed to download resume:", error);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Define animation steps for the typing effect
  const animationSteps = [
    {
      targetText: "JOY ICT",
      action: 'type' as const,
      pauseAfter: 1000
    },
    {
      targetText: "JOY",
      action: 'delete' as const,
      pauseAfter: 500
    },
    {
      targetText: resumeData.name,
      action: 'replace' as const,
      duration: 100
    }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-white/95 backdrop-blur-sm shadow-sm py-4'
      } ${className}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img 
            src="/joy-ict-logo.png" 
            alt="Joy ICT Logo" 
            className="h-8 w-auto"
          />
          <div className="text-2xl font-bold">
            <TypingEffect
              animationSteps={animationSteps}
              primaryClass="text-gray-800"
              secondaryClass="text-joy-primary"
              initialDelay={2000}
              defaultTypingSpeed={150}
              defaultDeletingSpeed={100}
              showCursor={true}
            />
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          {sections.map(section => (
            <button
              key={section.id}
              onClick={() => onSectionChange(section.id)}
              className={`text-sm font-medium transition-colors hover:text-joy-primary ${
                activeSection === section.id ? 'text-joy-primary' : 'text-gray-700'
              }`}
            >
              {section.label}
            </button>
          ))}
          
          <button
            onClick={onLanguageToggle}
            className="flex items-center text-sm font-medium text-gray-700 hover:text-joy-primary transition-colors"
            title={language === 'en' ? 'Switch to Dutch' : 'Schakel naar Engels'}
          >
            <Globe size={16} className="mr-1" />
            {language.toUpperCase()}
          </button>
          
          <button 
            onClick={handleDownload}
            disabled={isGeneratingPDF}
            className="flex items-center bg-joy-primary text-white px-4 py-2 rounded-md hover:bg-joy-secondary transition-colors ml-4 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Download size={16} className="mr-2" />
            {isGeneratingPDF ? 'Generating...' : t.nav.download}
          </button>
        </nav>
        
        <button 
          className="md:hidden text-gray-700 hover:text-joy-primary transition-colors" 
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4 transition-all">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {sections.map(section => (
              <button
                key={section.id}
                onClick={() => {
                  onSectionChange(section.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-sm font-medium transition-colors hover:text-joy-primary text-left ${
                  activeSection === section.id ? 'text-joy-primary' : 'text-gray-700'
                }`}
              >
                {section.label}
              </button>
            ))}
            
            <button
              onClick={() => {
                onLanguageToggle();
                setMobileMenuOpen(false);
              }}
              className="flex items-center text-sm font-medium text-gray-700 hover:text-joy-primary transition-colors"
            >
              <Globe size={16} className="mr-1" />
              {language === 'en' ? 'Nederlands' : 'English'}
            </button>
            
            <button 
              onClick={handleDownload}
              disabled={isGeneratingPDF}
              className="flex items-center justify-center bg-joy-primary text-white px-4 py-2 rounded-md hover:bg-joy-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Download size={16} className="mr-2" />
              {isGeneratingPDF ? 'Generating...' : t.buttons.downloadResume}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;