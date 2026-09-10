import React, { useState } from 'react';
import { Award, ExternalLink, Sparkles, CheckCircle2, Eye, X } from 'lucide-react';
import { certificatesData } from '../data/certificates';
import { CertificateItem } from '../types';
import { FloralMotif } from './FloralMotif';

export const Certificates: React.FC = () => {
  const [activeCert, setActiveCert] = useState<CertificateItem | null>(null);

  return (
    <section id="certificates" className="relative py-24 px-4 sm:px-6 lg:px-8">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-[#FF2E93]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-20">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#14152C] border border-[#2A2B45] text-xs font-mono text-[#FF6FB5] uppercase tracking-wider mb-3 shadow-[0_0_12px_rgba(255,46,147,0.15)]">
            <FloralMotif size={14} />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-serif-title font-editorial-shadow">
            Certifications &amp; <span className="font-serif-italic font-normal text-shimmer-pink">Accreditations</span>
          </h2>
          <p className="text-[#C4C4D6] max-w-2xl text-base sm:text-lg mt-3 font-light">
            Continuous industry and academic upskilling in Cloud architecture, Generative AI, Python development, and Data Analytics.
          </p>
        </div>

        {/* 3-Column Card Grid (7 cards total) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificatesData.map((cert) => (
            <div
              key={cert.id}
              id={`certificate-card-${cert.id}`}
              className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-[#2A2B45] hover:border-[#FF2E93]/60 transition-all duration-300 group"
            >
              <div>
                {/* Top Row: Issuer & Year top-right in pink */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#C4C4D6] px-2.5 py-1 rounded-md bg-[#0A0B1E] border border-[#2A2B45]">
                    {cert.issuer}
                  </span>
                  
                  {/* Year top-right in pink as instructed */}
                  <span className="text-sm font-bold font-mono text-[#FF2E93] bg-[#FF2E93]/15 px-3 py-1 rounded-full border border-[#FF2E93]/30 shadow-[0_0_8px_rgba(255,46,147,0.2)]">
                    {cert.year}
                  </span>
                </div>

                {/* Certificate Thumbnail Preview Frame */}
                <div
                  onClick={() => setActiveCert(cert)}
                  className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#0A0B1E] border border-[#2A2B45] group-hover:border-[#FF2E93]/40 cursor-pointer mb-5 group/thumb"
                >
                  <img
                    src={cert.image}
                    alt={`${cert.title} certificate`}
                    className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback visual
                      const target = e.currentTarget;
                      target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                    <span className="px-3.5 py-1.5 rounded-full bg-[#14152C]/90 text-xs font-semibold text-white border border-[#FF2E93] flex items-center gap-1.5 shadow-lg">
                      <Eye size={13} className="text-[#FF6FB5]" />
                      <span>Preview</span>
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 font-display group-hover:text-[#FF6FB5] transition-colors leading-snug">
                  {cert.title}
                </h3>

                {/* Category label */}
                {cert.category && (
                  <p className="text-xs text-[#999AB8] font-mono mb-4 flex items-center gap-1.5">
                    <Sparkles size={12} className="text-[#FF2E93]" />
                    <span>{cert.category}</span>
                  </p>
                )}
              </div>

              {/* "View Certificate" Button/Link */}
              <div className="pt-4 border-t border-[#2A2B45]/70">
                <button
                  type="button"
                  onClick={() => setActiveCert(cert)}
                  id={`view-cert-btn-${cert.id}`}
                  className="w-full btn-outline-glow py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2"
                >
                  <Eye size={15} className="text-[#FF6FB5]" />
                  <span>View Certificate</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Certificate Lightbox / Modal */}
      {activeCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveCert(null)}
        >
          <div
            className="glass-card max-w-3xl w-full rounded-2xl overflow-hidden border border-[#FF2E93]/60 shadow-[0_0_50px_rgba(255,46,147,0.35)] relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 flex items-center justify-between border-b border-[#2A2B45] bg-[#0A0B1E]">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#FF2E93]/20 text-[#FF6FB5]">
                  <Award size={18} />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white font-display">
                    {activeCert.title}
                  </h4>
                  <p className="text-xs text-[#C4C4D6]">
                    Issued by {activeCert.issuer} • <span className="text-[#FF6FB5] font-mono">{activeCert.year}</span>
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActiveCert(null)}
                className="p-2 rounded-xl border border-[#2A2B45] text-white hover:border-[#FF2E93] hover:text-[#FF6FB5] transition-colors"
                aria-label="Close certificate modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Certificate Display */}
            <div className="p-4 sm:p-6 bg-[#0A0B1E]/90 flex items-center justify-center">
              <div className="w-full rounded-xl overflow-hidden border border-[#2A2B45] shadow-2xl">
                <img
                  src={activeCert.image}
                  alt={activeCert.title}
                  className="w-full h-auto object-contain max-h-[60vh]"
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 border-t border-[#2A2B45] flex items-center justify-between bg-[#14152C]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#C4C4D6]">
                <CheckCircle2 size={14} className="text-emerald-400" />
                <span>Verified Academic / Professional Credential</span>
              </div>
              <button
                type="button"
                onClick={() => setActiveCert(null)}
                className="px-4 py-2 rounded-xl bg-[#0A0B1E] border border-[#2A2B45] text-white text-xs font-medium hover:border-[#FF2E93]"
              >
                Close Viewer
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
