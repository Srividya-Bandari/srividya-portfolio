import { Hero } from "@/components/sections/Hero";
import { WhatIBuild } from "@/components/sections/WhatIBuild";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { EngineeringWriting } from "@/components/sections/EngineeringWriting";
import { Contact } from "@/components/sections/Contact";
import { getFeaturedProjects, getAllBlogPosts } from "@/lib/content";

export default function HomePage() {
  const projects = getFeaturedProjects();
  const posts = getAllBlogPosts().slice(0, 3);

  return (
    <>
      <Hero />
      <WhatIBuild />
      <About />
      <Experience />
      <FeaturedProjects projects={projects} />
      <EngineeringWriting posts={posts} />
      <Contact />
    </>
  );
}
