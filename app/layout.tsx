import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Providers } from "./providers";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Srividya Bandari | Software Engineer",
    template: "%s | Srividya Bandari",
  },
  description:
    "Software Engineer specializing in backend and distributed systems. I build scalable infrastructure that handles millions of events a day.",
  keywords: [
    "Srividya Bandari",
    "Software Engineer",
    "Backend Engineer",
    "Distributed Systems",
    "Python",
    "Kafka",
    "Redis",
    "PostgreSQL",
  ],
  authors: [{ name: "Srividya Bandari" }],
  creator: "Srividya Bandari",
  openGraph: {
    title: "Srividya Bandari | Software Engineer",
    description:
      "Software Engineer specializing in backend and distributed systems.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground font-sans antialiased min-h-screen flex flex-col">
        <Providers>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
