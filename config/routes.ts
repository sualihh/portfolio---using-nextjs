export interface RouteItem {
  title: string;
  href: string;
}

export const routesConfig: { mainNav: RouteItem[] } = {
  mainNav: [
    {
      title: "Skills",
      href: "/skills",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Experience",
      href: "/experience",
    },
    {
      title: "Contributions",
      href: "/contributions",
    },
  ],
};
