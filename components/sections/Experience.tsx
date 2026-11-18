"use client";

import { motion } from "framer-motion";
import { ExperienceEntry } from "@/lib/types";

const EXPERIENCE: ExperienceEntry[] = [
  {
    company: "OPENLANE",
    role: "Software Engineer I & II",
    period: "Jul 2023 – Present",
    location: "Remote (Austin, TX)",
    bullets: [
      "Architected OPENLANE’s unified full-stack inspection platform (C#/.NET backend, React frontend) with 5+ cross-functional teams; in last 16 months Service handled inspections of $50B+ in inventory with over 500K inspections a month at 99.9% uptime.",
      "Cut inspection workflow latency 35% with async Carfax & VIN-decoding consumers on a config-driven C#/.NET engine; built the React flow from VIN photo to report and shipped with zero downtime via LaunchDarkly-flagged parity runs and end-to-end tests.",
      "Saved $1.2M a year (8% of Carfax spend) by cutting duplicate report requests across acquired marketplaces: designed, built and launched a unified Carfax service with idempotent deduplication, Redis caching and async callbacks to avoid vendor timeouts.",
      "Cut average arbitration time by 37% by building an agentic, multimodal AI platform (Python FastAPI backend, Salesforce, Azure AI Foundry) that summarizes and caches case emails, PDFs, images and call recordings for automated review.",
      "Cut VIN-decoding costs ~20% with my design’s caching and check-digit filters, which stop bad VINs before a paid vendor call, in a self-initiated Java Spring Boot to .NET migration to one vendor-agnostic API for all OPENLANE B2B and B2C clients; raised VIN-decode success from 92% to 98% with a hybrid vendor waterfall, communicated in design and code reviews.",
      "Restored OBD2 Bluetooth scanner reliability to 98% within a week as on-call engineer: root-caused failures in 40% of one firmware cohort to a vendor SDK incompatibility; built firmware upgrade and recovery workflows into the Android mobile app.",
      "Owned observability for .NET services on Azure: built Honeycomb metrics, dashboards and alerts, wrote the on-call runbooks for incidents, and led canary rollouts (1% → 10% → 50% → 100%) with automatic rollback on Terraform based Azure infrastructure.",
    ],
  },
  {
    company: "University Realty / ASU",
    role: "Research Intern",
    period: "May 2022 – Aug 2022",
    location: "Phoenix, AZ",
    bullets: [
      "Turned 104 weekly snapshots of 1.17M stores across 3,060 brands into 7.9M store events (38K openings detected) with scheduled Apache Airflow DAGs running Python data pipelines on PostgreSQL/PostGIS.",
      "Raised top-25 hit rate from 12.9% (store-count baseline) to 45.9% on 3,498 held-out openings by shipping a LightGBM ranking model that predicts which brand opens at a site; it scores ~2,259 brands in 125 ms and retrains weekly behind release gates.",
    ],
  },
  {
    company: "Infosys",
    role: "Software Engineer",
    period: "Nov 2020 – Jul 2021",
    location: "Hyderabad, India",
    bullets: [
      "Saved 1,000+ build hours a month across 150+ repositories by cutting redundant CI builds 35% and container image duplication 50% with SHA-based change detection and Redis-backed Docker image deduplication on Google Cloud Storage.",
      "Cut full-pipeline restarts 18% and debugging time ~50% on 1,000+ weekly Gerrit CI jobs with Jenkins/Python retry blocks for transient failures and Artifactory links for multi-GB logs; built log and metrics monitoring for 170+ concurrent builds.",
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
