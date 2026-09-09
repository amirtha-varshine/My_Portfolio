const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

async function createResume() {
  const pdfDoc = await PDFDocument.create();
  
  // Standard fonts
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  const primaryColor = rgb(0.08, 0.28, 0.52); // #154884 professional navy
  const darkColor = rgb(0.12, 0.12, 0.15); // #1F1F26
  const grayColor = rgb(0.35, 0.35, 0.40); // #595966
  const linkColor = rgb(0.1, 0.35, 0.65);
  const dividerColor = rgb(0.2, 0.3, 0.5);

  // --- PAGE 1 ---
  const page1 = pdfDoc.addPage([595.28, 841.89]); // A4
  const { width, height } = page1.getSize();
  const margin = 48;
  const contentWidth = width - margin * 2;
  let y = height - 45;

  function drawSectionHeader(page, title, currentY) {
    page.drawText(title, {
      x: margin,
      y: currentY,
      size: 11,
      font: fontBold,
      color: primaryColor,
    });
    page.drawLine({
      start: { x: margin, y: currentY - 3 },
      end: { x: width - margin, y: currentY - 3 },
      thickness: 1,
      color: dividerColor,
    });
    return currentY - 16;
  }

  // Header
  const name = 'AMIRTHAVARSHINE S';
  const nameWidth = fontBold.widthOfTextAtSize(name, 20);
  page1.drawText(name, {
    x: (width - nameWidth) / 2,
    y: y,
    size: 20,
    font: fontBold,
    color: primaryColor,
  });
  y -= 18;

  const contactLine = 'amirthavarshine1303@email.com  |  +91 8072607996  |  linkedin.com/in/amirthavarshine-sakthivel-147a06371';
  const contactWidth = fontRegular.widthOfTextAtSize(contactLine, 9);
  page1.drawText(contactLine, {
    x: (width - contactWidth) / 2,
    y: y,
    size: 9,
    font: fontRegular,
    color: darkColor,
  });
  y -= 13;

  const githubLine = 'github.com/amirtha-varshine  |  Puducherry, India';
  const githubWidth = fontRegular.widthOfTextAtSize(githubLine, 9);
  page1.drawText(githubLine, {
    x: (width - githubWidth) / 2,
    y: y,
    size: 9,
    font: fontRegular,
    color: linkColor,
  });
  y -= 22;

  // SUMMARY
  y = drawSectionHeader(page1, 'SUMMARY', y);
  const summaryText = 'B.Tech. Information Science & Engineering student with experience in AI/ML, research, data analytics, and full-stack development. Experienced in developing predictive models, preprocessing real-world datasets, and working with satellite and environmental data for research-oriented applications. Also skilled in building web applications and AI-powered solutions using Python and modern web technologies.';
  
  function drawWrappedText(page, text, startX, startY, maxWidth, font, size, color, lineHeight) {
    const words = text.split(' ');
    let line = '';
    let currentY = startY;

    for (const word of words) {
      const testLine = line + (line ? ' ' : '') + word;
      const testWidth = font.widthOfTextAtSize(testLine, size);
      if (testWidth > maxWidth) {
        page.drawText(line, { x: startX, y: currentY, size, font, color });
        line = word;
        currentY -= lineHeight;
      } else {
        line = testLine;
      }
    }
    if (line) {
      page.drawText(line, { x: startX, y: currentY, size, font, color });
      currentY -= lineHeight;
    }
    return currentY;
  }

  y = drawWrappedText(page1, summaryText, margin, y, contentWidth, fontRegular, 9, darkColor, 12.5);
  y -= 8;

  // TECHNICAL SKILL
  y = drawSectionHeader(page1, 'TECHNICAL SKILL', y);

  const skills = [
    { label: 'Programming Languages:', val: 'Python, C, JavaScript, HTML, CSS' },
    { label: 'Research:', val: 'Remote Sensing, Geospatial Data Analysis' },
    { label: 'Frameworks & Libraries:', val: 'React, TypeScript, FastAPI, Flask, Scikit-learn, NumPy, Pandas, Node.js, Express, MongoDB' },
    { label: 'Databases:', val: 'MySQL, SQLPlus' },
    { label: 'Tools & Platforms:', val: 'Git, GitHub, VS Code, PyCharm, Jupyter Notebook, Google Colab, SAP ERP' },
    { label: 'Soft Skills:', val: 'Analytical Thinking, Problem-Solving, Leadership, Communication, Time Management' },
  ];

  for (const s of skills) {
    page1.drawText(s.label, { x: margin, y: y, size: 9, font: fontBold, color: darkColor });
    const labelW = fontBold.widthOfTextAtSize(s.label, 9) + 6;
    y = drawWrappedText(page1, s.val, margin + labelW, y, contentWidth - labelW, fontRegular, 9, darkColor, 12);
    y -= 2;
  }
  y -= 6;

  // PROJECTS
  y = drawSectionHeader(page1, 'PROJECTS', y);

  // Project 1
  page1.drawText('Forest Fire Susceptibility Mapping & Early Warning System', { x: margin, y: y, size: 9.5, font: fontBold, color: darkColor });
  const p1Tech = ' | Python, Machine Learning, Remote Sensing';
  const p1TechX = margin + fontBold.widthOfTextAtSize('Forest Fire Susceptibility Mapping & Early Warning System', 9.5);
  page1.drawText(p1Tech, { x: p1TechX, y: y, size: 9, font: fontOblique, color: grayColor });
  y -= 13;

  const p1Bullets = [
    'Developed a machine-learning-based framework for forest fire susceptibility mapping and risk prediction using fire occurrence, weather, and satellite-derived data.',
    'Performed data preprocessing, feature engineering, spatial/temporal data integration, and model evaluation for fire-risk classification.',
    'Explored machine-learning and deep-learning approaches for improving fire prediction and susceptibility mapping.'
  ];
  for (const b of p1Bullets) {
    page1.drawCircle({ x: margin + 9, y: y + 3, size: 1.8, color: primaryColor });
    y = drawWrappedText(page1, b, margin + 18, y, contentWidth - 18, fontRegular, 8.5, darkColor, 11.5);
    y -= 2;
  }
  y -= 4;

  // Project 2
  page1.drawText('ResuMatch', { x: margin, y: y, size: 9.5, font: fontBold, color: darkColor });
  const p2Tech = ' | React, TypeScript, FastAPI, Python, Claude AI API, NLP';
  page1.drawText(p2Tech, { x: margin + fontBold.widthOfTextAtSize('ResuMatch', 9.5), y: y, size: 9, font: fontOblique, color: grayColor });
  page1.drawText('GitHub | Live', { x: width - margin - fontRegular.widthOfTextAtSize('GitHub | Live', 8.5), y: y, size: 8.5, font: fontRegular, color: linkColor });
  y -= 13;

  const p2Bullets = [
    'Developed a full-stack AI resume screening tool with a React/TypeScript frontend and FastAPI backend, supporting multi-format uploads (PDF, DOCX, PNG, TXT).',
    'Integrated Claude AI API for NLP-powered keyword extraction, ATS compatibility scoring, and automated smart feedback generation.',
    'Implemented real-time report generation providing candidates with actionable content optimization insights and job-match analysis.'
  ];
  for (const b of p2Bullets) {
    page1.drawCircle({ x: margin + 9, y: y + 3, size: 1.8, color: primaryColor });
    y = drawWrappedText(page1, b, margin + 18, y, contentWidth - 18, fontRegular, 8.5, darkColor, 11.5);
    y -= 2;
  }
  y -= 4;

  // Project 3
  page1.drawText('CGPA Calculator', { x: margin, y: y, size: 9.5, font: fontBold, color: darkColor });
  const p3Tech = ' | HTML, CSS, JavaScript';
  page1.drawText(p3Tech, { x: margin + fontBold.widthOfTextAtSize('CGPA Calculator', 9.5), y: y, size: 9, font: fontOblique, color: grayColor });
  const p3Right = 'Oct 2025 | GitHub | Live';
  page1.drawText(p3Right, { x: width - margin - fontRegular.widthOfTextAtSize(p3Right, 8.5), y: y, size: 8.5, font: fontRegular, color: linkColor });
  y -= 13;

  const p3Bullets = [
    'Designed and deployed a web-based CGPA calculation tool aligned with institutional grading policies, actively used by students for academic performance tracking.',
    'Implemented credit-weighted GPA computation logic with a dynamic UI, reducing manual calculation errors for end users.'
  ];
  for (const b of p3Bullets) {
    page1.drawCircle({ x: margin + 9, y: y + 3, size: 1.8, color: primaryColor });
    y = drawWrappedText(page1, b, margin + 18, y, contentWidth - 18, fontRegular, 8.5, darkColor, 11.5);
    y -= 2;
  }
  y -= 6;

  // PROFESSIONAL EXPERIENCE
  y = drawSectionHeader(page1, 'PROFESSIONAL EXPERIENCE', y);

  // Exp 1
  page1.drawText('Research Intern', { x: margin, y: y, size: 9.5, font: fontBold, color: darkColor });
  page1.drawText(' | National Institute of Technology Puducherry, Karaikal', {
    x: margin + fontBold.widthOfTextAtSize('Research Intern', 9.5),
    y: y,
    size: 9,
    font: fontRegular,
    color: darkColor
  });
  const e1Date = 'Jun 2026 – Jul 2026';
  page1.drawText(e1Date, { x: width - margin - fontOblique.widthOfTextAtSize(e1Date, 8.5), y: y, size: 8.5, font: fontOblique, color: grayColor });
  y -= 13;

  const exp1Bullets = [
    'Developed a forest fire susceptibility mapping and early warning framework using machine learning, deep learning, remote sensing, weather, and fire data.',
    'Performed preprocessing, feature engineering, model evaluation, and contributed to the research paper\'s methodology and documentation.'
  ];
  for (const b of exp1Bullets) {
    page1.drawCircle({ x: margin + 9, y: y + 3, size: 1.8, color: primaryColor });
    y = drawWrappedText(page1, b, margin + 18, y, contentWidth - 18, fontRegular, 8.5, darkColor, 11.5);
    y -= 2;
  }
  y -= 4;

  // Exp 2
  page1.drawText('Data & Operations Intern', { x: margin, y: y, size: 9.5, font: fontBold, color: darkColor });
  page1.drawText(' | Uno Minda', {
    x: margin + fontBold.widthOfTextAtSize('Data & Operations Intern', 9.5),
    y: y,
    size: 9,
    font: fontRegular,
    color: darkColor
  });
  const e2Date = 'Jun 2025 – Jul 2025';
  page1.drawText(e2Date, { x: width - margin - fontOblique.widthOfTextAtSize(e2Date, 8.5), y: y, size: 8.5, font: fontOblique, color: grayColor });
  y -= 13;

  const exp2Bullets = [
    'Worked within SAP ERP workflows across procurement and inventory modules, gaining practical exposure to enterprise data management and business process documentation.',
    'Maintained accurate transactional records and supported data integrity initiatives across departmental databases.'
  ];
  for (const b of exp2Bullets) {
    page1.drawCircle({ x: margin + 9, y: y + 3, size: 1.8, color: primaryColor });
    y = drawWrappedText(page1, b, margin + 18, y, contentWidth - 18, fontRegular, 8.5, darkColor, 11.5);
    y -= 2;
  }

  // --- PAGE 2 ---
  const page2 = pdfDoc.addPage([595.28, 841.89]); // A4
  let y2 = height - 50;

  // EDUCATION
  y2 = drawSectionHeader(page2, 'EDUCATION', y2);

  page1.drawText('', { x: 0, y: 0, size: 1 }); // no-op

  page2.drawText('Bachelor of Technology — Information Science & Engineering', {
    x: margin,
    y: y2,
    size: 10,
    font: fontBold,
    color: darkColor,
  });
  const eduDate = '2023 – 2027';
  page2.drawText(eduDate, {
    x: width - margin - fontRegular.widthOfTextAtSize(eduDate, 9),
    y: y2,
    size: 9,
    font: fontRegular,
    color: darkColor,
  });
  y2 -= 15;

  page2.drawText("Women's Engineering College, Puducherry  |  CGPA: 6.57 / 10", {
    x: margin,
    y: y2,
    size: 9,
    font: fontRegular,
    color: darkColor,
  });
  y2 -= 15;

  const courseworkText = 'Relevant Coursework: Artificial Intelligence, Full Stack Development, Machine Learning, Data Structures & Algorithms, Database Management Systems, Computer Networks, Information Security, Information Retrieval, Cloud Computing, Data Mining & Warehousing.';
  y2 = drawWrappedText(page2, courseworkText, margin, y2, contentWidth, fontRegular, 8.5, grayColor, 12);
  y2 -= 16;

  // CERTIFICATIONS
  y2 = drawSectionHeader(page2, 'CERTIFICATIONS', y2);

  const certList = [
    { title: 'Data Analytics', org: 'NoviTech', date: 'Jul 2025' },
    { title: 'Computer Graphics', org: 'SWAYAM NPTEL', date: 'Sep 2025' },
    { title: 'Python, Flask & HTML', org: 'Udemy', date: 'Mar 2026' },
    { title: 'AI Coding with Windsurf IDE', org: 'Udemy', date: 'Feb 2026' },
    { title: 'Azure AZ-900: Cloud Concepts', org: 'Microsoft', date: 'Mar 2026' },
    { title: 'Azure AZ-900: Cloud Service Types', org: 'Microsoft', date: 'Mar 2026' },
    { title: 'Introduction to Generative AI & Agents', org: 'Microsoft', date: 'Mar 2026' },
  ];

  for (const c of certList) {
    page2.drawText(c.title, { x: margin, y: y2, size: 9, font: fontBold, color: darkColor });
    page2.drawText(c.org, { x: margin + 220, y: y2, size: 9, font: fontRegular, color: darkColor });
    page2.drawText(c.date, { x: width - margin - fontRegular.widthOfTextAtSize(c.date, 9), y: y2, size: 9, font: fontRegular, color: grayColor });
    y2 -= 16;
  }
  y2 -= 16;

  // ACHIEVEMENTS & LEADERSHIP
  y2 = drawSectionHeader(page2, 'ACHIEVEMENTS & LEADERSHIP', y2);

  // Leadership 1
  page2.drawText('Chief Executive', { x: margin, y: y2, size: 9.5, font: fontBold, color: darkColor });
  page2.drawText(' | Cyber Security & Ethical Hacking Club', {
    x: margin + fontBold.widthOfTextAtSize('Chief Executive', 9.5),
    y: y2,
    size: 9,
    font: fontRegular,
    color: darkColor,
  });
  const l1Date = '2024 – Present';
  page2.drawText(l1Date, {
    x: width - margin - fontOblique.widthOfTextAtSize(l1Date, 8.5),
    y: y2,
    size: 8.5,
    font: fontOblique,
    color: grayColor,
  });
  y2 -= 14;

  page2.drawCircle({ x: margin + 9, y: y2 + 3, size: 1.8, color: primaryColor });
  y2 = drawWrappedText(
    page2,
    'Led a 50+ member club, organizing technical workshops, hands-on training sessions, and digital security awareness programs for the college community.',
    margin + 18,
    y2,
    contentWidth - 18,
    fontRegular,
    8.5,
    darkColor,
    12
  );
  y2 -= 10;

  // Leadership 2
  page2.drawText('Lead Organizer', { x: margin, y: y2, size: 9.5, font: fontBold, color: darkColor });
  page2.drawText(" | LUNOVA '26 Technical Symposium", {
    x: margin + fontBold.widthOfTextAtSize('Lead Organizer', 9.5),
    y: y2,
    size: 9,
    font: fontRegular,
    color: darkColor,
  });
  const l2Date = '2026';
  page2.drawText(l2Date, {
    x: width - margin - fontOblique.widthOfTextAtSize(l2Date, 8.5),
    y: y2,
    size: 8.5,
    font: fontOblique,
    color: grayColor,
  });
  y2 -= 14;

  page2.drawCircle({ x: margin + 9, y: y2 + 3, size: 1.8, color: primaryColor });
  y2 = drawWrappedText(
    page2,
    "Coordinated the college's inaugural technical symposium in collaboration with the Tech Wizard Club and Cyber Security Club, managing end-to-end event logistics and technical tracks.",
    margin + 18,
    y2,
    contentWidth - 18,
    fontRegular,
    8.5,
    darkColor,
    12
  );

  // Save to both public/resume.pdf and dist/resume.pdf
  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync(path.join(process.cwd(), 'public', 'resume.pdf'), pdfBytes);
  
  const distDir = path.join(process.cwd(), 'dist');
  if (fs.existsSync(distDir)) {
    fs.writeFileSync(path.join(distDir, 'resume.pdf'), pdfBytes);
  }

  console.log('Valid standardized resume.pdf successfully generated! Size:', pdfBytes.length, 'bytes');
}

createResume().catch(console.error);
