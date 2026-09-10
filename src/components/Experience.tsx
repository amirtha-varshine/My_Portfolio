import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle, Sparkles } from 'lucide-react';
import { experienceData } from '../data/experience';
import { FloralMotif } from './FloralMotif';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#FF2E93]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-20">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#14152C] border border-[#2A2B45] text-xs font-mono text-[#FF6FB5] uppercase tracking-wider mb-3 shadow-[0_0_12px_rgba(255,46,147,0.15)]">
            <FloralMotif size={14} />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-serif-title font-editorial-shadow">
            Professional <span className="font-serif-italic font-normal text-shimmer-pink">Experience</span>
          </h2>
          <p className="text-[#C4C4D6] max-w-2xl text-base sm:text-lg mt-3 font-light">
            Hands-on internships advancing national-level academic research and enterprise systems.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-[#2A2B45] space-y-12">
          
          {experienceData.map((exp, idx) => (
            <div
              key={exp.id}
              id={`experience-timeline-item-${exp.id}`}
              className="relative group"
            >
              {/* Glowing Timeline Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-6 w-8 h-8 rounded-full bg-[#0A0B1E] border-2 border-[#FF2E93] group-hover:border-[#FF6FB5] flex items-center justify-center transition-all duration-300 shadow-[0_0_15px_rgba(255,46,147,0.4)] group-hover:scale-110">
                <FloralMotif size={16} opacity={1} />
              </div>

              {/* Glassmorphic Experience Card */}
              <div className="glass-card rounded-2xl p-6 sm:p-8 border border-[#2A2B45] group-hover:border-[#FF2E93]/60 transition-all duration-300 relative overflow-hidden">
                
                {/* Background soft ambient gradient */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF2E93]/5 rounded-full blur-2xl pointer-events-none" />

                {/* Card Top Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-[#2A2B45]">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                        {exp.role}
                      </h3>
                      {exp.badge && (
                        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#FF2E93]/15 text-[#FF6FB5] border border-[#FF2E93]/30">
                          {exp.badge}
                        </span>
                      )}
                    </div>
                    <div className="text-base sm:text-lg font-semibold text-[#FF6FB5]">
                      {exp.organization}
                    </div>
                  </div>

                  <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 sm:gap-1 text-xs sm:text-sm font-mono text-[#C4C4D6]">
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#0A0B1E] border border-[#2A2B45] text-white">
                      <Calendar size={13} className="text-[#FF2E93]" />
                      <span>{exp.period}</span>
                    </div>
                    {exp.location && (
                      <div className="flex items-center gap-1 text-[#999AB8]">
                        <MapPin size={12} />
                        <span>{exp.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-3">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3 text-sm sm:text-base text-[#C4C4D6] leading-relaxed">
                      <span className="w-2 h-2 rounded-full bg-[#FF2E93] mt-2 flex-shrink-0 shadow-[0_0_6px_#FF2E93]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
