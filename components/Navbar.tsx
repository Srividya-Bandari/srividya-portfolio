"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "About", anchor: "about" },
  { label: "Experience", anchor: "experience" },
  { label: "Projects", anchor: "projects", href: "/projects" },
  { label: "Writing", anchor: "writing", href: "/blog" },
  { label: "Resume", anchor: "resume", href: "/resume" },
  { label: "Contact", anchor: "contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y > lastY && y > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  const buildHref = (item: (typeof NAV_ITEMS)[number]) => {
    if (item.href) return item.href;
    return isHome ? `#${item.anchor}` : `/#${item.anchor}`;
  };

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: hidden ? -80 : 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border"
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-bold text-lg tracking-tight hover:text-accent transition-colors"
        >
          <span className="text-accent">SB</span>
          <span className="hidden sm:inline text-foreground">
            {" "}
            / Srividya Bandari
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={buildHref(item)}
              className="px-3 py-2 text-sm text-muted hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            className="w-9 h-9 rounded-md border border-border bg-surface flex items-center justify-center text-foreground"
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "md:hidden overflow-hidden border-t border-border bg-background"
            )}
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={buildHref(item)}
                  onClick={() => setMobileOpen(false)}
                  className="py-2 text-sm text-muted hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
