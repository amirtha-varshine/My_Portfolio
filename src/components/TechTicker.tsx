import React from 'react';
import { tickerTechs } from '../data/skills';
import { FloralMotif } from './FloralMotif';

export const TechTicker: React.FC = () => {
  // Duplicate list to ensure seamless infinite looping marquee
  const items = [...tickerTechs, ...tickerTechs, ...tickerTechs];

  return (
    <section
      id="tech-ticker-bar"
      className="relative w-full py-4 overflow-hidden border-y border-[#FF2E93]/30 bg-gradient-to-r from-[#190518] via-[#2A0826] to-[#190518] shadow-[0_0_25px_rgba(255,46,147,0.15)]"
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FF2E93]/10 via-transparent to-transparent pointer-events-none" />

      {/* Left/Right fade masks for smooth marquee appearance */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#0A0B1E] via-[#0A0B1E]/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#0A0B1E] via-[#0A0B1E]/80 to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="animate-ticker flex items-center gap-6 sm:gap-8">
        {items.map((item, idx) => (
          <div
            key={`${item.name}-${idx}`}
            className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#14152C]/70 border border-[#FF2E93]/25 backdrop-blur-sm group hover:border-[#FF2E93] transition-all cursor-default"
          >
            <FloralMotif size={14} opacity={0.85} className="group-hover:rotate-45 transition-transform duration-300" />
            <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#FF6FB5] tracking-wide whitespace-nowrap">
              {item.name}
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#FF2E93]/15 text-[#FF6FB5] border border-[#FF2E93]/20 whitespace-nowrap">
              {item.category}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
