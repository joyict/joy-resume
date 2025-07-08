import React from 'react';
import { GraduationCap } from 'lucide-react';
import { Education, Translations } from '../types';
import FadeInSection from './FadeInSection';

interface EducationSectionProps {
  education: Education[];
  translations: Translations;
}

const EducationSection: React.FC<EducationSectionProps> = ({ education, translations: t }) => {
  return (
    <section id="education\" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <FadeInSection>
          <div className="flex items-center mb-8 group">
            <GraduationCap className="text-joy-primary mr-3 group-hover:animate-bounce transition-all duration-300" size={24} />
            <h2 className="text-3xl font-bold text-gray-800 bg-gradient-to-r from-gray-800 to-joy-primary bg-clip-text text-transparent">
              {t.sections.education}
            </h2>
          </div>
        </FadeInSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          {education.map((edu, index) => (
            <FadeInSection key={index} delay={index * 200}>
              <div 
                className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-[1.02] hover:shadow-2xl transition-all duration-500 border-l-4 border-joy-accent hover:border-l-8 relative overflow-hidden group"
              >
                {/* Animated background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-joy-light/0 to-joy-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-joy-primary transition-colors duration-300">
                      {edu.institution}
                    </h3>
                    <span className="text-joy-secondary font-medium bg-joy-light/50 px-3 py-1 rounded-full text-sm">
                      {edu.startDate} - {edu.endDate}
                    </span>
                  </div>
              
                  <h4 className="text-lg text-joy-primary font-medium mb-1 group-hover:text-joy-accent transition-colors duration-300">
                    {edu.degree}
                  </h4>
                  <h5 className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                    {edu.field}
                  </h5>
              
                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    {edu.description}
                  </p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;