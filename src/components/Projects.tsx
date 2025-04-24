import React, { useEffect, useRef, useState } from 'react';
import { projects } from '../data/portfolioData';
import { Code, CalendarDays } from 'lucide-react';

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeProject, setActiveProject] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current?.classList.add('animate-slide-up');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const toggleProject = (id: number) => {
    if (activeProject === id) {
      setActiveProject(null);
    } else {
      setActiveProject(id);
    }
  };

  return (
    <section id="projects" ref={sectionRef} className="bg-white dark:bg-slate-800 opacity-0">
      <div className="container-custom">
        <div className="section-heading pb-4">
          <h2 className="text-3xl font-bold mb-2">Featured <span className="text-primary-600 dark:text-primary-400">Projects</span></h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Highlights from my professional work</p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className={`card transition-all duration-300 ${
                activeProject === project.id 
                ? 'md:col-span-2 lg:col-span-3 md:grid md:grid-cols-2 md:gap-6' 
                : ''
              }`}
            >
              <div className={`p-6 ${activeProject === project.id ? 'md:p-8' : ''}`}>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                    <CalendarDays size={16} className="mr-1" />
                    <span>{project.year}</span>
                  </div>
                </div>
                
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {project.description}
                </p>
                
                {activeProject === project.id ? (
                  <ul className="space-y-2 mb-6">
                    {project.bullets.map((bullet, index) => (
                      <li key={index} className="flex text-sm">
                        <span className="text-primary-500 mr-2 mt-1">•</span>
                        <span className="text-slate-600 dark:text-slate-300">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {activeProject === project.id 
                    ? project.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
                        >
                          {tech}
                        </span>
                      ))
                    : project.technologies.slice(0, 3).map((tech, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
                        >
                          {tech}
                        </span>
                      ))
                  }
                  
                  {!activeProject && project.technologies.length > 3 && (
                    <span className="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                <button
                  onClick={() => toggleProject(project.id)}
                  className="mt-6 inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm"
                >
                  <Code size={16} className="mr-1.5" />
                  {activeProject === project.id ? 'View Less' : 'View Details'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;