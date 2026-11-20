import type {
  CategoriesContent,
  ContactContent,
  FeaturedCourseContent,
  FinalCtaContent,
  FooterContent,
  HeaderActions,
  HeroContent,
  HowItWorksContent,
  NavItem,
  PeopleContent,
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
  primaryCta: { label: "View course", href: "#" },
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
      // Decorative: the name is already in the figcaption.
      alt: "",
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

export const people: PeopleContent = {
  eyebrow: "The people",
  title: "Meet international students & teachers",
  // Lorem ipsum in the design, kept as is.
  body: "Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus aenean lorem faucibus integer.",
  cta: { label: "Explore teachers and students", href: "#" },
  collage: [
    {
      src: "/images/people/people-col-1.png",
      alt: "Students studying at home and in class",
      width: 293,
      height: 891,
    },
    {
      src: "/images/people/people-col-2.png",
      alt: "Students reading, singing and studying",
      width: 222,
      height: 1060,
    },
    {
      src: "/images/people/people-col-3.png",
      alt: "A graduate, a student working at her desk and an online lesson",
      width: 222,
      height: 931,
    },
    {
      src: "/images/people/people-col-4.png",
      alt: "Two students with books and a coffee on campus",
      width: 273,
      height: 721,
    },
  ],
};

export const contact: ContactContent = {
  eyebrow: "Contact",
  title: "Get in touch",
  description:
    "Have a question? We’re here to help. Whether you’re looking for the right course, learning with your team or interested in teaching with Luma, we’d love to hear from you.",
  items: [
    {
      icon: "/icons/contact-email.svg",
      title: "Email",
      detail: "contact@luma.com",
      href: "mailto:contact@luma.com",
    },
    {
      icon: "/icons/contact-response-time.svg",
      title: "Response Time",
      detail: "Up to 24 hours on business days",
    },
  ],
  form: {
    title: "Contact us",
    description: "Fill out the fields and we will get in touch.",
    submitLabel: "Send message",
    sendingLabel: "Sending…",
    successMessage:
      "Thanks! Your message has been sent. We will get back to you within 24 hours on business days.",
    fields: [
      {
        id: "contact-name",
        name: "name",
        label: "Full name",
        type: "text",
        placeholder: "Your name",
        autoComplete: "name",
        required: true,
        requiredMessage: "Please enter your full name.",
      },
      {
        id: "contact-email",
        name: "email",
        label: "Email",
        type: "email",
        placeholder: "youremail@example.com",
        autoComplete: "email",
        required: true,
        requiredMessage: "Please enter your email.",
        invalidMessage: "Please enter a valid email address.",
      },
      {
        id: "contact-message",
        name: "message",
        label: "Your question",
        type: "textarea",
        placeholder: "Tell us how we can help...",
        required: true,
        requiredMessage: "Please tell us how we can help.",
      },
    ],
  },
};

export const finalCta: FinalCtaContent = {
  title: "What will you learn next?",
  subtitle: "Start with one course. Build from there.",
  primaryCta: { label: "Explore all courses", href: "#categories" },
  secondaryCta: { label: "Join Luma", href: "#" },
  // Decorative: the yellow border is part of the image.
  avatars: [1, 2, 3, 4].map((n) => ({
    src: `/images/cta-avatar-0${n}.png`,
    alt: "",
    width: 80,
    height: 80,
  })),
};
