import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/content";
import { formatDate } from "@/lib/utils";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllBlogPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return { title: "Not Found" };
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.excerpt,
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  const { frontmatter, content } = post;

  return (
    <div className="pt-28 pb-24 md:pt-36 md:pb-32">
      <div className="max-w-2xl mx-auto px-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors mb-10 text-sm"
        >
          <ArrowLeft size={16} />
          All Posts
        </Link>

        <header className="mb-10 pb-10 border-b border-border">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
            {frontmatter.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted mb-4">
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={14} />
              {formatDate(frontmatter.date)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock size={14} />
              {frontmatter.readingTime}
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {frontmatter.tags.map((t) => (
              <Badge key={t} variant="accent">
                {t}
              </Badge>
            ))}
          </div>
        </header>

        <article className="prose prose-lg dark:prose-invert max-w-none">
          <MDXRemote source={content} />
        </article>
      </div>
    </div>
  );
}
