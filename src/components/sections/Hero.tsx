import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ResponsivePicture } from "@/components/ui/ResponsivePicture";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { HeroContent } from "@/types/content";

interface HeroProps {
  content: HeroContent;
}

/**
 * < md: visual first (362×380 frame, mobile crop of the photo), text below, buttons stacked full width.
 * md–lg (tablet, not in Figma): same stack, visual at the desktop size (500×520), centered.
 * ≥ lg: two columns. The whole visual (photo + badges) is scaled with `zoom` to 0.8 between
 * lg and xl and is 100% from xl (1280px frame), because the 64px title needs room next to it
 * at 1024px. Scaling the block, not only the photo, keeps the badges in the Figma position
 * relative to the face.
 * Decorations are anchored to the edges of the frame, so they follow its size.
 */
export function Hero({ content }: HeroProps) {
  const { trust, courseBadge, ratingBadge } = content;

  return (
    <section
      aria-labelledby="hero-title"
      className="overflow-x-clip bg-cream py-[60px] md:py-20 lg:py-[100px]"
    >
      <Container className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-[60px]">
        <div className="lg:min-w-0 lg:flex-1">
          <SectionHeading
            as="h1"
            size="h1"
            id="hero-title"
            eyebrow={content.eyebrow}
            title={content.title}
          />
          <p className="type-subtitle-1 mt-6 max-w-[480px] text-text">
            {content.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 md:flex-row">
            <Button href={content.primaryCta.href} className="w-full md:w-auto">
              {content.primaryCta.label}
            </Button>
            <Button
              variant="secondary"
              href={content.secondaryCta.href}
              className="w-full md:w-auto"
            >
              {content.secondaryCta.label}
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 lg:justify-start">
            <div className="flex">
              {trust.avatars.map((avatar) => (
                <Image
                  key={avatar.src}
                  src={avatar.src}
                  alt={avatar.alt}
                  width={avatar.width}
                  height={avatar.height}
                  className="-ml-2 size-8 first:ml-0"
                />
              ))}
            </div>
            <p className="type-body text-text">
              <strong className="font-bold text-ink">{trust.highlight}</strong>{" "}
              {trust.text}
            </p>
          </div>
        </div>

        <div className="relative order-first mx-auto h-[380px] w-full max-w-[362px] md:order-first md:h-auto md:max-w-[500px] md:aspect-[500/520] lg:order-none lg:mx-0 lg:w-[500px] lg:shrink-0 lg:[zoom:0.8] xl:[zoom:1]">
          {/* Behind the photo */}
          <div
            aria-hidden="true"
            className="absolute top-6 -right-2.5 bottom-3.5 w-[271.5px] rounded-card bg-peach md:-right-[39px] md:bottom-7 md:w-[89px]"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-3 -left-2.5 size-16 rounded-full bg-primary-soft md:bottom-[11px] md:-left-[45px] md:size-[106px]"
          />

          <div className="absolute inset-y-0 inset-x-2 overflow-hidden rounded-card md:inset-x-0 md:rounded-hero">
            {/* The hero photo is the LCP on every viewport, hence eager. */}
            <ResponsivePicture
              eager
              desktop={content.image}
              mobile={content.imageMobile}
              desktopSizes="(min-width: 1280px) 500px, (min-width: 1024px) 400px, 500px"
              mobileSizes="346px"
              className="size-full object-cover"
            />
          </div>

          <div className="absolute top-1.5 left-0 flex items-center gap-3 rounded-item bg-white px-4 py-3 shadow-badge md:top-4 md:-left-[22px]">
            <span className="type-body flex h-8 items-center rounded-control bg-primary-soft px-1 font-bold text-primary">
              {courseBadge.value}
            </span>
            <span className="type-body text-ink">{courseBadge.label}</span>
          </div>

          <div className="absolute -right-[11px] bottom-9 flex items-center gap-2 rounded-item bg-white px-4 py-3 shadow-badge md:-right-[57px]">
            <span aria-hidden="true" className="flex gap-0.5">
              {Array.from({ length: ratingBadge.stars }, (_, index) => (
                <Image
                  key={index}
                  src="/icons/star.svg"
                  alt=""
                  width={14}
                  height={14}
                />
              ))}
            </span>
            <span className="type-body text-ink">{ratingBadge.label}</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
