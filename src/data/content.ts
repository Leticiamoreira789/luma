import type {
  CategoriesContent,
  FeaturedCourseContent,
  FooterContent,
  HeaderActions,
  HeroContent,
  HowItWorksContent,
  NavItem,
  TestimonialContent,
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

export const featuredCourse: FeaturedCourseContent = {
  tag: "Featured course",
  eyebrow: "Most popular this month",
  title: "Designing products people understand.",
  description:
    "Learn how to turn complex workflows into simple, intentional product experiences through research, structure and thoughtful interaction design.",
  instructor: "with Maya Chen · Senior Product Designer",
  chips: ["8 lessons", "2h 40min", "Intermediate"],
  primaryCta: { label: "View course", href: "#featured-course" },
  secondaryCta: { label: "Browse all courses", href: "#categories" },
  image: {
    src: "/images/featured-course.png",
    alt: "Product design course: student working on interface designs",
    width: 1076,
    height: 816,
  },
  imageMobile: {
    src: "/images/featured-course-mobile.png",
    alt: "Product design course: student working on interface designs",
    width: 724,
    height: 560,
  },
};

export const howItWorks: HowItWorksContent = {
  eyebrow: "How Luma works",
  title: "Less browsing. More learning.",
  steps: [
    {
      label: "Step 01",
      title: "Choose your focus",
      description:
        "Find courses based on the skill you want to build, not endless content categories.",
      icon: "focus",
    },
    {
      label: "Step 02",
      title: "Learn from experience",
      description:
        "Follow concise lessons created by professionals who use these skills.",
      icon: "experience",
    },
    {
      label: "Step 03",
      title: "Put it into practice",
      description:
        "Every course includes practical exercises designed to turn knowledge into action.",
      icon: "practice",
    },
  ],
};

export const testimonial: TestimonialContent = {
  quote:
    "The lessons are short enough to fit into my week, but detailed enough that I actually leave with something I can use.",
  author: {
    name: "Alex Morgan",
    role: "Product Manager",
    avatar: {
      src: "/images/testimonial-alex-morgan.png",
      alt: "Alex Morgan",
      width: 96,
      height: 96,
    },
  },
  stats: [
    { value: "24K+", label: "active learners" },
    { value: "120+", label: "expert-led courses" },
    { value: "92%", label: "complete their first course" },
  ],
};
