import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { PeopleContent } from "@/types/content";

interface PeopleProps {
  content: PeopleContent;
}

/*
 * Rendered width of each collage column image, left to right.
 * Each PNG already contains its photos, the staggered top offset, the gaps and the shadows
 * (4px of transparent padding on each side), so the row only needs `items-center`.
 * md and up: natural 1x size. Below md: scaled by 0.65 (same aspect ratio).
 */
const columnWidths = [
  "w-[95px] md:w-[146.5px]",
  "w-[72px] md:w-[111px]",
  "w-[72px] md:w-[111px]",
  "w-[89px] md:w-[136.5px]",
] as const;

/** < lg: text, then collage. ≥ lg: two equal columns. */
export function People({ content }: PeopleProps) {
  return (
    <section
      id="people"
      aria-labelledby="people-title"
      className="bg-cream py-[60px] md:py-20 lg:py-[100px]"
    >
      <Container className="flex flex-col gap-8 md:gap-[60px] lg:flex-row lg:items-center">
        <div className="flex flex-col items-start gap-6 lg:flex-1 lg:gap-8">
          <SectionHeading
            id="people-title"
            tight
            eyebrow={content.eyebrow}
            title={content.title}
          />
          {/* Ink on mobile and tablet, text color on desktop, as designed. */}
          <p className="type-subtitle-1 text-ink lg:text-text">{content.body}</p>
          <Button
            variant="secondary"
            href={content.cta.href}
            className="w-[268px] max-w-full"
          >
            {content.cta.label}
          </Button>
        </div>

        <div className="relative flex items-center justify-between md:justify-center md:gap-2 lg:flex-1">
          <div
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 size-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-soft md:size-[500px]"
          />
          {content.collage.map((image, index) => (
            <Image
              key={image.src}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(min-width: 768px) 147px, 95px"
              className={`relative h-auto ${columnWidths[index]}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
