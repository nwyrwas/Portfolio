import Section from "@/components/Section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills & Expertise – Your Name",
  description: "Technical skills and expertise in backend development, distributed systems, API design, cloud infrastructure, and modern web technologies.",
};

const skillCategories = [
  {
    category: "Languages",
    skills: ["JavaScript/TypeScript", "Python", "Go", "SQL", "Bash"],
  },
  {
    category: "Backend Development",
    skills: [
      "Node.js",
      "Express",
      "FastAPI",
      "gRPC",
      "REST API Design",
      "GraphQL",
      "WebSockets",
      "Microservices Architecture",
    ],
  },
  {
    category: "Frontend Development",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "React Query",
      "Webpack",
      "Vite",
    ],
  },
  {
    category: "Databases & Caching",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "TimescaleDB",
      "Elasticsearch",
      "Database Optimization",
      "Query Performance",
    ],
  },
  {
    category: "Message Queues & Streaming",
    skills: ["Apache Kafka", "Kafka Streams", "RabbitMQ", "Redis Pub/Sub"],
  },
  {
    category: "Cloud & Infrastructure",
    skills: [
      "AWS (EC2, S3, Lambda, RDS, ECS)",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Infrastructure as Code",
      "Linux/Unix",
    ],
  },
  {
    category: "CI/CD & DevOps",
    skills: [
      "GitHub Actions",
      "CircleCI",
      "Jenkins",
      "Docker Compose",
      "Automated Deployment",
      "Blue-Green Deployments",
    ],
  },
  {
    category: "Observability & Monitoring",
    skills: [
      "Prometheus",
      "Grafana",
      "Datadog",
      "Sentry",
      "Structured Logging",
      "APM",
      "Distributed Tracing",
    ],
  },
  {
    category: "Testing & Quality",
    skills: [
      "Jest",
      "Pytest",
      "React Testing Library",
      "E2E Testing (Playwright)",
      "Load Testing (k6, Artillery)",
      "Test-Driven Development",
    ],
  },
  {
    category: "Architecture & Design",
    skills: [
      "Distributed Systems",
      "Microservices",
      "Event-Driven Architecture",
      "API Design",
      "System Design",
      "Performance Optimization",
      "Scalability Patterns",
    ],
  },
  {
    category: "Security & Best Practices",
    skills: [
      "API Security",
      "Authentication (OAuth, JWT, SSO)",
      "Authorization",
      "Rate Limiting",
      "Data Encryption",
      "OWASP Best Practices",
    ],
  },
  {
    category: "Tools & Workflows",
    skills: [
      "Git",
      "GitHub/GitLab",
      "VS Code",
      "Postman/Insomnia",
      "Jira/Linear",
      "Slack",
      "Documentation (Notion, Confluence)",
    ],
  },
];

export default function SkillsPage() {
  return (
    <>
      <Section className="pt-20">
        <div className="max-w-4xl mb-12">
          <h1 className="heading-1 mb-6">Skills & Expertise</h1>
          <p className="body-large">
            Technical capabilities developed over 6+ years building scalable backend systems, APIs, and infrastructure
            for B2B SaaS platforms. Organized by domain expertise rather than proficiency levels.
          </p>
        </div>

        <div className="max-w-5xl space-y-10">
          {skillCategories.map((category) => (
            <div key={category.category}>
              <h2 className="heading-4 mb-4 text-gray-900">{category.category}</h2>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm font-medium bg-white border border-gray-300 text-gray-800 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Highlighted Expertise */}
        <div className="mt-20 pt-16 border-t border-gray-200 max-w-4xl">
          <h2 className="heading-2 mb-8">Core Competencies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary-50 to-blue-50 p-6 rounded-lg border border-primary-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Distributed Systems</h3>
              <p className="body text-gray-700">
                Designing and implementing scalable, fault-tolerant systems that handle millions of requests per day.
                Experience with message queues, event streaming, caching strategies, and service orchestration.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">API Design & Development</h3>
              <p className="body text-gray-700">
                Building robust, well-documented APIs (REST, GraphQL, gRPC) with proper authentication, rate limiting,
                and versioning. Focus on developer experience and backwards compatibility.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-lg border border-purple-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Performance Optimization</h3>
              <p className="body text-gray-700">
                Database query optimization, caching strategies, reducing latency, and improving throughput.
                Experience profiling applications and identifying bottlenecks at scale.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-lg border border-orange-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cloud Infrastructure</h3>
              <p className="body text-gray-700">
                Deploying and managing cloud infrastructure on AWS using Infrastructure as Code (Terraform).
                Experience with containerization, orchestration, CI/CD pipelines, and monitoring.
              </p>
            </div>
          </div>
        </div>

        {/* Approach */}
        <div className="mt-16 max-w-4xl">
          <div className="bg-gray-50 border-l-4 border-primary-500 p-8 rounded-r">
            <h2 className="heading-3 mb-4">My Approach to Technology</h2>
            <p className="body mb-4">
              I believe in choosing the right tool for the job rather than chasing trends. Technology choices should be
              driven by business requirements, team capabilities, and long-term maintainability — not resume-driven development.
            </p>
            <p className="body">
              I prioritize simple, well-tested solutions over clever code. The best systems are boring: predictable, well-documented,
              and easy to debug at 3am when something goes wrong.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
