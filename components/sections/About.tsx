"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { SkillGroup } from "@/lib/types";

const SKILLS: SkillGroup[] = [
  {
    category: "Languages",
    items: ["C#", "Java", "Python", "SQL", "TypeScript"],
  },
  {
    category: "Backend",
    items: ["ASP.NET Core", "Spring Boot", "REST APIs", "Microservices", "Event-driven Architecture"],
  },
  {
    category: "Messaging & Data",
    items: ["Apache Pulsar", "Kafka", "RabbitMQ", "Redis", "PostgreSQL", "OpenSearch"],
  },
  {
    category: "Cloud & DevOps",
    items: ["Azure", "AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
  },
  {
    category: "Observability",
    items: ["Honeycomb", "Datadog", "Grafana", "Splunk"],
  },
];

const SectionHeader = ({ title }: { title: string }) => (
  <div className="mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
      {title}
    </h2>
    <div className="w-12 h-[2px] bg-accent" />
  </div>
);

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader title="About" />
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-3 space-y-5 text-muted leading-relaxed"
          >
            <p>
              I&apos;m a software engineer focused on backend systems and
              distributed infrastructure &mdash; the layer where correctness,
              throughput, and cost all matter at the same time. My work lives at
              the intersection of event-driven architecture, API design, and the
              storage and messaging systems behind them.
            </p>
            <p>
              I currently work at Openlane as a Software Engineer II, where I own
              a .NET Core backend service orchestrating vehicle inspection
              workflows for 100K+ vehicles/day. I&apos;ve designed Apache
              Pulsar-based event pipelines that cut processing latency by 35%,
              led production rollout strategies using feature flags and canaries,
              and built Honeycomb observability tooling that reduced incident MTTD
              by 45%. Earlier in the same company, I built the VIN decoding
              microservice and cut p95 latency from 420ms to 260ms through
              PostgreSQL query optimization.
            </p>
            <p>
              Before Openlane, I interned at MagicLeap, where I designed a
              distributed deduplication system that cut Docker image redundancy by
              50% and built the observability stack for 170+ concurrent
              distributed builds.
            </p>
            <p>
              I care about boring, well-instrumented systems. Observability before
              optimization. Idempotency before clever retry logic. The systems
              I&apos;m proudest of are the ones that don&apos;t page anyone at
              3 a.m.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 space-y-6"
          >
            {SKILLS.map((group) => (
              <div key={group.category}>
                <h3 className="text-sm font-mono text-accent mb-3 uppercase tracking-wider">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <Badge key={item} variant="default">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
