import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NiaClone – AI Product Discovery for Builders",
  description:
    "NiaClone is a YC-quality AI-powered product discovery platform for startups and PMs. Find the right tools faster with personalized recommendations and deep product insights.",
  keywords: [
    "NiaClone",
    "AI product discovery",
    "YC",
    "startup tools",
    "product management",
    "personalized recommendations",
    "SaaS discovery",
    "YC-inspired",
    "trynia.ai",
  ],
  openGraph: {
    type: "website",
    siteName: "NiaClone",
    locale: "en_US",
    url: "https://niaclone.com",
    title: "NiaClone – AI Product Discovery for Builders",
    description:
      "NiaClone is a YC-quality AI-powered product discovery platform for startups and PMs. Find the right tools faster with personalized recommendations and deep product insights.",
    images: [
      {
        url: "/og-image-niaclone.jpg",
        width: 1200,
        height: 630,
        alt: "NiaClone Landing Page Preview",
      },
    ],
  },
  authors: [
    {
      name: "NiaClone Team",
      url: "https://niaclone.com",
    },
  ],
  creator: "NiaClone Team",
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon-32x32.png",
      sizes: "32x32",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon-16x16.png",
      sizes: "16x16",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/android-chrome-192x192.png",
      sizes: "192x192",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/android-chrome-512x512.png",
      sizes: "512x512",
    },
  ],
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${workSans.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
