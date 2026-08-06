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
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
