import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {
  BlogFrontmatter,
  BlogPost,
  Project,
  ProjectFrontmatter,
} from "./types";

const projectsDirectory = path.join(process.cwd(), "content/projects");
const blogDirectory = path.join(process.cwd(), "content/blog");

export function getAllProjects(): Project[] {
  if (!fs.existsSync(projectsDirectory)) return [];
  const fileNames = fs
    .readdirSync(projectsDirectory)
    .filter((f) => f.endsWith(".mdx"));

  const projects: Project[] = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      frontmatter: data as ProjectFrontmatter,
      content,
    };
  });

  return projects.sort((a, b) => {
    if (a.frontmatter.featured && !b.frontmatter.featured) return -1;
    if (!a.frontmatter.featured && b.frontmatter.featured) return 1;
    return a.frontmatter.title.localeCompare(b.frontmatter.title);
  });
}

export function getProjectBySlug(slug: string): Project | null {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    return {
      slug,
      frontmatter: data as ProjectFrontmatter,
      content,
    };
  } catch {
    return null;
  }
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((p) => p.frontmatter.featured);
}

export function getAllBlogPosts(): BlogPost[] {
  if (!fs.existsSync(blogDirectory)) return [];
  const fileNames = fs
    .readdirSync(blogDirectory)
    .filter((f) => f.endsWith(".mdx"));

  const posts: BlogPost[] = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join(blogDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      frontmatter: data as BlogFrontmatter,
      content,
    };
  });

  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  );
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(blogDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    return {
      slug,
      frontmatter: data as BlogFrontmatter,
      content,
    };
  } catch {
    return null;
  }
}
