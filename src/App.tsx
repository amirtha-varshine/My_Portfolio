import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechTicker } from './components/TechTicker';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Resume } from './components/Resume';
import { Experience } from './components/Experience';
import { Certificates } from './components/Certificates';
import { Education } from './components/Education';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { SakuraCanvas } from './components/SakuraCanvas';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');

  return (
    <div className="min-h-screen bg-[#0A0B1E] text-white selection:bg-[#FF2E93] selection:text-white relative font-sans overflow-x-hidden">
      {/* Ambient Sakura Blossom Petals Canvas */}
      <SakuraCanvas />

      {/* 1. Sticky Navbar */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      <main>
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Tech Stack Ticker (horizontal bar with deep pink-maroon background) */}
        <TechTicker />

        {/* 4. About Me Section (with 2x2 stat grid & highlight cards) */}
        <About />

        {/* 5. Skills Section (grouped category cards) */}
        <Skills />

        {/* 6. Projects Section */}
        <Projects />

        {/* 7. Dedicated Resume Section */}
        <Resume />

        {/* 8. Professional Experience (timeline cards) */}
        <Experience />

        {/* 8. Certificates (3-column grid) */}
        <Certificates />

        {/* 9. Education Section */}
        <Education />

        {/* 10. Achievements & Leadership */}
        <Achievements />

        {/* 11. Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
