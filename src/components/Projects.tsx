import React, { useState } from 'react';
import { Github, ExternalLink, Sparkles, BookOpen, Layers, Eye, Calendar } from 'lucide-react';
import { projectsData } from '../data/projects';
import { ProjectItem } from '../types';
import { FloralMotif } from './FloralMotif';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#FF2E93]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#FF6FB5]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-20">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#14152C] border border-[#2A2B45] text-xs font-mono text-[#FF6FB5] uppercase tracking-wider mb-3 shadow-[0_0_12px_rgba(255,46,147,0.15)]">
            <FloralMotif size={14} />
            <span>Featured Innovations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFE5F0] to-[#FF6FB5]">Projects</span>
          </h2>
          <p className="text-[#C4C4D6] max-w-2xl text-base sm:text-lg mt-3 font-light">
            A showcase of machine learning frameworks, AI agent applications, and student-focused web utilities.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between border border-[#2A2B45] hover:border-[#FF2E93]/60 group transition-all duration-300"
            >
              <div>
                {/* Image Thumbnail Container */}
                <div className="relative aspect-video w-full overflow-hidden bg-[#0A0B1E] border-b border-[#2A2B45]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback placeholder with stylized card
                      const target = e.currentTarget;
                      target.style.display = 'none';
                    }}
                  />
                  
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14152C] via-transparent to-transparent opacity-80" />

                  {/* Corner floral motif */}
                  <div className="absolute top-3 right-3">
                    <FloralMotif size={24} opacity={0.8} />
                  </div>

                  {/* Badge: Research / Date / Status */}
                  <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
                    {project.isResearch && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#FF2E93]/20 border border-[#FF2E93]/50 text-white backdrop-blur-md shadow-sm">
                        <BookOpen size={12} className="text-[#FF6FB5]" />
                        <span>Research Project</span>
                      </span>
                    )}
                    {project.date && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono bg-[#0A0B1E]/80 border border-[#2A2B45] text-[#C4C4D6]">
                        <Calendar size={12} className="text-[#FF6FB5]" />
                        <span>{project.date}</span>
                      </span>
                    )}
                  </div>

                  {/* Quick Inspect Overlay Button */}
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-sm font-semibold backdrop-blur-xs"
                    aria-label={`Inspect ${project.title}`}
                  >
                    <span className="px-4 py-2 rounded-full bg-[#14152C]/90 border border-[#FF2E93] text-white flex items-center gap-2 shadow-lg">
                      <Eye size={15} className="text-[#FF6FB5]" />
                      <span>View Details</span>
                    </span>
                  </button>
                </div>

                {/* Content Block */}
                <div className="p-6">
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-[#0A0B1E] text-[#FF6FB5] border border-[#2A2B45]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 font-display group-hover:text-[#FF6FB5] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#C4C4D6] leading-relaxed line-clamp-4 mb-4">
                    {project.description}
                  </p>

                  {/* Key Highlights bullet list */}
                  {project.highlights && (
                    <div className="space-y-1.5 mb-4 text-xs text-[#999AB8]">
                      {project.highlights.map((item, i) => (
                        <div key={i} className="flex items-start gap-1.5">
                          <span className="text-[#FF2E93] mt-0.5">✦</span>
                          <span className="line-clamp-1">{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons (Omitted when links are blank as instructed) */}
              <div className="p-6 pt-0 border-t border-transparent">
                {project.githubUrl || project.liveUrl ? (
                  <div className="flex items-center gap-3 pt-4 border-t border-[#2A2B45]">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-gradient flex-1 py-2 px-4 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-md"
                      >
                        <Github size={16} />
                        <span>Source Code</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-outline-glow flex-1 py-2 px-4 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2"
                      >
                        <ExternalLink size={15} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                ) : (
                  <div className="pt-3 border-t border-[#2A2B45] flex items-center justify-between text-xs text-[#999AB8]">
                    <span className="italic font-mono">
                      {project.isResearch ? 'Academic Research Project' : 'Institutional Release'}
                    </span>
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="text-[#FF6FB5] hover:text-white transition-colors flex items-center gap-1 font-semibold"
                    >
                      <span>Overview</span>
                      <Eye size={13} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="glass-card max-w-2xl w-full rounded-2xl overflow-hidden border border-[#FF2E93]/60 shadow-[0_0_50px_rgba(255,46,147,0.35)] relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Image */}
            <div className="relative aspect-video w-full overflow-hidden bg-[#0A0B1E]">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-[#0A0B1E]/80 border border-[#2A2B45] text-white hover:border-[#FF2E93] hover:text-[#FF6FB5] transition-all"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap gap-2 mb-3">
                {selectedProject.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-3 py-1 rounded-full bg-[#0A0B1E] text-[#FF6FB5] border border-[#2A2B45]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 font-display">
                {selectedProject.title}
              </h3>

              <p className="text-sm sm:text-base text-[#C4C4D6] leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              {selectedProject.highlights && (
                <div className="mb-6 p-4 rounded-xl bg-[#0A0B1E]/80 border border-[#2A2B45]">
                  <h4 className="text-xs font-mono text-[#FF6FB5] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Sparkles size={14} />
                    <span>Technical Highlights</span>
                  </h4>
                  <ul className="space-y-1.5 text-sm text-[#C4C4D6]">
                    {selectedProject.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#FF2E93] font-bold">✓</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Action buttons */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#2A2B45]">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-gradient px-5 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2"
                  >
                    <Github size={16} />
                    <span>Open GitHub Repository</span>
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-xl border border-[#2A2B45] text-white hover:bg-white/5 text-sm font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
