"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BlogCard } from "@/components/ui/BlogCard";
import { BlogPost } from "@/lib/types";

interface EngineeringWritingProps {
  posts: BlogPost[];
}

export function EngineeringWriting({ posts }: EngineeringWritingProps) {
  return (
    <section id="writing" className="py-24 md:py-32 bg-surface/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Engineering Writing
            </h2>
            <div className="w-12 h-[2px] bg-accent" />
          </div>
          <p className="text-muted max-w-md">
            Notes from the field on backend systems, performance, and what
            engineering judgment actually looks like.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <BlogCard key={p.slug} post={p} index={i} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
          >
            Read All Posts
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
