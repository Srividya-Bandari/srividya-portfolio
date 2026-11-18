"use client";

import { motion } from "framer-motion";
import { Database, GitBranch, Cpu } from "lucide-react";

const PILLARS = [
  {
    icon: Database,
    title: "Backend Systems",
    description:
      "Event-driven services and APIs in C#/.NET, Java and Python on Azure, built for latency, cost and reliability.",
    points: [
      "Async, event-driven consumers",
      "Idempotent deduplication & Redis caching",
      "Vendor-agnostic APIs & hybrid vendor waterfalls",
      "PostgreSQL, PostGIS & Redis",
    ],
  },
  {
    icon: GitBranch,
    title: "Pipelines & Reliability",
    description:
      "Data and CI pipelines, plus the observability, rollouts and runbooks that keep production services healthy.",
    points: [
      "Apache Airflow DAGs on PostgreSQL/PostGIS",
      "CI build optimization with Jenkins & Docker",
      "Honeycomb metrics, dashboards & alerts",
      "Canary rollouts with automatic rollback",
    ],
  },
  {
    icon: Cpu,
    title: "Applied AI",
    description:
      "LLM-powered systems that summarize, search and answer questions over emails, PDFs, images and call recordings.",
    points: [
      "Agentic, multimodal AI workflows",
      "RAG pipelines & vector search (FAISS)",
      "Azure AI Foundry & OpenAI API",
      "ML ranking models (LightGBM)",
    ],
  },
];

export function WhatIBuild() {
  return (
    <section id="what-i-build" className="py-24 md:py-32 bg-surface/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            What I Build
          </h2>
          <div className="w-12 h-[2px] bg-accent" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col p-6 rounded-xl bg-surface border border-border"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-5">
                  <Icon size={18} className="text-accent" />
                </div>

                <h3 className="text-lg font-bold text-foreground mb-3">
                  {pillar.title}
                </h3>

                <p className="text-sm text-muted leading-relaxed mb-5">
                  {pillar.description}
                </p>

                <ul className="mt-auto space-y-2">
                  {pillar.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-muted"
                    >
                      <span className="text-accent mt-[3px] shrink-0 text-xs">
                        &#x25B8;
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
