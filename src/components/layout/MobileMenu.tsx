"use client";

import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import type { HeaderActions, NavItem } from "@/types/content";
import { Button } from "@/components/ui/Button";

interface MobileMenuProps {
  items: NavItem[];
  actions: HeaderActions;
}

/*
 * Hamburger button + panel for < lg. The panel is not in the design, so it reuses the
 * header styles (cream bg, body-1 links, primary button).
 * TODO (Phase 4): Esc, click outside, focus management, scroll lock, close on link click/resize.
 */
export function MobileMenu({ items, actions }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
        className="flex size-9 items-center justify-center rounded-control p-1.5 text-ink transition-colors hover:bg-black/5 lg:hidden"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          aria-hidden="true"
          focusable="false"
        >
          {open ? (
            <path d="M6 6L18 18M18 6L6 18" />
          ) : (
            <path d="M2 6H22M2 12H22M2 18H22" />
          )}
        </svg>
      </button>

      <div
        id="mobile-menu"
        hidden={!open}
        className={clsx(
          "absolute inset-x-0 top-full border-b border-border bg-cream lg:hidden",
        )}
      >
        <nav aria-label="Mobile" className="px-5 pt-2 pb-6 md:px-10">
          <ul>
            {items.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="type-body block py-3 text-text hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-3">
            <Button variant="secondary" href={actions.login.href}>
              {actions.login.label}
            </Button>
            <Button href={actions.cta.href}>{actions.cta.label}</Button>
          </div>
        </nav>
      </div>
    </>
  );
}
