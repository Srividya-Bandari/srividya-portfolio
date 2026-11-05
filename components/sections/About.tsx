"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { SkillGroup } from "@/lib/types";

const SKILLS: SkillGroup[] = [
  {
    category: "Languages",
    items: ["C#", "Java", "Python", "C++", "TypeScript", "SQL", "Go"],
  },
  {
    category: "Backend",
    items: [".NET Core", "ASP.NET Core", "Spring Boot", "gRPC", "REST APIs", "Microservices", "Distributed Systems"],
  },
  {
    category: "Streaming & Messaging",
    items: ["Apache Pulsar", "Kafka", "RabbitMQ", "Flink", "Event-driven Architecture"],
  },
  {
    category: "AI & ML",
    items: ["Generative AI", "LLMs", "RAG", "FAISS", "PyTorch", "TensorFlow", "SageMaker"],
  },
  {
    category: "Databases & Caching",
    items: ["PostgreSQL", "SQL Server", "Redis", "MongoDB", "OpenSearch"],
  },
  {
    category: "Cloud & Infrastructure",
    items: ["Azure", "AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Jenkins"],
  },
  {
    category: "Observability",
    items: ["OpenTelemetry", "Honeycomb", "Datadog", "Grafana", "Prometheus", "Splunk"],
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
              I&apos;m a software engineer with 3+ years of experience building
              distributed systems, cloud-native services, event-driven
              platforms, and the reliability and observability tooling that
              keeps them running in production. Most of my work is in
              high-scale C#/.NET and Java services across cloud
              infrastructure, streaming, and AI-enabled applications.
            </p>
            <p>
              I currently work at Openlane, where I own and operate core
              C#/.NET Core services in a distributed inspection workflow
              platform processing 300K+ vehicle inspections and 3.5M+ events
              per day. I&apos;ve shipped Apache Pulsar-based workflows with
              replay-safe consumers that cut workflow latency by 35%, reduced
              VIN lookup p95 latency by 70% with Redis caching, and led
              production rollouts on Azure with Terraform, canary deployments,
              and Honeycomb tracing.
            </p>
            <p>
              Before Openlane, I was a Research Software Engineer Intern with
              Mayo Clinic / ASU, building a multi-view CNN on X-ray images and
              patient metadata that raised osteoporosis-risk accuracy from 87%
              to 95%. Earlier at Infosys, I optimized CI across 150+
              repositories with SHA-based change detection and Redis-backed
              Docker image deduplication, saving 1,000+ build hours a month.
            </p>
            <p>
              I care about boring, well-instrumented systems. Observability
              before optimization. Idempotency before clever retry logic. The
              systems I&apos;m proudest of are the ones that don&apos;t page
              anyone at 3&nbsp;a.m.
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
