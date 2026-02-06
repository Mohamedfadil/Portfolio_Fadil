import type { Metadata } from "next";
import { JetBrains_Mono, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ThemeScript from "@/components/ThemeScript";
import portfolio from "@/data/portfolio.json";
import resume from "@/data/resume.json";

const keywordFallback = resume.coreCompetencies ?? [];
const competencyKeywords = portfolio.competencies?.shortFormat
  ? portfolio.competencies.shortFormat.split(" | ")
  : keywordFallback;

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const jetBrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${portfolio.profile.name} | ${portfolio.profile.title}`,
  description: resume.summary,
  keywords: competencyKeywords,
  openGraph: {
    title: `${portfolio.profile.name} | ${portfolio.profile.title}`,
    description: resume.summary,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolio.profile.name} | ${portfolio.profile.title}`,
    description: resume.summary,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f5f1" },
    { media: "(prefers-color-scheme: dark)", color: "#070707" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolio.profile.name,
    jobTitle: portfolio.profile.title,
    email: portfolio.profile.email,
    url: portfolio.social.linkedin,
    sameAs: [
      portfolio.social.linkedin,
      portfolio.social.github,
      portfolio.social.x,
    ],
    knowsAbout: competencyKeywords,
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sora.variable} ${jetBrains.variable} bg-background text-foreground antialiased`}
      >
        <ThemeScript />
        <Navbar />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
