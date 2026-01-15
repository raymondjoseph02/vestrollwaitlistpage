export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  links: {
    twitter: string;
    github: string;
  };
}

export interface NavLink {
  label: string;
  href: string;
}

export type Theme = "light" | "dark" | "system";
