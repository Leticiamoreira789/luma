import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ResponsivePicture } from "@/components/ui/ResponsivePicture";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { FeaturedCourseContent } from "@/types/content";

interface FeaturedCourseProps {
  content: FeaturedCourseContent;
}

/**
 * < lg: photo on top (362×280 mobile crop; on tablet the desktop crop capped at 560px and
 * centered), text below. ≥ lg: photo and text side by side (538 / 522, gap 60).
 */
export function FeaturedCourse({ content }: FeaturedCourseProps) {
  return (
    <section
      id="featured-course"
      aria-labelledby="featured-course-title"
      className="bg-primary py-[60px] md:py-20 lg:py-[100px]"
    >
      <Container className="grid items-center gap-[38px] lg:grid-cols-[538fr_522fr] lg:gap-[60px]">
        <div className="relative mx-auto w-full md:max-w-[560px] lg:max-w-none">
          <div className="aspect-[362/280] overflow-hidden rounded-card md:aspect-[538/408]">
            <ResponsivePicture
              desktop={content.image}
              mobile={content.imageMobile}
              desktopSizes="(min-width: 1024px) 538px, 560px"
              mobileSizes="362px"
              className="size-full object-cover"
            />
          </div>
          <span className="type-overline absolute -top-3 -left-3 rounded-tag bg-yellow px-3 py-1.5 text-ink">
            {content.tag}
          </span>
        </div>

        <div>
          <SectionHeading
            id="featured-course-title"
            tone="inverse"
            eyebrow={content.eyebrow}
            title={content.title}
          />
          <p className="type-subtitle-2 mt-5 text-white">{content.description}</p>
          <p className="type-subtitle-2 mt-6 text-white">{content.instructor}</p>

          <ul className="mt-6 flex flex-wrap gap-3">
            {content.chips.map((chip) => (
              <li
                key={chip}
                className="type-body rounded-control border border-border px-3.5 py-1.5 text-white"
              >
                {chip}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-center">
            <Button
              variant="accent"
              href={content.primaryCta.href}
              className="w-full md:w-auto"
            >
              {content.primaryCta.label}
            </Button>
            <Button
              variant="link"
              tone="inverse"
              href={content.secondaryCta.href}
              className="self-center px-4 py-[13px] md:self-auto"
            >
              {content.secondaryCta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
