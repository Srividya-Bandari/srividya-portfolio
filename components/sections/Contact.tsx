"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight"
        >
          Let&apos;s build something together.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-muted text-lg mb-10 leading-relaxed"
        >
          I&apos;m open to backend engineering roles, infrastructure work, and
          interesting distributed systems problems. If you&apos;ve got something
          worth building, I&apos;d love to hear about it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <Link
            href="mailto:srividyabandari98@gmail.com"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-accent text-white font-medium hover:opacity-90 transition-opacity"
          >
            <Mail size={16} />
            Email Me
          </Link>
          <Link
            href="https://www.linkedin.com/in/srividya-bandari/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-border bg-surface text-foreground font-medium hover:border-accent hover:text-accent transition-colors"
          >
            <Linkedin size={16} />
            LinkedIn
          </Link>
          <Link
            href="https://github.com/Srividya-Bandari"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-border bg-surface text-foreground font-medium hover:border-accent hover:text-accent transition-colors"
          >
            <Github size={16} />
            GitHub
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
