import React from 'react';
import { Target, Compass, BookOpen, Award, Layers, Users, Sparkles, CheckCircle2 } from 'lucide-react';
import { profileData } from '../data/profile';
import { FloralMotif, BlossomBranch } from './FloralMotif';

export const About: React.FC = () => {
  const getStatIcon = (index: number) => {
    switch (index) {
      case 0:
        return <BookOpen className="text-[#FF2E93]" size={22} />;
      case 1:
        return <Layers className="text-[#FF6FB5]" size={22} />;
      case 2:
        return <Award className="text-[#FF2E93]" size={22} />;
      case 3:
        return <Users className="text-[#FF6FB5]" size={22} />;
      default:
        return <Sparkles className="text-[#FF2E93]" size={22} />;
    }
  };

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background glow and subtle blossom motifs */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#FF2E93]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#FF6FB5]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-20">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#14152C] border border-[#2A2B45] text-xs font-mono text-[#FF6FB5] uppercase tracking-wider mb-3 shadow-[0_0_12px_rgba(255,46,147,0.15)]">
            <FloralMotif size={14} />
            <span>Discover My Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-serif-title font-editorial-shadow">
            About <span className="font-serif-italic font-normal text-shimmer-pink">Me</span>
          </h2>
          <p className="text-[#C4C4D6] max-w-2xl text-base sm:text-lg mt-3 font-light">
            Merging data science curiosity with full-stack engineering discipline to build resilient software.
          </p>
        </div>

        {/* Main Content: 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Narrative Intro & Highlights */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* Story Card */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute -top-6 -right-6 opacity-30">
                <FloralMotif size={100} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-display flex items-center gap-2.5">
                <span>Engineering with Purpose</span>
                <span className="w-2 h-2 rounded-full bg-[#FF2E93]" />
              </h3>
              <p className="text-[#C4C4D6] text-base leading-relaxed mb-4">
                I am an Information Science & Engineering student at Women's Engineering College, Puducherry. My technical journey thrives at the intersection of predictive machine learning models, geospatial remote sensing datasets, and intelligent full-stack systems.
              </p>
              <p className="text-[#C4C4D6] text-base leading-relaxed mb-6">
                From developing early-warning forest fire susceptibility models during my research internship at NIT Puducherry to engineering enterprise data pipelines at Uno Minda and architecting AI-powered resume analyzers with Claude AI, I focus on building reliable software with clean architecture.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#2A2B45]">
                <div className="flex items-center gap-2.5 text-sm text-[#FFFFFF]">
                  <CheckCircle2 size={17} className="text-[#FF2E93] flex-shrink-0" />
                  <span>Predictive AI / ML Models</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-[#FFFFFF]">
                  <CheckCircle2 size={17} className="text-[#FF2E93] flex-shrink-0" />
                  <span>Geospatial Remote Sensing</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-[#FFFFFF]">
                  <CheckCircle2 size={17} className="text-[#FF2E93] flex-shrink-0" />
                  <span>React & FastAPI Solutions</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-[#FFFFFF]">
                  <CheckCircle2 size={17} className="text-[#FF2E93] flex-shrink-0" />
                  <span>Enterprise ERP Workflows</span>
                </div>
              </div>
            </div>

            {/* Two Highlight Cards ("Focus Areas" & "What Drives Me") */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {profileData.highlights.map((highlight, idx) => (
                <div
                  key={highlight.title}
                  id={`highlight-card-${idx}`}
                  className="glass-card rounded-2xl p-6 relative group overflow-hidden border border-[#2A2B45] hover:border-[#FF2E93]/60"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF2E93]/20 to-[#FF6FB5]/10 border border-[#FF2E93]/30 flex items-center justify-center mb-4 text-[#FF6FB5] group-hover:scale-110 transition-transform">
                    {idx === 0 ? <Target size={20} /> : <Compass size={20} />}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 font-display">
                    {highlight.title}
                  </h4>
                  <p className="text-sm text-[#C4C4D6] leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: 2x2 Stat Grid + Quick Quote */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* 2x2 Stat Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="stats-grid">
              {profileData.stats.map((stat, idx) => (
                <div
                  key={stat.label}
                  id={`stat-card-${idx}`}
                  className="glass-card rounded-2xl p-6 sm:p-7 relative overflow-hidden group flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-[#0A0B1E] border border-[#2A2B45] group-hover:border-[#FF2E93] transition-colors">
                      {getStatIcon(idx)}
                    </div>
                    <FloralMotif size={20} opacity={0.6} className="group-hover:opacity-100 transition-opacity" />
                  </div>

                  <div>
                    <div className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight mb-1 group-hover:text-[#FF6FB5] transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-base font-bold text-white mb-1">
                      {stat.label}
                    </div>
                    <div className="text-xs text-[#C4C4D6] font-mono">
                      {stat.sublabel}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quote / Mission Banner */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-[#FF2E93]/30 bg-gradient-to-r from-[#14152C] via-[#1F0D24] to-[#14152C] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF2E93]/15 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-start gap-4">
                <div className="text-[#FF2E93] text-4xl font-serif leading-none">“</div>
                <div>
                  <p className="text-base sm:text-lg font-medium text-white italic mb-3">
                    {profileData.tagline}
                  </p>
                  <p className="text-sm text-[#C4C4D6]">
                    Dedicated to combining algorithmic precision with user-centric design, ensuring every model and application solves tangible challenges.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
