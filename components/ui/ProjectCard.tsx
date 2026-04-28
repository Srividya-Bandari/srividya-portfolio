"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Badge } from "./Badge";
import { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const { slug, frontmatter } = project;
  const number = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="group relative flex flex-col h-full p-6 rounded-xl bg-surface border border-border hover:border-accent transition-colors"
    >
      <div className="flex items-start justify-between mb-4">
        <span className="text-accent font-mono text-sm">{number}</span>
        {frontmatter.github && frontmatter.github !== "#" && (
          <Link
            href={frontmatter.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub repository"
            className="text-muted hover:text-accent transition-colors"
          >
            <Github size={16} />
          </Link>
        )}
      </div>

      <Link href={`/projects/${slug}`} className="flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors mb-2">
          {frontmatter.title}
        </h3>
        <p className="text-sm text-muted mb-5 leading-relaxed">
          {frontmatter.tagline}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {frontmatter.tech.slice(0, 5).map((t) => (
            <Badge key={t} variant="default">
              {t}
            </Badge>
          ))}
          {frontmatter.tech.length > 5 && (
            <Badge variant="default">+{frontmatter.tech.length - 5}</Badge>
          )}
        </div>

        <div className="mt-auto flex items-center text-sm text-accent font-medium">
          Case Study
          <ArrowUpRight
            size={14}
            className="ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          />
        </div>
      </Link>
    </motion.div>
  );
}
