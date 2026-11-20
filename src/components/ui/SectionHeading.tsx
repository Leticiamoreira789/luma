import clsx from "clsx";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  /** Small uppercase label above the title, e.g. "FIND YOUR NEXT SKILL". */
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  /** Heading level in the document outline. Defaults to `h2`. */
  as?: "h1" | "h2" | "h3";
  /** Visual size of the title, independent of the heading level. Defaults to `h3` (section titles). */
  size?: "h1" | "h2" | "h3";
  align?: "left" | "center";
  /** `inverse` is for dark/primary backgrounds (white text). */
  tone?: "default" | "inverse";
  /** id of the heading element, for `aria-labelledby` on the parent section. */
  id?: string;
  className?: string;
}

const titleStyles = {
  h1: "type-h1",
  h2: "type-h2",
  h3: "type-h3",
} as const;

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  as: Heading = "h2",
  size = "h3",
  align = "left",
  tone = "default",
  id,
  className,
}: SectionHeadingProps) {
  const inverse = tone === "inverse";

  return (
    <div className={clsx(align === "center" && "text-center", className)}>
      {eyebrow && (
        <p className={clsx("type-overline", inverse ? "text-white" : "text-primary")}>
          {eyebrow}
        </p>
      )}
      <Heading
        id={id}
        className={clsx(
          titleStyles[size],
          inverse ? "text-white" : "text-ink",
          eyebrow && "mt-4",
        )}
      >
        {title}
      </Heading>
      {subtitle && (
        <p
          className={clsx(
            "type-subtitle-1 mt-4",
            inverse ? "text-white" : "text-text",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
