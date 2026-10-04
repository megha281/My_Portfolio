export const profile = {
  name: 'Meghashri Lakshmi S',
  role: 'Final-Year Computer Science Engineering Student',
  tagline: 'Building with Code, AI & Creativity.',
  statement: 'Turning ideas into working software.',
  university: 'Kishkinda University',
  cgpa: '8.02',
  github: 'https://github.com/megha281',
  linkedin: 'https://www.linkedin.com/in/meghashri-lakshmi-s-173528385',
  email: 'meghas2815@gmail.com',
}

export const stats = [
  { value: '8.02', label: 'CGPA' },
  { value: '8', label: 'Projects' },
  { value: '3', label: 'Internship Experiences' },
  { value: 'CSE', label: 'Computer Science' },
]

export const skillGroups = [
  {
    id: 'languages',
    title: 'Languages',
    skills: [
      { name: 'Python', projects: ['NeoSched', 'CineVerse', 'ChurnIQ', 'WeatherGPT', 'AgriVision'] },
      { name: 'Java', projects: [] },
      { name: 'C', projects: [] },
      { name: 'JavaScript', projects: ['NeoSched', 'HomelyHub', 'WeatherGPT', 'Zippy Cart'] },
      { name: 'TypeScript', projects: ['AgriVision'] },
    ],
  },
  {
    id: 'web',
    title: 'Web Development',
    skills: [
      { name: 'HTML', projects: ['NeoSched', 'Zippy Cart', 'Homemade Food Website'] },
      { name: 'CSS', projects: ['NeoSched', 'Zippy Cart', 'Homemade Food Website'] },
      { name: 'Django', projects: ['NeoSched'] },
      { name: 'React', projects: ['HomelyHub', 'WeatherGPT', 'AgriVision'] },
      { name: 'Next.js', projects: ['AgriVision'] },
      { name: 'Node.js', projects: ['HomelyHub', 'WeatherGPT'] },
      { name: 'Express.js', projects: ['HomelyHub', 'WeatherGPT'] },
      { name: 'Tailwind CSS', projects: ['WeatherGPT', 'AgriVision'] },
    ],
  },
  {
    id: 'ai',
    title: 'AI / Machine Learning',
    skills: [
      { name: 'Machine Learning', projects: ['CineVerse', 'ChurnIQ', 'WeatherGPT', 'AgriVision'] },
      { name: 'Deep Learning', projects: ['AgriVision'] },
      { name: 'Scikit-learn', projects: ['CineVerse', 'ChurnIQ'] },
      { name: 'TensorFlow / Keras', projects: ['AgriVision'] },
      { name: 'Streamlit', projects: ['CineVerse', 'ChurnIQ'] },
      { name: 'Google Gemini', projects: ['WeatherGPT'] },
      { name: 'RAG', projects: ['WeatherGPT'] },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    skills: [
      { name: 'SQLite', projects: ['NeoSched'] },
      { name: 'MongoDB', projects: ['HomelyHub', 'WeatherGPT'] },
      { name: 'MySQL', projects: [] },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & Tools',
    skills: [
      { name: 'AWS', projects: [] },
      { name: 'Git', projects: [] },
      { name: 'GitHub', projects: [] },
      { name: 'VS Code', projects: [] },
      { name: 'Google Workspace', projects: [] },
    ],
  },
]

export const journey = [
  {
    id: 'education',
    title: 'Started Computer Science Engineering',
    org: 'Kishkinda University',
    period: 'Ongoing — Final Year',
    description:
      'Building a foundation across programming, data structures, and software engineering, currently holding a CGPA of 8.02.',
  },
  {
    id: 'aiml-intern',
    title: 'AI & Machine Learning Intern',
    org: 'KineTrexa Software Private Limited',
    period: '20 Jul 2026 — 19 Aug 2026',
    description:
      'Completed an internship focused on AI and machine learning, building CineVerse and ChurnIQ from data preparation to deployed demonstrations.',
  },
  {
    id: 'aws-intern',
    title: 'AWS Cloud Computing Virtual Intern',
    org: 'NASSCOM FutureSkills / SmartBridge',
    period: '09 Jan 2026 — 10 Mar 2026',
    description:
      'Completed a virtual internship focused on AWS cloud computing fundamentals and practical cloud concepts.',
  },
  {
    id: 'mern-intern',
    title: 'MERN Stack Development Intern',
    org: 'Emertxe Information Technologies',
    period: 'Aug 2026',
    description:
      'Completed a MERN stack internship focused on building HomelyHub, a property booking platform using MongoDB, Express.js, React.js, and Node.js.',
  },
  {
    id: 'now',
    title: 'Currently Learning & Building',
    org: 'Self-directed',
    period: 'Present',
    description:
      'Deepening full-stack, AI/ML, and cloud fundamentals while preparing to graduate and start a software development career.',
  },
]

export const projects = [
  {
    id: 'neosched',
    number: '01',
    name: 'NeoSched',
    tag: 'Timetable & Attendance Management System',
    description:
      'A Django-based academic management system for managing timetables, attendance, users, and academic dashboards.',
    stack: ['Python', 'Django', 'SQLite', 'HTML', 'CSS', 'JavaScript'],
    role: 'Core Developer',
    github: 'https://github.com/neela2470/Neo_sched',
    live: null,
    status: 'Team Project — Core Developer',
    overview:
      'NeoSched is an academic management system that brings timetables, dashboards, and attendance tracking into a single Django application.',
    problem:
      'Departments often manage timetables and attendance through scattered spreadsheets and manual processes that are slow to update and difficult to manage.',
    approach:
      'A Django backend models users, timetables, and attendance records, with dashboard views that provide students and staff with a centralized academic management experience.',
    contribution:
      'Worked as a core developer on timetable logic, dashboard and user-facing views, and attendance functionality.',
  },

  {
    id: 'homelyhub',
    number: '02',
    name: 'HomelyHub',
    tag: 'Property Booking Platform',
    description:
      'A MERN-stack property booking platform developed during a MERN Stack Development internship.',
    stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    role: 'Developer — Internship Project',
    github: 'https://github.com/megha281/HomelyHub',
    live: 'https://homelyhub-frontend-ot2a.onrender.com',
    status: 'Completed Internship Project',
    overview:
      'HomelyHub is a property booking platform built using MongoDB, Express.js, React.js, and Node.js.',
    problem:
      'Property browsing and booking platforms need intuitive interfaces and reliable backend services to manage listings and booking-related information.',
    approach:
      'A React frontend communicates with a Node.js and Express.js backend connected to MongoDB, following the MERN architecture.',
    contribution:
      'Developed HomelyHub as part of the MERN Stack Development internship at Emertxe Information Technologies.',
  },

  {
    id: 'weathergpt',
    number: '03',
    name: 'WeatherGPT',
    tag: 'Conversational AI Weather Assistant',
    description:
      'A conversational AI assistant for weather forecasting, alerts, climate information, and actionable weather insights.',
    stack: [
      'React',
      'Vite',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Google Gemini',
      'Open-Meteo',
      'RAG',
    ],
    role: 'Team Project',
    github: 'https://github.com/megha281/WeatherGPT',
    live: 'https://weather-gpt-megha-071f.vercel.app/',
    status: 'SIH 2026 Project',
    overview:
      'WeatherGPT answers weather questions in natural language while grounding responses in live forecast data and weather knowledge.',
    problem:
      'Weather information can be difficult to interpret across different platforms, especially when users need specific forecasts, risks, alerts, or climate context.',
    approach:
      'The system uses Gemini for conversational understanding and tool selection, Open-Meteo for forecast and historical data, a deterministic risk engine for weather-risk assessment, and a local knowledge base for grounded meteorological context.',
    contribution:
      'Worked on the WeatherGPT project as part of Team Binary Brains, developing a conversational weather assistant with forecasting, risk analysis, RAG, maps, charts, and multilingual capabilities.',
  },

  {
    id: 'zippy-cart',
    number: '04',
    name: 'Zippy Cart',
    tag: 'E-Commerce Platform',
    description:
      'A modern e-commerce project designed to provide a convenient product browsing and online shopping experience.',
    stack: ['JavaScript', 'HTML', 'CSS'],
    role: 'Developer',
    github: 'https://github.com/megha281/E-Commercere',
    live: 'https://zippy-compare-cart.lovable.app',
    status: null,
    overview:
      'Zippy Cart is an e-commerce project focused on creating a clean and user-friendly online shopping experience.',
    problem:
      'Online shopping interfaces need clear product presentation, simple navigation, and an intuitive shopping workflow.',
    approach:
      'The project focuses on building a responsive e-commerce interface with product browsing and shopping-oriented user interactions.',
    contribution:
      'Designed and developed the project with a focus on frontend implementation and user experience.',
  },

  {
    id: 'agrivision',
    number: '05',
    name: 'AgriVision',
    tag: 'AI-Powered Plant Disease Detection System',
    description:
      'An AI-powered plant disease detection system that identifies plant diseases from images and provides treatment recommendations.',
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'FastAPI',
      'Python',
      'TensorFlow',
      'Keras',
      'PyTorch',
      'EfficientNet-B0',
      'OpenCV',
      'Perplexity API',
    ],
    role: 'Developer',
    github: 'https://github.com/megha281/Agri-vision',
    live: null,
    status: 'Academic Project',
    overview:
      'AgriVision is a web-based plant disease detection system designed to provide farmers with fast disease identification and treatment guidance.',
    problem:
      'Farmers may lack access to timely expert diagnosis, causing delayed treatment and potential crop losses.',
    approach:
      'The system uses an EfficientNet-B0 deep-learning model trained on the PlantVillage dataset to classify plant diseases. A Next.js frontend communicates with a FastAPI backend, while an AI chatbot provides contextual agricultural guidance.',
    contribution:
      'Worked on the development of the full-stack plant disease detection platform, integrating the frontend, backend API, machine-learning model, image analysis, treatment recommendations, and AI-assisted agricultural guidance.',
  },

  {
    id: 'cineverse',
    number: '06',
    name: 'CineVerse',
    tag: 'Movie Recommendation System',
    description:
      'A Netflix-inspired movie recommendation web application using content-based recommendation techniques.',
    stack: ['Python', 'Streamlit', 'Pandas', 'NumPy', 'Scikit-learn'],
    role: 'Solo Developer',
    github: 'https://github.com/megha281/CineVerse',
    live: 'https://cineverse-ycbmvs44tjtxuva3zwcrbx.streamlit.app/',
    status: null,
    overview:
      'CineVerse recommends films to viewers based on the content of movies they already like.',
    problem:
      'Choosing what to watch next becomes difficult when a catalog contains thousands of titles, while generic trending lists may not match a viewer’s interests.',
    approach:
      'Movie metadata is processed and compared using content-based similarity so recommendations are generated from movie attributes such as genre, cast, and description.',
    contribution:
      'Designed and built the complete pipeline including data preparation, recommendation logic, similarity modeling, and the Streamlit interface.',
  },

  {
    id: 'churniq',
    number: '07',
    name: 'ChurnIQ',
    tag: 'Customer Churn Prediction Platform',
    description:
      'An interactive machine learning platform for customer churn analysis and prediction.',
    stack: ['Python', 'Streamlit', 'Scikit-learn', 'Machine Learning'],
    role: 'Solo Developer',
    github: 'https://github.com/megha281/Churn-app',
    live: 'https://churn-app-fxfg9ucwzslvkgeprervrg8.streamlit.app/',
    status: null,
    overview:
      'ChurnIQ allows users to explore customer data, understand churn patterns, and generate churn predictions.',
    problem:
      'Businesses need to identify customers who may be at risk of leaving so that retention efforts can be planned earlier.',
    approach:
      'A classification model built with Scikit-learn is integrated into a Streamlit application with data exploration, model insights, and prediction functionality.',
    contribution:
      'Built the end-to-end platform including data exploration, machine-learning model development, and the interactive prediction interface.',
  },

  {
    id: 'homemade-food',
    number: '08',
    name: 'Homemade Food Website',
    tag: 'Food Website',
    description:
      'A web project created to showcase homemade food through a simple and user-friendly website.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    role: 'Developer',
    github: 'https://github.com/megha281/homemade-food-website',
    live: null,
    status: null,
    overview:
      'A frontend web project focused on presenting homemade food through a clean and accessible interface.',
    problem:
      'Food websites need clear presentation and straightforward navigation so visitors can easily explore the available content.',
    approach:
      'Built a web interface focused on food presentation, navigation, and a simple user experience.',
    contribution:
      'Designed and developed the website with a focus on frontend implementation and user-friendly presentation.',
  },
]

export const experience = [
  {
    id: 'aws',
    company: 'NASSCOM FutureSkills / SmartBridge',
    role: 'AWS Cloud Computing Virtual Intern',
    period: '09 January 2026 — 10 March 2026',
    location: 'Remote',
    status: 'completed',
    work:
      'Completed a virtual internship focused on AWS cloud computing fundamentals and practical cloud concepts.',
    stack: ['AWS', 'Cloud Computing'],
  },
  {
    id: 'aiml',
    company: 'KineTrexa Software Private Limited',
    role: 'AI & Machine Learning Intern',
    period: '20 July 2026 — 19 August 2026',
    location: null,
    status: 'completed',
    work:
      'Completed an internship focused on AI and machine learning, building CineVerse and ChurnIQ.',
    stack: ['Python', 'Scikit-learn', 'Streamlit'],
  },
  {
    id: 'mern',
    company: 'Emertxe Information Technologies',
    role: 'MERN Stack Development Intern',
    period: 'August 2026',
    location: 'Remote',
    status: 'completed',
    work:
      'Completed a MERN stack internship focused on building HomelyHub, a property booking platform.',
    stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
  },
]

export const certifications = [
  {
    id: 'aws',
    name: 'AWS Cloud Computing Virtual Internship',
    issuer: 'NASSCOM FutureSkills / SmartBridge',
  },
  {
    id: 'genai',
    name: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
    issuer: 'Oracle University',
  },
  {
    id: 'aifoundations',
    name: 'Oracle AI Foundations Associate — 2025',
    issuer: 'Oracle University',
  },
  {
    id: 'datascience',
    name: 'Oracle Data Science Professional — 2025',
    issuer: 'Oracle University',
  },
]

export const building = [
  {
    id: 'fullstack',
    title: 'Full Stack Development',
    description:
      'Building production-oriented full-stack applications using modern web technologies and the MERN stack.',
  },
  {
    id: 'aiml',
    title: 'AI / ML',
    description:
      'Extending from recommendation systems and classification models toward applied AI and machine learning solutions.',
  },
  {
    id: 'cloud',
    title: 'Cloud Technologies',
    description:
      'Building on AWS fundamentals to deploy and manage real applications.',
  },
  {
    id: 'practices',
    title: 'Better Software Engineering Practices',
    description:
      'Writing cleaner, more maintainable, and better-tested code as projects grow in scope.',
  },
]

export const nav = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'journey', label: 'Journey' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]