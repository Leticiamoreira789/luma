import type {
  FooterContent,
  HeaderActions,
  NavItem,
} from "@/types/content";

/*
 * Mock content. Section ids (#categories, #people, ...) are the anchor targets that the
 * sections will define in the next steps of Phase 3. Links with no matching page or section
 * in the design point to "#".
 */

export const mainNav: NavItem[] = [
  { label: "Courses", href: "#categories" },
  { label: "For Teams", href: "#people" },
  { label: "Community", href: "#testimonial" },
  { label: "About", href: "#how-it-works" },
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
        { label: "Instructors", href: "#people" },
        { label: "For Teams", href: "#people" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#how-it-works" },
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
