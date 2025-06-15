
import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  name: "Rudrashetty Tarini",
  title: "Software Engineering Student | AI & ML Enthusiast",
  profileImageUrl: "https://picsum.photos/seed/tarini/300/300",
  contact: {
    email: "tarini.rudrashetty@gmail.com",
    phone: "+91 6305874132",
    linkedin: "TariniRudrashetty",
    github: "RudrashettyTarini",
    codechef: "tarinir",
    leetcode: "TariniR",
  },
  profileSummary: "Adaptable software engineering student with a strong foundation in AI, ML, and scalable application development. Passionate about solving real-world problems through technology. Experienced in leading teams and deploying machine learning models. Committed, collaborative, and driven to thrive in dynamic environments.",
  education: [
    {
      degree: "Bachelor of Engineering - Computer Science",
      specialization: "AI & ML Specialization",
      institution: "Chaitanya Bharathi Institute of Technology, Hyderabad",
      duration: "Nov 2022 - May 2026",
      grade: "GPA: 9/10",
    },
    {
      degree: "Higher Secondary Education",
      institution: "Narayana Institute, Hyderabad",
      duration: "Jun 2020 - Aug 2022",
      grade: "Marks: 980/1000",
    },
    {
      degree: "Primary and Secondary Education",
      institution: "Rosary Convent High School, Hyderabad",
      duration: "Jun 2010 - May 2020",
      grade: "GPA: 10/10",
    },
  ],
  experience: [
    {
      role: "DRDO Intern",
      company: "Defence Research and Development Organisation",
      duration: "Jun 2025 – Jul 2025 (Expected)",
      description: [
        "Developed and fine-tuned domain-specific LLMs for secure text processing and information retrieval.",
      ],
      logoUrl: "https://picsum.photos/seed/drdo/100/100",
    },
    {
      role: "Machine Learning Intern",
      company: "AICTE IDEA Lab - Rural and Entrepreneurship Development",
      duration: "Jun 2024 - Aug 2024",
      description: [
        "Developed AI-driven solutions addressing rural entrepreneurial challenges by deploying machine learning models in real-world scenarios.",
        "Contributed to innovation challenges and supported startup incubation and ideation initiatives.",
      ],
      logoUrl: "https://picsum.photos/seed/aictelab/100/100",
    },
  ],
  positions: [
    {
      role: "Vice Chair",
      organization: "IEEE CBIT - Robotics and Automation Society",
      duration: "Aug 2024 - Present",
      description: [
        "Led robotics workshops and competitions for 650+ participants; mentored peers on robotics projects and development.",
        "Coordinated flagship event Udbhava, weekly tech updates, membership drives, and career-focused initiatives.",
        "Organized masterclasses, interview prep sessions, alumni talks, and webinars on emerging technologies.",
      ],
    },
    {
      role: "Executive Board Member",
      organization: "Avinya - ACIC СВІТ",
      duration: "Aug 2024 - Present",
      description: [
        "Managed innovation challenge workflows. Promoted grassroots innovation via IPR sessions and Srushti Sangamam Ideathons (300+ teams).",
      ],
    },
    {
        role: "Coordinator",
        organization: "Neural Nexus – AIML Student Chapter",
        duration: "Mar 2024 – Mar 2025",
        description: [
            "Organized AI/ML workshops and events (350+ participants), including Cognitive Combat and CodeCon.",
            "Led GenAI certification drives and curated technical content."
        ]
    },
    {
        role: "Class Representative, CSE (AIML)",
        organization: "CBIT",
        duration: "July 2024 - Present",
        description: []
    },
    {
        role: "Member, CPC",
        organization: "CBIT Photo Club",
        duration: "Jan 2023 – Dec 2023",
        description: []
    }
  ],
  projects: [
    {
      name: "Next Skills 360 – Full Stack E-Commerce EdTech Application",
      description: "Built responsive e-commerce site using React.js, integrated Kommunicate chat and Razorpay for payments. Designed scalable frontend; version control with Git/GitHub.",
      technologies: ["React.js", "Kommunicate", "Razorpay", "Git", "GitHub"],
      sourceCodeUrl: "#", // Placeholder
      imageUrl: "https://picsum.photos/seed/nextskills/400/250",
    },
    {
      name: "Price Forecasting in Agri-Markets using Machine Learning",
      description: "Co-authored a paper on commodity price prediction using XGBoost, ARIMA, and Prophet. Performed time-series analysis on govt datasets; delivered actionable insights, using Python, Scikit-learn, Pandas, Jupyter.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Jupyter", "XGBoost", "ARIMA", "Prophet"],
      researchPaperUrl: "#", // Placeholder
      sourceCodeUrl: "#", // Placeholder
      imageUrl: "https://picsum.photos/seed/agrimarket/400/250",
    },
    {
      name: "Dynamic Portfolio – MERN Stack",
      description: "Developed static React portfolio; migrated to MERN stack with REST API integration. Built admin dashboard using Ant Design for real-time content updates, also used Tailwind CSS.",
      technologies: ["MERN Stack", "React", "Node.js", "Express", "MongoDB", "Ant Design", "Tailwind CSS", "REST API"],
      imageUrl: "https://picsum.photos/seed/mernportfolio/400/250",
    },
  ],
  technicalSkills: {
    languages: ["Python", "C", "Java", "R", "SQL", "HTML", "CSS", "JavaScript"],
    librariesFrameworks: ["NumPy", "Pandas", "Scikit-learn", "TensorFlow", "React.js", "Node.js", "Express.js"],
    toolsPlatforms: ["Git", "Linux", "VS Code", "Jupyter", "MySQL", "MongoDB", "Power BI", "Kaggle", "GitHub"],
    concepts: [
      "Artificial Intelligence", "Machine Learning", "Deep Learning", "Natural Language Processing",
      "Data Structures and Algorithms", "Object Oriented Programming", "Database Management Systems",
      "Operating Systems", "Computer Networks", "Data Science",
    ],
    other: ["Agile", "DevOps", "Cloud Basics", "Data Visualization", "Web Development", "Software Engineering"],
  },
  certifications: [
    { name: "Azure AI Fundamentals", issuer: "Microsoft Certified" },
    { name: "AI Associate", issuer: "Salesforce Certified" },
    { name: "AI Foundations Associate", issuer: "Oracle Cloud Infrastructure Certified" },
  ],
  achievements: [
    { title: "Winner of JPMC Code for Good Hackathon 2024", year: 2024, description: "JP Morgan" },
    { title: "Semi-Finalist in Google Girl Hackathon 2025", year: 2025, description: "Google" },
    { title: "Qualified with specialization in Computer Science Engineering (CSE)", year: 2025, description: "GATE 2025" },
    { title: "Shortlisted in Haxelerate Hackathon for an innovative solution", description: "ByteXL & Microsoft" },
    { title: "Qualified by clearing the internal selection round for the national innovation challenge", description: "Smart India Hackathon (SIH)" },
    { title: "Solved 600+ Data Structures and Algorithms problems", description: "Across platforms like LeetCode, CodeChef, HackerRank, and TakeUForward." },
  ],
  extraCurricular: [
    { activity: "Chess and Table Tennis", description: "Active participant with competitive experience." },
    { activity: "Art", description: "Skilled in Art, with participation in various school and college events." },
    { activity: "Reading & Puzzles", description: "Enthusiast in reading articles & books, solving puzzles, and exploring new concepts in technology." },
  ],
  languageProficiency: [
    { language: "English", proficiency: "Full Professional Proficiency" },
    { language: "Hindi", proficiency: "Professional Working Proficiency" },
    { language: "Telugu", proficiency: "Native or Bilingual Proficiency" },
  ],
};
