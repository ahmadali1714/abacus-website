import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import ClientLayout from "@/components/layouts/ClientLayout";

export const metadata: Metadata = {
  title: "Abacus | Enterprise Software Solutions",
  description:
    "We build enterprise-grade software solutions that power digital transformation. From cloud infrastructure to AI-driven applications, we partner with businesses to deliver scalable technology.",
  keywords: [
    "enterprise software",
    "digital transformation",
    "custom software development",
    "cloud solutions",
    "AI machine learning",
    "ERP solutions",
    "ecommerce solutions",
  ],
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Abacus | Enterprise Software Solutions',
    description:
      'We build enterprise-grade software solutions that power digital transformation. From cloud infrastructure to AI-driven applications, we partner with businesses to deliver scalable technology.',
    images: ['/logo.png'],
    siteName: 'Abacus',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abacus | Enterprise Software Solutions',
    description:
      'We build enterprise-grade software solutions that power digital transformation. From cloud infrastructure to AI-driven applications, we partner with businesses to deliver scalable technology.',
    images: ['/logo.png'],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="theme-color" content="#0ea5e9" />
      </head>
      <body className="bg-white text-slate-900 antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
