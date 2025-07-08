import React from 'react';
import { Briefcase } from 'lucide-react';
import { Experience, Translations } from '../types';
import FadeInSection from './FadeInSection';

interface ExperienceSectionProps {
  experiences: Experience[];
  translations: Translations;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences, translations: t }) => {
  return (
    <section id="experience\" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <FadeInSection>
          <div className="flex items-center mb-8 group">
            <Briefcase className="text-joy-primary mr-3 group-hover:animate-bounce transition-all duration-300" size={24} />
            <h2 className="text-3xl font-bold text-gray-800 bg-gradient-to-r from-gray-800 to-joy-primary bg-clip-text text-transparent">
              {t.sections.professionalExperience}
            </h2>
          </div>
        </FadeInSection>
        
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <FadeInSection key={index} delay={index * 200}>
              <div 
                className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-[1.02] hover:shadow-2xl transition-all duration-500 border-l-4 border-joy-primary hover:border-l-8 relative overflow-hidden group"
              >
                {/* Animated background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-joy-light/0 to-joy-light/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-joy-primary transition-colors duration-300">
                      {experience.position}
                    </h3>
                    <span className="text-joy-secondary font-medium bg-joy-light/50 px-3 py-1 rounded-full text-sm">
                      {experience.startDate} - {experience.endDate}
                    </span>
                  </div>
              
                  <h4 className="text-lg text-joy-primary font-medium mb-4 group-hover:text-joy-secondary transition-colors duration-300">
                    {experience.company}
                  </h4>
              
                  <p className="text-gray-700 mb-6 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    {experience.description}
                  </p>
              
                  {experience.achievements.length > 0 && (
                    <div>
                      <h5 className="font-bold text-gray-800 mb-2 flex items-center">
                        <span className="w-2 h-2 bg-joy-primary rounded-full mr-2 animate-pulse"></span>
                        {t.sections.keyAchievements}
                      </h5>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, i) => (
                          <li 
                            key={i} 
                            className="flex items-start group/item hover:bg-joy-light/30 p-2 rounded transition-all duration-300"
                          >
                            <span className="inline-block w-2 h-2 bg-joy-primary rounded-full mt-[0.5rem] mr-3 group-hover/item:animate-ping"></span>
                            <span className="text-gray-700 group-hover/item:text-gray-800 transition-colors duration-300">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;