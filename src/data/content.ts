import type {
  CategoriesContent,
  FooterContent,
  HeaderActions,
  HeroContent,
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

export const hero: HeroContent = {
  eyebrow: "Learn at your own pace",
  title: "Build skills that actually move you forward.",
  subtitle:
    "Practical courses taught by people who do the work every day. Learn design, technology, business and more — one focused lesson at a time.",
  primaryCta: { label: "Explore courses", href: "#categories" },
  secondaryCta: { label: "See how it works", href: "#how-it-works" },
  trust: {
    highlight: "Trusted by 24,000+",
    text: "learners",
    // Decorative: the text next to them carries the meaning. The cream border is part of the image.
    avatars: [
      { src: "/images/hero-avatar-01.png", alt: "", width: 64, height: 64 },
      { src: "/images/hero-avatar-02.png", alt: "", width: 64, height: 64 },
      { src: "/images/hero-avatar-03.png", alt: "", width: 64, height: 64 },
    ],
  },
  image: {
    src: "/images/hero-learner.png",
    alt: "Person focused on learning at their laptop",
    width: 1000,
    height: 1040,
  },
  imageMobile: {
    src: "/images/hero-learner-mobile.png",
    alt: "Person focused on learning at their laptop",
    width: 692,
    height: 760,
  },
  courseBadge: { value: "120+", label: "expert-led courses" },
  ratingBadge: { label: "4.9 avg rating", stars: 5 },
};

export const categories: CategoriesContent = {
  eyebrow: "Find your next skill",
  title: "Learn something worth knowing.",
  subtitle:
    "Short, practical courses designed around skills you can put to work immediately.",
  cardCta: "Explore",
  items: [
    {
      number: "01",
      title: "Product Design",
      description: "Turn complex problems into clear, useful experiences.",
      href: "#",
    },
    {
      number: "02",
      title: "Technology",
      description:
        "Build a stronger understanding of the tools shaping digital products.",
      href: "#",
    },
    {
      number: "03",
      title: "Business",
      description: "Develop practical skills for better decisions and stronger teams.",
      href: "#",
    },
    {
      number: "04",
      title: "Creative",
      description: "Explore new ways to communicate, create and tell stories.",
      href: "#",
    },
  ],
};
