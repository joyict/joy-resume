import React from 'react';
import { FolderGit } from 'lucide-react';
import { Project, Translations } from '../types';
import FadeInSection from './FadeInSection';

interface ProjectsSectionProps {
  projects: Project[];
  translations: Translations;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects, translations: t }) => {
  return (
    <section id="projects\" className="py-16">
      <div className="container mx-auto px-4">
        <FadeInSection>
          <div className="flex items-center mb-8 group">
            <FolderGit className="text-joy-primary mr-3 group-hover:animate-bounce transition-all duration-300" size={24} />
            <h2 className="text-3xl font-bold text-gray-800 bg-gradient-to-r from-gray-800 to-joy-primary bg-clip-text text-transparent">
              {t.sections.projects}
            </h2>
          </div>
        </FadeInSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <FadeInSection key={index} delay={index * 200}>
              <div 
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-[1.02] hover:shadow-2xl transition-all duration-500 flex flex-col border-l-4 border-joy-accent hover:border-l-8 relative group"
              >
                {/* Animated background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-joy-light/0 to-joy-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="p-8 flex-grow relative z-10">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-joy-primary transition-colors duration-300">
                    {project.name}
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    {project.description}
                  </p>
                
                  {project.highlights && project.highlights.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                        <span className="w-2 h-2 bg-joy-accent rounded-full mr-2 animate-pulse"></span>
                        {t.sections.keyAchievements}
                      </h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, i) => (
                          <li 
                            key={i} 
                            className="flex items-start group/item hover:bg-joy-light/30 p-2 rounded transition-all duration-300"
                          >
                            <span className="inline-block w-2 h-2 bg-joy-primary rounded-full mt-[0.5rem] mr-3 flex-shrink-0 group-hover/item:animate-ping"></span>
                            <span className="text-gray-700 text-sm leading-relaxed group-hover/item:text-gray-800 transition-colors duration-300">
                              {highlight}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="bg-joy-light text-joy-secondary text-xs px-3 py-1 rounded-full border border-joy-accent/20 hover:bg-joy-accent hover:text-white transition-all duration-300 transform hover:scale-110"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              
              {/* Removed the "View Project" link section since these are internal enterprise projects */}
              </div>
            </FadeInSection>
          ))}
        </div>
        
        {/* Add a note about additional portfolio work */}
        <FadeInSection delay={600}>
          <div className="mt-12 text-center">
            <div className="bg-joy-light/50 rounded-lg p-6 border border-joy-accent/20 hover:bg-joy-light/70 hover:border-joy-accent/40 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-lg">
              <h3 className="text-lg font-semibold text-joy-secondary mb-2">
                Additional Portfolio Work
              </h3>
              <p className="text-gray-700 mb-4">
                For web applications, custom software projects, and client websites, visit my portfolio:
              </p>
              <a 
                href="https://contra.com/joy_ict_a4iipdjq" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-joy-primary text-white px-6 py-3 rounded-lg hover:bg-joy-secondary transition-all duration-300 font-medium transform hover:scale-105 hover:shadow-lg"
              >
                View Web & App Portfolio →
              </a>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default ProjectsSection;