import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Sparkles } from 'lucide-react';
import { educationData } from '../data/education';
import { FloralMotif, BlossomBranch } from './FloralMotif';

export const Education: React.FC = () => {
  return (
    <section id="education" className="relative py-24 px-4 sm:px-6 lg:px-8">
      {/* Background glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#FF2E93]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-20">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#14152C] border border-[#2A2B45] text-xs font-mono text-[#FF6FB5] uppercase tracking-wider mb-3 shadow-[0_0_12px_rgba(255,46,147,0.15)]">
            <FloralMotif size={14} />
            <span>Academic Foundations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-serif-title font-editorial-shadow">
            Education &amp; <span className="font-serif-italic font-normal text-shimmer-pink">Academics</span>
          </h2>
          <p className="text-[#C4C4D6] max-w-2xl text-base sm:text-lg mt-3 font-light">
            Formal training in computational theory, algorithmic analysis, and engineering fundamentals.
          </p>
        </div>

        {/* Education Card */}
        {educationData.map((edu, idx) => (
          <div
            key={idx}
            id="education-card"
            className="glass-card rounded-2xl p-6 sm:p-10 border border-[#2A2B45] hover:border-[#FF2E93]/60 relative overflow-hidden group transition-all duration-300"
          >
            {/* Top decorative branch */}
            <div className="absolute top-4 right-4 opacity-30 pointer-events-none hidden sm:block">
              <BlossomBranch className="w-44" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Degree & Institution */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-3 rounded-2xl bg-[#0A0B1E] border border-[#2A2B45] text-[#FF2E93] group-hover:border-[#FF2E93] transition-colors shadow-md">
                      <GraduationCap size={26} />
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-[#FF6FB5]">
                        Undergraduate Degree
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white font-display leading-tight">
                        {edu.degree}
                      </h3>
                    </div>
                  </div>

                  <p className="text-lg sm:text-xl font-semibold text-[#FF6FB5] mb-2">
                    {edu.field}
                  </p>

                  <h4 className="text-base sm:text-lg font-medium text-white mb-4">
                    {edu.institution}
                  </h4>

                  <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-mono text-[#C4C4D6] mb-6">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0A0B1E] border border-[#2A2B45]">
                      <Calendar size={13} className="text-[#FF2E93]" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0A0B1E] border border-[#2A2B45]">
                      <MapPin size={13} className="text-[#FF6FB5]" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>

                {/* CGPA Meter / Stat Box */}
                <div className="p-5 rounded-2xl bg-[#0A0B1E]/80 border border-[#2A2B45] relative overflow-hidden">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Award size={18} className="text-[#FF2E93]" />
                      <span className="text-sm font-bold text-white">Cumulative GPA</span>
                    </div>
                    <span className="font-mono text-xl font-extrabold text-[#FF2E93] neon-text-glow">
                      {edu.cgpa} <span className="text-sm text-[#C4C4D6] font-normal">/ {edu.maxCgpa}</span>
                    </span>
                  </div>

                  {/* Visual Progress Bar */}
                  <div className="w-full h-2.5 bg-[#14152C] rounded-full overflow-hidden border border-[#2A2B45]">
                    <div
                      className="h-full bg-gradient-to-r from-[#FF2E93] to-[#FF6FB5] rounded-full shadow-[0_0_10px_#FF2E93]"
                      style={{ width: `${(parseFloat(edu.cgpa) / 10) * 100}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-[#999AB8] mt-1.5">
                    <span>Grading Scale: 0.0</span>
                    <span>Institutional Standard: 10.0</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Relevant Coursework Tags */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-[#0A0B1E]/60 border border-[#2A2B45]">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#2A2B45]">
                  <BookOpen size={18} className="text-[#FF6FB5]" />
                  <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
                    Relevant Coursework
                  </h4>
                </div>

                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course) => (
                    <div
                      key={course}
                      className="px-3 py-1.5 rounded-lg bg-[#14152C] border border-[#2A2B45] hover:border-[#FF2E93] text-xs font-medium text-white transition-all flex items-center gap-1.5 group/course"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF2E93] group-hover/course:scale-125 transition-transform" />
                      <span>{course}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-3 border-t border-[#2A2B45]/60 flex items-center justify-between text-xs text-[#999AB8] font-mono">
                  <span>Department of ISE</span>
                  <FloralMotif size={16} opacity={0.6} />
                </div>
              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
};
