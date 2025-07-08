import React from 'react';
import { Mail, Phone, MapPin, Globe, Linkedin, Github } from 'lucide-react';
import { ResumeData, Translations } from '../types';
import FadeInSection from './FadeInSection';

interface AboutSectionProps {
  data: ResumeData;
  translations: Translations;
}

const AboutSection: React.FC<AboutSectionProps> = ({ data, translations: t }) => {
  return (
    <section id="about\" className="pt-24 pb-16 bg-hero-pattern bg-cover bg-center">
      <div className="container mx-auto px-4">
        <FadeInSection>
          <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden transform hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
            <div className="bg-gradient-to-r from-joy-secondary via-joy-primary to-joy-dark px-8 py-12 text-white relative overflow-hidden">
              {/* Animated background particles */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <div className="absolute top-8 right-8 w-1 h-1 bg-white rounded-full animate-ping"></div>
                <div className="absolute bottom-6 left-12 w-1.5 h-1.5 bg-white rounded-full animate-bounce"></div>
                <div className="absolute bottom-12 right-16 w-1 h-1 bg-white rounded-full animate-pulse"></div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-joy-accent to-white rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                  <img 
                    src="/jorrit-harmanny.jpg" 
                    alt="Jorrit Harmanny Profile" 
                    className="relative w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover transform group-hover:scale-110 transition-all duration-500"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h1 className="text-4xl font-bold mb-2 animate-fade-in-up">{data.name}</h1>
                  <h2 className="text-xl mb-8 animate-fade-in-up animation-delay-200">{data.title}</h2>
                  <p className="text-white/90 max-w-2xl leading-relaxed animate-fade-in-up animation-delay-400">{data.summary}</p>
                </div>
              </div>
            </div>
          
            <div className="p-8 bg-gradient-to-br from-white to-gray-50">
              <div className="flex flex-col md:flex-row md:justify-between gap-6">
                <div className="flex items-center group hover:bg-joy-light/50 p-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                  <Mail className="mr-3 text-joy-primary group-hover:animate-bounce" size={20} />
                  <a href={`mailto:${data.contact.email}`} className="text-gray-700 hover:text-joy-primary transition-colors">
                    {data.contact.email}
                  </a>
                </div>
              
                <div className="flex items-center group hover:bg-joy-light/50 p-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                  <Phone className="mr-3 text-joy-primary group-hover:animate-bounce" size={20} />
                  <a href={`tel:${data.contact.phone}`} className="text-gray-700 hover:text-joy-primary transition-colors">
                    {data.contact.phone}
                  </a>
                </div>
              
                <div className="flex items-center group hover:bg-joy-light/50 p-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                  <MapPin className="mr-3 text-joy-primary group-hover:animate-bounce" size={20} />
                  <span className="text-gray-700">{data.contact.location}</span>
                </div>
              </div>
            
              <div className="mt-6 flex flex-col md:flex-row md:justify-between gap-6">
                {data.contact.website && (
                  <div className="flex items-center group hover:bg-joy-light/50 p-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                    <Globe className="mr-3 text-joy-primary group-hover:animate-spin" size={20} />
                    <a 
                      href={data.contact.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-joy-primary transition-colors"
                    >
                      {data.contact.website.replace(/^https?:\/\//, '')}
                    </a>
                  </div>
                )}
              
                {data.contact.linkedin && (
                  <div className="flex items-center group hover:bg-joy-light/50 p-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                    <Linkedin className="mr-3 text-joy-primary group-hover:animate-pulse" size={20} />
                    <a 
                      href={data.contact.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-joy-primary transition-colors"
                    >
                      {t.labels.linkedin}
                    </a>
                  </div>
                )}
              
                {data.contact.github && (
                  <div className="flex items-center group hover:bg-joy-light/50 p-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                    <Github className="mr-3 text-joy-primary group-hover:animate-pulse" size={20} />
                    <a 
                      href={data.contact.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-joy-primary transition-colors"
                    >
                      {t.labels.github}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default AboutSection;