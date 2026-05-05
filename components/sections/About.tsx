"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { SkillGroup } from "@/lib/types";

const SKILLS: SkillGroup[] = [
  {
    category: "Languages",
    items: ["C#", "Java", "Python", "Go", "SQL", "TypeScript"],
  },
  {
    category: "Backend",
    items: ["ASP.NET Core", "Spring Boot", "gRPC", "REST APIs", "Microservices", "Distributed Systems"],
  },
  {
    category: "Streaming & Messaging",
    items: ["Apache Pulsar", "Kafka", "Flink", "RabbitMQ", "Event-driven Architecture"],
  },
  {
    category: "ML & AI",
    items: ["PyTorch", "TensorFlow", "SageMaker", "FAISS", "RAG Pipelines"],
  },
  {
    category: "Databases & Caching",
    items: ["PostgreSQL", "Redis", "MongoDB", "SQL Server", "OpenSearch"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
  },
  {
    category: "Observability",
    items: ["Honeycomb", "Datadog", "Grafana", "Prometheus", "OpenTelemetry", "Splunk"],
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
              I&apos;m a software engineer with 4+ years of experience building
              distributed backend services, event-driven workflows, real-time
              streaming systems, and ML-assisted decision pipelines. My work
              spans the full production stack — from event propagation and state
              management to caching layers, streaming infrastructure, and the
              observability tooling that keeps it all running.
            </p>
            <p>
              I currently work at Openlane, where I own core .NET Core services
              in a distributed inspection workflow platform processing 300K+
              daily vehicle inspections and 3.5M+ events/day. I&apos;ve designed
              Apache Pulsar-based event systems with replay-safe consumers, built
              ML-assisted decision pipelines that generate risk scores for rule
              engines and review queues, and led production rollouts using
              Terraform-managed canary deployments that reduced MTTD by 45%.
            </p>
            <p>
              Before Openlane, I interned at Mayo Clinic as a Research Software
              Engineer, building multi-view CNN training pipelines in PyTorch for
              medical imaging — raising model accuracy from 87% to 95% and
              cutting false-negative rate in half. Earlier at Infosys, I built a
              real-time DDoS detection pipeline on Kafka and Flink that ingested
              2M+ network flow records per second and cut detect-to-mitigate
              latency from 25s to under 8s.
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
