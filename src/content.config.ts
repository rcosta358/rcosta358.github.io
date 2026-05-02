import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const linkSchema = z.object({
  label: z.string(),
  href: z.string(),
  kind: z.enum(["email", "github", "linkedin", "orcid", "external"])
});

const about = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/about" }),
  schema: z.object({
    title: z.string(),
    name: z.string(),
    location: z.string(),
    summary: z.array(z.string()),
    contacts: z.array(linkSchema),
    interests: z.array(z.string()),
    education: z.array(
      z.object({
        degree: z.string(),
        institution: z.string(),
        period: z.string(),
        detail: z.string().optional()
      })
    ),
    skills: z.array(
      z.object({
        group: z.string(),
        items: z.array(z.string())
      })
    )
  })
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    projectName: z.string(),
    order: z.number(),
    year: z.number(),
    url: z.string(),
    technologies: z.array(z.string()),
    keywords: z.array(z.string()),
    role: z.string(),
    context: z.string()
  })
});

const education = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/education" }),
  schema: z.object({
    degree: z.string(),
    institution: z.string(),
    period: z.string(),
    order: z.number(),
    facts: z.array(z.string())
  })
});

export const collections = { about, projects, education };
