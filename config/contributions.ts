export interface contributionsInterface {
  repo: string;
  contributionDescription: string;
  repoOwner: string;
  link: string;
}



export const contributionsUnsorted: contributionsInterface[] = [

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
    repo: "minimal-next-portfolio",
    contributionDescription:
      "Customized and improved a Next.js portfolio  for personal branding, adding responsive UI and dark mode.",
    repoOwner: "sualihh",
    link: "https://github.com/sualihh/minimal-next-portfolio",
  },
  {
  repo: "product-management-app",
  contributionDescription:
    "Developed a full-stack Product Management application where users can view, add, edit, and delete products. Implemented structured frontend and backend architecture to practice real-world application development.",
  repoOwner: "sualihh",
  link: "https://github.com/sualihh/productapp",
}

];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(0, 3);
