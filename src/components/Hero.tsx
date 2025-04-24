import React, { useEffect, useRef } from 'react';
import { ArrowDown, FileDown } from 'lucide-react';
import { contactInfo } from '../data/portfolioData';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.classList.add('animate-fade-in');
    }

    // Animate text elements sequentially
    const elements = textRef.current?.querySelectorAll('.animate-text');
    elements?.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('animate-slide-up', 'opacity-100');
      }, index * 200);
    });
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-primary-50 to-slate-50 dark:from-slate-900 dark:via-primary-900/10 dark:to-slate-900"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-primary-200/30 dark:bg-primary-600/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-secondary-200/30 dark:bg-secondary-600/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute w-96 h-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent-200/20 dark:bg-accent-600/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container-custom relative">
        <div className="max-w-4xl mx-auto text-center" ref={textRef}>
          <p className="animate-text opacity-0 text-primary-600 dark:text-primary-400 font-medium mb-4 md:text-lg tracking-wide">
            Hello there 👋
          </p>
          <h1 className="animate-text opacity-0 text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary-600 via-secondary-500 to-accent-500 dark:from-primary-400 dark:via-secondary-400 dark:to-accent-400 text-transparent bg-clip-text">
            I'm Varun Palphade
          </h1>
          <h2 className="animate-text opacity-0 text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-300 mb-8">
            Software Developer | Full-Stack Engineer | AI & Data Enthusiast
          </h2>
          <p className="animate-text opacity-0 text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Building scalable, high-impact platforms with expertise in React, Node.js, and TypeScript,
            while exploring AI/ML technologies to deliver smarter, more efficient applications.
          </p>
          <div className="animate-text opacity-0 flex flex-wrap gap-6 justify-center">
            <a 
              href="#projects" 
              className="btn btn-primary group"
            >
              View My Work
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a 
              href={contactInfo.cvLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline group flex items-center"
            >
              <FileDown size={18} className="mr-2 group-hover:scale-110 transition-transform" />
              Download Resume
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a 
            href="#about" 
            className="text-slate-400 hover:text-primary-500 transition-colors p-2 rounded-full hover:bg-white/10 backdrop-blur-sm"
          >
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;