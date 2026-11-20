import Image from "next/image";
import Link from "next/link";
import { AppLink } from "@/components/ui/AppLink";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { HeaderActions, NavItem } from "@/types/content";
import { MobileMenu } from "./MobileMenu";

interface HeaderProps {
  items: NavItem[];
  actions: HeaderActions;
}

/**
 * Mobile and tablet (< lg): logo + hamburger. Desktop (≥ lg): logo, nav centered on the
 * page, and the Log in / Start learning actions. Total height includes the 1px border
 * (68px mobile, 70px desktop).
 */
export function Header({ items, actions }: HeaderProps) {
  return (
    <header className="relative z-40 border-b border-border bg-cream">
      <Container className="flex h-[67px] items-center justify-between lg:grid lg:h-[69px] lg:grid-cols-[1fr_auto_1fr]">
        <Link href="/" aria-label="luma. home" className="justify-self-start transition-opacity hover:opacity-70">
          <Image
            src="/icons/logo-luma.svg"
            alt=""
            width={54}
            height={17}
          />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex gap-8">
            {items.map((item) => (
              <li key={item.label}>
                <AppLink
                  href={item.href}
                  className="type-body text-text transition-colors hover:text-ink"
                >
                  {item.label}
                </AppLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center justify-end gap-2 lg:flex">
          <Button variant="ghost" href={actions.login.href}>
            {actions.login.label}
          </Button>
          <Button size="sm" href={actions.cta.href}>
            {actions.cta.label}
          </Button>
        </div>

        <MobileMenu items={items} actions={actions} />
      </Container>
    </header>
  );
}
