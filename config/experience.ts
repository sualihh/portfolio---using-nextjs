import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  // {
  //   id: "tech-startup",
  //   position: "Founder & Fullstack Developer",
  //   company: "MyTech Startup",
  //   location: "Addis Ababa, Ethiopia",
  //   startDate: new Date("2025-01-01"),
  //   endDate: "Present",
  //   description: [
  //     "Built a full-stack SaaS project management app using Next.js, React, Node.js, and MongoDB.",
  //     "Designed and implemented authentication, role-based access, and REST APIs.",
  //     "Created responsive UI with Tailwind CSS, ensuring cross-device usability.",
  //   ],
  //   achievements: [
  //     "Launched MVP in 4 months with core features: boards, tasks, teams, and activity logs.",
  //     "Implemented secure JWT-based authentication with refresh tokens.",
  //     "Optimized database queries, reducing load time by 40%.",
  //   ],
  //   skills: ["Typescript", "React", "Next.js", "Node.js", "MongoDB",],
  //   companyUrl: "",
  //   logo: "/experience/startup-logo.png",
  // },

  {
    id: "dental-ai-assistant",
    position: "Fullstack Developer",
    company: "Personal SaaS Project",
    location: "Healthcare Tech",
    startDate: new Date("2026-01-15"),
    endDate: new Date("2026-04-15"),
    description: [
      "Developed an AI-powered dental assistant to support clinical decision-making, patient record management, and automated clinic workflows.",
      "Integrated Large Language Models (LLMs) to analyze dental notes and patient history, providing practitioners with actionable clinical insights.",
      "Built a robust RESTful API with Node.js and Express to manage secure patient data, appointments, and diagnostic logs.",
      "Designed an intuitive, accessibility-focused interface in Next.js, allowing dentists to quickly retrieve patient data in high-pressure clinical environments.",
    ],
    achievements: [
      "Enhanced clinical efficiency by automating the synthesis of complex patient records into concise summaries.",
      "Streamlined appointment scheduling and resource allocation, reducing administrative bottlenecks.",
      "Ensured high data integrity and security for sensitive healthcare information through careful architectural design.",
      "Optimized data retrieval times, ensuring near-instant access to patient history during consultations.",
    ],
    skills: [
      "Typescript",
      "Next.js",
      "React",
      "Node.js",
      "express.js",
      "Prisma",
      "PostgreSQL",
      "OpenAI API",
    ],
    companyUrl: "",
    logo: "/dental-logo.png",
  },

  {
    id: "mobile-pos-system",
    position: "Mobile App Developer",
    company: "Personal SaaS Project",
    location: "Local Businesses",
    startDate: new Date("2026-01-01"),
    endDate: new Date("2026-02-15"),
    description: [
      "Developed a mobile-based POS system enabling small businesses to process sales, manage inventory, and track daily revenue efficiently.",
      "Implemented an offline-first architecture using SQLite, allowing uninterrupted operation during network outages with automatic data synchronization.",
      "Built RESTful APIs for product management, sales tracking, and reporting using Node.js and Express.",
      "Designed a simple and fast checkout interface optimized for real shop environments and non-technical users.",
    ],
    achievements: [
      "Enabled continuous sales operation even during extended internet outages through offline mode.",
      "Reduced checkout time by streamlining the sales flow for faster transactions.",
      "Improved inventory accuracy by automatically updating stock after each sale.",
      "Designed the system to run smoothly on low-end Android devices commonly used by small shops.",
    ],
    skills: [
      "Typescript",
      "React Native",
      "Node.js",
      "MongoDB",
      "SQLite",
      "express.js",
    ],
    companyUrl: "",
    logo: "/pos.png",
  },
  {
    id: "fintech-wallet",
    position: "Fullstack Developer",
    company: "Learning Project",
    location: "Locally",
    startDate: new Date("2025-05-01"),
    endDate: new Date("2025-06-01"),
    description: [
      "Developed a digital wallet system with transaction management and rollback using MongoDB transactions.",
      "Integrated secure user authentication and admin dashboards.",
      "Built REST APIs for balance management, transaction history, and inter-user transfers.",
    ],
    achievements: [
      "Successfully simulated 1000+ concurrent transactions without errors using MongoDB sessions.",
      "Implemented role-based access control for users and admins.",
      "Created a professional demo site to showcase the wallet system to clients.",
    ],
    skills: ["Typescript", "React", "Node.js", "MongoDB", "express.js"],
    companyUrl: "",
    logo: "/logo.png",
  },
  {
    id: "ecommerce-project",
    position: "Fullstack Developer",
    company: "Learning Project",
    location: "Locally",
    startDate: new Date("2024-09-01"),
    endDate: new Date("2024-10-01"),
    description: [
      "Developed a fully functional e-commerce platform with cart, checkout, and order tracking.",
      "Implemented admin panel for product management and sales analytics.",
      "Integrated payment simulation and inventory management using Node.js and MongoDB.",
    ],
    achievements: [
      "Created reusable React components for product cards, cart, and checkout forms.",
      "Used MongoDB aggregations to generate sales reports and stock alerts.",
      "Deployed full-stack app on Vercel with CI/CD pipelines.",
    ],
    skills: ["MongoDB", "Node.js", "Javascript", "React", "express.js"],
    companyUrl: "",
    logo: "/logo.png",
  },
  {
    id: "productapp",
    position: "Fullstack Developer",
    company: "Learning Project",
    location: "Locally",
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-02-01"),
    description: [
      "Developed a full-stack product management application allowing users to view, add, edit, and delete products.",
      "Built a structured frontend using React and backend with Node.js and Express to simulate real-world application architecture.",
      "Implemented CRUD operations, product search, and category filtering for a seamless user experience.",
    ],
    achievements: [
      "Created reusable React components for product listing, forms, and modals to speed up development.",
      "Integrated MongoDB for persistent product storage and implemented RESTful API endpoints with Express.",
      "Practiced deploying a full-stack application and set up a local CI/CD workflow for future deployment.",
    ],
    skills: ["Javascript", "React", "Node.js", "express.js", "PostgreSQL"],
    companyUrl: "",
    logo: "/logo.png",
  },
];
