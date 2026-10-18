export interface RouteItem {
  title: string;
  href: string;
}

export const routesConfig: { mainNav: RouteItem[] } = {
  mainNav: [
    {
      title: "About",
      href: "/#about",
    },
    {
      title: "Services",
      href: "/#services",
    },
    {
      title: "Work",
      href: "/#projects",
    },
    {
      title: "Experience",
      href: "/#experience",
    },
    {
      title: "Contributions",
      href: "/#contributions",
    },
    {
      title: "Process",
      href: "/#process",
    },
  ],
};
