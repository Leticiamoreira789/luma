import Image from "next/image";
import { Container } from "@/components/ui/Container";
import type { TestimonialContent } from "@/types/content";

interface TestimonialProps {
  content: TestimonialContent;
}

/**
 * < lg: quote, then the 3 stats in one row of equal columns (no border).
 * ≥ lg: quote on the left, stats in a column with a left border on the right.
 * The stats column is 385px so it ends at the 1120px container edge
 * (the Figma frame measures 401px and overflows it by 16px).
 */
export function Testimonial({ content }: TestimonialProps) {
  const { author } = content;

  return (
    <section
      id="testimonial"
      aria-label="What our learners say"
      className="bg-white py-[60px] md:py-20 lg:py-[100px]"
    >
      <Container className="flex flex-col gap-[60px] lg:flex-row lg:items-center lg:justify-between">
        <figure className="lg:max-w-[600px]">
          <Image
            src="/icons/quote-mark.svg"
            alt=""
            width={24}
            height={22}
            aria-hidden="true"
          />
          <blockquote className="type-quote mt-4 text-ink">
            <p>{content.quote}</p>
          </blockquote>
          <figcaption className="mt-8 flex items-center gap-4">
            <Image
              src={author.avatar.src}
              alt={author.avatar.alt}
              width={author.avatar.width}
              height={author.avatar.height}
              className="size-12 rounded-full"
            />
            <div>
              <p className="font-body text-base leading-[26px] font-bold text-ink lg:leading-7">
                {author.name}
              </p>
              <p className="type-body text-text">{author.role}</p>
            </div>
          </figcaption>
        </figure>

        <dl className="grid grid-cols-3 lg:flex lg:w-[385px] lg:shrink-0 lg:flex-col lg:gap-5 lg:border-l lg:border-border lg:pl-12">
          {content.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse justify-end gap-1">
              <dt className="type-body text-text-muted">
                {stat.label}
              </dt>
              <dd className="type-h1 text-primary">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
