import { getImageProps } from "next/image";
import type { ImageAsset } from "@/types/content";

interface ResponsivePictureProps {
  /** Shown from 768px (md) up. */
  desktop: ImageAsset;
  /** Shown below 768px. Use when the design crops the photo differently on mobile. */
  mobile: ImageAsset;
  desktopSizes: string;
  mobileSizes: string;
  /** For the LCP image: fetchPriority=high and eager loading. */
  eager?: boolean;
  className?: string;
}

/**
 * Art direction with <picture>. Both images go through the next/image optimizer
 * (via getImageProps) and the browser downloads only the matching one.
 * `preload` is not used on purpose: it would preload both sources.
 */
export function ResponsivePicture({
  desktop,
  mobile,
  desktopSizes,
  mobileSizes,
  eager = false,
  className,
}: ResponsivePictureProps) {
  const loading = eager
    ? { fetchPriority: "high" as const, loading: "eager" as const }
    : {};
  const desktopImage = getImageProps({
    ...loading,
    alt: desktop.alt,
    src: desktop.src,
    width: desktop.width,
    height: desktop.height,
    sizes: desktopSizes,
  });
  const mobileImage = getImageProps({
    ...loading,
    alt: mobile.alt,
    src: mobile.src,
    width: mobile.width,
    height: mobile.height,
    sizes: mobileSizes,
  });

  return (
    <picture>
      <source
        media="(min-width: 768px)"
        srcSet={desktopImage.props.srcSet}
        sizes={desktopSizes}
      />
      <source
        media="(max-width: 767px)"
        srcSet={mobileImage.props.srcSet}
        sizes={mobileSizes}
      />
      {/* The <img> is the fallback of <picture>; next/image cannot render it. */}
      <img {...mobileImage.props} alt={mobile.alt} className={className} />
    </picture>
  );
}
