import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Translations } from '../types';

interface ScrollToTopProps {
  translations: Translations;
  className?: string;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ translations: t, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 bg-joy-primary text-white p-3 rounded-full shadow-lg hover:bg-joy-secondary transition-all transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      } ${className}`}
      aria-label={t.buttons.scrollToTop}
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default ScrollToTop;