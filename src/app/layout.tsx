import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
  variable: "--font-plus-jakarta",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

const title = "luma. | Practical learning for curious people";
const description =
  "Practical courses taught by people who do the work every day. Learn design, technology, business and more, one focused lesson at a time.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    type: "website",
    siteName: "luma.",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#F9F8F3",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="type-body fixed top-4 left-4 z-50 -translate-y-24 rounded-control bg-primary px-4 py-2 font-bold text-white focus:translate-y-0"
        >
          Skip to content
        </a>
        <main id="main" tabIndex={-1} className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
