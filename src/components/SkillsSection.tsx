import React from 'react';
import { Code } from 'lucide-react';
import { SkillCategory, Translations } from '../types';
import SkillBar from './SkillBar';
import FadeInSection from './FadeInSection';

interface SkillsSectionProps {
  skillCategories: SkillCategory[];
  languages: { language: string; proficiency: string }[];
  translations: Translations;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skillCategories, languages, translations: t }) => {
  return (
    <section id="skills" className="py-16 bg-skill-pattern bg-fixed bg-cover bg-center">
      <div className="container mx-auto px-4">
        <FadeInSection>
          <div className="flex items-center mb-8 group">
            <Code className="text-joy-primary mr-3 group-hover:animate-bounce transition-all duration-300" size={24} />
            <h2 className="text-3xl font-bold text-white drop-shadow-lg">
              {t.sections.skillsExpertise}
            </h2>
          </div>
        </FadeInSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <FadeInSection key={index} delay={index * 200}>
              <div 
                className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-8 transform hover:scale-[1.02] hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
              >
                {/* Animated background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-joy-light/0 to-joy-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-joy-primary mb-6 group-hover:text-joy-secondary transition-colors duration-300">
                    {category.category}
                  </h3>
              
                  <div className="space-y-4">
                    {category.skills.map((skill, i) => (
                      <div key={i} className="group/skill">
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-700 font-medium group-hover/skill:text-gray-800 transition-colors duration-300">
                            {skill.name}
                          </span>
                          <span className="text-gray-500 text-sm bg-gray-100 px-2 py-1 rounded-full group-hover/skill:bg-joy-light group-hover/skill:text-joy-secondary transition-all duration-300">
                            {skill.level}/5
                          </span>
                        </div>
                        <SkillBar 
                          level={skill.level} 
                          skillName={skill.name}
                          delay={i * 200} 
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
          
          {/* Language Skills */}
          <FadeInSection delay={skillCategories.length * 200}>
            <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-8 transform hover:scale-[1.02] hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
              {/* Animated background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-joy-light/0 to-joy-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-joy-primary mb-6 group-hover:text-joy-accent transition-colors duration-300">
                  {t.sections.languages}
                </h3>
            
                <div className="space-y-4">
                  {languages.map((language, i) => (
                    <div key={i} className="flex justify-between items-center group/lang hover:bg-joy-light/30 p-2 rounded transition-all duration-300">
                      <span className="text-gray-700 font-medium group-hover/lang:text-gray-800 transition-colors duration-300">
                        {language.language}
                      </span>
                      <div className="flex items-center space-x-3">
                        <span className="text-gray-500 text-sm bg-gray-100 px-2 py-1 rounded-full group-hover/lang:bg-joy-light group-hover/lang:text-joy-secondary transition-all duration-300">
                          {language.proficiency}
                        </span>
                        <div className="w-20">
                          <SkillBar 
                            level={language.proficiency === 'Native' || language.proficiency === 'Moedertaal' ? 5 : 
                                  language.proficiency === 'Professional' || language.proficiency === 'Professioneel' ? 4 : 
                                  language.proficiency === 'Basic' || language.proficiency === 'Basis' ? 2 : 3} 
                            skillName={language.language}
                            delay={i * 300}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;