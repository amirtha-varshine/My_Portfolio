import React, { useState, useEffect } from 'react';
import { Download, Linkedin, Github, Mail, Phone, MapPin, ArrowRight, Sparkles, FileText } from 'lucide-react';
import { profileData } from '../data/profile';
import { FloralMotif, BlossomBranch } from './FloralMotif';
import { downloadResumePDF } from '../utils/resumeDownload';

export const Hero: React.FC = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  const titles = profileData.titles;

  useEffect(() => {
    const fullText = titles[currentTitleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        setTypingSpeed(100);

        if (displayedText.length + 1 === fullText.length) {
          // Finished typing, pause before deleting
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        // Deleting backward
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        setTypingSpeed(50);

        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTitleIndex, titles, typingSpeed]);

  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF2E93]/12 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-[#FF6FB5]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-20 left-10 w-[300px] h-[300px] bg-[#FF2E93]/8 rounded-full blur-[100px] pointer-events-none" />

      {/* Decorative floral branches on flanks */}
      <div className="absolute top-16 right-4 sm:right-16 opacity-35 pointer-events-none">
        <BlossomBranch className="w-48 sm:w-64" />
      </div>
      <div className="absolute top-24 left-4 sm:left-16 opacity-30 pointer-events-none scale-x-[-1] hidden md:block">
        <BlossomBranch className="w-44 sm:w-56" />
      </div>

      <div className="max-w-4xl mx-auto w-full relative z-20 flex flex-col items-center text-center">
        
        {/* Top Label Badge */}
        <div
          id="hero-badge"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#14152C] border border-[#2A2B45] text-xs font-semibold text-[#FF6FB5] mb-6 shadow-[0_0_15px_rgba(255,46,147,0.15)]"
        >
          <Sparkles size={14} className="text-[#FF2E93] animate-spin" style={{ animationDuration: '8s' }} />
          <span className="tracking-wider uppercase font-mono">
            Welcome to my portfolio
          </span>
          <FloralMotif size={14} opacity={0.9} />
        </div>

        {/* Name */}
        <h1
          id="hero-name"
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-4 font-display"
        >
          Hi, I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFE5F0] to-[#FF6FB5]">
            {profileData.name}
          </span>
        </h1>

        {/* Rotating Role with Typing & Blinking Cursor */}
        <div
          id="hero-title-rotator"
          className="min-h-[46px] flex items-center justify-center gap-2 text-xl sm:text-3xl lg:text-4xl font-bold mb-5"
        >
          <span className="text-[#C4C4D6] font-display">I am a</span>
          <span className="text-[#FF2E93] font-display font-extrabold tracking-wide neon-text-glow">
            {displayedText}
          </span>
          <span className="inline-block w-1 h-7 sm:h-9 bg-[#FF2E93] animate-pulse rounded-full shadow-[0_0_8px_#FF2E93]" />
        </div>

        {/* Tagline */}
        <p className="text-lg sm:text-2xl font-medium text-[#FF6FB5] mb-5 italic tracking-wide">
          "{profileData.tagline}"
        </p>

        {/* Bio Paragraph */}
        <p
          id="hero-bio"
          className="text-base sm:text-lg text-[#C4C4D6] leading-relaxed max-w-2xl mb-8 font-light"
        >
          {profileData.bio}
        </p>

        {/* Location & Availability Pills */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-[#C4C4D6] mb-9 font-mono">
          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#14152C] border border-[#2A2B45]">
            <MapPin size={14} className="text-[#FF2E93]" />
            <span>{profileData.location}</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#14152C] border border-[#2A2B45]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-emerald-300">Open to Research & Tech Roles</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto">
          {/* Download CV button */}
          <button
            type="button"
            onClick={downloadResumePDF}
            id="hero-download-cv-btn"
            className="btn-gradient inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-base font-bold tracking-wide transition-all shadow-lg hover:scale-105 cursor-pointer"
          >
            <Download size={18} />
            <span>Download CV</span>
          </button>

          {/* View Resume in Section */}
          <a
            href="#resume"
            id="hero-view-resume-btn"
            className="px-6 py-3.5 rounded-full text-base font-semibold transition-all border border-[#2A2B45] bg-[#14152C] hover:border-[#FF2E93] text-white flex items-center gap-2"
          >
            <FileText size={16} className="text-[#FF6FB5]" />
            <span>View Resume</span>
          </a>

          {/* View Projects CTA */}
          <a
            href="#projects"
            id="hero-view-projects-btn"
            className="btn-outline-glow inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold transition-all"
          >
            <span>View Projects</span>
            <ArrowRight size={16} />
          </a>
        </div>

        {/* Social Icon Circles */}
        <div className="flex items-center justify-center gap-3.5 mt-9" id="hero-social-icons">
          <span className="text-xs font-mono uppercase tracking-wider text-[#999AB8] mr-1 hidden sm:inline">
            Connect:
          </span>
          <a
            href={profileData.linkedIn}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            id="social-linkedin"
            className="w-11 h-11 rounded-full glass-card flex items-center justify-center text-[#C4C4D6] hover:text-[#FF2E93] hover:border-[#FF2E93] transition-all hover:scale-110"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={profileData.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            id="social-github"
            className="w-11 h-11 rounded-full glass-card flex items-center justify-center text-[#C4C4D6] hover:text-[#FF2E93] hover:border-[#FF2E93] transition-all hover:scale-110"
          >
            <Github size={18} />
          </a>
          <a
            href={`mailto:${profileData.email}`}
            aria-label="Email Amirthavarshine"
            id="social-email"
            className="w-11 h-11 rounded-full glass-card flex items-center justify-center text-[#C4C4D6] hover:text-[#FF2E93] hover:border-[#FF2E93] transition-all hover:scale-110"
          >
            <Mail size={18} />
          </a>
          <a
            href={`tel:${profileData.phone}`}
            aria-label="Phone Number"
            id="social-phone"
            className="w-11 h-11 rounded-full glass-card flex items-center justify-center text-[#C4C4D6] hover:text-[#FF2E93] hover:border-[#FF2E93] transition-all hover:scale-110"
          >
            <Phone size={18} />
          </a>
        </div>

      </div>
    </section>
  );
};
