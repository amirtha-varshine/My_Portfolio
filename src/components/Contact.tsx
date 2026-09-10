import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, CheckCircle2, Copy, Check, Sparkles } from 'lucide-react';
import { profileData } from '../data/profile';
import { FloralMotif, BlossomBranch } from './FloralMotif';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending message with graceful fallback to mailto
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const handleMailto = () => {
    const subject = encodeURIComponent(formData.subject || `Message from ${formData.name || 'Portfolio Visitor'}`);
    const body = encodeURIComponent(
      `Hi Amirthavarshine,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${profileData.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#FF2E93]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-20">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#14152C] border border-[#2A2B45] text-xs font-mono text-[#FF6FB5] uppercase tracking-wider mb-3 shadow-[0_0_12px_rgba(255,46,147,0.15)]">
            <FloralMotif size={14} />
            <span>Initiate Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-serif-title font-editorial-shadow">
            Get in <span className="font-serif-italic font-normal text-shimmer-pink">Touch</span>
          </h2>
          <p className="text-[#C4C4D6] max-w-2xl text-base sm:text-lg mt-3 font-light">
            Whether you have a research project, an engineering opening, or just want to chat about AI &amp; data analytics, my inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info & Social Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Contact Details Card */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-[#2A2B45] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-30">
                <FloralMotif size={64} />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-display">
                Contact Details
              </h3>
              <p className="text-sm text-[#C4C4D6] leading-relaxed mb-6">
                Feel free to reach out directly via email, phone, or LinkedIn. I usually respond within 24 hours.
              </p>

              <div className="space-y-4">
                {/* Email Item */}
                <div className="p-4 rounded-xl bg-[#0A0B1E] border border-[#2A2B45] flex items-center justify-between group hover:border-[#FF2E93]/60 transition-all">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2.5 rounded-lg bg-[#14152C] text-[#FF2E93]">
                      <Mail size={18} />
                    </div>
                    <div className="truncate">
                      <div className="text-[11px] font-mono text-[#999AB8] uppercase">Email</div>
                      <a
                        href={`mailto:${profileData.email}`}
                        className="text-sm font-medium text-white hover:text-[#FF6FB5] transition-colors truncate block"
                      >
                        {profileData.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(profileData.email, 'email')}
                    title="Copy Email"
                    className="p-2 rounded-lg text-[#C4C4D6] hover:text-[#FF2E93] transition-colors ml-2 flex-shrink-0"
                  >
                    {copiedField === 'email' ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="p-4 rounded-xl bg-[#0A0B1E] border border-[#2A2B45] flex items-center justify-between group hover:border-[#FF2E93]/60 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-[#14152C] text-[#FF6FB5]">
                      <Phone size={18} />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-[#999AB8] uppercase">Phone</div>
                      <a
                        href={`tel:${profileData.phone}`}
                        className="text-sm font-medium text-white hover:text-[#FF6FB5] transition-colors"
                      >
                        {profileData.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(profileData.phone, 'phone')}
                    title="Copy Phone Number"
                    className="p-2 rounded-lg text-[#C4C4D6] hover:text-[#FF2E93] transition-colors"
                  >
                    {copiedField === 'phone' ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Location Item */}
                <div className="p-4 rounded-xl bg-[#0A0B1E] border border-[#2A2B45] flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#14152C] text-[#FF2E93]">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-[#999AB8] uppercase">Location</div>
                    <div className="text-sm font-medium text-white">
                      {profileData.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels Strip */}
              <div className="mt-8 pt-6 border-t border-[#2A2B45]">
                <span className="text-xs font-mono uppercase tracking-wider text-[#999AB8] block mb-3">
                  Professional Profiles
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={profileData.linkedIn}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2.5 px-4 rounded-xl bg-[#0A0B1E] border border-[#2A2B45] hover:border-[#FF2E93] hover:text-[#FF2E93] text-sm font-medium text-white flex items-center justify-center gap-2 transition-all hover:scale-102"
                  >
                    <Linkedin size={16} />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={profileData.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2.5 px-4 rounded-xl bg-[#0A0B1E] border border-[#2A2B45] hover:border-[#FF2E93] hover:text-[#FF2E93] text-sm font-medium text-white flex items-center justify-center gap-2 transition-all hover:scale-102"
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-10 border border-[#2A2B45] relative overflow-hidden">
              
              {/* Corner blossom branch */}
              <div className="absolute -top-4 -right-4 opacity-20 pointer-events-none hidden sm:block">
                <BlossomBranch className="w-40" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 font-display">
                Send a Direct Message
              </h3>
              <p className="text-sm text-[#C4C4D6] mb-8">
                Fill out the form below to reach out directly with inquiries, research opportunities, or project discussions.
              </p>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-[#0A0B1E] border border-[#FF2E93]/40 text-center animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#FF2E93]/20 border border-[#FF2E93] flex items-center justify-center mx-auto mb-4 text-[#FF6FB5] shadow-[0_0_20px_rgba(255,46,147,0.3)]">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2 font-display">
                    Thank You, {formData.name || 'Friend'}!
                  </h4>
                  <p className="text-sm text-[#C4C4D6] max-w-md mx-auto mb-6">
                    Your message draft is ready. Would you like to also open your email client directly to dispatch with one click?
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleMailto}
                      className="btn-gradient px-6 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2"
                    >
                      <Send size={15} />
                      <span>Open in Email Client</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-5 py-2.5 rounded-xl border border-[#2A2B45] text-white hover:bg-white/5 text-sm font-medium"
                    >
                      Send Another
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" id="portfolio-contact-form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name Input */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-[#C4C4D6] mb-2">
                        Your Name <span className="text-[#FF2E93]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl bg-[#0A0B1E] border border-[#2A2B45] text-white placeholder-[#999AB8] text-sm focus:outline-none focus:border-[#FF2E93] focus:ring-1 focus:ring-[#FF2E93] transition-all"
                      />
                    </div>

                    {/* Email Input */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-[#C4C4D6] mb-2">
                        Email Address <span className="text-[#FF2E93]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#0A0B1E] border border-[#2A2B45] text-white placeholder-[#999AB8] text-sm focus:outline-none focus:border-[#FF2E93] focus:ring-1 focus:ring-[#FF2E93] transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-mono uppercase tracking-wider text-[#C4C4D6] mb-2">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Collaboration on AI/ML Research"
                      className="w-full px-4 py-3 rounded-xl bg-[#0A0B1E] border border-[#2A2B45] text-white placeholder-[#999AB8] text-sm focus:outline-none focus:border-[#FF2E93] focus:ring-1 focus:ring-[#FF2E93] transition-all"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-[#C4C4D6] mb-2">
                      Message <span className="text-[#FF2E93]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your thoughts, inquiry, or proposal here..."
                      className="w-full px-4 py-3 rounded-xl bg-[#0A0B1E] border border-[#2A2B45] text-white placeholder-[#999AB8] text-sm focus:outline-none focus:border-[#FF2E93] focus:ring-1 focus:ring-[#FF2E93] transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-[#999AB8] font-mono">
                      Strictly protected • No spam guaranteed
                    </p>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      id="contact-submit-btn"
                      className="w-full sm:w-auto btn-gradient px-8 py-3.5 rounded-full text-sm font-bold tracking-wide flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Processing...</span>
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
