import Image from "next/image";
import type { CSSProperties } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { FinalCtaContent } from "@/types/content";

interface FinalCtaProps {
  content: FinalCtaContent;
}

/*
 * Decorations are positioned from the 1280px desktop frame: x as a percentage of the width
 * and y in px from the top. They are decorative (aria-hidden) and only exist from lg up.
 * Rotated squares are positioned by their rotated bounding box in Figma, so their unrotated
 * box is shifted by 0.0933 × size (the bbox of a square rotated 12° is 1.1864 × its size).
 */
const FRAME = 1280;

function place(x: number, y: number): CSSProperties {
  return { left: `${(x / FRAME) * 100}%`, top: y };
}

function placeRotated(x: number, y: number, size: number): CSSProperties {
  const shift = size * 0.0933;
  return { ...place(x + shift, y + shift), width: size, height: size };
}

function Svg({
  src,
  size,
  x,
  y,
}: {
  src: string;
  size: number;
  x: number;
  y: number;
}) {
  return (
    <Image
      src={src}
      alt=""
      width={size}
      height={size}
      className="absolute max-w-none"
      style={place(x, y)}
    />
  );
}

function Decorations() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden lg:block"
    >
      {/* Shapes made with CSS */}
      <span
        className="absolute rounded-full border-2 border-peach"
        style={{ ...place(22, 16), width: 108, height: 108 }}
      />
      <span
        className="absolute rounded-full bg-peach"
        style={{ ...place(56, 373), width: 120, height: 120 }}
      />
      <span
        className="absolute rounded-full bg-peach"
        style={{ ...place(1064, 468), width: 40, height: 40 }}
      />
      <span
        className="absolute rotate-12 rounded-control bg-peach"
        style={placeRotated(1144, -24, 115)}
      />
      <span
        className="absolute rotate-12 rounded-control bg-peach"
        style={placeRotated(-33, 230, 56)}
      />
      {/* SVG line icons (their files already include rotation and padding) */}
      <Svg src="/icons/deco-circle.svg" size={32} x={1208} y={429} />
      <Svg src="/icons/deco-circle.svg" size={32} x={877} y={43} />
      <Svg src="/icons/deco-square.svg" size={67} x={317} y={42} />
      <Svg src="/icons/deco-badge-b.svg" size={102} x={272} y={360} />
      <Svg src="/icons/deco-cube.svg" size={160} x={1080} y={180} />
      <Svg src="/icons/deco-chat.svg" size={32} x={141} y={214} />
      <Svg src="/icons/deco-bulb.svg" size={62} x={1016} y={82} />
      <Svg src="/icons/deco-ticket.svg" size={48} x={963} y={381} />
    </div>
  );
}

/** Buttons are stacked and full width on mobile. Decorations show from lg only. */
export function FinalCta({ content }: FinalCtaProps) {
  return (
    <section
      aria-labelledby="final-cta-title"
      className="relative overflow-hidden bg-butter py-[60px] md:py-20 lg:py-[100px]"
    >
      <Decorations />
      <Container className="relative">
        <div className="mx-auto flex max-w-[720px] flex-col items-center text-center">
          <div className="flex">
            {content.avatars.map((avatar) => (
              <Image
                key={avatar.src}
                src={avatar.src}
                alt={avatar.alt}
                width={avatar.width}
                height={avatar.height}
                className="-ml-2 size-10 first:ml-0"
              />
            ))}
          </div>
          <SectionHeading
            id="final-cta-title"
            as="h2"
            size="h2"
            align="center"
            title={content.title}
            subtitle={content.subtitle}
            className="mt-8"
          />
          <div className="mt-10 flex w-full flex-col gap-3 md:w-auto md:flex-row">
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
        </div>
      </Container>
    </section>
  );
}
