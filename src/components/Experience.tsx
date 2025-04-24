import React, { useEffect, useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { experience, education } from '../data/portfolioData';

const Experience: React.FC = () => {
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
    <section id="experience" ref={sectionRef} className="bg-slate-50 dark:bg-slate-900 opacity-0 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 -top-48 -right-48 bg-primary-200/20 dark:bg-primary-600/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute w-96 h-96 -bottom-48 -left-48 bg-secondary-200/20 dark:bg-secondary-600/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="container-custom relative">
        <div className="section-heading pb-4">
          <h2 className="text-3xl font-bold mb-2">Professional <span className="text-primary-600 dark:text-primary-400">Journey</span></h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">My education and work experience</p>
        </div>

        <div className="mt-16">
          <div className="relative border-l-2 border-gradient-y pl-8 ml-4 md:ml-12">
            {/* Education */}
            <div className="mb-12 group" data-aos="fade-up">
              <div className="absolute -left-4 mt-1.5 h-8 w-8 rounded-full border-4 border-white dark:border-slate-800 bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center transform transition-transform group-hover:scale-110 group-hover:rotate-12">
                <span className="text-white text-lg">🎓</span>
              </div>
              <div className="card p-6 group-hover:translate-x-2 transition-transform">
                <div className="flex flex-wrap gap-4 mb-3 text-sm text-slate-500 dark:text-slate-400">
                  <div className="flex items-center px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30">
                    <Calendar size={16} className="mr-1.5 text-primary-500" />
                    <span>2023 - 2025</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
                  {education.degree}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  {education.institution}
                </p>
              </div>
            </div>

            {/* Work Experience */}
            {experience.map((job, index) => (
              <div key={job.id} className="mb-12 group" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="absolute -left-4 mt-1.5 h-8 w-8 rounded-full border-4 border-white dark:border-slate-800 bg-gradient-to-r from-secondary-500 to-accent-500 flex items-center justify-center transform transition-transform group-hover:scale-110 group-hover:rotate-12">
                  <span className="text-white text-lg">💼</span>
                </div>
                <div className="card p-6 group-hover:translate-x-2 transition-transform">
                  <div className="flex flex-wrap gap-4 mb-3 text-sm">
                    <div className="flex items-center px-3 py-1 rounded-full bg-secondary-50 dark:bg-secondary-900/30">
                      <Briefcase size={16} className="mr-1.5 text-secondary-500" />
                      <span className="text-slate-700 dark:text-slate-300">{job.company}</span>
                    </div>
                    <div className="flex items-center px-3 py-1 rounded-full bg-accent-50 dark:bg-accent-900/30">
                      <Calendar size={16} className="mr-1.5 text-accent-500" />
                      <span className="text-slate-700 dark:text-slate-300">{job.duration}</span>
                    </div>
                    <div className="flex items-center px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30">
                      <MapPin size={16} className="mr-1.5 text-primary-500" />
                      <span className="text-slate-700 dark:text-slate-300">{job.location}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4 group-hover:text-secondary-500 dark:group-hover:text-secondary-400 transition-colors">
                    {job.position}
                  </h3>
                  <ul className="space-y-3">
                    {job.description.map((item, index) => (
                      <li key={index} className="flex items-start group/item">
                        <span className="h-6 w-6 rounded-full bg-secondary-100 dark:bg-secondary-900/30 flex items-center justify-center mr-3 mt-0.5 group-hover/item:bg-secondary-200 dark:group-hover/item:bg-secondary-800/30 transition-colors">
                          <span className="text-secondary-500">•</span>
                        </span>
                        <span className="text-slate-600 dark:text-slate-300 group-hover/item:text-slate-800 dark:group-hover/item:text-slate-200 transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;