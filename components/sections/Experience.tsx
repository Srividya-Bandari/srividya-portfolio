"use client";

import { motion } from "framer-motion";
import { ExperienceEntry } from "@/lib/types";

const EXPERIENCE: ExperienceEntry[] = [
  {
    company: "Openlane",
    role: "Software Engineer II",
    period: "Aug 2025 – Present",
    location: "Austin, TX",
    bullets: [
      "Owned and scaled a critical .NET Core backend service orchestrating end-to-end vehicle inspection workflows, reliably supporting 100K+ vehicles/day with high throughput and fault tolerance",
      "Designed event-driven async processing using Apache Pulsar, reducing inspection processing latency by 35% and improving real-time workflow state propagation",
      "Led production readiness + rollout strategy (feature flags, canaries) via Terraform-driven configuration, minimizing deployment risk and sustaining 98% SLA in on-call rotations",
      "Reduced VIN decode latency and vendor cost by introducing Redis caching, improving response times by 70% and cutting third-party API usage",
      "Built Honeycomb dashboards + alerts for funnel health and error trends, reducing MTTD by 45% and improving incident triage",
    ],
  },
  {
    company: "Openlane",
    role: "Software Engineer",
    period: "July 2023 – Aug 2025",
    location: "Austin, TX",
    bullets: [
      "Delivered backend features in ASP.NET Core across multi-organization inspection workflows ensuring tenant correctness",
      "Wrote 1,000+ unit and integration tests, increasing coverage to 97% and reducing production regressions by 45%",
      "Built a Java Spring Boot VIN decoding microservice that normalized external vendor data into a consistent internal contract for multiple downstream consumers",
      "Improved system reliability by fixing workflow edge cases — state transitions, retries, validation paths — discovered through production debugging and test gaps",
      "Reduced p95 latency from 420ms → 260ms by optimizing PostgreSQL hot queries (indexing + query refactors)",
    ],
  },
  {
    company: "MagicLeap",
    role: "Software Engineer Intern & Co-op",
    period: "May 2022 – Dec 2022",
    location: "Phoenix, AZ",
    bullets: [
      "Designed and implemented a distributed deduplication system using SHA-based hashing and Redis caching, reducing Docker image redundancy by 50% across CI/CD environments",
      "Scaled observability infrastructure by integrating RabbitMQ, Logstash, and OpenSearch, enabling real-time metric visualization and log processing for 170+ concurrent distributed builds",
      "Optimized the Lead Verifier system for 150+ repositories, utilizing intelligent build-triggering logic to save 1,000+ hours of monthly compute time",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-surface/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Experience
          </h2>
          <div className="w-12 h-[2px] bg-accent" />
        </motion.div>

        <div className="relative pl-8 md:pl-10">
          <div className="absolute left-2 md:left-3 top-2 bottom-2 w-px bg-border" />

          <div className="space-y-12">
            {EXPERIENCE.map((entry, idx) => (
              <motion.div
                key={`${entry.company}-${entry.period}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="relative"
              >
                <div className="absolute -left-[27px] md:-left-[33px] top-1 w-3 h-3 rounded-full bg-accent ring-4 ring-background" />

                <div className="flex flex-col gap-1 mb-3">
                  <div className="flex flex-wrap items-baseline gap-x-3">
                    <h3 className="text-lg md:text-xl font-bold text-foreground">
                      {entry.role}
                    </h3>
                    <span className="text-accent font-medium">
                      &middot; {entry.company}
                    </span>
                  </div>
                  <div className="text-sm text-muted font-mono">
                    {entry.period} &nbsp;&middot;&nbsp; {entry.location}
                  </div>
                </div>

                <ul className="space-y-2 text-muted leading-relaxed">
                  {entry.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-accent mt-1.5 select-none">
                        &bull;
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
