import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Globe, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
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
    period: "Jul 2023 – Present",
    location: "Austin, TX",
    tech: "C#, .NET Core, ASP.NET Core, Azure, Apache Pulsar, Redis, PostgreSQL, Terraform",
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
    tech: "Python, PyTorch, TensorFlow, Multi-view CNNs, SageMaker, Datadog",
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
    tech: "Java, Python, Go, Spring Boot, Kafka, RabbitMQ, Redis, AWS, Docker, Jenkins, OpenSearch",
    bullets: [
      "Optimized the Lead Verifier CI across 150+ repositories by implementing SHA-based change detection and Redis-backed Docker image deduplication, reducing redundant builds by 35%, image duplication by 50%, and saving 1,000+ build hours per month.",
      "Developed Jenkins pipelines and Python automation to synchronize codebases from Qualcomm repositories into client systems and automatically provision compatible repositories.",
      "Integrated RabbitMQ, Logstash, and OpenSearch to collect, process, and visualize build metrics and logs across infrastructure supporting 170+ concurrent builds.",
    ],
  },
];

const PROJECTS = [
  {
    title: "RAG-Powered Document Q&A System",
    tech: ["React", "Python", "FastAPI", "FAISS", "Docker", "Vector Search"],
    bullets: [
      "Built an end-to-end RAG application with a React frontend and FastAPI backend, supporting PDF upload, document indexing, semantic search, and source-grounded responses.",
      "Implemented PDF ingestion, semantic chunking, FAISS retrieval, context ranking, and grounded Q&A; added retrieval quality checks that reduced irrelevant responses by 40% versus baseline generation.",
    ],
  },
  {
    title: "Multi-Threaded File System Simulator",
    tech: ["C++", "POSIX-Style APIs", "Read-Write Locks", "Concurrency"],
    bullets: [
      "Built an in-memory POSIX-style file-system simulator in C++ supporting inode-based metadata, block allocation, concurrent file operations, and read-write locking; improved throughput by 70% over a single-threaded baseline while processing 100,000 mixed read/write operations across eight threads.",
    ],
  },
];

const SKILLS = [
  { category: "Languages", items: ["C#", "Java", "Python", "C++", "JavaScript", "TypeScript", "SQL", "Go"] },
  { category: "Backend", items: [".NET Core", "ASP.NET Core", "Spring Boot", "REST", "gRPC", "Microservices", "Distributed Systems"] },
  { category: "Frontend", items: ["React"] },
  { category: "Cloud & Infrastructure", items: ["Azure", "AWS", "Docker", "Kubernetes", "Terraform", "CI/CD", "GitHub Actions", "Jenkins"] },
  { category: "Observability", items: ["OpenTelemetry", "Honeycomb", "Datadog", "Grafana", "Prometheus", "Splunk"] },
  { category: "Streaming & Messaging", items: ["Apache Pulsar", "Kafka", "RabbitMQ", "Flink", "Event-Driven Architecture"] },
  { category: "Databases & Caching", items: ["PostgreSQL", "SQL Server", "Redis", "MongoDB", "Elasticsearch", "OpenSearch"] },
  { category: "AI & ML", items: ["Generative AI", "LLMs", "RAG", "Vector Search", "FAISS", "PyTorch", "TensorFlow", "SageMaker"] },
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
    period: "Aug 2016 – Jul 2020",
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
              +1 (617) 834-7836
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
            <Link
              href="https://srividyabandari.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <Globe size={13} />
              srividyabandari.com
            </Link>
          </div>
        </header>

        {/* Summary */}
        <Section title="Summary">
          <p className="text-sm text-muted leading-relaxed">
            Software Engineer with 3+ years of experience building distributed systems, cloud-native
            services, event-driven platforms, and production reliability and observability systems.
            Experienced in designing and operating high-scale C#/.NET and Java services across cloud
            infrastructure, streaming, observability, and AI-enabled applications. Delivered measurable
            improvements including 35% lower workflow latency and 70% lower p95 lookup latency.
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
