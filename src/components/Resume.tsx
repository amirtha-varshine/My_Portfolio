import React, { useState } from 'react';
import { Download, ExternalLink, FileText, Check, Copy, Printer, Eye, Sparkles } from 'lucide-react';
import { downloadResumePDF, openResumeInNewTab } from '../utils/resumeDownload';
import { FloralMotif, BlossomBranch } from './FloralMotif';

export const Resume: React.FC = () => {
  const [activePage, setActivePage] = useState<'all' | '1' | '2'>('all');
  const [copied, setCopied] = useState(false);

  const handleCopyText = () => {
    const fullText = `AMIRTHAVARSHINE S
amirthavarshine1303@email.com | +91 8072607996 | linkedin.com/in/amirthavarshine-sakthivel-147a06371 | github.com/amirtha-varshine

SUMMARY
B.Tech. Information Science & Engineering student with experience in AI/ML, research, data analytics, and full-stack development. Experienced in developing predictive models, preprocessing real-world datasets, and working with satellite and environmental data for research-oriented applications. Also skilled in building web applications and AI-powered solutions using Python and modern web technologies.

TECHNICAL SKILLS
- Programming Languages: Python, C, JavaScript, HTML, CSS
- Research: Remote Sensing, Geospatial Data Analysis
- Frameworks & Libraries: React, TypeScript, FastAPI, Flask, Scikit-learn, NumPy, Pandas, Node.js, Express, MongoDB
- Databases: MySQL, SQLPlus
- Tools & Platforms: Git, GitHub, VS Code, PyCharm, Jupyter Notebook, Google Colab, SAP ERP
- Soft Skills: Analytical Thinking, Problem-Solving, Leadership, Communication, Time Management

PROJECTS
- Forest Fire Susceptibility Mapping & Early Warning System | Python, Machine Learning, Remote Sensing
  * Developed a machine-learning-based framework for forest fire susceptibility mapping and risk prediction using fire occurrence, weather, and satellite-derived data.
  * Performed data preprocessing, feature engineering, spatial/temporal data integration, and model evaluation for fire-risk classification.
  * Explored machine-learning and deep-learning approaches for improving fire prediction and susceptibility mapping.

- ResuMatch | React, TypeScript, FastAPI, Python, Claude AI API, NLP | GitHub | Live
  * Developed a full-stack AI resume screening tool with a React/TypeScript frontend and FastAPI backend, supporting multi-format uploads (PDF, DOCX, PNG, TXT).
  * Integrated Claude AI API for NLP-powered keyword extraction, ATS compatibility scoring, and automated smart feedback generation.
  * Implemented real-time report generation providing candidates with actionable content optimization insights and job-match analysis.

- CGPA Calculator | HTML, CSS, JavaScript | Oct 2025 | GitHub | Live
  * Designed and deployed a web-based CGPA calculation tool aligned with institutional grading policies, actively used by students for academic performance tracking.
  * Implemented credit-weighted GPA computation logic with a dynamic UI, reducing manual calculation errors for end users.

PROFESSIONAL EXPERIENCE
- Research Intern | National Institute of Technology Puducherry, Karaikal (Jun 2026 – Jul 2026)
  * Developed a forest fire susceptibility mapping and early warning framework using machine learning, deep learning, remote sensing, weather, and fire data.
  * Performed preprocessing, feature engineering, model evaluation, and contributed to the research paper's methodology and documentation.

- Data & Operations Intern | Uno Minda (Jun 2025 – Jul 2025)
  * Worked within SAP ERP workflows across procurement and inventory modules, gaining practical exposure to enterprise data management and business process documentation.
  * Maintained accurate transactional records and supported data integrity initiatives across departmental databases.

EDUCATION
- Bachelor of Technology — Information Science & Engineering (2023 – 2027)
  Women's Engineering College, Puducherry | CGPA: 6.57 / 10
  Relevant Coursework: Artificial Intelligence, Full Stack Development, Machine Learning, Data Structures & Algorithms, Database Management Systems, Computer Networks, Information Security, Information Retrieval, Cloud Computing, Data Mining & Warehousing.

CERTIFICATIONS
- Data Analytics | NoviTech | Jul 2025
- Computer Graphics | SWAYAM NPTEL | Sep 2025
- Python, Flask & HTML | Udemy | Mar 2026
- AI Coding with Windsurf IDE | Udemy | Feb 2026
- Azure AZ-900: Cloud Concepts | Microsoft | Mar 2026
- Azure AZ-900: Cloud Service Types | Microsoft | Mar 2026
- Introduction to Generative AI & Agents | Microsoft | Mar 2026

ACHIEVEMENTS & LEADERSHIP
- Chief Executive | Cyber Security & Ethical Hacking Club (2024 – Present)
  * Led a 50+ member club, organizing technical workshops, hands-on training sessions, and digital security awareness programs for the college community.
- Lead Organizer | LUNOVA '26 Technical Symposium (2026)
  * Coordinated the college's inaugural technical symposium in collaboration with the Tech Wizard Club and Cyber Security Club, managing end-to-end event logistics and technical tracks.`;

    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="resume" className="relative py-24 px-4 sm:px-6 lg:px-8">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#FF2E93]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-20">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#14152C] border border-[#2A2B45] text-xs font-mono text-[#FF6FB5] uppercase tracking-wider mb-3 shadow-[0_0_12px_rgba(255,46,147,0.15)]">
            <FloralMotif size={14} />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            Official <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFE5F0] to-[#FF6FB5]">Resume</span>
          </h2>
          <p className="text-[#C4C4D6] max-w-2xl text-base sm:text-lg mt-3 font-light">
            Verified institutional resume format. View directly below or download the clean Adobe Acrobat compatible PDF.
          </p>
        </div>

        {/* Action Toolbar */}
        <div className="glass-card rounded-2xl p-4 sm:p-5 border border-[#2A2B45] mb-8 flex flex-wrap items-center justify-between gap-4">
          
          {/* Page Filter Controls */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#0A0B1E] border border-[#2A2B45] text-xs font-medium">
            <button
              type="button"
              onClick={() => setActivePage('all')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activePage === 'all'
                  ? 'bg-[#FF2E93] text-white shadow-[0_0_10px_rgba(255,46,147,0.4)]'
                  : 'text-[#C4C4D6] hover:text-white'
              }`}
            >
              Full Resume (2 Pages)
            </button>
            <button
              type="button"
              onClick={() => setActivePage('1')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activePage === '1'
                  ? 'bg-[#FF2E93] text-white shadow-[0_0_10px_rgba(255,46,147,0.4)]'
                  : 'text-[#C4C4D6] hover:text-white'
              }`}
            >
              Page 1
            </button>
            <button
              type="button"
              onClick={() => setActivePage('2')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activePage === '2'
                  ? 'bg-[#FF2E93] text-white shadow-[0_0_10px_rgba(255,46,147,0.4)]'
                  : 'text-[#C4C4D6] hover:text-white'
              }`}
            >
              Page 2
            </button>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={handleCopyText}
              className="px-3.5 py-2 rounded-xl bg-[#0A0B1E] border border-[#2A2B45] text-xs font-medium text-[#C4C4D6] hover:text-white hover:border-[#FF2E93] transition-all flex items-center gap-1.5"
            >
              {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              <span>{copied ? 'Copied to Clipboard' : 'Copy Plain Text'}</span>
            </button>

            <button
              type="button"
              onClick={openResumeInNewTab}
              className="px-3.5 py-2 rounded-xl bg-[#0A0B1E] border border-[#2A2B45] text-xs font-medium text-[#C4C4D6] hover:text-white hover:border-[#FF2E93] transition-all flex items-center gap-1.5"
            >
              <ExternalLink size={14} />
              <span>Open in New Tab</span>
            </button>

            <button
              type="button"
              onClick={downloadResumePDF}
              id="resume-section-download-btn"
              className="btn-gradient px-5 py-2 rounded-xl text-xs font-bold text-white shadow-md flex items-center gap-2 hover:scale-102 transition-all"
            >
              <Download size={14} />
              <span>Download PDF</span>
            </button>
          </div>

        </div>

        {/* Document Container: Renders Clean High-Fidelity Resume Pages */}
        <div className="space-y-8">
          
          {/* PAGE 1 */}
          {(activePage === 'all' || activePage === '1') && (
            <div className="bg-[#FFFFFF] text-[#1F1F26] rounded-xl shadow-2xl p-8 sm:p-14 font-sans text-xs sm:text-sm leading-relaxed border border-gray-200 relative overflow-hidden transition-all duration-300">
              
              {/* Page Number Watermark */}
              <div className="absolute top-4 right-6 font-mono text-[11px] text-gray-400 font-semibold select-none">
                PAGE 1 OF 2
              </div>

              {/* Header */}
              <div className="text-center mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#154884] mb-1.5 font-display">
                  AMIRTHAVARSHINE S
                </h1>
                <div className="text-[11px] sm:text-xs text-[#2A2B45] font-normal flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1">
                  <a href="mailto:amirthavarshine1303@email.com" className="hover:text-[#154884] underline">
                    amirthavarshine1303@email.com
                  </a>
                  <span>|</span>
                  <a href="tel:+918072607996" className="hover:text-[#154884]">
                    +91 8072607996
                  </a>
                  <span>|</span>
                  <a
                    href="https://www.linkedin.com/in/amirthavarshine-sakthivel-147a06371"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#154884] hover:underline"
                  >
                    linkedin.com/in/amirthavarshine-sakthivel-147a06371
                  </a>
                  <span>|</span>
                  <a
                    href="https://github.com/amirtha-varshine"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#154884] hover:underline"
                  >
                    github.com/amirtha-varshine
                  </a>
                </div>
              </div>

              {/* SUMMARY SECTION */}
              <div className="mb-5">
                <h2 className="text-xs sm:text-sm font-bold text-[#154884] uppercase tracking-wider pb-1 border-b border-[#154884]/40 mb-2">
                  SUMMARY
                </h2>
                <p className="text-[#33333F] text-justify leading-relaxed">
                  B.Tech. Information Science &amp; Engineering student with experience in AI/ML, research, data analytics, and full-stack development. Experienced in developing predictive models, preprocessing real-world datasets, and working with satellite and environmental data for research-oriented applications. Also skilled in building web applications and AI-powered solutions using Python and modern web technologies.
                </p>
              </div>

              {/* TECHNICAL SKILL SECTION */}
              <div className="mb-5">
                <h2 className="text-xs sm:text-sm font-bold text-[#154884] uppercase tracking-wider pb-1 border-b border-[#154884]/40 mb-2.5">
                  TECHNICAL SKILL
                </h2>
                <div className="space-y-1.5 text-[#22222E]">
                  <div>
                    <strong className="font-semibold text-[#111116]">Programming Languages:</strong> Python, C, JavaScript, HTML, CSS
                  </div>
                  <div>
                    <strong className="font-semibold text-[#111116]">Research:</strong> Remote Sensing, Geospatial Data Analysis
                  </div>
                  <div>
                    <strong className="font-semibold text-[#111116]">Frameworks &amp; Libraries:</strong> React, TypeScript, FastAPI, Flask, Scikit-learn, NumPy, Pandas, Node.js, Express, MongoDB
                  </div>
                  <div>
                    <strong className="font-semibold text-[#111116]">Databases:</strong> MySQL, SQLPlus
                  </div>
                  <div>
                    <strong className="font-semibold text-[#111116]">Tools &amp; Platforms:</strong> Git, GitHub, VS Code, PyCharm, Jupyter Notebook, Google Colab, SAP ERP
                  </div>
                  <div>
                    <strong className="font-semibold text-[#111116]">Soft Skills:</strong> Analytical Thinking, Problem-Solving, Leadership, Communication, Time Management
                  </div>
                </div>
              </div>

              {/* PROJECTS SECTION */}
              <div className="mb-5">
                <h2 className="text-xs sm:text-sm font-bold text-[#154884] uppercase tracking-wider pb-1 border-b border-[#154884]/40 mb-3">
                  PROJECTS
                </h2>

                {/* Project 1 */}
                <div className="mb-4">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <strong className="font-bold text-[#111118]">
                        Forest Fire Susceptibility Mapping &amp; Early Warning System
                      </strong>{' '}
                      <span className="italic text-gray-600 text-[11px] sm:text-xs">
                        | Python, Machine Learning, Remote Sensing
                      </span>
                    </div>
                  </div>
                  <ul className="list-disc pl-5 mt-1 space-y-1 text-[#33333F]">
                    <li>Developed a machine-learning-based framework for forest fire susceptibility mapping and risk prediction using fire occurrence, weather, and satellite-derived data.</li>
                    <li>Performed data preprocessing, feature engineering, spatial/temporal data integration, and model evaluation for fire-risk classification.</li>
                    <li>Explored machine-learning and deep-learning approaches for improving fire prediction and susceptibility mapping.</li>
                  </ul>
                </div>

                {/* Project 2 */}
                <div className="mb-4">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <strong className="font-bold text-[#111118]">ResuMatch</strong>{' '}
                      <span className="italic text-gray-600 text-[11px] sm:text-xs">
                        | React, TypeScript, FastAPI, Python, Claude AI API, NLP
                      </span>
                    </div>
                    <div className="text-[11px] text-[#154884] font-medium">
                      <a href="https://github.com/amirtha-varshine" target="_blank" rel="noreferrer" className="hover:underline">
                        GitHub
                      </a>{' '}
                      | Live
                    </div>
                  </div>
                  <ul className="list-disc pl-5 mt-1 space-y-1 text-[#33333F]">
                    <li>Developed a full-stack AI resume screening tool with a React/TypeScript frontend and FastAPI backend, supporting multi-format uploads (PDF, DOCX, PNG, TXT).</li>
                    <li>Integrated Claude AI API for NLP-powered keyword extraction, ATS compatibility scoring, and automated smart feedback generation.</li>
                    <li>Implemented real-time report generation providing candidates with actionable content optimization insights and job-match analysis.</li>
                  </ul>
                </div>

                {/* Project 3 */}
                <div>
                  <div className="flex items-baseline justify-between">
                    <div>
                      <strong className="font-bold text-[#111118]">CGPA Calculator</strong>{' '}
                      <span className="italic text-gray-600 text-[11px] sm:text-xs">
                        | HTML, CSS, JavaScript
                      </span>
                    </div>
                    <div className="text-[11px] text-[#154884] font-medium">
                      <span className="text-gray-500 mr-2">Oct 2025</span>
                      <a href="https://github.com/amirtha-varshine" target="_blank" rel="noreferrer" className="hover:underline">
                        GitHub
                      </a>{' '}
                      | Live
                    </div>
                  </div>
                  <ul className="list-disc pl-5 mt-1 space-y-1 text-[#33333F]">
                    <li>Designed and deployed a web-based CGPA calculation tool aligned with institutional grading policies, actively used by students for academic performance tracking.</li>
                    <li>Implemented credit-weighted GPA computation logic with a dynamic UI, reducing manual calculation errors for end users.</li>
                  </ul>
                </div>
              </div>

              {/* PROFESSIONAL EXPERIENCE SECTION */}
              <div>
                <h2 className="text-xs sm:text-sm font-bold text-[#154884] uppercase tracking-wider pb-1 border-b border-[#154884]/40 mb-3">
                  PROFESSIONAL EXPERIENCE
                </h2>

                {/* Exp 1 */}
                <div className="mb-3.5">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <strong className="font-bold text-[#111118]">Research Intern</strong>{' '}
                      <span className="text-gray-700">| National Institute of Technology Puducherry, Karaikal</span>
                    </div>
                    <div className="text-[11px] text-gray-600 italic">
                      Jun 2026 – Jul 2026
                    </div>
                  </div>
                  <ul className="list-disc pl-5 mt-1 space-y-1 text-[#33333F]">
                    <li>Developed a forest fire susceptibility mapping and early warning framework using machine learning, deep learning, remote sensing, weather, and fire data.</li>
                    <li>Performed preprocessing, feature engineering, model evaluation, and contributed to the research paper's methodology and documentation.</li>
                  </ul>
                </div>

                {/* Exp 2 */}
                <div>
                  <div className="flex items-baseline justify-between">
                    <div>
                      <strong className="font-bold text-[#111118]">Data &amp; Operations Intern</strong>{' '}
                      <span className="text-gray-700">| Uno Minda</span>
                    </div>
                    <div className="text-[11px] text-gray-600 italic">
                      Jun 2025 – Jul 2025
                    </div>
                  </div>
                  <ul className="list-disc pl-5 mt-1 space-y-1 text-[#33333F]">
                    <li>Worked within SAP ERP workflows across procurement and inventory modules, gaining practical exposure to enterprise data management and business process documentation.</li>
                    <li>Maintained accurate transactional records and supported data integrity initiatives across departmental databases.</li>
                  </ul>
                </div>
              </div>

            </div>
          )}

          {/* PAGE 2 */}
          {(activePage === 'all' || activePage === '2') && (
            <div className="bg-[#FFFFFF] text-[#1F1F26] rounded-xl shadow-2xl p-8 sm:p-14 font-sans text-xs sm:text-sm leading-relaxed border border-gray-200 relative overflow-hidden transition-all duration-300">
              
              {/* Page Number Watermark */}
              <div className="absolute top-4 right-6 font-mono text-[11px] text-gray-400 font-semibold select-none">
                PAGE 2 OF 2
              </div>

              {/* EDUCATION SECTION */}
              <div className="mb-6">
                <h2 className="text-xs sm:text-sm font-bold text-[#154884] uppercase tracking-wider pb-1 border-b border-[#154884]/40 mb-3">
                  EDUCATION
                </h2>

                <div className="flex items-baseline justify-between">
                  <strong className="font-bold text-[#111118] text-sm sm:text-base">
                    Bachelor of Technology — Information Science &amp; Engineering
                  </strong>
                  <span className="text-[11px] text-gray-700 font-medium">
                    2023 – 2027
                  </span>
                </div>
                <div className="text-gray-700 mt-0.5">
                  Women's Engineering College, Puducherry &nbsp;|&nbsp; <span className="font-semibold text-gray-900">CGPA: 6.57 / 10</span>
                </div>
                <p className="mt-2 text-[#4A4B59] leading-relaxed text-[11px] sm:text-xs">
                  <strong className="font-semibold text-[#111118]">Relevant Coursework:</strong> Artificial Intelligence, Full Stack Development, Machine Learning, Data Structures &amp; Algorithms, Database Management Systems, Computer Networks, Information Security, Information Retrieval, Cloud Computing, Data Mining &amp; Warehousing.
                </p>
              </div>

              {/* CERTIFICATIONS SECTION */}
              <div className="mb-6">
                <h2 className="text-xs sm:text-sm font-bold text-[#154884] uppercase tracking-wider pb-1 border-b border-[#154884]/40 mb-3">
                  CERTIFICATIONS
                </h2>

                <div className="space-y-2">
                  <div className="flex items-baseline justify-between border-b border-gray-100 pb-1">
                    <span className="font-semibold text-[#111118]">Data Analytics</span>
                    <span className="text-gray-600">NoviTech</span>
                    <span className="text-gray-500 font-mono text-[11px]">Jul 2025</span>
                  </div>

                  <div className="flex items-baseline justify-between border-b border-gray-100 pb-1">
                    <span className="font-semibold text-[#111118]">Computer Graphics</span>
                    <span className="text-gray-600">SWAYAM NPTEL</span>
                    <span className="text-gray-500 font-mono text-[11px]">Sep 2025</span>
                  </div>

                  <div className="flex items-baseline justify-between border-b border-gray-100 pb-1">
                    <span className="font-semibold text-[#111118]">Python, Flask &amp; HTML</span>
                    <span className="text-gray-600">Udemy</span>
                    <span className="text-gray-500 font-mono text-[11px]">Mar 2026</span>
                  </div>

                  <div className="flex items-baseline justify-between border-b border-gray-100 pb-1">
                    <span className="font-semibold text-[#111118]">AI Coding with Windsurf IDE</span>
                    <span className="text-gray-600">Udemy</span>
                    <span className="text-gray-500 font-mono text-[11px]">Feb 2026</span>
                  </div>

                  <div className="flex items-baseline justify-between border-b border-gray-100 pb-1">
                    <span className="font-semibold text-[#111118]">Azure AZ-900: Cloud Concepts</span>
                    <span className="text-gray-600">Microsoft</span>
                    <span className="text-gray-500 font-mono text-[11px]">Mar 2026</span>
                  </div>

                  <div className="flex items-baseline justify-between border-b border-gray-100 pb-1">
                    <span className="font-semibold text-[#111118]">Azure AZ-900: Cloud Service Types</span>
                    <span className="text-gray-600">Microsoft</span>
                    <span className="text-gray-500 font-mono text-[11px]">Mar 2026</span>
                  </div>

                  <div className="flex items-baseline justify-between">
                    <span className="font-semibold text-[#111118]">Introduction to Generative AI &amp; Agents</span>
                    <span className="text-gray-600">Microsoft</span>
                    <span className="text-gray-500 font-mono text-[11px]">Mar 2026</span>
                  </div>
                </div>
              </div>

              {/* ACHIEVEMENTS & LEADERSHIP SECTION */}
              <div>
                <h2 className="text-xs sm:text-sm font-bold text-[#154884] uppercase tracking-wider pb-1 border-b border-[#154884]/40 mb-3">
                  ACHIEVEMENTS &amp; LEADERSHIP
                </h2>

                {/* Role 1 */}
                <div className="mb-4">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <strong className="font-bold text-[#111118]">Chief Executive</strong>{' '}
                      <span className="text-gray-700">| Cyber Security &amp; Ethical Hacking Club</span>
                    </div>
                    <div className="text-[11px] text-gray-600 italic">
                      2024 – Present
                    </div>
                  </div>
                  <ul className="list-disc pl-5 mt-1 space-y-1 text-[#33333F]">
                    <li>Led a 50+ member club, organizing technical workshops, hands-on training sessions, and digital security awareness programs for the college community.</li>
                  </ul>
                </div>

                {/* Role 2 */}
                <div>
                  <div className="flex items-baseline justify-between">
                    <div>
                      <strong className="font-bold text-[#111118]">Lead Organizer</strong>{' '}
                      <span className="text-gray-700">| LUNOVA '26 Technical Symposium</span>
                    </div>
                    <div className="text-[11px] text-gray-600 italic">
                      2026
                    </div>
                  </div>
                  <ul className="list-disc pl-5 mt-1 space-y-1 text-[#33333F]">
                    <li>Coordinated the college's inaugural technical symposium in collaboration with the Tech Wizard Club and Cyber Security Club, managing end-to-end event logistics and technical tracks.</li>
                  </ul>
                </div>

              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
