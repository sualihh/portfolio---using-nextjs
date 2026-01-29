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
    skills: [ "MongoDB", "Node.js", "Javascript", "React",   "express.js"],
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
  skills: ["Javascript", "React", "Node.js", "express.js",  "PostgreSQL"],
  companyUrl: "",
  logo: "/logo.png",
}

];





