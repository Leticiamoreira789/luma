export interface NavItem {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: NavItem[];
}

export interface HeaderActions {
  login: NavItem;
  cta: NavItem;
}

export interface FooterContent {
  tagline: string;
  columns: FooterColumn[];
  copyright: string;
}

export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: NavItem;
  secondaryCta: NavItem;
  trust: {
    /** Bold part, e.g. "Trusted by 24,000+". */
    highlight: string;
    /** Regular part, e.g. "learners". */
    text: string;
    avatars: ImageAsset[];
  };
  /** Desktop and tablet photo (500×520 frame). */
  image: ImageAsset;
  /** Mobile photo (346×380 frame, different crop in the design). */
  imageMobile: ImageAsset;
  courseBadge: { value: string; label: string };
  ratingBadge: { label: string; stars: number };
}

export interface CategoryItem {
  number: string;
  title: string;
  description: string;
  href: string;
}

export interface CategoriesContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  cardCta: string;
  items: CategoryItem[];
}
