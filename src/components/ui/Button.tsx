import clsx from "clsx";
import Link from "next/link";
import type {
  ButtonHTMLAttributes,
  ComponentPropsWithoutRef,
  ReactNode,
} from "react";
import { ArrowRightIcon } from "./ArrowRightIcon";

export type ButtonVariant = "primary" | "secondary" | "accent" | "link" | "ghost";
export type ButtonSize = "md" | "sm";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  /** `md`: 14px 28px padding (52px tall). `sm`: 10px 20px (44px tall, header). Ignored by `link` and `ghost`. */
  size?: ButtonSize;
  /** Trailing 20px arrow. Defaults to true for the `link` variant. */
  arrow?: boolean;
  className?: string;
  children: ReactNode;
}

type ButtonAsLink = ButtonBaseProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, keyof ButtonBaseProps | "href"> & {
    href: string;
  };

type ButtonAsButton = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: undefined;
  };

export type ButtonProps = ButtonAsLink | ButtonAsButton;

const base =
  "type-body inline-flex items-center justify-center gap-2 rounded-control font-bold transition-colors disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<ButtonVariant, string> = {
  // Bordered variants are 2px taller than borderless ones, as in the design (54 vs 52).
  primary: "bg-primary text-white hover:bg-primary-hover",
  secondary: "border border-border bg-white text-ink hover:bg-cream",
  accent: "bg-yellow text-ink hover:brightness-95",
  link: "text-ink hover:underline",
  ghost: "font-normal text-text hover:text-ink px-4 py-2.5",
};

const sizes: Record<ButtonSize, string> = {
  md: "px-7 py-3.5",
  sm: "px-5 py-2.5",
};

export function Button({
  variant = "primary",
  size = "md",
  arrow = variant === "link",
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = clsx(
    base,
    variants[variant],
    variant !== "link" && variant !== "ghost" && sizes[size],
    className,
  );

  const content = (
    <>
      {children}
      {arrow && <ArrowRightIcon />}
    </>
  );

  if (rest.href !== undefined) {
    return (
      <Link className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  const { type = "button", ...buttonProps } = rest;
  return (
    <button type={type} className={classes} {...buttonProps}>
      {content}
    </button>
  );
}
