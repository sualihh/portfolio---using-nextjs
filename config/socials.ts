import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@sualihh",
    icon: Icons.gitHub,
    link: "https://github.com/sualihh",
  },
  {
    name: "LinkedIn",
    username: "Sualih Mohammed",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/sualih-mohammed-37669436b/",
  },
  // {
  //   name: "Twitter",
  //   username: "@namanbarkiya",
  //   icon: Icons.twitter,
  //   link: "https://twitter.com/namanbarkiya",
  // },
  {
    name: "Gmail",
    username: "sualihmohammed53",
    icon: Icons.gmail,
    link: "mailto:sualihmohammed53@gmail.com",
  },
];
