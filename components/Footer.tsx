import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm text-muted">
          &copy; {year} Srividya Bandari. Built with Next.js & Tailwind.
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/Srividya-Bandari"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted hover:text-accent transition-colors"
          >
            <Github size={18} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/srividya-bandari/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted hover:text-accent transition-colors"
          >
            <Linkedin size={18} />
          </Link>
          <Link
            href="mailto:srividyabandari98@gmail.com"
            aria-label="Email"
            className="text-muted hover:text-accent transition-colors"
          >
            <Mail size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
