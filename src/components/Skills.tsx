import React, { useState } from 'react';
import { Code, Satellite, Layers, Database, Wrench, Sparkles, Filter } from 'lucide-react';
import { skillCategories } from '../data/skills';
import { FloralMotif } from './FloralMotif';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const getCategoryIcon = (name: string) => {
    switch (name) {
      case 'Code':
        return <Code size={20} className="text-[#FF2E93]" />;
      case 'Satellite':
        return <Satellite size={20} className="text-[#FF6FB5]" />;
      case 'Layers':
        return <Layers size={20} className="text-[#FF2E93]" />;
      case 'Database':
        return <Database size={20} className="text-[#FF6FB5]" />;
      case 'Wrench':
        return <Wrench size={20} className="text-[#FF2E93]" />;
      case 'Sparkles':
        return <Sparkles size={20} className="text-[#FF6FB5]" />;
      default:
        return <Sparkles size={20} className="text-[#FF2E93]" />;
    }
  };

  const categories = ['All', ...skillCategories.map((c) => c.category)];

  const filteredCategories =
    selectedCategory === 'All'
      ? skillCategories
      : skillCategories.filter((c) => c.category === selectedCategory);

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-[#FF2E93]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-20">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#14152C] border border-[#2A2B45] text-xs font-mono text-[#FF6FB5] uppercase tracking-wider mb-3 shadow-[0_0_12px_rgba(255,46,147,0.15)]">
            <FloralMotif size={14} />
            <span>Technical Proficiencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-serif-title font-editorial-shadow">
            Skills &amp; <span className="font-serif-italic font-normal text-shimmer-pink">Expertise</span>
          </h2>
          <p className="text-[#C4C4D6] max-w-2xl text-base sm:text-lg mt-3 font-light">
            Hands-on technical stack spanning machine learning, geospatial analysis, modern full-stack web frameworks, and enterprise software.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 max-w-4xl">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                    isSelected
                      ? 'btn-gradient shadow-[0_0_15px_rgba(255,46,147,0.4)]'
                      : 'bg-[#14152C] text-[#C4C4D6] border border-[#2A2B45] hover:border-[#FF2E93]/50 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Grouped Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group) => (
            <div
              key={group.category}
              id={`skill-group-${group.category.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-[#2A2B45] hover:border-[#FF2E93]/50 transition-all duration-300 group"
            >
              <div>
                {/* Category Card Header */}
                <div className="flex items-center justify-between mb-5 pb-4 border-b border-[#2A2B45]">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#0A0B1E] border border-[#2A2B45] group-hover:border-[#FF2E93] transition-colors">
                      {getCategoryIcon(group.iconName)}
                    </div>
                    <h3 className="text-lg font-bold text-white font-display">
                      {group.category}
                    </h3>
                  </div>
                  <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-[#FF2E93]/15 text-[#FF6FB5] border border-[#FF2E93]/30">
                    {group.skills.length}
                  </span>
                </div>

                {/* Skill Pills Grid */}
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="px-3 py-1.5 rounded-xl bg-[#0A0B1E]/70 border border-[#2A2B45] hover:border-[#FF2E93] text-xs sm:text-sm font-medium text-white transition-all flex items-center gap-2 group/skill hover:shadow-[0_0_12px_rgba(255,46,147,0.25)]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF2E93] group-hover/skill:scale-125 transition-transform" />
                      <span>{skill.name}</span>
                      {skill.level && (
                        <span className="text-[10px] font-mono text-[#FF6FB5] opacity-80 group-hover/skill:opacity-100">
                          {skill.level}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom decorative accent */}
              <div className="mt-6 pt-3 flex items-center justify-between text-xs text-[#999AB8] font-mono">
                <span>Domain Competency</span>
                <FloralMotif size={16} opacity={0.6} className="group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
