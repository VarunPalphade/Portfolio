import React, { useEffect, useRef } from 'react';
import { aboutMe, quickFacts } from '../data/portfolioData';

const About: React.FC = () => {
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
    <section id="about" ref={sectionRef} className="bg-white dark:bg-slate-800 opacity-0">
      <div className="container-custom">
        <div className="section-heading pb-4">
          <h2 className="text-3xl font-bold mb-2">About <span className="text-primary-600 dark:text-primary-400">Me</span></h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Passionate about creating efficient solutions and continuous learning</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-12">
          <div className="space-y-6">
            <div className="prose dark:prose-invert max-w-none">
              {aboutMe.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-white">Quick Facts</h3>
              <ul className="space-y-2">
                {quickFacts.map((fact, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block h-6 w-6 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 flex items-center justify-center mr-3 mt-0.5">
                      •
                    </span>
                    <span className="text-slate-700 dark:text-slate-300">{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-slate-100 dark:bg-slate-700/50 rounded-2xl p-8 h-full">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-white">My Approach</h3>
              <ul className="space-y-4">
                <li className="bg-white dark:bg-slate-700 p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-primary-600 dark:text-primary-400 mb-2">Problem Solver</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">I approach challenges methodically, breaking down complex problems into manageable components.</p>
                </li>
                <li className="bg-white dark:bg-slate-700 p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-primary-600 dark:text-primary-400 mb-2">Continuous Learner</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">I'm constantly expanding my knowledge of new technologies and methodologies to deliver better solutions.</p>
                </li>
                <li className="bg-white dark:bg-slate-700 p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-primary-600 dark:text-primary-400 mb-2">Team Player</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">I thrive in collaborative environments and believe in the power of shared knowledge and diverse perspectives.</p>
                </li>
                <li className="bg-white dark:bg-slate-700 p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-primary-600 dark:text-primary-400 mb-2">Innovation Driven</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">I enjoy exploring new technologies and finding creative solutions to complex challenges.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;