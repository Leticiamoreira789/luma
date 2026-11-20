import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Inline the (small, Tailwind) CSS in the HTML: removes the render-blocking stylesheet request.
  experimental: {
    inlineCss: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
