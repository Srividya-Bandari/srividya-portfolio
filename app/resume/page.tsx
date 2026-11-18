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
    company: "OPENLANE",
    role: "Software Engineer I & II",
    period: "Jul 2023 – Present",
    location: "Remote (Austin, TX)",
    tech: "C#/.NET Core, Java (Spring Boot), Python (FastAPI), React, Azure, PostgreSQL, Redis",
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
    tech: "Python, SQL, PostgreSQL/PostGIS, Apache Airflow, LightGBM, FastAPI",
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
    tech: "Java, Python, RabbitMQ, Redis, GCP, Docker, Jenkins, Gerrit, Artifactory, OpenSearch",
    bullets: [
      "Saved 1,000+ build hours a month across 150+ repositories by cutting redundant CI builds 35% and container image duplication 50% with SHA-based change detection and Redis-backed Docker image deduplication on Google Cloud Storage.",
      "Cut full-pipeline restarts 18% and debugging time ~50% on 1,000+ weekly Gerrit CI jobs with Jenkins/Python retry blocks for transient failures and Artifactory links for multi-GB logs; built log and metrics monitoring for 170+ concurrent builds.",
    ],
  },
];

const PROJECTS = [
  {
    title: "RAG Document Q&A System",
    tech: ["RAG", "FAISS", "Vector Search", "Reranking", "OpenAI API"],
    bullets: [
      "Cut irrelevant answers 40% on a 100-question eval set by building a retrieval-augmented generation pipeline (hybrid FAISS vector search, reranking, OpenAI API) answering questions over PDFs with page citations.",
    ],
  },
  {
    title: "Multi-Threaded File System Simulator",
    tech: ["C++", "POSIX", "Multithreading", "Read/Write Locks", "Journaling", "Inodes"],
    bullets: [
      "Raised throughput 70% over a single-threaded baseline by building a POSIX-compliant, Unix-style file system in C++ with multi-threaded read/write locks, journaling and inode data structures.",
    ],
  },
];

const SKILLS = [
  { category: "Languages", items: ["C#", "Python", "Java", "Kotlin", "Go", "TypeScript", "JavaScript", "SQL", "C++"] },
  { category: "Backend & Web", items: [".NET Core", "ASP.NET Core", "Spring Boot", "FastAPI", "REST APIs", "OAuth", "Microservices", "React"] },
  { category: "Streaming & Pipelines", items: ["Apache Pulsar", "Kafka", "RabbitMQ", "Apache Airflow", "Apache Spark", "Snowflake", "Event-Driven Architecture"] },
  { category: "Cloud", items: ["Azure", "Azure DevOps", "Azure AI Foundry", "AWS", "GCP", "Kubernetes", "Docker", "Terraform (IaC)", "Salesforce"] },
  { category: "Databases", items: ["PostgreSQL", "PostGIS", "Redis", "OpenSearch", "Azure Blob Storage"] },
  { category: "DevOps & Observability", items: ["Jenkins", "CI/CD", "Git", "Gerrit", "Artifactory", "LaunchDarkly", "OpenTelemetry", "Honeycomb", "Grafana"] },
  { category: "AI & ML", items: ["Agentic Workflows", "LLMs", "Generative AI", "RAG", "Vector Search (FAISS)", "CNNs", "PyTorch", "TensorFlow", "LightGBM"] },
  { category: "AI-Assisted Development", items: ["Claude Code", "GitHub Copilot", "Cursor"] },
];

const EDUCATION = [
  {
    school: "Arizona State University",
    degree: "Master of Science, Computer Engineering",
    period: "Aug 2021 – May 2023",
    location: "Tempe, USA",
  },
  {
    school: "Osmania University [CBIT]",
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
            Software Engineer with 3+ years building scalable, event-driven distributed systems in
            C#/.NET and Python on Azure. Architected OPENLANE&apos;s vehicle inspection platform
            (processed $50B+ in inventory in the trailing 16 months), cut its workflow latency 35%,
            saved $1.2M annually in Carfax costs and cut arbitration time 37% with a multimodal AI
            platform.
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
