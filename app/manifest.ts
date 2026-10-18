import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sualih Mohammed | Full-stack Developer",
    short_name: "Sualih Mohammed",
    description: "Full-stack developer building web and mobile products.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/profile-img.jpg",
        sizes: "400x400",
        type: "image/jpeg",
      },
    ],
    categories: ["portfolio", "developer", "web development"],
    lang: "en",
    dir: "ltr",
    scope: "/",
  };
}
