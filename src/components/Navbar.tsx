import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Send } from 'lucide-react';
import { FloralMotif } from './FloralMotif';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '#resume' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Section spy
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPos = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 75;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(targetId);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3.5 shadow-lg shadow-black/40'
          : 'bg-[#0A0B1E]/60 backdrop-blur-md py-5 border-b border-[#2A2B45]/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo / Initials */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2.5 group cursor-pointer"
          id="nav-logo"
        >
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#14152C] to-[#1F0D24] border border-[#2A2B45] group-hover:border-[#FF2E93] flex items-center justify-center transition-all duration-300 shadow-md group-hover:shadow-[0_0_15px_rgba(255,46,147,0.4)]">
            <span className="font-display font-extrabold text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#FF6FB5] tracking-wider">
              AS
            </span>
            <div className="absolute -top-1.5 -right-1.5">
              <FloralMotif size={16} />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-base text-white group-hover:text-[#FF6FB5] transition-colors leading-tight tracking-tight">
              Amirthavarshine S
            </span>
            <span className="text-[11px] font-mono text-[#C4C4D6] tracking-wider uppercase">
              AI/ML &amp; Full-Stack
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-3 py-1.5 text-xs xl:text-sm font-medium transition-colors duration-200 rounded-md ${
                  isActive
                    ? 'text-white'
                    : 'text-[#C4C4D6] hover:text-white hover:bg-white/5'
                }`}
                id={`nav-link-${link.name.toLowerCase()}`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-[#FF2E93] to-[#FF6FB5] rounded-full shadow-[0_0_8px_#FF2E93]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            id="nav-hire-me-btn"
            className="btn-gradient inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold tracking-wide"
          >
            <Send size={14} />
            <span>Hire Me</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="btn-gradient sm:hidden px-3.5 py-1.5 rounded-full text-xs font-semibold"
          >
            Hire Me
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-xl border border-[#2A2B45] bg-[#14152C] text-white hover:border-[#FF2E93] transition-colors"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X size={22} className="text-[#FF6FB5]" /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="lg:hidden glass-nav border-b border-[#2A2B45] px-6 py-5 mt-2 transition-all animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-[#FF2E93]/15 text-white border border-[#FF2E93]/40'
                      : 'text-[#C4C4D6] hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <Sparkles size={14} className="text-[#FF6FB5]" />}
                </a>
              );
            })}
            <div className="pt-3 border-t border-[#2A2B45]/60 mt-2">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="btn-gradient w-full py-2.5 rounded-xl text-center text-sm font-semibold flex items-center justify-center gap-2"
              >
                <Send size={15} />
                <span>Get In Touch / Hire Me</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
