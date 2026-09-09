import React from 'react';
import { ArrowUp, Heart, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { profileData } from '../data/profile';
import { FloralMotif } from './FloralMotif';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative border-t border-[#2A2B45] bg-[#070817] pt-16 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle top edge neon line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#FF2E93]/60 to-transparent" />

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Top: Logo & Sakura Brand */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="relative mb-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#14152C] to-[#1F0D24] border border-[#FF2E93]/50 flex items-center justify-center shadow-[0_0_20px_rgba(255,46,147,0.3)]">
              <span className="font-display font-extrabold text-xl text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FF6FB5]">
                AS
              </span>
            </div>
            <div className="absolute -top-2 -right-2">
              <FloralMotif size={20} />
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-white font-display">
            {profileData.name}
          </h3>
          <p className="text-xs sm:text-sm text-[#FF6FB5] font-mono mt-1">
            {profileData.tagline}
          </p>
        </div>

        {/* Middle: Social Circle Links */}
        <div className="flex items-center gap-4 mb-8">
          <a
            href={profileData.linkedIn}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="w-10 h-10 rounded-full bg-[#14152C] border border-[#2A2B45] flex items-center justify-center text-[#C4C4D6] hover:text-[#FF2E93] hover:border-[#FF2E93] transition-all hover:scale-110 shadow-sm"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={profileData.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="w-10 h-10 rounded-full bg-[#14152C] border border-[#2A2B45] flex items-center justify-center text-[#C4C4D6] hover:text-[#FF2E93] hover:border-[#FF2E93] transition-all hover:scale-110 shadow-sm"
          >
            <Github size={18} />
          </a>
          <a
            href={`mailto:${profileData.email}`}
            aria-label="Email"
            className="w-10 h-10 rounded-full bg-[#14152C] border border-[#2A2B45] flex items-center justify-center text-[#C4C4D6] hover:text-[#FF2E93] hover:border-[#FF2E93] transition-all hover:scale-110 shadow-sm"
          >
            <Mail size={18} />
          </a>
          <a
            href={`tel:${profileData.phone}`}
            aria-label="Phone"
            className="w-10 h-10 rounded-full bg-[#14152C] border border-[#2A2B45] flex items-center justify-center text-[#C4C4D6] hover:text-[#FF2E93] hover:border-[#FF2E93] transition-all hover:scale-110 shadow-sm"
          >
            <Phone size={18} />
          </a>
        </div>

        {/* Quick Nav Links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-[#C4C4D6] mb-10 font-mono">
          <a href="#home" className="hover:text-[#FF6FB5] transition-colors">Home</a>
          <a href="#about" className="hover:text-[#FF6FB5] transition-colors">About</a>
          <a href="#skills" className="hover:text-[#FF6FB5] transition-colors">Skills</a>
          <a href="#projects" className="hover:text-[#FF6FB5] transition-colors">Projects</a>
          <a href="#resume" className="hover:text-[#FF6FB5] transition-colors">Resume</a>
          <a href="#certificates" className="hover:text-[#FF6FB5] transition-colors">Certificates</a>
          <a href="#experience" className="hover:text-[#FF6FB5] transition-colors">Experience</a>
          <a href="#education" className="hover:text-[#FF6FB5] transition-colors">Education</a>
          <a href="#contact" className="hover:text-[#FF6FB5] transition-colors">Contact</a>
        </div>

        {/* Divider */}
        <div className="w-full max-w-5xl h-[1px] bg-[#2A2B45] mb-8" />

        {/* Bottom Row */}
        <div className="w-full max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#999AB8]">
          <div className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} Amirthavarshine S. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-mono">Neon Sakura Aesthetic</span>
            <FloralMotif size={14} opacity={0.7} />
          </div>

          {/* Scroll to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            id="back-to-top-btn"
            className="p-2 rounded-xl bg-[#14152C] border border-[#2A2B45] hover:border-[#FF2E93] text-[#C4C4D6] hover:text-white transition-all flex items-center gap-1.5 text-xs font-mono"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp size={14} className="text-[#FF2E93]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
