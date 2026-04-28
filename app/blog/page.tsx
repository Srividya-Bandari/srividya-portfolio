import type { Metadata } from "next";
import { BlogCard } from "@/components/ui/BlogCard";
import { getAllBlogPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Engineering Writing",
  description:
    "Notes on backend systems, performance, and engineering judgment by Srividya Bandari.",
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Engineering Writing
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Notes from the field on backend systems, performance, and what
            engineering judgment actually looks like &mdash; mostly the things I
            wish someone had told me earlier.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <BlogCard key={p.slug} post={p} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
