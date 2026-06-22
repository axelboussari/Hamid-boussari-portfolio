import heroImage from '../assets/profil.jpeg';

export const personalInfo = {
  name: "Olawolé BOUSSARI",
  role: "Software Engineer | Automation & AI Enthusiast | IT support",
  description:
    "I build scalable applications and explore automation, networking and artificial intelligence.",
  cvPath: "/cv.pdf",
  image: heroImage,
  email: "axel.boussari@gmail.com",
  github: "https://github.com/axelboussari",
  linkedin: "https://www.linkedin.com/in/hamid-boussari-722873241",
};

export const aboutData = {
  paragraphs: [
    "I'm a Software Engineer with a passion for building efficient, scalable systems. My expertise spans full-stack development, network automation, and AI-powered solutions.",
    "I thrive on solving complex problems through clean code and innovative thinking — whether automating network infrastructure or building intelligent applications.",
  ],
  stats: [
    { label: "Years of Experience", value: "3+" },
    { label: "Projects Completed", value: "5+" },
    { label: "Technologies Mastered", value: "20+" },
  ],
};

export const skillsData = [
  { category: "Languages", icon: "bi-code-slash", items: ["Python", "C", "C++", "C#"] },
  { category: "Frontend", icon: "bi-layout-text-window", items: ["React", "HTML5", "CSS3", "Bootstrap", "Angular"] },
  { category: "Backend", icon: "bi-server", items: ["PHP", "Laravel", "Django"] },
  { category: "AI & Data", icon: "bi-cpu", items: ["TensorFlow", "scikit-learn", "Pandas", "NumPy", "Microsoft copilot studio", "Prompt Engineering", "N8N"] },
  {category: "DataBases", icon:"bi-database", items: ["MySQL"]},
  // { category: "DevOps & Tools", icon: "bi-gear", items: ["Docker", "Git", "Linux", "CI/CD"] },
  { category: "Networking", icon: "bi-diagram-3", items: ["Cisco", "TCP/IP", "VLANs"] },
];

export const projectsData = [
  {
    title: "AI Chatbot Assistant",
    description:
      "Conversational AI assistant built with python, integrated with LLM APIs for intelligent, context-aware responses.",
    tags: ["Python","AI", "LLM", "NLP"],
    github: "https://github.com/axelboussari",
    demo: null,
  },
  {
    title: "Portfolio Website",
    description:
      "This portfolio built with React 19 and Vite, featuring dark/light mode, smooth scroll animations and responsive design.",
    tags: ["React", "Vite", "Bootstrap"],
    github: "https://github.com/axelboussari/Hamid-boussari-portfolio.git",
    demo: null,
  },
  {
    title: "StarTrack",
    description:
      "Credit sales management platform built with Laravel. Features customer tracking, transaction recording, and payment follow-up, designed to help small businesses manage credit sales efficiently.",
    tags: ["Laravel", "PHP", "MySQL"],
    github: "https://github.com/axelboussari",
    demo: null,
  },
  {
    title: "AI Assistant for Digital Code Regulations",
    description:
      "Built an intelligent conversational assistant with Microsoft Copilot Studio to simplify access to Digital Code legislation. The solution enables citizens and professionals to query legal articles in natural language, receive contextual explanations, and quickly locate relevant regulatory information.",
    tags: ["Copilot Studio", "Generative AI", "Power Platform", "Knowledge Base"],
    github: null,
    demo: null,
  },
];

export const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];
