"use client";

import { motion } from "framer-motion";
import { ExperienceEntry } from "@/lib/types";

const EXPERIENCE: ExperienceEntry[] = [
  {
    company: "Openlane",
    role: "Software Engineer",
    period: "Jul 2023 – Present",
    location: "Austin, TX",
    bullets: [
      "Owned and operated core C#/.NET Core services in a distributed inspection workflow platform processing 300K+ vehicle inspections and 3.5M+ validation, integration, audit, and observability events per day across inspection, inventory, and VIN intelligence systems.",
      "Designed and shipped Apache Pulsar-based event-driven workflows with replay-safe consumers, correlation IDs, schema-versioned payloads, and failure-isolated retry paths, reducing workflow latency by 35% while improving real-time state consistency.",
      "Improved distributed-system reliability by implementing idempotent consumers, deduplication keys, exponential backoff, dead-letter handling, and downstream failure isolation, preventing duplicate processing and invalid state transitions during service degradation.",
      "Optimized high-volume VIN decoding and reference-data lookups using Redis caching, TTL-based invalidation, and request coalescing, reducing p95 latency by 70% and lowering repeated third-party service calls.",
      "Led production rollout of .NET services on Azure using Terraform-managed infrastructure, staged enablement, canary deployments, rollback mechanisms, and Honeycomb distributed tracing, enabling faster issue detection and safer releases.",
      "Built ML-assisted inspection decision workflows using VIN intelligence, vehicle metadata, inspection signals, and historical transition features to support anomaly detection, duplicate detection, risk scoring, and manual-review routing.",
    ],
  },
  {
    company: "Mayo Clinic / ASU",
    role: "Research Software Engineer Intern",
    period: "May 2022 – Aug 2022",
    location: "Phoenix, AZ",
    bullets: [
      "Implemented a multi-view CNN combining X-ray images and patient metadata to predict osteoporosis risk, improving model accuracy from 87% to 95% and strengthening identification of high-risk cases.",
      "Built preprocessing, enrichment, and validation pipelines for clinical imaging and patient data, reducing data-processing errors by 25% before model training and inference.",
      "Modularized model training, evaluation, and inference components for integration with Mayo Clinic systems, enabling reuse across related clinical prediction workflows.",
    ],
  },
  {
    company: "Infosys",
    role: "Software Engineer Intern",
    period: "Nov 2020 – Jun 2021",
    location: "Hyderabad, India",
    bullets: [
      "Optimized the Lead Verifier CI across 150+ repositories by implementing SHA-based change detection and Redis-backed Docker image deduplication, reducing redundant builds by 35%, image duplication by 50%, and saving 1,000+ build hours per month.",
      "Developed Jenkins pipelines and Python automation to synchronize codebases from Qualcomm repositories into client systems and automatically provision compatible repositories.",
      "Integrated RabbitMQ, Logstash, and OpenSearch to collect, process, and visualize build metrics and logs across infrastructure supporting 170+ concurrent builds.",
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
                      <span className="text-accent mt-1.5 select-none shrink-0">
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
