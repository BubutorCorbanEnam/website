import type { BlogPost, DownloadItem, Project, Publication, TimelineItem } from '../types';

export const stats = [
  { label: 'Research Projects', value: 14 },
  { label: 'Publications', value: 18 },
  { label: 'Datasets Curated', value: 9 },
  { label: 'Students Mentored', value: 42 }
];

export const researchInterests = [
  'Applied econometrics',
  'Machine learning for social impact',
  'Causal inference',
  'Urban analytics',
  'Computational social science',
  'Responsible data systems'
];

export const researchThemes = [
  {
    title: 'Data-Driven Public Policy',
    description: 'Using administrative data, survey data, and quasi-experimental designs to evaluate policy outcomes.'
  },
  {
    title: 'Responsible Machine Learning',
    description: 'Building interpretable, auditable models for high-stakes settings with measurable equity constraints.'
  },
  {
    title: 'Spatial Inequality',
    description: 'Mapping how geography, infrastructure, and institutions shape opportunity over time.'
  },
  {
    title: 'Open Research Infrastructure',
    description: 'Creating reproducible workflows, documentation, datasets, and software for transparent science.'
  }
];

export const timeline: TimelineItem[] = [
  {
    year: '2026',
    title: 'PhD Application Cycle',
    organization: 'Research Methods and Policy Programs',
    description: 'Preparing a doctoral research agenda focused on causal inference and public-interest data science.',
    type: 'Academic'
  },
  {
    year: '2025',
    title: 'Senior Data Analyst',
    organization: 'Civic Analytics Lab',
    description: 'Led evaluations, dashboards, and stakeholder research for multi-city education and mobility programs.',
    type: 'Employment'
  },
  {
    year: '2024',
    title: 'Research Fellow',
    organization: 'Institute for Quantitative Social Research',
    description: 'Co-authored working papers and released reproducible data packages for public policy studies.',
    type: 'Research'
  },
  {
    year: '2023',
    title: 'M.S. Applied Statistics',
    organization: 'Example University',
    description: 'Completed graduate training in statistical learning, econometrics, GIS, and research design.',
    type: 'Education'
  }
];

export const projects: Project[] = [
  {
    title: 'Policy Impact Atlas',
    description: 'Interactive geospatial dashboard for tracking regional policy outcomes and treatment heterogeneity.',
    image: '/assets/projects/project-impact-atlas.svg',
    technologies: ['React', 'TypeScript', 'Python', 'PostGIS', 'D3'],
    tags: ['GIS', 'Policy', 'Dashboard'],
    status: 'Active',
    github: '#',
    demo: '#',
    publication: '#'
  },
  {
    title: 'Causal Notebook Toolkit',
    description: 'A reproducible template system for propensity scores, matching, regression discontinuity, and DiD studies.',
    image: '/assets/projects/project-causal-toolkit.svg',
    technologies: ['R', 'Quarto', 'Python', 'Jupyter'],
    tags: ['Causal inference', 'Open science'],
    status: 'Completed',
    github: '#',
    demo: '#',
    publication: '#'
  },
  {
    title: 'Survey Quality Monitor',
    description: 'Automated checks for panel attrition, satisficing, outliers, and survey instrument drift.',
    image: '/assets/projects/project-survey-monitor.svg',
    technologies: ['Python', 'DuckDB', 'Great Expectations', 'Streamlit'],
    tags: ['Survey', 'Data quality'],
    status: 'In review',
    github: '#',
    demo: '#',
    publication: '#'
  },
  {
    title: 'Academic Knowledge Graph',
    description: 'Prototype linking publications, grants, collaborators, datasets, and methods for literature discovery.',
    image: '/assets/projects/project-knowledge-graph.svg',
    technologies: ['Neo4j', 'React', 'NLP', 'OpenAlex'],
    tags: ['NLP', 'Bibliometrics'],
    status: 'Prototype',
    github: '#',
    demo: '#',
    publication: '#'
  }
];

export const publications: Publication[] = [
  {
    type: 'Journal Article',
    title: 'Measuring Neighborhood Opportunity with Interpretable Machine Learning',
    authors: 'Alex Morgan, Priya Shah, Mateo Rivera',
    journal: 'Journal of Computational Social Science',
    volume: '12',
    issue: '3',
    pages: '211-236',
    year: '2026',
    doi: '10.0000/example.2026.001',
    pdf: '/downloads/publications/publication-placeholder.pdf',
    bibtex: '@article{morgan2026opportunity,title={Measuring Neighborhood Opportunity},year={2026}}',
    citation: 'Morgan, A., Shah, P., & Rivera, M. (2026). Measuring Neighborhood Opportunity.',
    abstract: 'This placeholder abstract summarizes a study combining spatial features and explainable models.',
    keywords: ['Machine learning', 'Spatial inequality', 'Interpretability']
  },
  {
    type: 'Conference Paper',
    title: 'Auditable Pipelines for Public Sector Predictive Models',
    authors: 'Alex Morgan and Hana Lee',
    journal: 'Proceedings of the Conference on Fair Data Systems',
    volume: '5',
    issue: '1',
    pages: '44-59',
    year: '2025',
    doi: '10.0000/example.2025.014',
    pdf: '/downloads/publications/publication-placeholder.pdf',
    bibtex: '@inproceedings{morgan2025auditable,title={Auditable Pipelines},year={2025}}',
    citation: 'Morgan, A., & Lee, H. (2025). Auditable Pipelines for Public Sector Predictive Models.',
    abstract: 'A framework for documentation, testing, and governance of public-interest predictive systems.',
    keywords: ['Fairness', 'Governance', 'Model auditing']
  },
  {
    type: 'Working Paper',
    title: 'The Longitudinal Effects of Transit Access on Early Career Mobility',
    authors: 'Alex Morgan',
    journal: 'Working Paper',
    volume: 'N/A',
    issue: 'N/A',
    pages: '1-48',
    year: '2025',
    doi: 'Pending',
    pdf: '/downloads/publications/publication-placeholder.pdf',
    bibtex: '@misc{morgan2025transit,title={Transit Access and Career Mobility},year={2025}}',
    citation: 'Morgan, A. (2025). The Longitudinal Effects of Transit Access on Early Career Mobility.',
    abstract: 'Placeholder for a difference-in-differences study using linked mobility and labor data.',
    keywords: ['Transportation', 'Labor economics', 'Difference-in-differences']
  },
  {
    type: 'Book Chapter',
    title: 'Reproducible Data Workflows for Applied Social Research',
    authors: 'Alex Morgan',
    journal: 'Handbook of Applied Data Science',
    volume: '1',
    issue: 'N/A',
    pages: '88-112',
    year: '2024',
    doi: '10.0000/example.2024.088',
    pdf: '/downloads/publications/publication-placeholder.pdf',
    bibtex: '@incollection{morgan2024workflow,title={Reproducible Data Workflows},year={2024}}',
    citation: 'Morgan, A. (2024). Reproducible Data Workflows for Applied Social Research.',
    abstract: 'Practical principles for versioned data, transparent code, and literate analysis.',
    keywords: ['Reproducibility', 'Open science', 'Data workflows']
  },
  {
    type: 'Report',
    title: 'Data Infrastructure for Equitable Program Evaluation',
    authors: 'Alex Morgan and Civic Analytics Lab',
    journal: 'Technical Report',
    volume: 'N/A',
    issue: 'N/A',
    pages: '1-64',
    year: '2024',
    doi: 'N/A',
    pdf: '/downloads/publications/publication-placeholder.pdf',
    bibtex: '@techreport{morgan2024infrastructure,title={Data Infrastructure},year={2024}}',
    citation: 'Morgan, A. (2024). Data Infrastructure for Equitable Program Evaluation.',
    abstract: 'A practitioner-facing report on data governance and evidence generation.',
    keywords: ['Evaluation', 'Infrastructure', 'Governance']
  },
  {
    type: 'Thesis',
    title: 'Modeling Spatial Heterogeneity in Social Program Outcomes',
    authors: 'Alex Morgan',
    journal: 'M.S. Thesis, Example University',
    volume: 'N/A',
    issue: 'N/A',
    pages: '1-102',
    year: '2023',
    doi: 'N/A',
    pdf: '/downloads/publications/publication-placeholder.pdf',
    bibtex: '@mastersthesis{morgan2023spatial,title={Modeling Spatial Heterogeneity},year={2023}}',
    citation: 'Morgan, A. (2023). Modeling Spatial Heterogeneity in Social Program Outcomes.',
    abstract: 'A thesis placeholder describing spatial models and program evaluation design.',
    keywords: ['Spatial statistics', 'Program evaluation', 'Thesis']
  }
];

export const skills = [
  { group: 'Programming', items: ['Python', 'R', 'TypeScript', 'SQL', 'Bash'], level: 94 },
  { group: 'Statistics', items: ['Bayesian modeling', 'Experimental design', 'Causal inference'], level: 92 },
  { group: 'Econometrics', items: ['DiD', 'RDD', 'IV', 'Panel data'], level: 90 },
  { group: 'Machine Learning', items: ['Tree models', 'NLP', 'Model auditing', 'MLOps'], level: 86 },
  { group: 'GIS', items: ['PostGIS', 'QGIS', 'Spatial joins', 'Raster analysis'], level: 82 },
  { group: 'Writing', items: ['Academic papers', 'Policy briefs', 'Technical documentation'], level: 95 },
  { group: 'Data Visualization', items: ['D3', 'ggplot2', 'Observable', 'Tableau'], level: 88 },
  { group: 'Languages', items: ['English', 'Spanish', 'French reading proficiency'], level: 78 }
];

export const awards = [
  'Graduate Research Excellence Award',
  'Open Science Reproducibility Prize',
  'Data for Good Fellowship',
  'Best Student Paper Honorable Mention',
  'Public Interest Technology Scholarship'
];

export const education = [
  {
    degree: 'M.S. Applied Statistics',
    institution: 'Example University',
    focus: 'Causal inference, statistical learning, geospatial analysis',
    years: '2021-2023',
    supervisor: 'Prof. Placeholder Advisor',
    dissertation: 'Modeling Spatial Heterogeneity in Social Program Outcomes',
    courses: ['Advanced Econometrics', 'Bayesian Data Analysis', 'Machine Learning', 'GIS for Social Science']
  },
  {
    degree: 'B.A. Economics and Data Studies',
    institution: 'Example College',
    focus: 'Public economics, research methods, data visualization',
    years: '2017-2021',
    supervisor: 'Prof. Placeholder Mentor',
    dissertation: 'Transit Access and Neighborhood Opportunity',
    courses: ['Microeconometrics', 'Urban Economics', 'Data Ethics', 'Research Design']
  }
];

export const teaching = [
  'Teaching Assistant, Applied Regression Analysis',
  'Workshop Lead, Reproducible Research with Quarto',
  'Guest Lecture, Data Ethics in Public Policy',
  'Mentor, Undergraduate Research Methods Lab'
];

export const certifications = [
  'Human Subjects Research Certification',
  'Cloud Data Engineering Foundations',
  'Geospatial Analysis Professional Certificate',
  'Responsible AI and Algorithmic Auditing',
  'Advanced SQL for Analytics'
];

export const blogPosts: BlogPost[] = [
  {
    title: 'Designing Research Workflows That Survive Peer Review',
    excerpt: 'A practical guide to versioned data, analysis plans, and transparent model reporting.',
    date: '2026-05-12',
    category: 'Research Methods',
    tags: ['Reproducibility', 'Writing'],
    readingTime: '6 min read',
    image: '/assets/blog/blog-research-workflows.svg',
    featured: true
  },
  {
    title: 'What Makes a Public Dashboard Trustworthy?',
    excerpt: 'Notes on uncertainty, provenance, accessibility, and responsible visual design.',
    date: '2026-04-18',
    category: 'Data Visualization',
    tags: ['Dashboards', 'Trust'],
    readingTime: '5 min read',
    image: '/assets/blog/blog-dashboard-trust.svg'
  },
  {
    title: 'A Short Field Guide to Causal Identification',
    excerpt: 'Matching questions, data structure, and assumptions before choosing a method.',
    date: '2026-03-03',
    category: 'Causal Inference',
    tags: ['Econometrics', 'Methods'],
    readingTime: '8 min read',
    image: '/assets/blog/blog-causal-identification.svg'
  }
];

export const gallery = [
  { src: '/assets/gallery/gallery-conference.svg', caption: 'Conference presentation placeholder' },
  { src: '/assets/gallery/gallery-fieldwork.svg', caption: 'Fieldwork documentation placeholder' },
  { src: '/assets/gallery/gallery-workshop.svg', caption: 'Teaching workshop placeholder' },
  { src: '/assets/gallery/gallery-lab.svg', caption: 'Research lab collaboration placeholder' },
  { src: '/assets/gallery/gallery-poster.svg', caption: 'Academic poster placeholder' },
  { src: '/assets/gallery/gallery-campus.svg', caption: 'Campus event placeholder' }
];

export const resources = [
  { group: 'Books', items: ['Mostly Harmless Econometrics', 'The Effect', 'Designing Data-Intensive Applications'] },
  { group: 'Datasets', items: ['IPUMS', 'Opportunity Atlas', 'OpenStreetMap', 'World Bank Data'] },
  { group: 'Software', items: ['RStudio', 'Quarto', 'DuckDB', 'QGIS', 'Observable'] },
  { group: 'Useful Links', items: ['OpenAlex', 'Papers with Code', 'AEA RCT Registry', 'Data Is Plural'] },
  { group: 'Tutorials', items: ['Causal Inference in R', 'Geospatial Python', 'Accessible Visualization'] },
  { group: 'Courses', items: ['Statistical Rethinking', 'CS109 Data Science', 'MIT MicroMasters'] }
];

export const downloads: DownloadItem[] = [
  { title: 'CV', description: 'Academic curriculum vitae placeholder.', href: '/downloads/CV.pdf', type: 'PDF' },
  { title: 'Resume', description: 'Industry resume placeholder.', href: '/downloads/Resume.pdf', type: 'PDF' },
  {
    title: 'Teaching Statement',
    description: 'Teaching philosophy and mentoring approach.',
    href: '/downloads/Teaching Statement.pdf',
    type: 'PDF'
  },
  {
    title: 'Research Statement',
    description: 'Research agenda and future doctoral interests.',
    href: '/downloads/Research Statement.pdf',
    type: 'PDF'
  },
  {
    title: 'Publications',
    description: 'Publication packet placeholder.',
    href: '/downloads/Publications.pdf',
    type: 'PDF'
  },
  {
    title: 'Writing Sample',
    description: 'Representative academic writing sample.',
    href: '/downloads/Writing Sample.pdf',
    type: 'PDF'
  },
  { title: 'Datasets', description: 'Placeholder data archive.', href: '/downloads/datasets/Datasets.zip', type: 'ZIP' },
  {
    title: 'Presentation Slides',
    description: 'Conference slide deck placeholder.',
    href: '/downloads/presentations/Presentation Slides.pdf',
    type: 'PDF'
  },
  {
    title: 'Certificates',
    description: 'Certification packet placeholder.',
    href: '/downloads/certificates/Certificates.pdf',
    type: 'PDF'
  },
  { title: 'Portfolio', description: 'Complete portfolio packet.', href: '/downloads/Portfolio.pdf', type: 'PDF' },
  { title: 'Code Samples', description: 'Sample repository archive.', href: '/downloads/code/Code Samples.zip', type: 'ZIP' }
];

export const testimonials = [
  {
    quote: 'A thoughtful researcher with rare skill translating technical detail into institutional action.',
    name: 'Placeholder Collaborator',
    role: 'Research Director'
  },
  {
    quote: 'Combines methodological rigor with a calm, generous teaching presence.',
    name: 'Placeholder Student',
    role: 'Workshop Participant'
  }
];

export const faqs = [
  {
    question: 'Are you available for research collaboration?',
    answer: 'Yes. Please use the contact form with a short note about the research question, data, and timeline.'
  },
  {
    question: 'Can I request a copy of a paper or dataset?',
    answer: 'Yes. Public materials are listed on the downloads page, and restricted materials can be requested by email.'
  },
  {
    question: 'Do you consult on analytics or evaluation projects?',
    answer: 'Limited consulting availability is noted on the contact page and can be discussed after an initial inquiry.'
  }
];
