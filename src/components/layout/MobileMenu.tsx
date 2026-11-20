"use client";

import clsx from "clsx";
import { useCallback, useEffect, useRef, useState } from "react";
import { AppLink } from "@/components/ui/AppLink";
import { Button } from "@/components/ui/Button";
import type { HeaderActions, NavItem } from "@/types/content";

interface MobileMenuProps {
  items: NavItem[];
  actions: HeaderActions;
}

/** Same breakpoint as `lg` in globals.css. */
const DESKTOP_QUERY = "(min-width: 64rem)";
const FOCUSABLE = "a[href], button:not([disabled])";

/*
 * Hamburger button + panel for < lg. The panel is not in the design, so it reuses the
 * header styles (cream bg, body-1 links, primary button).
 *
 * While open:
 * - focus moves to the first link, and Tab/Shift+Tab cycle inside the panel
 * - the page behind cannot scroll
 * - Esc, a click outside, a click on a link or resizing to desktop close it
 * Focus goes back to the hamburger on Esc and when the button itself is clicked. It is not
 * forced back after a link click (the in-page navigation owns the focus) or a click
 * outside (the user chose where to go).
 *
 * The panel stays mounted and is `inert` when closed, so the open/close transition can run.
 * It only runs without prefers-reduced-motion.
 */
export function MobileMenu({ items, actions }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const close = useCallback((restoreFocus: boolean) => {
    setOpen(false);
    if (restoreFocus) buttonRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    if (!panel) return;

    const focusables = () =>
      Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE));
    focusables()[0]?.focus();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        close(true);
        return;
      }
      if (event.key !== "Tab") return;

      const elements = focusables();
      if (elements.length === 0) return;
      const first = elements[0];
      const last = elements[elements.length - 1];
      const active = document.activeElement;
      const inside = active instanceof Node && panel!.contains(active);

      if (event.shiftKey && (!inside || active === first)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (!inside || active === last)) {
        event.preventDefault();
        first.focus();
      }
    }

    function onPointerDown(event: PointerEvent) {
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (panel!.contains(target) || buttonRef.current?.contains(target)) return;
      close(false);
    }

    const desktop = window.matchMedia(DESKTOP_QUERY);
    function onBreakpointChange(event: MediaQueryListEvent) {
      if (event.matches) close(false);
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    desktop.addEventListener("change", onBreakpointChange);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      desktop.removeEventListener("change", onBreakpointChange);
    };
  }, [open, close]);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => (open ? close(true) : setOpen(true))}
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
        ref={panelRef}
        inert={!open}
        className={clsx(
          "absolute inset-x-0 top-full max-h-[calc(100dvh-68px)] overflow-y-auto border-b border-border bg-cream lg:hidden",
          "motion-safe:transition-[opacity,transform] motion-safe:duration-200",
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0",
        )}
      >
        <nav aria-label="Mobile" className="px-5 pt-2 pb-6 md:px-10">
          <ul>
            {items.map((item) => (
              <li key={item.label}>
                <AppLink
                  href={item.href}
                  onClick={() => close(false)}
                  className="type-body block py-3 text-text transition-colors hover:text-ink"
                >
                  {item.label}
                </AppLink>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-3">
            <Button
              variant="secondary"
              href={actions.login.href}
              onClick={() => close(false)}
            >
              {actions.login.label}
            </Button>
            <Button href={actions.cta.href} onClick={() => close(false)}>
              {actions.cta.label}
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}
