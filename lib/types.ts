export interface ProjectFrontmatter {
  title: string;
  tagline: string;
  tech: string[];
  description: string;
  github: string;
  featured: boolean;
  date?: string;
}

export interface Project {
  slug: string;
  frontmatter: ProjectFrontmatter;
  content: string;
}

export interface BlogFrontmatter {
  title: string;
  date: string;
  readingTime: string;
  tags: string[];
  excerpt: string;
}

export interface BlogPost {
  slug: string;
  frontmatter: BlogFrontmatter;
  content: string;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}
