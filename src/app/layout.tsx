import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#06070A" },
    { media: "(prefers-color-scheme: light)", color: "#F8F9FC" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.shortName} — Software Engineer`,
    template: `%s · ${site.shortName}`,
  },
  description: site.hero.subheadline,
  keywords: [
    "Software Engineer",
    "Backend Engineer",
    "Go Developer",
    "React Developer",
    "AI Engineer",
    "Machine Learning",
    "Alexander Theodore",
    "Portfolio",
    "Indonesia",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    title: `${site.shortName} — Software Engineer`,
    description: site.hero.subheadline,
    siteName: site.shortName,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${site.name} — Software Engineer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.shortName} — Software Engineer`,
    description: site.hero.subheadline,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: site.url },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  alternateName: site.preferred,
  jobTitle: "Software Engineer",
  url: site.url,
  email: `mailto:${site.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Tangerang", addressCountry: "ID" },
  sameAs: [site.socials.github, site.socials.linkedin, site.socials.instagram],
  alumniOf: { "@type": "CollegeOrUniversity", name: "BINUS University" },
  knowsAbout: [
    "Go",
    "React",
    "TypeScript",
    "Backend Engineering",
    "Distributed Systems",
    "Machine Learning",
    "AI Engineering",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${display.variable} ${sans.variable} ${mono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
