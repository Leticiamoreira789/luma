import { getImageProps } from "next/image";
import { preload } from "react-dom";
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
 * The eager (LCP) image also gets a media-scoped <link rel="preload"> per source, so each
 * viewport preloads only its own image (the `preload` prop of next/image would preload both).
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

  if (eager) {
    // Each preload is scoped by media, so only the image that will actually be used is fetched early.
    preload(desktopImage.props.src, {
      as: "image",
      imageSrcSet: desktopImage.props.srcSet,
      imageSizes: desktopSizes,
      fetchPriority: "high",
      media: "(min-width: 768px)",
    });
    preload(mobileImage.props.src, {
      as: "image",
      imageSrcSet: mobileImage.props.srcSet,
      imageSizes: mobileSizes,
      fetchPriority: "high",
      media: "(max-width: 767px)",
    });
  }

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
