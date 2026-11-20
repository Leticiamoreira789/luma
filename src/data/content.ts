import type {
  FooterContent,
  HeaderActions,
  NavItem,
} from "@/types/content";

/*
 * Mock content. A link points to a section anchor only when its name matches the section;
 * everything else is "#" because the page does not exist (see design-refs/notes.md).
 */

export const mainNav: NavItem[] = [
  { label: "Courses", href: "#categories" },
  { label: "For Teams", href: "#" },
  { label: "Community", href: "#" },
  { label: "About", href: "#" },
];

export const headerActions: HeaderActions = {
  login: { label: "Log in", href: "#" },
  cta: { label: "Start learning", href: "#featured-course" },
};

export const footer: FooterContent = {
  tagline: "Practical learning for curious people.",
  columns: [
    {
      title: "Explore",
      links: [
        { label: "Courses", href: "#categories" },
        { label: "Categories", href: "#categories" },
        { label: "Instructors", href: "#" },
        { label: "For Teams", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Journal", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "#" },
        { label: "Contact", href: "#contact" },
        { label: "Terms", href: "#" },
        { label: "Privacy", href: "#" },
      ],
    },
  ],
  copyright: "© 2026 Luma Learning",
};
