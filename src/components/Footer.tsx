import React from 'react';
import { Mail, Linkedin, Github, Clock } from 'lucide-react';
import { ResumeData, Translations } from '../types';

interface FooterProps {
  data: ResumeData;
  translations: Translations;
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ data, translations: t, className = "" }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={`bg-gray-900 ${className}`}>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* Logo/Name */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white">
              {data.name.split(' ')[0]}
              <span className="text-joy-primary">{`.${data.name.split(' ')[1]}`}</span>
            </h2>
            <p className="text-gray-400 mt-2">{data.title}</p>
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-6">
            <a 
              href={`mailto:${data.contact.email}`} 
              className="text-joy-primary hover:text-joy-accent transition-colors transform hover:scale-110"
              aria-label={t.labels.email}
            >
              <Mail className="h-6 w-6" />
            </a>
            
            {data.contact.linkedin && (
              <a 
                href={data.contact.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-joy-primary hover:text-joy-accent transition-colors transform hover:scale-110"
                aria-label={t.labels.linkedin}
              >
                <Linkedin className="h-6 w-6" />
              </a>
            )}
            
            {data.contact.github && (
              <a 
                href={data.contact.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-joy-primary hover:text-joy-accent transition-colors transform hover:scale-110"
                aria-label={t.labels.github}
              >
                <Github className="h-6 w-6" />
              </a>
            )}
          </div>
          
          {/* Copyright */}
          <p className="text-base text-gray-400">
            © {currentYear} {data.name}. All rights reserved.
          </p>
          
          {/* Business Information */}
          <p className="text-base text-gray-400">
            KvK: 68534426 | BTW: NL005195851B47 | Kampen, Netherlands
          </p>
          
          {/* Opening Hours */}
          <div className="flex items-center justify-center space-x-2 text-gray-400">
            <Clock className="h-4 w-4" />
            <p className="text-base">
              Opening Hours: Mon - Fri: 08:00 - 20:00 (CET) | Sat: 10:00 - 18:00 (CET)
            </p>
          </div>
          
          {/* Contact Information */}
          <p className="text-base text-gray-400">
            Email: <a href={`mailto:${data.contact.email}`} className="text-joy-primary hover:underline">{data.contact.email}</a> | 
            Phone: <a href={`tel:${data.contact.phone}`} className="text-joy-primary hover:underline">{data.contact.phone}</a>
          </p>
          
          {/* Website Link */}
          {data.contact.website && (
            <p className="text-base text-gray-400">
              Website: <a 
                href={data.contact.website} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-joy-primary hover:underline"
              >
                {data.contact.website.replace(/^https?:\/\//, '')}
              </a>
            </p>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;