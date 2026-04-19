export interface contributionsInterface {
  repo: string;
  contributionDescription: string;
  repoOwner: string;
  link: string;
}

export const contributionsUnsorted: contributionsInterface[] = [
  {
    repo: "dental-ai-assistant",
    contributionDescription:
      "Built an intelligent dental assistant platform featuring AI-driven diagnostic analysis, automated appointment scheduling, and patient record management using Next.js, Node.js, and PostgreSQL.",
    repoOwner: "sualihh",
    link: "",
  },
  {
    repo: "mobile-pos-system",
    contributionDescription:
      "Developed a mobile-based POS platform that enables small businesses to process sales, manage inventory, and track revenue in real time, with offline-first support using SQLite to ensure uninterrupted operation during internet outages. Designed a fast checkout experience and simple UI tailored for non-technical shop owners, backed by a scalable Node.js and MongoDB architecture.",
    repoOwner: "sualihh",
    link: "",
  },
  {
    repo: "ecommerce-platform",
    contributionDescription:
      "Created an e-commerce platform with cart, checkout, order tracking, and admin dashboard using Next.js, Node.js, and MongoDB.",
    repoOwner: "sualihh",
    link: "https://github.com/sualihh/eccomerce",
  },
  // {
  //   repo: "ecommerce-platform",
  //   contributionDescription:
  //     "Implemented admin panel for managing products, inventory, and sales analytics using Next.js and Node.js.",
  //   repoOwner: "sualihh",
  //   link: "https://github.com/sualihh/ecommerce",
  // },
  {
    repo: "portfolio",
    contributionDescription:
      "Customized and improved a Next.js portfolio  for personal branding, adding responsive UI and dark mode.",
    repoOwner: "sualihh",
    link: "https://github.com/sualihh/portfolio",
  },
  {
    repo: "product-management-app",
    contributionDescription:
      "Developed a full-stack Product Management application where users can view, add, edit, and delete products. Implemented structured frontend and backend architecture to practice real-world application development.",
    repoOwner: "sualihh",
    link: "https://github.com/sualihh/productapp",
  },
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(0, 3);
