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
