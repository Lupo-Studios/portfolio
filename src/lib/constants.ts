export const SITE = {
  name: "Anthony Lupo",
  title: "Anthony Lupo — Lupo Studios",
  description:
    "Strategic Account Executive. AI-fluent operator. Builder of systems.",
  url: "https://humanlup.com",
  author: "Anthony Lupo",
  locale: "en_US",
} as const;

export const NAV_ITEMS = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/Lupo-Studios", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/anthonylupo",
    icon: "linkedin",
  },
  { label: "X", href: "https://x.com/humanlup", icon: "twitter" },
] as const;
