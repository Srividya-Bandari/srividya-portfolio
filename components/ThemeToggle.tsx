"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-md border border-border" aria-hidden />
    );
  }

  const isDark = theme === "dark";

  return (
    <motion.button
      whileTap={{ scale: 0.92 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="w-9 h-9 rounded-md border border-border bg-surface flex items-center justify-center text-foreground hover:text-accent hover:border-accent transition-colors"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </motion.button>
  );
}
