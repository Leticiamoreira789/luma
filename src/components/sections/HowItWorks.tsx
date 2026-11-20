import clsx from "clsx";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { HowItWorksContent, StepIconVariant } from "@/types/content";

interface HowItWorksProps {
  content: HowItWorksContent;
}

/** Step icons are pure CSS (no assets). Decorative, so aria-hidden. */
function StepIcon({ variant }: { variant: StepIconVariant }) {
  return (
    <span
      aria-hidden="true"
      className={clsx(
        "relative z-10 block size-14",
        variant === "focus" && "rounded-full bg-primary-soft",
        variant === "practice" && "rounded-[12px] bg-butter",
      )}
    >
      {variant === "focus" && (
        <span className="absolute top-2 left-2 size-6 rounded-tag bg-primary" />
      )}
      {variant === "experience" && (
        <>
          {/* Only the square rotates; the circle stays put. */}
          {/* Mobile and tablet use a light coral, desktop uses peach, as designed. */}
          <span className="absolute inset-0 rotate-12 rounded-control bg-[rgb(255_112_77/0.15)] lg:bg-peach" />
          <span className="absolute top-6 left-6 size-7 rounded-full bg-coral" />
        </>
      )}
      {variant === "practice" && (
        <span className="absolute top-7 left-2 size-5 rounded-full bg-mustard" />
      )}
    </span>
  );
}

/**
 * < md: steps stacked, with short vertical connectors between them.
 * md–lg (tablet, not in Figma): 3 columns, no connector.
 * ≥ lg: 3 columns with a horizontal connector through the icons.
 * Some spacings (77px below the heading, 9px/13px inside a step) are measured from design-refs
 * and differ by 1–3px from the round values in notes.md.
 */
export function HowItWorks({ content }: HowItWorksProps) {
  const lastIndex = content.steps.length - 1;

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-title"
      className="bg-cream py-[60px] md:py-20 lg:py-[100px]"
    >
      <Container>
        <SectionHeading
          id="how-it-works-title"
          align="center"
          eyebrow={content.eyebrow}
          title={content.title}
        />

        <ol className="mt-10 flex flex-col md:grid md:grid-cols-3 md:gap-10 lg:mt-[77px] lg:gap-20">
          {content.steps.map((step, index) => (
            <li
              key={step.label}
              className={clsx(
                "relative md:py-7",
                // Mobile: 40px below the heading, 48px + 28px between steps (measured from the design).
                index > 0 && "pt-12",
                index < lastIndex && "pb-7",
              )}
            >
              {index > 0 && (
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-7 h-[45px] w-px bg-border md:hidden"
                />
              )}
              {index < lastIndex && (
                <span
                  aria-hidden="true"
                  className="absolute top-14 left-7 hidden h-px w-[calc(100%+80px)] bg-border lg:block"
                />
              )}
              <StepIcon variant={step.icon} />
              <p className="type-overline mt-6 text-text-muted">{step.label}</p>
              <h3 className="type-h5 mt-[9px] text-ink">{step.title}</h3>
              <p className="type-subtitle-2 mt-[13px] text-text md:max-w-80">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
