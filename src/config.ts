import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://stavkv.is-a.dev/", // replace this with your deployed domain
  author: "Vikki",
  desc: "A minimal, responsive and SEO-friendly Astro blog by Vikki.",
  title: "Vik.",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/stavkv",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.in/vikal-singh",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:stavkv.air@proton.me",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/vikistaken",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
  {
    name: "GitLab",
    href: "https://gitlab.com/stavkv",
    linkTitle: `${SITE.title} on GitLab`,
    active: true,
  },
];
