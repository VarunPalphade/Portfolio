import React, { useEffect, useRef } from 'react';
import { skillCategories } from '../data/portfolioData';

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section id="skills" ref={sectionRef} className="bg-slate-50 dark:bg-slate-900 opacity-0">
      <div className="container-custom">
        <div className="section-heading pb-4">
          <h2 className="text-3xl font-bold mb-2">Technical <span className="text-primary-600 dark:text-primary-400">Skills</span></h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">My expertise and technological capabilities</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="card p-6 group hover:bg-gradient-to-br hover:from-primary-50 hover:to-secondary-50 dark:hover:from-primary-900/20 dark:hover:to-secondary-900/20">
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4 text-center group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="relative group/skill"
                  >
                    <div className="px-4 py-2 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-primary-300 dark:hover:border-primary-500">
                      <p className="text-center text-slate-700 dark:text-slate-200 font-medium">
                        {skill}
                      </p>
                    </div>
                    <div className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 w-0 group-hover/skill:w-full transition-all duration-300 rounded-b-lg"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;