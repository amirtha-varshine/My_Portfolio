import React, { useState, useEffect, useRef } from 'react';
import { 
  Download, 
  ArrowUpRight, 
  FileText, 
  Camera, 
  Sparkles, 
  Layers, 
  Cpu, 
  Check, 
  RotateCcw,
  RotateCw,
  Linkedin, 
  Github, 
  Mail, 
  Phone,
  Code2,
  GraduationCap,
  Briefcase,
  Award
} from 'lucide-react';
import { profileData } from '../data/profile';
import { downloadResumePDF } from '../utils/resumeDownload';

export const Hero: React.FC = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(110);

  // Half-rotation flip state (supports 180° half-turn 3D flip)
  const [isHalfRotated, setIsHalfRotated] = useState(false);

  // Custom photo upload state with localStorage persistence
  const [avatarSrc, setAvatarSrc] = useState<string>(() => {
    try {
      const saved = localStorage.getItem('amirthavarshine_avatar');
      return saved || profileData.avatarUrl || '/avatar.jpg';
    } catch {
      return profileData.avatarUrl || '/avatar.jpg';
    }
  });
  const [isCustomPhoto, setIsCustomPhoto] = useState<boolean>(() => {
    try {
      return Boolean(localStorage.getItem('amirthavarshine_avatar'));
    } catch {
      return false;
    }
  });
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const titles = profileData.titles;

  // Typewriter loop for subtitle
  useEffect(() => {
    const fullText = titles[currentTitleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        setTypingSpeed(100);

        if (displayedText.length + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        setTypingSpeed(45);

        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTitleIndex, titles, typingSpeed]);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setAvatarSrc(result);
        setIsCustomPhoto(true);
        setUploadSuccess(true);
        try {
          localStorage.setItem('amirthavarshine_avatar', result);
        } catch {
          // ignore quota error
        }
        setTimeout(() => setUploadSuccess(false), 3000);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    const defaultUrl = profileData.avatarUrl || '/avatar.jpg';
    setAvatarSrc(defaultUrl);
    setIsCustomPhoto(false);
    try {
      localStorage.removeItem('amirthavarshine_avatar');
    } catch {
      // ignore
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#FF2E93]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-[#FF6FB5]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-[300px] h-[300px] bg-[#3B82F6]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto w-full relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ======================================================== */}
          {/* LEFT COLUMN: Editorial Typography, Intro & Action Badges */}
          {/* ======================================================== */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Eyebrow badge matching reference */}
            <div
              id="hero-eyebrow-badge"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14152C]/90 border border-[#2A2B45] text-xs font-mono tracking-widest text-[#FF6FB5] uppercase mb-5 shadow-[0_0_15px_rgba(255,46,147,0.12)]"
            >
              <Sparkles size={13} className="text-[#FF2E93]" />
              <span>Portfolio &amp; Research Lab</span>
            </div>

            {/* Editorial Serif Display Name with Effect */}
            <h1 id="hero-name" className="font-editorial-shadow tracking-tight mb-4">
              <span className="font-serif-title font-bold text-4xl sm:text-6xl lg:text-7xl xl:text-[80px] text-white block leading-[1.05]">
                Amirthavarshine
              </span>
              <span className="font-serif-italic text-4xl sm:text-6xl lg:text-7xl xl:text-[80px] text-shimmer-pink block mt-1 leading-[1.05]">
                Sakthivel
              </span>
            </h1>

            {/* Subtitle / Role line */}
            <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base lg:text-lg font-medium text-[#D1D2E6] mb-4">
              <span className="text-[#FF6FB5] font-semibold">
                AI/ML Researcher &amp; Full-Stack Developer
              </span>
              <span className="text-[#686985] hidden sm:inline">•</span>
              <span className="text-[#A5A6C0]">
                B.Tech Information Science Student
              </span>
            </div>

            {/* Typewriter text pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-lg bg-[#0E1024] border border-[#2A2B45]/80 text-xs sm:text-sm font-mono text-[#C4C4D6] mb-5">
              <span className="text-[#FF2E93] font-semibold">Specializing in:</span>
              <span className="text-white font-bold">{displayedText}</span>
              <span className="inline-block w-1.5 h-4 bg-[#FF2E93] animate-pulse rounded-full" />
            </div>

            {/* Concise Bio Paragraph matching reference tone */}
            <p
              id="hero-bio"
              className="text-sm sm:text-base lg:text-[17px] text-[#A9AABF] leading-relaxed max-w-2xl mb-8 font-light"
            >
              Developing responsive web systems, geospatial remote sensing frameworks, and AI/ML-based predictive solutions to address practical real-world challenges.
            </p>

            {/* Action Buttons (Pill design matching reference) */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-9 w-full sm:w-auto">
              {/* View Projects CTA (Dark pill with top-right arrow) */}
              <a
                href="#projects"
                id="hero-view-projects-btn"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-sm font-bold tracking-wide text-white bg-[#14152C] hover:bg-[#1E1F3B] border border-[#2A2B45] hover:border-[#FF2E93] shadow-[0_8px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_0_20px_rgba(255,46,147,0.3)] transition-all group"
              >
                <span>View Projects</span>
                <ArrowUpRight size={17} className="text-[#FF6FB5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Download CV button (Pill with download icon) */}
              <button
                type="button"
                onClick={downloadResumePDF}
                id="hero-download-cv-btn"
                className="btn-gradient inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold tracking-wide transition-all shadow-[0_8px_20px_rgba(255,46,147,0.3)] hover:scale-105 cursor-pointer"
              >
                <Download size={16} />
                <span>Download Resume</span>
              </button>

              {/* View Resume Anchor */}
              <a
                href="#resume"
                id="hero-view-resume-btn"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-[#C4C4D6] hover:text-white bg-[#0A0B1E]/80 border border-[#2A2B45] hover:border-[#FF6FB5] transition-all"
              >
                <FileText size={15} className="text-[#FF6FB5]" />
                <span>View CV</span>
              </a>
            </div>

            {/* Stat Badges / Pills directly below buttons (matching the reference layout!) */}
            <div className="flex flex-wrap items-center gap-3" id="hero-stat-pills">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#14152C]/80 border border-[#2A2B45] text-xs font-medium text-[#C4C4D6] shadow-sm hover:border-[#FF2E93]/50 transition-colors">
                <span className="font-bold text-white text-sm">2+</span>
                <span>Internships / Research</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#14152C]/80 border border-[#2A2B45] text-xs font-medium text-[#C4C4D6] shadow-sm hover:border-[#FF2E93]/50 transition-colors">
                <span className="font-bold text-white text-sm">3+</span>
                <span>Core Projects Built</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#14152C]/80 border border-[#2A2B45] text-xs font-medium text-[#C4C4D6] shadow-sm hover:border-[#FF2E93]/50 transition-colors">
                <span className="font-bold text-white text-sm">7</span>
                <span>Verified Certifications</span>
              </div>
            </div>

            {/* Social Icons Quick Row */}
            <div className="flex items-center gap-3 mt-7">
              <span className="text-xs font-mono uppercase tracking-wider text-[#797A96] mr-1">
                Socials:
              </span>
              <a
                href={profileData.linkedIn}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-[#14152C] border border-[#2A2B45] text-[#A5A6C0] hover:text-white hover:border-[#FF2E93] flex items-center justify-center transition-all hover:scale-110"
              >
                <Linkedin size={15} />
              </a>
              <a
                href={profileData.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-full bg-[#14152C] border border-[#2A2B45] text-[#A5A6C0] hover:text-white hover:border-[#FF2E93] flex items-center justify-center transition-all hover:scale-110"
              >
                <Github size={15} />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                aria-label="Email"
                className="w-9 h-9 rounded-full bg-[#14152C] border border-[#2A2B45] text-[#A5A6C0] hover:text-white hover:border-[#FF2E93] flex items-center justify-center transition-all hover:scale-110"
              >
                <Mail size={15} />
              </a>
              <a
                href={`tel:${profileData.phone}`}
                aria-label="Phone"
                className="w-9 h-9 rounded-full bg-[#14152C] border border-[#2A2B45] text-[#A5A6C0] hover:text-white hover:border-[#FF2E93] flex items-center justify-center transition-all hover:scale-110"
              >
                <Phone size={15} />
              </a>
            </div>

          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: The Profile Section with Applied Half Rotation */}
          {/* ======================================================== */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center relative">
            
            {/* Hidden file input for custom photograph upload */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handlePhotoUpload}
              accept="image/*"
              className="hidden"
            />

            {/* Profile Section Card with Applied Half Rotation (Angle tilt + 3D perspective) */}
            <div 
              id="hero-profile-section"
              className="relative w-full max-w-[430px] perspective-1000 transform rotate-[3.5deg] hover:rotate-0 transition-transform duration-500 applied-half-rotation cursor-pointer"
            >

              {/* Tilted Backdrop Accent Card (Matching editorial angled layered aesthetic) */}
              <div className="absolute inset-0 rounded-[38px] bg-gradient-to-tr from-[#FF2E93]/20 via-[#1F102B]/60 to-[#0A0B1E] border border-[#FF2E93]/25 transform rotate-3 scale-[1.03] blur-[1px] pointer-events-none -z-10 shadow-[0_20px_50px_rgba(0,0,0,0.7)]" />

              {/* Flippable 3D Card Container (supports 180° half rotation turn) */}
              <div 
                className={`relative w-full rounded-[36px] preserve-3d transition-transform duration-700 ease-out ${
                  isHalfRotated ? 'rotate-y-180' : ''
                }`}
              >

                {/* ==================================================== */}
                {/* FRONT FACE: Photograph Canvas & Tech Specializations */}
                {/* ==================================================== */}
                <div className="w-full rounded-[36px] bg-gradient-to-b from-[#181938]/95 to-[#101128]/98 backdrop-blur-2xl border border-[#2F3154] shadow-[0_25px_60px_rgba(0,0,0,0.65)] p-6 sm:p-8 overflow-visible backface-hidden group hover:border-[#FF2E93]/40 transition-colors">
                  
                  {/* Ambient top light blur */}
                  <div className="absolute -top-12 -left-12 w-48 h-48 bg-[#FF2E93]/15 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-[#FF6FB5]/10 rounded-full blur-3xl pointer-events-none" />

                  {/* Floating Chip 1: Top-Left (⚡ Python & ML) */}
                  <div className="absolute -top-4 -left-3 sm:-left-5 z-30 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181938] border border-[#2F3154] text-xs font-semibold text-white shadow-xl hover:border-[#FF2E93] transition-colors">
                    <span className="text-[#FF2E93]">⚡</span>
                    <span className="font-mono text-[11px] sm:text-xs tracking-wide">Python &amp; AI/ML</span>
                  </div>

                  {/* Floating Chip 2: Top-Right (✦ Remote Sensing) */}
                  <div className="absolute -top-3 -right-2 sm:-right-4 z-30 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#181938] border border-[#2F3154] text-xs font-semibold text-white shadow-xl hover:border-[#FF6FB5] transition-colors">
                    <span className="text-[#FF6FB5]">✦</span>
                    <span className="font-mono text-[11px] sm:text-xs tracking-wide">Remote Sensing</span>
                  </div>

                  {/* Main Graphic Canvas: Concentric Orbit Rings & Circular Photograph Frame */}
                  <div className="relative flex flex-col items-center justify-center py-6 sm:py-8">
                    
                    {/* Concentric subtle radar / orbit rings behind photograph */}
                    <div className="absolute w-[290px] h-[290px] sm:w-[320px] sm:h-[320px] rounded-full border border-dashed border-[#2F3154]/60 pointer-events-none subtle-ring-pulse" />
                    <div className="absolute w-[230px] h-[230px] sm:w-[260px] sm:h-[260px] rounded-full border border-[#2F3154]/40 pointer-events-none" />

                    {/* Central Photograph Frame */}
                    <div className="relative z-20">
                      <div
                        onClick={() => fileInputRef.current?.click()}
                        title="Click to view or upload your photograph"
                        className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full p-2 bg-gradient-to-b from-[#2A2B48] via-[#1A1B36] to-[#121324] border-2 border-[#FF2E93]/40 shadow-[0_0_40px_rgba(255,46,147,0.22)] cursor-pointer group/photo transition-transform duration-300 hover:scale-102"
                      >
                        {/* Inner image container */}
                        <div className="w-full h-full rounded-full overflow-hidden relative bg-[#14152C] flex items-center justify-center">
                          <img
                            src={avatarSrc}
                            alt="Amirthavarshine S - Photograph"
                            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/photo:scale-105"
                            onError={(e) => {
                              const target = e.currentTarget;
                              target.style.display = 'none';
                            }}
                          />
                          
                          {/* Hover Overlay indicating upload option */}
                          <div className="absolute inset-0 bg-black/45 backdrop-blur-[2px] opacity-0 group-hover/photo:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1.5 text-white">
                            <Camera size={22} className="text-[#FF6FB5]" />
                            <span className="text-[11px] font-semibold tracking-wide">
                              {isCustomPhoto ? 'Change Photo' : 'Upload Photo'}
                            </span>
                          </div>
                        </div>

                        {/* Camera Badge at bottom right */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            fileInputRef.current?.click();
                          }}
                          title="Upload custom portrait"
                          className="absolute bottom-2 right-2 w-10 h-10 rounded-full bg-[#14152C] border-2 border-[#FF2E93] text-[#FF6FB5] flex items-center justify-center shadow-lg hover:scale-110 hover:bg-[#1E1F3B] transition-all z-30 cursor-pointer"
                        >
                          <Camera size={16} />
                        </button>
                      </div>

                      {/* Reset Photo option if a custom photo is set */}
                      {isCustomPhoto && (
                        <div className="flex justify-center mt-3">
                          <button
                            type="button"
                            onClick={handleResetPhoto}
                            className="inline-flex items-center gap-1 text-[11px] font-mono text-[#A5A6C0] hover:text-[#FF6FB5] transition-colors px-2 py-0.5 rounded bg-[#14152C]/70 border border-[#2A2B45]"
                          >
                            <RotateCcw size={11} />
                            <span>Reset to default photo</span>
                          </button>
                        </div>
                      )}

                      {/* Toast Notification on Photo Upload */}
                      {uploadSuccess && (
                        <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/90 border border-emerald-500 text-emerald-300 text-[11px] whitespace-nowrap shadow-lg animate-bounce z-40">
                          <Check size={12} />
                          <span>Photo updated successfully!</span>
                        </div>
                      )}
                    </div>

                    {/* Bottom Floating Card inside the frame (matching reference image) */}
                    <div className="relative z-20 mt-6 w-full max-w-[340px] rounded-2xl bg-[#0C0D20]/90 backdrop-blur-md border border-[#2F3154] p-3.5 shadow-xl flex items-center gap-3.5 hover:border-[#FF2E93]/40 transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2A1B30] to-[#14152C] border border-[#FF2E93]/40 flex items-center justify-center text-[#FF6FB5] shrink-0">
                        <Code2 size={20} />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-serif-title font-bold text-sm sm:text-base text-white leading-tight">
                          Full-Stack &amp; AI/ML
                        </span>
                        <span className="text-[11px] text-[#A5A6C0] font-light leading-snug mt-0.5">
                          Web Apps, Predictive Systems &amp; Applied AI
                        </span>
                      </div>
                    </div>

                  </div>

                  {/* Card Bottom Prompt to Half Rotate */}
                  <div className="flex items-center justify-center pt-2">
                    <button
                      type="button"
                      onClick={() => setIsHalfRotated(true)}
                      className="inline-flex items-center gap-1.5 text-xs text-[#A5A6C0] hover:text-[#FF6FB5] transition-colors group/hint cursor-pointer"
                    >
                      <RotateCw size={12} className="group-hover/hint:rotate-180 transition-transform duration-500" />
                      <span>Click for profile outline (180° half rotation)</span>
                    </button>
                  </div>

                </div>

                {/* ==================================================== */}
                {/* BACK FACE: Half Rotation (180°) Portfolio Overview Card */}
                {/* ==================================================== */}
                <div className="absolute inset-0 w-full h-full rounded-[36px] bg-gradient-to-b from-[#161736] via-[#101128] to-[#0A0B1A] backdrop-blur-2xl border-2 border-[#FF2E93]/50 shadow-[0_25px_60px_rgba(0,0,0,0.75)] p-6 sm:p-7 flex flex-col justify-between backface-hidden rotate-y-180 z-20">
                  
                  {/* Top Bar with Thumbnail & Name */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#2A2B45]">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-full overflow-hidden border border-[#FF6FB5] p-0.5 bg-[#14152C] shrink-0">
                        <img 
                          src={avatarSrc} 
                          alt="Thumbnail" 
                          className="w-full h-full rounded-full object-cover object-top"
                        />
                      </div>
                      <div>
                        <h4 className="text-white font-serif-title font-bold text-sm sm:text-base leading-tight">
                          Amirthavarshine S
                        </h4>
                        <span className="text-[11px] text-[#FF6FB5] font-mono">
                          B.Tech ISE • CGPA 8.04
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setIsHalfRotated(false)}
                      title="Rotate back to photograph"
                      className="p-1.5 rounded-full bg-[#1F203E] text-[#FF6FB5] border border-[#2F3154] hover:bg-[#FF2E93] hover:text-white transition-all shadow cursor-pointer"
                    >
                      <RotateCcw size={14} />
                    </button>
                  </div>

                  {/* Portfolio Outline Core Highlights */}
                  <div className="space-y-3 py-2">
                    
                    {/* Research Outline */}
                    <div className="p-3 rounded-xl bg-[#0F1026]/90 border border-[#2A2B45] hover:border-[#FF2E93]/40 transition-colors">
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase size={14} className="text-[#FF6FB5]" />
                        <span className="text-xs font-bold text-white tracking-tight">Research &amp; Industry</span>
                      </div>
                      <p className="text-[11px] text-[#C4C4D6] leading-relaxed">
                        <strong className="text-white">NIT Puducherry:</strong> Machine Learning &amp; GIS for Forest Fire Susceptibility.
                        <br />
                        <strong className="text-white">Uno Minda:</strong> Full-stack internal tooling &amp; operations logic.
                      </p>
                    </div>

                    {/* Academic Outline */}
                    <div className="p-3 rounded-xl bg-[#0F1026]/90 border border-[#2A2B45] hover:border-[#FF2E93]/40 transition-colors">
                      <div className="flex items-center gap-2 mb-1">
                        <GraduationCap size={14} className="text-[#FF6FB5]" />
                        <span className="text-xs font-bold text-white tracking-tight">Academic Profile</span>
                      </div>
                      <p className="text-[11px] text-[#C4C4D6] leading-relaxed">
                        Women's Engineering College, Puducherry • Pondicherry University. Coursework in AI, Data Structures, DB Systems, &amp; Cloud.
                      </p>
                    </div>

                    {/* Certifications Badge */}
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#14152C]/80 border border-[#2A2B45] text-xs text-white">
                      <div className="flex items-center gap-2">
                        <Award size={14} className="text-[#FF2E93]" />
                        <span className="text-[11px] font-medium">7 Verified Industry Credentials</span>
                      </div>
                      <span className="text-[10px] font-mono text-[#FF6FB5] bg-[#FF2E93]/15 px-2 py-0.5 rounded-full">
                        AWS • IBM • Python
                      </span>
                    </div>

                  </div>

                  {/* Bottom Quick Actions */}
                  <div className="pt-2 border-t border-[#2A2B45] flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => setIsHalfRotated(false)}
                      className="flex-1 py-2 rounded-xl bg-[#1A1B38] hover:bg-[#25264E] text-xs font-semibold text-white border border-[#2A2B45] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <RotateCcw size={12} />
                      <span>Rotate Front</span>
                    </button>
                    <button
                      type="button"
                      onClick={downloadResumePDF}
                      className="flex-1 py-2 rounded-xl bg-gradient-to-r from-[#FF2E93] to-[#FF6FB5] hover:opacity-90 text-xs font-bold text-white shadow-md transition-opacity flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Download size={12} />
                      <span>Resume PDF</span>
                    </button>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
