import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft, Github } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { getAllProjects, getProjectBySlug } from "@/lib/content";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Not Found" };
  return {
    title: project.frontmatter.title,
    description: project.frontmatter.description,
  };
}

export default function ProjectPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const { frontmatter, content } = project;

  return (
    <div className="pt-28 pb-24 md:pt-36 md:pb-32">
      <div className="max-w-3xl mx-auto px-6">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors mb-10 text-sm"
        >
          <ArrowLeft size={16} />
          All Projects
        </Link>

        <header className="mb-12 pb-12 border-b border-border">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            {frontmatter.title}
          </h1>
          <p className="text-lg text-muted mb-6 leading-relaxed">
            {frontmatter.tagline}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-6">
            {frontmatter.tech.map((t) => (
              <Badge key={t} variant="default">
                {t}
              </Badge>
            ))}
          </div>

          {frontmatter.github && frontmatter.github !== "#" && (
            <Link
              href={frontmatter.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent text-sm font-medium hover:underline"
            >
              <Github size={14} />
              View on GitHub
            </Link>
          )}
        </header>

        <article className="prose prose-lg dark:prose-invert max-w-none">
          <MDXRemote source={content} />
        </article>
      </div>
    </div>
  );
}
