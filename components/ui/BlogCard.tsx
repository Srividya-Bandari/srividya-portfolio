"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import { Badge } from "./Badge";
import { BlogPost } from "@/lib/types";
import { formatDate } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

export function BlogCard({ post, index = 0 }: BlogCardProps) {
  const { slug, frontmatter } = post;
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="group h-full"
    >
      <Link
        href={`/blog/${slug}`}
        className="flex flex-col h-full p-6 rounded-xl bg-surface border border-border hover:border-accent transition-colors"
      >
        <div className="flex items-center gap-4 text-xs text-muted mb-3">
          <span className="inline-flex items-center gap-1.5">
            <Calendar size={12} />
            {formatDate(frontmatter.date)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock size={12} />
            {frontmatter.readingTime}
          </span>
        </div>

        <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors mb-2 leading-snug">
          {frontmatter.title}
        </h3>
        <p className="text-sm text-muted mb-5 leading-relaxed">
          {frontmatter.excerpt}
        </p>

        <div className="mt-auto flex flex-wrap gap-1.5">
          {frontmatter.tags.map((t) => (
            <Badge key={t} variant="accent">
              {t}
            </Badge>
          ))}
        </div>
      </Link>
    </motion.article>
  );
}
