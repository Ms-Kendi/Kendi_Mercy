import type { Metadata } from "next";
import { playfair, inter } from "./fonts";
import { profile } from "@/lib/portfolio";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import "./portfolio.css";

export const metadata: Metadata = {
  title: { default: `${profile.name} | Operations, Data & Strategy`, template: `%s · ${profile.name}` },
  description: profile.headline,
  openGraph: { title: `${profile.name} | Operations, Data & Strategy`, description: profile.headline, type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen antialiased">
        <a href="#main" className="skip-link">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
