"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute inset-0 gradient-blob pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-muted text-base md:text-lg mb-4 font-mono"
          >
            Hi, I&apos;m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-4 leading-[1.05]"
          >
            Srividya Bandari
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mb-6"
          >
            <p className="text-xl md:text-2xl text-accent font-semibold leading-snug">
              Software Engineer &mdash; Backend &amp; Distributed Systems
            </p>
            <p className="text-base md:text-lg text-muted font-medium mt-1">
              Building Distributed Data Processing Pipelines at Scale
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-base md:text-lg text-muted max-w-2xl leading-relaxed mb-10"
          >
            I build scalable backend systems and distributed data processing
            pipelines that handle millions of events a day — with a focus on
            throughput, correctness, and cost.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="flex flex-col sm:flex-row gap-3 mb-10"
          >
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-accent text-white font-medium hover:bg-[var(--accent)] hover:opacity-90 transition-opacity"
            >
              View My Work
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-border bg-surface text-foreground font-medium hover:border-accent hover:text-accent transition-colors"
            >
              <Download size={16} />
              Resume
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex items-center gap-5"
          >
            <Link
              href="https://github.com/Srividya-Bandari"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted hover:text-accent transition-colors"
            >
              <Github size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/srividya-bandari/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted hover:text-accent transition-colors"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="mailto:srividya.bandari.swe@gmail.com"
              aria-label="Email"
              className="text-muted hover:text-accent transition-colors"
            >
              <Mail size={20} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
