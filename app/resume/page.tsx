import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { ResumeDownloadModal } from "@/components/ui/ResumeDownloadModal";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume of Srividya Bandari — Software Engineer, Backend & Distributed Systems.",
};

const EXPERIENCE = [
  {
    company: "Openlane",
    role: "Software Engineer",
    period: "July 2023 – Present",
    location: "Austin, TX",
    tech: ".NET Core, Apache Pulsar, Redis, PostgreSQL, Terraform, Honeycomb",
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
    tech: "Python, PyTorch, TensorFlow, Multi-view CNNs, SageMaker, Datadog",
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
    tech: "Java, Go, Spring Boot, Kafka, Flink, Redis, RocksDB, AWS",
    bullets: [
      "Built a real-time DDoS detection pipeline using Kafka, stateful Flink, and Java on Kubernetes, ingesting 2M+ network flow records/sec and cutting detect-to-mitigate latency from 25s to under 8s.",
      "Implemented a Go/Java mitigation orchestration service over gRPC to push staged BGP Flowspec, RTBH, and ACL actions with audit logging, operator approval, and rollback safeguards, automating 90%+ of approved mitigations.",
      "Developed adaptive baselining and heavy-hitter detection with Count-Min Sketch, EWMA, RocksDB-backed Flink state, and Redis caching, reducing compute and memory footprint by 40% with no loss in precision or recall.",
      "Drove observability and reliability with Prometheus, Grafana, OpenTelemetry, Splunk, SLO dashboards, and chaos drills, achieving 99.97% availability and reducing mean time to mitigation from 11s to 5s.",
      "Implemented secure multi-tenant rollout workflows on AWS using EKS, S3, CloudWatch, IAM, KMS, Terraform, Argo Rollouts, and feature flags, enabling tenant-level isolation, staged releases, and safer rollback across client environments.",
    ],
  },
];

const PROJECTS = [
  {
    title: "RAG-Powered Document Q&A System",
    tech: ["Python", "FAISS", "FastAPI", "Docker", "Vector Search"],
    bullets: [
      "Built a FastAPI-based RAG service for PDF ingestion, semantic chunking, FAISS retrieval, context ranking, and grounded Q&A; added retrieval-quality checks that reduced irrelevant responses by 40% versus baseline generation.",
    ],
  },
  {
    title: "Multi-Threaded File System Simulator",
    tech: ["C++", "POSIX APIs", "Read-Write Locks", "Journaling", "Concurrency"],
    bullets: [
      "Built a POSIX-style file system simulator in C++ with concurrent reads/writes, block allocation, inode-style metadata indexing, journaling, and crash recovery; improved throughput by 70% over a single-threaded baseline under contention.",
    ],
  },
];

const SKILLS = [
  { category: "Languages", items: ["C#", "Java", "Python", "SQL", "Go", "JavaScript", "TypeScript"] },
  { category: "Backend", items: ["ASP.NET Core/.NET", "Spring Boot", "REST", "gRPC", "Microservices", "Distributed Systems"] },
  { category: "ML & Data", items: ["PyTorch", "TensorFlow", "SageMaker", "FAISS", "Snowflake"] },
  { category: "Streaming & Messaging", items: ["Apache Pulsar", "Kafka", "RabbitMQ", "Event-Driven Architecture"] },
  { category: "Databases & Caching", items: ["PostgreSQL", "SQL Server", "Redis", "MongoDB", "Elasticsearch/OpenSearch"] },
  { category: "Cloud & DevOps", items: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "CI/CD", "GitHub Actions", "Jenkins"] },
  { category: "Observability", items: ["Honeycomb", "Datadog", "Grafana", "Prometheus", "Splunk", "OpenTelemetry"] },
];

const EDUCATION = [
  {
    school: "Arizona State University",
    degree: "Master of Science, Computer Engineering",
    period: "Aug 2021 – May 2023",
    location: "Tempe, USA",
  },
  {
    school: "Osmania University",
    degree: "Bachelor of Engineering, Electrical and Electronics Engineering",
    period: "Aug 2016 – Jan 2020",
    location: "Hyderabad, India",
  },
];

export default function ResumePage() {
  return (
    <div className="pt-28 pb-24 md:pt-36 md:pb-32">
      <div className="max-w-3xl mx-auto px-6">

        {/* Download bar */}
        <div className="flex items-center justify-between mb-12 pb-6 border-b border-border">
          <p className="text-sm text-muted">
            View below or download a PDF copy.
          </p>
          <ResumeDownloadModal />
        </div>

        {/* Header */}
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2 tracking-tight">
            Srividya Bandari
          </h1>
          <p className="text-lg text-accent font-medium mb-4">
            Software Engineer — Backend &amp; Distributed Systems
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={13} />
              Seattle, WA
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Phone size={13} />
              +1 (206) 627-0541
            </span>
            <Link
              href="mailto:srividya.bandari.swe@gmail.com"
              className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <Mail size={13} />
              srividya.bandari.swe@gmail.com
            </Link>
            <Link
              href="https://www.linkedin.com/in/srividya-bandari/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <Linkedin size={13} />
              linkedin.com/in/srividya-bandari
            </Link>
            <Link
              href="https://github.com/Srividya-Bandari"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <Github size={13} />
              github.com/Srividya-Bandari
            </Link>
          </div>
        </header>

        {/* Summary */}
        <Section title="Summary">
          <p className="text-sm text-muted leading-relaxed">
            Software Engineer with 4+ years of experience building distributed backend services,
            event-driven workflows, real-time streaming systems, and ML-assisted decision pipelines.
            Strong background in .NET Core, Java, Kafka, Pulsar, Flink, Redis, PostgreSQL,
            AWS/Azure, observability, and production reliability. Delivered measurable impact across
            high-volume systems, including 35% workflow latency reduction, 70% VIN decode p95
            improvement, 45% faster issue detection, and stronger release safety.
          </p>
        </Section>

        {/* Experience */}
        <Section title="Work Experience">
          <div className="space-y-8">
            {EXPERIENCE.map((job) => (
              <div key={`${job.company}-${job.period}`}>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-0.5">
                  <div>
                    <span className="font-semibold text-foreground">{job.role}</span>
                    <span className="text-muted"> &middot; {job.company}</span>
                  </div>
                  <div className="text-xs font-mono text-muted shrink-0">
                    {job.period} &nbsp;&middot;&nbsp; {job.location}
                  </div>
                </div>
                <p className="text-xs text-muted font-mono mb-2 italic">Tech: {job.tech}</p>
                <ul className="space-y-1.5">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2.5 text-sm text-muted leading-relaxed">
                      <span className="text-accent shrink-0 mt-[3px]">&#x25B8;</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section title="Projects">
          <div className="space-y-5">
            {PROJECTS.map((project) => (
              <div key={project.title}>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1.5">
                  <span className="font-semibold text-foreground text-sm">{project.title}</span>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="accent" className="text-[10px] py-0.5">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
                <ul className="space-y-1.5">
                  {project.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2.5 text-sm text-muted leading-relaxed">
                      <span className="text-accent shrink-0 mt-[3px]">&#x25B8;</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Skills */}
        <Section title="Technical Skills">
          <div className="space-y-3">
            {SKILLS.map((group) => (
              <div key={group.category} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                <span className="text-xs font-mono text-accent uppercase tracking-wider sm:w-40 shrink-0 pt-1">
                  {group.category}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <Badge key={item} variant="default">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section title="Education">
          <div className="space-y-4">
            {EDUCATION.map((edu) => (
              <div key={edu.school} className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                <div>
                  <span className="font-semibold text-foreground">{edu.school}</span>
                  <p className="text-sm text-muted">{edu.degree}</p>
                </div>
                <div className="text-xs font-mono text-muted shrink-0 sm:text-right">
                  <div>{edu.period}</div>
                  <div>{edu.location}</div>
                </div>
              </div>
            ))}
          </div>
        </Section>

      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-10">
      <div className="flex items-center gap-3 mb-4">
        <h2 className="text-xs font-mono uppercase tracking-widest text-accent whitespace-nowrap">
          {title}
        </h2>
        <div className="flex-1 h-px bg-border" />
      </div>
      {children}
    </section>
  );
}
