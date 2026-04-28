import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Download, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume of Srividya Bandari — Software Engineer II, Backend & Distributed Systems.",
};

const EXPERIENCE = [
  {
    company: "Openlane",
    role: "Software Engineer II",
    period: "Aug 2025 – Present",
    location: "Austin, TX",
    tech: ".NET Core, Apache Pulsar, Terraform, Redis, Honeycomb",
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
    tech: "ASP.NET Core, Java Spring Boot, PostgreSQL",
    bullets: [
      "Delivered backend features in ASP.NET Core across multi-organization inspection workflows ensuring tenant correctness",
      "Wrote 1,000+ unit and integration tests, increasing coverage to 97% and reducing production regressions by 45%",
      "Built a Java Spring Boot VIN decoding microservice that normalized external vendor data into a consistent internal contract for multiple downstream consumers",
      "Improved system reliability by fixing workflow edge cases (state transitions, retries, validation paths) discovered through production debugging and test gaps",
      "Partnered with Product/QA to refine requirements, ship workflow changes with fewer iterations and faster acceptance",
      "Reduced p95 latency from 420ms → 260ms by optimizing PostgreSQL hot queries (indexing + query refactors)",
    ],
  },
  {
    company: "MagicLeap",
    role: "Software Engineer Intern & Co-op",
    period: "May 2022 – Dec 2022",
    location: "Phoenix, AZ",
    tech: "Redis, RabbitMQ, Logstash, OpenSearch",
    bullets: [
      "Designed and implemented a distributed deduplication system using SHA-based hashing and Redis caching, reducing Docker image redundancy by 50% across CI/CD environments",
      "Scaled observability infrastructure by integrating RabbitMQ, Logstash, and OpenSearch, enabling real-time metric visualization and log processing for 170+ concurrent distributed builds",
      "Optimized the Lead Verifier system for 150+ repositories, utilizing intelligent build-triggering logic to save 1,000+ hours of monthly compute time",
    ],
  },
];

const SKILLS = [
  { category: "Languages", items: ["C#", "Java", "SQL", "Python", "JavaScript/TypeScript"] },
  { category: "Backend", items: ["ASP.NET Core/.NET", "Spring Boot", "REST APIs", "Microservices", "Distributed Systems", "Event-driven Architecture"] },
  { category: "Web & Frontend", items: ["React", "AngularJS", "Vue", "Node.js", "GraphQL"] },
  { category: "Cloud & DevOps", items: ["Azure", "AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"] },
  { category: "Messaging", items: ["Apache Pulsar", "Kafka", "RabbitMQ"] },
  { category: "Datastores & Search", items: ["Redis", "PostgreSQL", "MongoDB", "SQL Server", "OpenSearch"] },
  { category: "Observability", items: ["Honeycomb", "Datadog", "Grafana", "Splunk", "Logstash/ELK"] },
];

const EDUCATION = [
  {
    school: "Arizona State University",
    degree: "Master's in Computer Engineering",
    period: "Aug 2021 – May 2023",
    location: "Tempe, USA",
  },
  {
    school: "Osmania University",
    degree: "Bachelor's in Electrical and Electronics Engineering",
    period: "Aug 2016 – Nov 2020",
    location: "Hyderabad, India",
  },
];

const PROJECTS = [
  {
    title: "Speech Emotion Recognition",
    tech: ["Python", "TensorFlow", "librosa", "pandas", "Matplotlib"],
    bullets: [
      "Built an end-to-end audio emotion classification pipeline: data ingestion, preprocessing, feature extraction (MFCC/chroma), model training, and evaluation across 7 emotion classes",
      "Implemented reproducible experiments with train/validation splits and metric tracking; trained baseline models (Random Forest) and an MLP classifier, reaching 87% accuracy on the chosen split",
    ],
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
          <a
            href="/resume.pdf"
            download="Srividya-Bandari-Resume.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-accent text-white text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <Download size={14} />
            Download PDF
          </a>
        </div>

        {/* Header */}
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2 tracking-tight">
            Srividya Bandari
          </h1>
          <p className="text-lg text-accent font-medium mb-4">
            Software Engineer II — Backend &amp; Distributed Systems
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
              href="mailto:srividyabandari98@gmail.com"
              className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <Mail size={13} />
              srividyabandari98@gmail.com
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

        {/* Experience */}
        <Section title="Work Experience">
          <div className="space-y-8">
            {EXPERIENCE.map((job) => (
              <div key={`${job.company}-${job.period}`}>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                  <div>
                    <span className="font-semibold text-foreground">{job.role}</span>
                    <span className="text-muted"> &middot; {job.company}</span>
                  </div>
                  <div className="text-xs font-mono text-muted shrink-0">
                    {job.period} &nbsp;&middot;&nbsp; {job.location}
                  </div>
                </div>
                <p className="text-xs text-muted font-mono mb-2 italic">
                  Tech: {job.tech}
                </p>
                <ul className="mt-1 space-y-1.5">
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
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
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
        <Section title="Skills">
          <div className="space-y-3">
            {SKILLS.map((group) => (
              <div key={group.category} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                <span className="text-xs font-mono text-accent uppercase tracking-wider sm:w-36 shrink-0 pt-1">
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
              <div key={edu.school} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <div>
                  <span className="font-semibold text-foreground">{edu.school}</span>
                  <p className="text-sm text-muted">{edu.degree}</p>
                </div>
                <div className="text-xs font-mono text-muted shrink-0 text-right">
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
        <h2 className="text-xs font-mono uppercase tracking-widest text-accent">{title}</h2>
        <div className="flex-1 h-px bg-border" />
      </div>
      {children}
    </section>
  );
}
