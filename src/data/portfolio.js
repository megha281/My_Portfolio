export const profile = {
  name: 'Meghashri Lakshmi S',
  role: 'Final-Year Computer Science Engineering Student',
  tagline: 'Building with Code, AI & Creativity.',
  statement: 'Turning ideas into working software.',
  university: 'Kishkinda University',
  cgpa: '8.23',
  github: 'https://github.com/megha281',
  linkedin: 'https://www.linkedin.com/in/meghashri-lakshmi-s-173528385',
  email: 'meghas2815@gmail.com',
}

export const stats = [
  { value: '8.23', label: 'CGPA' },
  { value: '5+', label: 'Projects' },
  { value: '3', label: 'Internship Experiences' },
  { value: 'CSE', label: 'Computer Science' },
]

export const skillGroups = [
  {
    id: 'languages',
    title: 'Languages',
    skills: [
      { name: 'Python', projects: ['CineVerse', 'ChurnIQ', 'Python Quiz Game', 'NeoSched'] },
      { name: 'Java', projects: [] },
      { name: 'C', projects: [] },
      { name: 'JavaScript', projects: ['NeoSched', 'HomelyHub'] },
    ],
  },
  {
    id: 'web',
    title: 'Web Development',
    skills: [
      { name: 'HTML', projects: ['NeoSched'] },
      { name: 'CSS', projects: ['NeoSched'] },
      { name: 'Django', projects: ['NeoSched'] },
      { name: 'React', projects: ['HomelyHub'] },
      { name: 'Node.js', projects: ['HomelyHub'] },
      { name: 'Express.js', projects: ['HomelyHub'] },
    ],
  },
  {
    id: 'ai',
    title: 'AI / Machine Learning',
    skills: [
      { name: 'Machine Learning', projects: ['CineVerse', 'ChurnIQ'] },
      { name: 'Scikit-learn', projects: ['CineVerse', 'ChurnIQ'] },
      { name: 'Streamlit', projects: ['CineVerse', 'ChurnIQ'] },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    skills: [
      { name: 'SQLite', projects: ['NeoSched'] },
      { name: 'MongoDB', projects: ['HomelyHub'] },
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
    ],
  },
]

export const journey = [
  {
    id: 'education',
    title: 'Started Computer Science Engineering',
    org: 'Kishkinda University',
    period: 'Ongoing — Final Year',
    description: 'Building a foundation across programming, data structures, and software engineering, currently holding a CGPA of 8.23.',
  },
  {
    id: 'python-intern',
    title: 'Python Intern',
    org: 'UpSkill Campus / UniConverge Technologies Pvt. Ltd.',
    period: '2026',
    description: 'Focused on core Python programming and project development, building a command-line quiz application from the ground up.',
  },
  {
    id: 'aiml-intern',
    title: 'AI & Machine Learning Intern',
    org: 'KineTrexa Software Private Limited',
    period: '20 Jul 2026 — 19 Aug 2026',
    description: 'Built two full ML-driven applications — a movie recommendation engine and a customer churn predictor — from data to deployed demo.',
  },
  {
    id: 'mern-intern',
    title: 'MERN Stack Development Intern',
    org: 'Emertxe Information Technologies',
    period: 'Aug 2026 — Present',
    description: 'Currently building HomelyHub, a property booking platform, using MongoDB, Express, React, and Node.js.',
  },
  {
    id: 'now',
    title: 'Currently Learning & Building',
    org: 'Self-directed',
    period: 'Present',
    description: 'Deepening full-stack and cloud fundamentals while preparing to graduate and start a software development career.',
  },
]

export const projects = [
  {
    id: 'cineverse',
    number: '01',
    name: 'CineVerse',
    tag: 'Movie Recommendation System',
    description: 'A Netflix-inspired movie recommendation web application using content-based recommendation techniques.',
    stack: ['Python', 'Streamlit', 'Pandas', 'NumPy', 'Scikit-learn'],
    role: 'Solo Developer',
    github: 'https://github.com/megha281/CineVerse',
    live: 'https://cineverse-ycbmvs44tjtxuva3zwcrbx.streamlit.app/',
    status: null,
    overview: 'CineVerse recommends films to a viewer based on the content of movies they already like, rather than relying on other users\u2019 ratings.',
    problem: 'Choosing what to watch next is harder than it should be once a catalog runs into the thousands of titles, and generic "trending" lists rarely match a viewer\u2019s specific taste.',
    approach: 'Movie metadata is vectorised and compared using content-based similarity, so recommendations are generated from the attributes of the films themselves — genre, cast, and description — rather than crowd behaviour.',
    contribution: 'Designed and built the full pipeline solo: data preparation with Pandas and NumPy, the similarity model in Scikit-learn, and a Streamlit interface styled to feel like a real streaming product.',
  },
  {
    id: 'churniq',
    number: '02',
    name: 'ChurnIQ',
    tag: 'Customer Churn Prediction Platform',
    description: 'An interactive machine learning platform for customer churn analysis and prediction with data exploration, model insights and prediction functionality.',
    stack: ['Python', 'Streamlit', 'Scikit-learn', 'Machine Learning'],
    role: 'Solo Developer',
    github: 'https://github.com/megha281/Churn-app',
    live: 'https://churn-app-fxfg9ucwzslvkgeprervrg.streamlit.app/',
    status: null,
    overview: 'ChurnIQ lets a user explore customer data, understand what drives churn, and get a live prediction for a given customer profile.',
    problem: 'Businesses often only notice a customer is at risk of leaving after they\u2019ve already gone, by which point retention is far more expensive than prevention.',
    approach: 'A classification model trained with Scikit-learn scores churn risk, wrapped in a Streamlit app that surfaces data exploration and model insights alongside the prediction itself, not just a single output number.',
    contribution: 'Built the end-to-end platform: data exploration views, the churn model, and the interactive prediction interface.',
  },
  {
    id: 'neosched',
    number: '03',
    name: 'NeoSched',
    tag: 'Timetable & Attendance Management System',
    description: 'A Django-based academic management system developed as a team project.',
    stack: ['Python', 'Django', 'SQLite', 'HTML', 'CSS', 'JavaScript'],
    role: 'Core Developer',
    github: 'https://github.com/neela2470/Neo_sched',
    live: null,
    status: 'Team Project — Core Developer',
    overview: 'NeoSched is an academic management system that brings timetables, dashboards, and attendance tracking into a single Django application, built with a small team.',
    problem: 'Departments often manage timetables and attendance through scattered spreadsheets and manual processes that are slow to update and easy to get wrong.',
    approach: 'A Django backend models timetables, users, and attendance records, with dashboard views that give students and staff a single place to check schedules and attendance status.',
    contribution: 'One of the core developers on the team, building substantial parts of the timetable logic, dashboard and user-facing views, and attendance functionality. The repository is maintained under the team leader\u2019s GitHub account.',
  },
  {
    id: 'homelyhub',
    number: '04',
    name: 'HomelyHub',
    tag: 'Property Booking Platform',
    description: 'A property booking platform currently in development, built during a MERN Stack Development internship.',
    stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    role: 'Developer (Internship Project)',
    github: null,
    live: null,
    status: 'Currently in Development',
    overview: 'HomelyHub is a MERN-stack property booking platform, being built as part of an ongoing internship at Emertxe Information Technologies.',
    problem: 'Property browsing and booking flows need to feel fast and trustworthy across listing, search, and reservation — the core problem any booking platform has to solve well.',
    approach: 'A React front end talks to a Node/Express API backed by MongoDB, following the standard MERN architecture for a full booking flow.',
    contribution: 'Actively building the platform as part of the internship team; the project is in progress.',
  },
  {
    id: 'quizgame',
    number: '05',
    name: 'Python Quiz Game',
    tag: 'Command-Line Quiz Application',
    description: 'A Python command-line quiz application with interactive questions and score tracking.',
    stack: ['Python'],
    role: 'Solo Developer',
    github: 'https://github.com/megha281/python-quiz-game',
    live: null,
    status: null,
    overview: 'A command-line quiz game that asks the player a series of questions and tracks their score through the session.',
    problem: 'A small, self-contained project to practise core Python control flow, functions, and program structure end to end.',
    approach: 'Questions and scoring logic are handled with plain Python — no external libraries — keeping the project focused on fundamentals.',
    contribution: 'Built independently during a Python internship focused on programming and project development.',
  },
]

export const experience = [
  {
    id: 'mern',
    company: 'Emertxe Information Technologies',
    role: 'MERN Stack Development Intern',
    period: 'August 2026 — Present',
    location: 'Remote',
    status: 'current',
    work: 'Currently building HomelyHub, a property booking platform, using the MERN stack.',
    stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
  },
  {
    id: 'aiml',
    company: 'KineTrexa Software Private Limited',
    role: 'AI & Machine Learning Intern',
    period: '20 July 2026 — 19 August 2026',
    location: null,
    status: 'completed',
    work: 'Completed an internship focused on AI and machine learning, building CineVerse and ChurnIQ.',
    stack: ['Python', 'Scikit-learn', 'Streamlit'],
  },
  {
    id: 'python',
    company: 'UpSkill Campus / UniConverge Technologies Pvt. Ltd.',
    role: 'Python Intern',
    period: '2026',
    location: null,
    status: 'completed',
    work: 'Completed a Python internship focused on programming and project development, building the Python Quiz Game.',
    stack: ['Python'],
  },
]

export const certifications = [
  {
    id: 'aws',
    name: 'AWS Cloud Computing Virtual Internship',
    issuer: 'NASSCOM FutureSkills',
  },
  {
    id: 'genai',
    name: 'Generative AI Professional',
    issuer: 'Oracle University',
  },
  {
    id: 'aifoundations',
    name: 'AI Foundations Associate',
    issuer: 'Oracle University',
  },
  {
    id: 'datascience',
    name: 'Data Science Professional',
    issuer: 'Oracle University / Infosys Springboard',
  },
]

export const building = [
  {
    id: 'fullstack',
    title: 'Full Stack Development',
    description: 'Going deeper on production-grade MERN patterns through HomelyHub and beyond.',
  },
  {
    id: 'aiml',
    title: 'AI / ML',
    description: 'Extending from content-based recommenders and classifiers toward more applied ML work.',
  },
  {
    id: 'cloud',
    title: 'Cloud Technologies',
    description: 'Building on AWS fundamentals to deploy and manage real applications.',
  },
  {
    id: 'practices',
    title: 'Better Software Engineering Practices',
    description: 'Writing cleaner, more maintainable, and better-tested code as projects grow in scope.',
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
