import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";

type AppLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
};

/**
 * `<Link>` for routes, plain `<a>` for in-page anchors ("#section").
 *
 * With `<Link>`, clicking an anchor whose hash is already in the URL does nothing after the
 * user has scrolled away, because the router sees a navigation to the same URL. A native
 * anchor always scrolls to the target and honors `scroll-behavior` (and so
 * prefers-reduced-motion).
 */
export function AppLink({ href, ...props }: AppLinkProps) {
  if (href.startsWith("#")) return <a href={href} {...props} />;
  return <Link href={href} {...props} />;
}
