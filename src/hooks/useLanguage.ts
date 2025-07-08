import { useState, useEffect } from 'react';
import { Language } from '../types';

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('resume-language');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('resume-language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'nl' : 'en');
  };

  return { language, setLanguage, toggleLanguage };
};