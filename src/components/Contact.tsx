import React, { useEffect, useRef } from 'react';
import { Mail, Linkedin, Github, Download } from 'lucide-react';
import { contactInfo } from '../data/portfolioData';

const Contact: React.FC = () => {
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
    <section id="contact" ref={sectionRef} className="bg-white dark:bg-slate-800 opacity-0 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 -top-48 -right-48 bg-secondary-200/20 dark:bg-secondary-900/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute w-96 h-96 -bottom-48 -left-48 bg-accent-200/20 dark:bg-accent-900/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="container-custom relative">
        <div className="section-heading pb-4">
          <h2 className="text-3xl font-bold mb-2">Get in <span className="text-secondary-600 dark:text-secondary-400">Touch</span></h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Let's connect and explore opportunities together</p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-slate-50 to-secondary-50/50 dark:from-slate-800/50 dark:to-secondary-900/20 rounded-2xl p-8 backdrop-blur-sm">
            <div className="space-y-6">
              <a 
                href={`mailto:${contactInfo.email}`} 
                className="flex items-center p-4 bg-white/80 dark:bg-slate-700/80 rounded-lg hover:shadow-md transition-all hover:-translate-y-1 group"
              >
                <div className="h-12 w-12 rounded-full bg-secondary-100 dark:bg-secondary-900/50 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <Mail className="h-6 w-6 text-secondary-600 dark:text-secondary-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
                  <p className="font-medium text-slate-800 dark:text-white">{contactInfo.email}</p>
                </div>
              </a>

              <a 
                href={`https://${contactInfo.linkedin}`} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-white/80 dark:bg-slate-700/80 rounded-lg hover:shadow-md transition-all hover:-translate-y-1 group"
              >
                <div className="h-12 w-12 rounded-full bg-secondary-100 dark:bg-secondary-900/50 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <Linkedin className="h-6 w-6 text-secondary-600 dark:text-secondary-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">LinkedIn</p>
                  <p className="font-medium text-slate-800 dark:text-white">{contactInfo.linkedin}</p>
                </div>
              </a>

              <a 
                href={`https://${contactInfo.github}`} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-white/80 dark:bg-slate-700/80 rounded-lg hover:shadow-md transition-all hover:-translate-y-1 group"
              >
                <div className="h-12 w-12 rounded-full bg-secondary-100 dark:bg-secondary-900/50 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <Github className="h-6 w-6 text-secondary-600 dark:text-secondary-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">GitHub</p>
                  <p className="font-medium text-slate-800 dark:text-white">{contactInfo.github}</p>
                </div>
              </a>
            </div>

            <div className="mt-8 flex justify-center">
              <a 
                href={contactInfo.cvLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-secondary-600 to-accent-600 hover:from-secondary-700 hover:to-accent-700 text-white rounded-lg font-medium transition-all hover:-translate-y-1 hover:shadow-lg group"
              >
                <Download className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;