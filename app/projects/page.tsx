import type { Metadata } from "next";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { getAllProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Engineering case studies and projects by Srividya Bandari, with the engineering decisions behind them.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Projects
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Things I&apos;ve built and the engineering decisions behind them.
            Each case study covers the problem, the architecture, and what I
            would do differently next time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
