
/* ==========================================
   PERSONAL INFORMATION
========================================== */

export const FULL_NAME = 'Eya Oueslati'

export const JOB_TITLE = 'Data Analyst | Data Scientist'

export const EMAIL = 'eya.oueslati.ou@gmail.com'

export const PHONE = '+21699005140'

export const LOCATION = 'Tunis, Tunisia'

export const GITHUB = 'https://github.com/eyaoueslati06'

export const LINKEDIN = 'https://www.linkedin.com/in/eya-oueslati-76a757200/'

export const SUMMARY =
  'Data Analyst & Data Scientist specializing in Business Intelligence, machine learning, financial risk analytics, and data-driven decision-making. Experienced in transforming complex datasets into actionable insights, predictive models, and interactive dashboards.'


/* ==========================================
   TOOLS / MARQUEE
========================================== */

export const tools = [
  'Python',
  'SQL',
  'Power BI',
  'Advanced Excel',
  'Tableau',
  'Pandas',
  'NumPy',
  'Scikit-learn',
  'TensorFlow',
  'PyTorch',
  'PostgreSQL',
  'MySQL',
  'MongoDB',
  'Matplotlib',
  'Seaborn',
  'Apache Spark',
  'Apache Kafka',
  'Git',
  'Microsoft Office',
]


/* ==========================================
   SKILLS
========================================== */

export type Skill = {
  ini: string
  name: string
  group: string
  desc: string
}

export const skills: Skill[] = [

  // DATA ANALYTICS & BUSINESS INTELLIGENCE

  {
    ini: 'SQ',
    name: 'SQL',
    group: 'Data Analytics & BI',
    desc: 'Advanced SQL querying, joins, aggregations, segmentation and exploratory analysis.',
  },
  {
    ini: 'BI',
    name: 'Power BI',
    group: 'Data Analytics & BI',
    desc: 'Interactive dashboards, data modeling, business reporting and KPI visualization.',
  },
  {
    ini: 'XL',
    name: 'Advanced Excel',
    group: 'Data Analytics & BI',
    desc: 'Data cleaning, analysis, pivot tables and analytical reporting.',
  },
  {
    ini: 'Tb',
    name: 'Tableau',
    group: 'Data Analytics & BI',
    desc: 'Interactive visualizations, analytical dashboards and data storytelling.',
  },
  {
    ini: 'St',
    name: 'Statistics',
    group: 'Data Analytics & BI',
    desc: 'Statistical analysis, descriptive metrics and data interpretation.',
  },
  {
    ini: 'DV',
    name: 'Data Visualization',
    group: 'Data Analytics & BI',
    desc: 'Communicating complex information through clear visual insights.',
  },
  {
    ini: 'KP',
    name: 'KPI Analysis',
    group: 'Data Analytics & BI',
    desc: 'Defining, analyzing and tracking business performance indicators.',
  },
  {
    ini: 'ET',
    name: 'ETL Pipelines',
    group: 'Data Analytics & BI',
    desc: 'Data extraction, cleaning, transformation and integration workflows.',
  },

  // PROGRAMMING & DATABASES

  {
    ini: 'Py',
    name: 'Python',
    group: 'Programming & Databases',
    desc: 'Data analysis, automation, statistical computing and machine learning.',
  },
  {
    ini: 'Pd',
    name: 'Pandas',
    group: 'Programming & Databases',
    desc: 'Data manipulation, preprocessing, cleaning and exploratory analysis.',
  },
  {
    ini: 'Np',
    name: 'NumPy',
    group: 'Programming & Databases',
    desc: 'Numerical computing, array operations and mathematical processing.',
  },
  {
    ini: 'Mt',
    name: 'Matplotlib',
    group: 'Programming & Databases',
    desc: 'Custom charts, statistical plots and exploratory visualizations.',
  },
  {
    ini: 'Sb',
    name: 'Seaborn',
    group: 'Programming & Databases',
    desc: 'Statistical data visualization and pattern exploration.',
  },
  {
    ini: 'Pg',
    name: 'PostgreSQL',
    group: 'Programming & Databases',
    desc: 'Relational database querying and structured data management.',
  },
  {
    ini: 'My',
    name: 'MySQL',
    group: 'Programming & Databases',
    desc: 'Relational databases, SQL operations and data retrieval.',
  },
  {
    ini: 'Mo',
    name: 'MongoDB',
    group: 'Programming & Databases',
    desc: 'NoSQL databases and document-oriented data management.',
  },
  {
    ini: 'Gi',
    name: 'Git',
    group: 'Programming & Databases',
    desc: 'Version control, repository management and collaborative development.',
  },

  // MACHINE LEARNING & ARTIFICIAL INTELLIGENCE

  {
    ini: 'ML',
    name: 'Scikit-learn',
    group: 'Machine Learning & AI',
    desc: 'Machine learning pipelines, preprocessing, training and evaluation.',
  },
  {
    ini: 'TF',
    name: 'TensorFlow',
    group: 'Machine Learning & AI',
    desc: 'Deep learning frameworks and neural network development.',
  },
  {
    ini: 'Pt',
    name: 'PyTorch',
    group: 'Machine Learning & AI',
    desc: 'Deep learning workflows and neural network experimentation.',
  },
  {
    ini: 'Cl',
    name: 'Classification',
    group: 'Machine Learning & AI',
    desc: 'Supervised learning for categorical prediction and model evaluation.',
  },
  {
    ini: 'Rg',
    name: 'Regression',
    group: 'Machine Learning & AI',
    desc: 'Predictive modeling for continuous numerical outcomes.',
  },
  {
    ini: 'Cs',
    name: 'Clustering',
    group: 'Machine Learning & AI',
    desc: 'Unsupervised learning for discovering natural data groupings.',
  },
  {
    ini: 'AD',
    name: 'Anomaly Detection',
    group: 'Machine Learning & AI',
    desc: 'Identifying unusual patterns using Isolation Forest, One-Class SVM and LOF.',
  },
  {
    ini: 'NL',
    name: 'Natural Language Processing',
    group: 'Machine Learning & AI',
    desc: 'Text analytics, language processing and NLP techniques.',
  },

  // BIG DATA

  {
    ini: 'Sp',
    name: 'Apache Spark',
    group: 'Big Data',
    desc: 'Distributed data processing and large-scale analytics.',
  },
  {
    ini: 'Kf',
    name: 'Apache Kafka',
    group: 'Big Data',
    desc: 'Event streaming and real-time data architectures.',
  },

  // OFFICE & PRODUCTIVITY

  {
    ini: 'MS',
    name: 'Microsoft Office',
    group: 'Office & Productivity',
    desc: 'Productivity tools, professional documents, spreadsheets and presentations.',
  },
  {
    ini: 'Ex',
    name: 'Microsoft Excel',
    group: 'Office & Productivity',
    desc: 'Advanced spreadsheet analysis, data organization and reporting.',
  },
  {
    ini: 'Wd',
    name: 'Microsoft Word',
    group: 'Office & Productivity',
    desc: 'Professional documentation, formatting and reporting.',
  },
  {
    ini: 'Pp',
    name: 'Microsoft PowerPoint',
    group: 'Office & Productivity',
    desc: 'Presentations, visual communication and analytical storytelling.',
  },

  // LANGUAGES
  
  {
    ini: 'AR',
    name: 'Arabic',
    group: 'Languages',
    desc: 'Native language.',
  },
  {
    ini: 'FR',
    name: 'French',
    group: 'Languages',
    desc: 'Fluent professional proficiency.',
  },
  {
    ini: 'EN',
    name: 'English',
    group: 'Languages',
    desc: 'Fluent professional proficiency.',
  },
]


/* ==========================================
   SKILL FILTERS
========================================== */

export const filters = [
  'All',
  'Data Analytics & BI',
  'Programming & Databases',
  'Machine Learning & AI',
  'Big Data',
  'Office & Productivity',
  'Languages',
]


/* ==========================================
   PORTFOLIO PROJECTS
========================================== */

export type Project = {
  initial: string
  name: string
  category: string
  text: string
  gradient: string
  label: string
  href: string
  image?: string
}

export const projects: Project[] = [
 
  {
    initial: 'NY',
    name: 'NYC Airbnb Room Type Classification',
    category: 'Machine Learning',
    text: 'Built and evaluated a machine learning pipeline to predict Airbnb room types from listing characteristics.',
    gradient: 'linear-gradient(150deg,#f0c29a,#d98a6b)',
    label: 'View code',
    href: 'https://github.com/eyaoueslati06/NYC-Airbnb-Room-Type-Classification',
    image: `${import.meta.env.BASE_URL}projects/nyc-airbnb.webp`,
  },
  {
    initial: 'MH',
    name: 'Mental Health Score Prediction',
    category: 'Machine Learning',
    text: 'Built a regression pipeline with data preprocessing, evaluation and an API-based prediction component.',
    gradient: 'linear-gradient(150deg,#a99be0,#7b6bb5)',
    label: 'View code',
    href: 'https://github.com/eyaoueslati06/mental-health-score-prediction',
    image: `${import.meta.env.BASE_URL}projects/mental-health.webp`,
  },
  {
    initial: 'SQL',
    name: 'Sales & Customer SQL Exploratory Analysis',
    category: 'Data Analytics',
    text: 'Explored customer, product and sales datasets with T-SQL, ranking, segmentation and trend analysis.',
    gradient: 'linear-gradient(150deg,#9fb4ea,#6f86cf)',
    label: 'View code',
    href: 'https://github.com/eyaoueslati06/SQL_exploratory_data_analysis_project',
    image: `${import.meta.env.BASE_URL}projects/sql-analysis.webp`,
  },
  {
    initial: 'IR',
    name: 'Information Retrieval System',
    category: 'AI & NLP',
    text: 'AI-powered PDF question-answering system using Streamlit, LangChain, FAISS and Gemini.',
    gradient: 'linear-gradient(150deg,#c6b0ef,#9477cf)',
    label: 'View code',
    href: 'https://github.com/eyaoueslati06/-Information-Retrieval-System',
    image: `${import.meta.env.BASE_URL}projects/information-retrieval.webp`,
  },
  {
    initial: 'FR',
    name: 'Financial Reporting & Analysis',
    category: 'Business Intelligence',
    text: 'Financial reporting and advanced analytical dashboards built with Power BI.',
    gradient: 'linear-gradient(150deg,#cbb0d5,#957cb8)',
    label: 'View code',
    href: 'https://github.com/eyaoueslati06/FinancialReportingAndAnalysis',
    image: `${import.meta.env.BASE_URL}projects/financial-reporting.webp`,
  },
  {
    initial: 'RS',
    name: 'Resume Category Prediction',
    category: 'Machine Learning',
    text: 'Classifies resumes into job categories using NLP, TF-IDF and machine learning.',
    gradient: 'linear-gradient(150deg,#a8c9c1,#6bafa4)',
    label: 'View code',
    href: 'https://github.com/eyaoueslati06/Resume-Category-Prediction',
    image: `${import.meta.env.BASE_URL}projects/resume-category.webp`,
  },
  {
    initial: 'EC',
    name: 'E-Commerce Product Delivery Prediction',
    category: 'Machine Learning',
    text: 'Predicts whether e-commerce orders will arrive on time and examines factors influencing delivery.',
    gradient: 'linear-gradient(150deg,#f3bd99,#db8d71)',
    label: 'View code',
    href: 'https://github.com/eyaoueslati06/E-Commerce-Product-Delivery-Prediction',
    image: `${import.meta.env.BASE_URL}projects/delivery-prediction.webp`,
  },
  {
    initial: 'CH',
    name: 'Customer Churn Prediction',
    category: 'Machine Learning',
    text: 'Analyzes customer attributes and predicts bank customer churn.',
    gradient: 'linear-gradient(150deg,#abc9e2,#6e9dc5)',
    label: 'View code',
    href: 'https://github.com/eyaoueslati06/Customer-Churn-Prediction',
    image: `${import.meta.env.BASE_URL}projects/customer-churn.webp`,
  },
  

]


/* ==========================================
   PROFESSIONAL EXPERIENCE
========================================== */

export type Experience = {
  company: string
  role: string
  period: string
  location: string
  description: string
}

export const experiences: Experience[] = [
  {
    company: 'Freelance',
    role: 'Data Analyst / BI Developer',
    period: 'January 2026 – Present',
    location: 'Remote',
    description:
      'Delivering data analytics and business intelligence solutions, including data cleaning, transformation, KPI development, analytical reporting and interactive dashboards.',
  },
  {
    company: 'EY (Ernst & Young)',
    role: 'Data Scientist Intern – Master’s Thesis',
    period: 'February 2025 – July 2025',
    location: 'Tunisia',
    description:
      'Analyzed 12 financial macroprocesses and identified over 50 fraud-risk scenarios. Developed anomaly detection models using Isolation Forest, One-Class SVM, Local Outlier Factor, K-Means and Birch, supported by Power BI reporting.',
  },
  {
    company: 'WAYCON',
    role: 'Data Analyst Intern',
    period: 'July 2024 – September 2024',
    location: 'Tunisia',
    description:
      'Cleaned, validated and transformed datasets, developed KPI analyses and contributed to interactive dashboards supporting business performance monitoring.',
  },
  {
    company: 'Learning Doors',
    role: 'Full Stack Developer Intern',
    period: 'January 2023 – May 2023',
    location: 'Tunisia',
    description:
      'Developed a Python-based affiliate management platform and real-time analytics dashboards for tracking sales, commissions and customer engagement.',
  },
]


/* ==========================================
   EDUCATION
========================================== */

export const education = [
  {
    degree: 'Master’s Degree in Big Data Analytics & E-Commerce',
    institution: 'IHEC Carthage – University of Carthage',
    period: '2023 – 2025',
  },
  {
    degree: 'B.S. in Business Intelligence',
    institution: 'IHEC Carthage – University of Carthage',
    period: '2020 – 2023',
  },
]


/* ==========================================
   CV DOWNLOAD
========================================== */

// Put the actual PDF at public/Eya_Oueslati_CV.pdf.
export const cvUrl: string = `${import.meta.env.BASE_URL}Eya_Oueslati_CV_Eng.pdf`

export async function downloadCv() {
  try {
    const response = await fetch(cvUrl, { cache: 'no-store' })

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: CV file not found`)
    }

    const buffer = await response.arrayBuffer()
    const header = new TextDecoder('ascii').decode(buffer.slice(0, 5))

    // Vite can return index.html with status 200 when a file is missing.
    // Check the PDF signature, not just the HTTP status or MIME type.
    if (header !== '%PDF-') {
      throw new Error('The server did not return a valid PDF file')
    }

    const blob = new Blob([buffer], { type: 'application/pdf' })
    const objectUrl = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = objectUrl
    link.download = 'Eya_Oueslati_CV_Eng.pdf'
    document.body.appendChild(link)
    link.click()
    link.remove()

    // Allow the browser time to start the download before releasing the URL.
    window.setTimeout(() => URL.revokeObjectURL(objectUrl), 60_000)
  } catch (error) {
    console.error('CV download failed:', error)
    window.alert('Unable to download the CV. Check that public/Eya_Oueslati_CV.pdf exists and opens correctly.')
  }
}


/* ==========================================
   MOOD / THEME COLORS
   ORIGINAL DESIGN PRESERVED
========================================== */

export type Mood = {
  id: string
  name: string
  colors: [string, string, string]
}

export const moods: Mood[] = [
  {
    id: 'lavender',
    name: 'Lavender',
    colors: ['#9d8ccf', '#7b6bb5', '#b3566f'],
  },
  {
    id: 'rose',
    name: 'Rose petal',
    colors: ['#e69ab5', '#c25a80', '#7b6bb5'],
  },
  {
    id: 'peach',
    name: 'Peach fizz',
    colors: ['#f0a878', '#d9773f', '#b3566f'],
  },
  {
    id: 'mint',
    name: 'Mint cream',
    colors: ['#6fcfb0', '#2f9e82', '#b3566f'],
  },
]
