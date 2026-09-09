import { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
  {
    id: 'forest-fire-mapping',
    title: 'Forest Fire Susceptibility Mapping & Early Warning System',
    tech: ['Python', 'Machine Learning', 'Remote Sensing', 'Satellite Data', 'Scikit-learn'],
    description: 'Machine-learning-based framework for forest fire susceptibility mapping and risk prediction using fire occurrence, weather, and satellite-derived data. Includes data preprocessing, feature engineering, spatial/temporal data integration, and model evaluation for fire-risk classification.',
    image: '/projects/forest-fire-mapping.png',
    isResearch: true,
    highlights: [
      'Multi-source satellite & meteorological telemetry integration',
      'Feature engineering across spatial/temporal topography data',
      'Predictive fire susceptibility classification matrices'
    ]
    // No live/GitHub link yet — shown as research project without buttons
  },
  {
    id: 'resumatch',
    title: 'ResuMatch — AI Resume Screening & ATS Matcher',
    tech: ['React', 'TypeScript', 'FastAPI', 'Python', 'Claude AI API', 'NLP'],
    description: 'Full-stack AI resume screening tool with a React/TypeScript frontend and FastAPI backend, supporting multi-format uploads (PDF, DOCX, PNG, TXT). Integrated Claude AI API for NLP-powered keyword extraction, ATS compatibility scoring, and automated smart feedback with real-time job-match analysis.',
    image: '/projects/resumatch.png',
    githubUrl: 'https://github.com/amirtha-varshine/ResuMatch.git',
    // Live: [to be confirmed] — omit button when blank
    highlights: [
      'Multi-format ingestion: PDF, DOCX, PNG, TXT',
      'Claude AI API integration for semantic ATS keyword extraction',
      'Real-time job role compatibility scoring & actionable advice'
    ]
  },
  {
    id: 'cgpa-calculator',
    title: 'Institutional CGPA Calculator',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    date: 'Oct 2025',
    description: 'Web-based CGPA calculation tool aligned with institutional grading policies, actively used by students for academic performance tracking. Implements credit-weighted GPA computation logic with a dynamic UI, reducing manual calculation errors.',
    image: '/projects/cgpa-calculator.png',
    // GitHub / Live: [to be confirmed] — omit buttons
    highlights: [
      'Strict credit-weighted GPA computation algorithms',
      'Interactive subject & grade point input fields',
      'Adopted by peers for semester grade auditing'
    ]
  }
];
