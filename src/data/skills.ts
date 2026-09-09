import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    category: 'Programming Languages',
    iconName: 'Code',
    skills: [
      { name: 'Python', level: 'Advanced' },
      { name: 'C', level: 'Intermediate' },
      { name: 'JavaScript', level: 'Advanced' },
      { name: 'HTML5', level: 'Proficient' },
      { name: 'CSS3', level: 'Proficient' }
    ]
  },
  {
    category: 'Research & Geospatial',
    iconName: 'Satellite',
    skills: [
      { name: 'Remote Sensing', level: 'Research' },
      { name: 'Geospatial Data Analysis', level: 'Advanced' },
      { name: 'Satellite Data Integration', level: 'Applied' },
      { name: 'Temporal Analysis', level: 'Applied' }
    ]
  },
  {
    category: 'Frameworks & Libraries',
    iconName: 'Layers',
    skills: [
      { name: 'React', level: 'Advanced' },
      { name: 'TypeScript', level: 'Intermediate' },
      { name: 'FastAPI', level: 'Intermediate' },
      { name: 'Flask', level: 'Proficient' },
      { name: 'Scikit-learn', level: 'Advanced' },
      { name: 'NumPy', level: 'Advanced' },
      { name: 'Pandas', level: 'Advanced' },
      { name: 'Node.js', level: 'Intermediate' },
      { name: 'Express', level: 'Intermediate' },
      { name: 'MongoDB', level: 'Intermediate' }
    ]
  },
  {
    category: 'Databases & Querying',
    iconName: 'Database',
    skills: [
      { name: 'MySQL', level: 'Proficient' },
      { name: 'SQLPlus', level: 'Intermediate' },
      { name: 'Relational Schemas', level: 'Proficient' },
      { name: 'Query Optimization', level: 'Applied' }
    ]
  },
  {
    category: 'Tools & Platforms',
    iconName: 'Wrench',
    skills: [
      { name: 'Git & GitHub', level: 'Proficient' },
      { name: 'VS Code', level: 'Daily' },
      { name: 'PyCharm', level: 'Proficient' },
      { name: 'Jupyter Notebook', level: 'Daily' },
      { name: 'Google Colab', level: 'Proficient' },
      { name: 'SAP ERP', level: 'Enterprise' }
    ]
  },
  {
    category: 'Soft Skills & Leadership',
    iconName: 'Sparkles',
    skills: [
      { name: 'Analytical Thinking', level: 'Core' },
      { name: 'Problem-Solving', level: 'Core' },
      { name: 'Technical Leadership', level: 'Demonstrated' },
      { name: 'Communication', level: 'Strong' },
      { name: 'Time Management', level: 'Consistent' }
    ]
  }
];

export const tickerTechs = [
  { name: 'Python', category: 'Language' },
  { name: 'Machine Learning', category: 'AI/ML' },
  { name: 'Remote Sensing', category: 'Research' },
  { name: 'React', category: 'Frontend' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'FastAPI', category: 'Backend' },
  { name: 'Scikit-learn', category: 'ML' },
  { name: 'Pandas & NumPy', category: 'Data' },
  { name: 'Flask', category: 'Backend' },
  { name: 'Node.js', category: 'Full-Stack' },
  { name: 'MySQL', category: 'Database' },
  { name: 'SAP ERP', category: 'Enterprise' },
  { name: 'Git / GitHub', category: 'DevOps' },
  { name: 'Claude AI API', category: 'GenAI' }
];
