"use client";

import { motion } from "framer-motion";
import { ExperienceEntry } from "@/lib/types";

const EXPERIENCE: ExperienceEntry[] = [
  {
    company: "Openlane",
    role: "Software Engineer",
    period: "July 2023 – Present",
    location: "Austin, TX",
    bullets: [
      "Owned core services in a distributed .NET Core inspection workflow platform processing 300K+ daily vehicle inspections and 3.5M+ validation, integration, audit, and observability events/day across inspection, inventory, VIN intelligence, and downstream systems.",
      "Designed Apache Pulsar-based event propagation with replay-safe consumers, correlation IDs, schema-versioned payloads, and failure-isolated retry paths, reducing workflow latency by 35% while improving real-time state consistency.",
      "Built ML-assisted inspection decision pipelines by enriching workflow events with VIN intelligence, vehicle metadata, inspection signals, and historical state-transition features, generating risk scores used by rule engines and manual-review queues to detect anomalous transitions, duplicate processing signals, and inconsistent vehicle attributes.",
      "Implemented idempotent event consumers with deduplication keys, exponential backoff, dead-letter handling, and vendor-failure isolation, reducing duplicate processing risk and preventing invalid inspection state transitions during downstream degradation.",
      "Optimized high-volume VIN decoding and reference-data lookups using Redis-backed caching, TTL-based invalidation, and request coalescing, improving p95 latency by 70% while reducing repeated third-party vendor calls.",
      "Led production rollout with Terraform-managed feature flags, staged enablement, canary deployments, rollback paths, and Honeycomb distributed tracing, reducing MTTD by 45% and improving release safety across critical inspection workflows.",
    ],
  },
  {
    company: "Mayo Clinic",
    role: "Research Software Engineer Intern",
    period: "Jan 2022 – July 2022",
    location: "Phoenix, AZ",
    bullets: [
      "Designed a modular multi-view CNN training and inference pipeline in PyTorch, fusing image embeddings with structured metadata features to support reproducible model development across medical-imaging datasets.",
      "Improved model performance through class-imbalance handling, loss-function tuning, threshold calibration, and 1K+ hard-case error analysis, raising accuracy from 87% to 95% while reducing false-negative rate from 13% to 5%.",
      "Added PyTorch hooks, tensor-level tracing, and Datadog dashboards for feature extraction, inference latency, and failure diagnostics, reducing MTTR from 2 days to 4 hours and increasing trace-event coverage from 40% to 100%.",
    ],
  },
  {
    company: "Infosys",
    role: "Software Engineer",
    period: "Jan 2020 – Aug 2021",
    location: "Hyderabad, India",
    bullets: [
      "Built a real-time DDoS detection pipeline using Kafka, stateful Flink, and Java on Kubernetes, ingesting 2M+ network flow records/sec and cutting detect-to-mitigate latency from 25s to under 8s.",
      "Implemented a Go/Java mitigation orchestration service over gRPC to push staged BGP Flowspec, RTBH, and ACL actions with audit logging, operator approval, and rollback safeguards, automating 90%+ of approved mitigations.",
      "Developed adaptive baselining and heavy-hitter detection with Count-Min Sketch, EWMA, RocksDB-backed Flink state, and Redis caching, reducing compute and memory footprint by 40% with no loss in precision or recall.",
      "Drove observability and reliability with Prometheus, Grafana, OpenTelemetry, Splunk, SLO dashboards, and chaos drills, achieving 99.97% availability and reducing mean time to mitigation from 11s to 5s.",
      "Implemented secure multi-tenant rollout workflows on AWS using EKS, S3, CloudWatch, IAM, KMS, Terraform, Argo Rollouts, and feature flags, enabling tenant-level isolation, staged releases, and safer rollback across client environments.",
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
