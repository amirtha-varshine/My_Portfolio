import React from 'react';
import { ShieldCheck, Flame, Users, Calendar, Award, Sparkles } from 'lucide-react';
import { achievementsData } from '../data/achievements';
import { FloralMotif } from './FloralMotif';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="relative py-24 px-4 sm:px-6 lg:px-8">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-[#FF2E93]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-20">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#14152C] border border-[#2A2B45] text-xs font-mono text-[#FF6FB5] uppercase tracking-wider mb-3 shadow-[0_0_12px_rgba(255,46,147,0.15)]">
            <FloralMotif size={14} />
            <span>Community &amp; Initiative</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            Achievements &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFE5F0] to-[#FF6FB5]">Leadership</span>
          </h2>
          <p className="text-[#C4C4D6] max-w-2xl text-base sm:text-lg mt-3 font-light">
            Fostering technical culture, organizing campus-wide symposia, and guiding peers in cybersecurity.
          </p>
        </div>

        {/* Card List */}
        <div className="space-y-6">
          {achievementsData.map((item, idx) => (
            <div
              key={item.id}
              id={`achievement-card-${item.id}`}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-[#2A2B45] hover:border-[#FF2E93]/60 relative overflow-hidden group transition-all duration-300"
            >
              {/* Background ambient spot */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#FF2E93]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-[#0A0B1E] border border-[#2A2B45] group-hover:border-[#FF2E93] text-[#FF2E93] transition-colors shadow-md mt-1">
                    {idx === 0 ? <ShieldCheck size={26} /> : <Flame size={26} />}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                        {item.role}
                      </h3>
                      {item.impactBadge && (
                        <span className="text-[11px] font-mono px-3 py-0.5 rounded-full bg-[#FF2E93]/15 text-[#FF6FB5] border border-[#FF2E93]/30">
                          {item.impactBadge}
                        </span>
                      )}
                    </div>
                    <h4 className="text-base sm:text-lg font-semibold text-[#FF6FB5]">
                      {item.organization}
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0A0B1E] border border-[#2A2B45] text-xs sm:text-sm font-mono text-[#C4C4D6] self-start">
                  <Calendar size={13} className="text-[#FF2E93]" />
                  <span>{item.period}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#C4C4D6] leading-relaxed pl-0 sm:pl-16">
                {item.description}
              </p>

              {/* Bottom tag / detail */}
              <div className="mt-4 pt-3 border-t border-[#2A2B45]/60 pl-0 sm:pl-16 flex items-center justify-between text-xs text-[#999AB8] font-mono">
                <span>Institutional Leadership</span>
                <FloralMotif size={16} opacity={0.6} className="group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
