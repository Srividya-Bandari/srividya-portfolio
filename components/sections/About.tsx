"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { SkillGroup } from "@/lib/types";

const SKILLS: SkillGroup[] = [
  {
    category: "Languages",
    items: ["C#", "Python", "Java", "Kotlin", "Go", "TypeScript", "SQL", "C++"],
  },
  {
    category: "Backend & Web",
    items: [".NET Core", "ASP.NET Core", "Spring Boot", "FastAPI", "REST APIs", "Microservices", "React"],
  },
  {
    category: "Streaming & Pipelines",
    items: ["Apache Pulsar", "Kafka", "RabbitMQ", "Apache Airflow", "Apache Spark", "Snowflake"],
  },
  {
    category: "AI & ML",
    items: ["Agentic Workflows", "LLMs", "RAG", "FAISS", "Azure AI Foundry", "PyTorch", "LightGBM"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "PostGIS", "Redis", "OpenSearch", "Azure Blob Storage"],
  },
  {
    category: "Cloud",
    items: ["Azure", "AWS", "GCP", "Kubernetes", "Docker", "Terraform"],
  },
  {
    category: "DevOps & Observability",
    items: ["Honeycomb", "OpenTelemetry", "Grafana", "LaunchDarkly", "Jenkins", "CI/CD"],
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
              I&apos;m a software engineer with 3+ years building scalable,
              event-driven distributed systems in C#/.NET and Python on Azure.
              My work spans architecture and implementation through rollouts,
              observability, and on-call runbooks.
            </p>
            <p>
              At OPENLANE, I architected the unified full-stack inspection
              platform (C#/.NET backend, React frontend), which handled
              inspections of $50B+ in inventory over the last 16 months at
              500K+ inspections a month and 99.9% uptime. I cut its workflow
              latency 35%, saved $1.2M a year with a unified Carfax service,
              cut VIN-decoding costs ~20%, and cut average arbitration time 37%
              with an agentic, multimodal AI platform built on FastAPI and
              Azure AI Foundry.
            </p>
            <p>
              Before OPENLANE, I was a Research Intern with University Realty /
              ASU, building Apache Airflow data pipelines on PostgreSQL/PostGIS
              and a LightGBM ranking model that predicts which brand opens at a
              site, raising top-25 hit rate from 12.9% to 45.9%. Earlier at
              Infosys, I saved 1,000+ CI build hours a month across 150+
              repositories.
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
