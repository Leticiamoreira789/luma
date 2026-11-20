import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { Container } from "@/components/ui/Container";
import type { FooterContent } from "@/types/content";

interface FooterProps {
  content: FooterContent;
}

/**
 * Mobile: brand, then EXPLORE | COMPANY side by side, then SUPPORT, copyright centered.
 * Tablet/small desktop: brand + 3 fluid columns in one row. At xl (1280px frame) the columns
 * match the design exactly (416 + 208 + 208 + rest, gap 32).
 */
export function Footer({ content }: FooterProps) {
  return (
    <footer className="bg-ink pt-[60px] pb-5 md:pt-20 md:pb-10">
      <Container>
        <div className="grid grid-cols-2 gap-x-10 gap-y-10 md:grid-cols-[1.6fr_1fr_1fr_1fr] md:gap-x-8 xl:grid-cols-[416px_208px_208px_1fr]">
          <div className="col-span-2 md:col-span-1">
            <Image
              src="/icons/logo-luma-white.svg"
              alt="luma."
              width={54}
              height={17}
            />
            <p className="type-body mt-3 text-footer-text md:max-w-60">
              {content.tagline}
            </p>
          </div>

          {content.columns.map((column, index) => (
            <div
              key={column.title}
              className={clsx(
                // SUPPORT (last column) goes full width below the first two on mobile.
                index === content.columns.length - 1 && "col-span-2 md:col-span-1",
              )}
            >
              <h2 className="type-overline text-footer-strong">{column.title}</h2>
              <ul className="mt-4 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="type-body block text-footer-text transition-colors hover:text-white hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Gap above the divider (36px mobile, 66px desktop) is measured from design-refs, not the 48/64 in notes.md. */}
        <p className="type-caption mt-9 border-t border-footer-divider pt-6 text-center text-white lg:mt-[66px] lg:text-left lg:text-footer-strong">
          {content.copyright}
        </p>
      </Container>
    </footer>
  );
}
