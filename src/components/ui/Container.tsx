import clsx from "clsx";
import type { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  /** Element to render. Defaults to a `div`. */
  as?: "div" | "section" | "header" | "footer" | "nav";
}

/**
 * Centers content in the 1280px page frame (1120px content + 80px side padding on desktop).
 * Side padding: 20px mobile (Figma) · 40px tablet · 80px desktop.
 */
export function Container({
  as: Tag = "div",
  className,
  ...props
}: ContainerProps) {
  return (
    <Tag
      className={clsx(
        "mx-auto w-full max-w-page px-5 md:px-10 lg:px-20",
        className,
      )}
      {...props}
    />
  );
}
