import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Source_Sans_3 } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "MIP | Momentum Internship Program — Projxon",
  description:
    "Accelerate Talent, Elevate Impact. Custom-designed internship programs that create future-ready leaders. Momentum Internship Program (MIP) — Higher Ed, Workforce & Employers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${sourceSans.variable}`}>
      <body className="d-flex flex-column min-vh-100 text-dark w-100 font-body">
        <div className="site-bg-wrap position-relative flex-grow-1 d-flex flex-column">
          {/* Same background graphics for the whole site */}
          <div className="hero-visual-layer" aria-hidden>
            <div className="hero-blob hero-blob-1" />
            <div className="hero-blob hero-blob-2" />
          </div>
          <Header />
          <main className="flex-grow-1 w-100 position-relative">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
