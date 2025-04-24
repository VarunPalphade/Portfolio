import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import { contactInfo } from '../data/portfolioData';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 pb-8 border-b border-slate-700">
          <div>
            <h3 className="text-xl font-bold mb-4">Varun Palphade</h3>
            <p className="text-slate-400 mb-4">Software Developer | Full-Stack Engineer | AI & Data Enthusiast</p>
            <p className="text-slate-400">Currently based in Pune, Maharashtra, India</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-slate-400 hover:text-primary-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#experience" className="text-slate-400 hover:text-primary-400 transition-colors">Experience</a>
              </li>
              <li>
                <a href="#projects" className="text-slate-400 hover:text-primary-400 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#skills" className="text-slate-400 hover:text-primary-400 transition-colors">Skills</a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-primary-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href={`mailto:${contactInfo.email}`} 
                  className="flex items-center text-slate-400 hover:text-primary-400 transition-colors"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  <span>{contactInfo.email}</span>
                </a>
              </li>
              <li>
                <a 
                  href={`https://${contactInfo.linkedin}`} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-slate-400 hover:text-primary-400 transition-colors"
                >
                  <Linkedin className="h-5 w-5 mr-2" />
                  <span>{contactInfo.linkedin}</span>
                </a>
              </li>
              <li>
                <a 
                  href={`https://${contactInfo.github}`} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-slate-400 hover:text-primary-400 transition-colors"
                >
                  <Github className="h-5 w-5 mr-2" />
                  <span>{contactInfo.github}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-slate-400 flex items-center justify-center">
            Built using React and Tailwind CSS
          </p>
          <p className="text-slate-500 mt-2">
            &copy; {new Date().getFullYear()} Varun Palphade. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;