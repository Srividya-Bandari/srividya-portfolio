# Srividya Bandari — Portfolio

Personal portfolio website built with Next.js 14, Tailwind CSS, and MDX.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

- Next.js 14 (App Router, TypeScript)
- Tailwind CSS with `@tailwindcss/typography`
- MDX content via `gray-matter` + `next-mdx-remote`
- Framer Motion animations
- `next-themes` light/dark mode
- `lucide-react` icons

## Project Structure

- `app/` — App Router pages and routes
- `components/` — UI components (sections, ui primitives, navbar/footer)
- `content/` — MDX content for projects and blog posts
- `lib/` — Content loaders, types, utilities
- `public/` — Static assets (drop your `resume.pdf` here)

## Adding Content

- Add a project: create `content/projects/<slug>.mdx` with frontmatter (`title`, `tagline`, `tech`, `description`, `github`, `featured`).
- Add a blog post: create `content/blog/<slug>.mdx` with frontmatter (`title`, `date`, `readingTime`, `tags`, `excerpt`).

## Resume

Place `resume.pdf` in `public/` so `/resume` can serve the download.

## Build

```bash
npm run build
npm run start
```
