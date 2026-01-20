import Button from "@/components/Button";
import Card from "@/components/Card";
import Section from "@/components/Section";
import { getFeaturedProjects } from "@/data/projects";
import Link from "next/link";

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      {/* Hero Section */}
      <Section className="pt-20 md:pt-32">
        <div className="max-w-4xl">
          <h1 className="heading-1 mb-6">
            I build resilient systems that scale with your business
          </h1>
          <p className="body-large mb-8 max-w-2xl">
            Senior software engineer specializing in distributed systems, API design, and high-performance backend infrastructure.
            I turn complex technical challenges into elegant, maintainable solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/projects" size="lg">
              View My Work
            </Button>
            <Button href="/resume.pdf" variant="secondary" size="lg">
              Download Resume
            </Button>
          </div>
        </div>

        {/* Credibility Markers */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-1">6+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-1">50M+</div>
              <div className="text-sm text-gray-600">Requests/Day</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-1">99.99%</div>
              <div className="text-sm text-gray-600">Uptime Achieved</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-1">$200k+</div>
              <div className="text-sm text-gray-600">ARR Impact</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Featured Projects */}
      <Section background="gray">
        <div className="mb-12">
          <h2 className="heading-2 mb-4">Featured Projects</h2>
          <p className="body-large max-w-2xl">
            Selected work demonstrating technical depth, business impact, and senior-level engineering judgment.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <Card key={project.id} hover className="flex flex-col h-full">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-primary-600 uppercase tracking-wide">
                    {project.year}
                  </span>
                </div>
                <h3 className="heading-4 mb-3">{project.title}</h3>
                <p className="body mb-4">{project.shortDescription}</p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2.5 py-1 text-xs font-medium text-gray-500">
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>

                {/* Key Outcome */}
                {project.outcomes[0] && (
                  <div className="border-l-2 border-primary-500 pl-4 py-2 bg-primary-50/50 rounded-r">
                    <p className="text-sm font-medium text-gray-900">
                      {project.outcomes[0].impact}
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <Link
                  href={`/projects/${project.id}`}
                  className="text-sm font-medium text-primary-600 hover:text-primary-700 inline-flex items-center gap-1 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-sm"
                >
                  View Case Study
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/projects" variant="secondary" size="lg">
            See All Projects
          </Button>
        </div>
      </Section>

      {/* Skills Overview */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-2 mb-4">Technical Expertise</h2>
            <p className="body-large mb-6">
              I specialize in building scalable backend systems, designing robust APIs, and optimizing performance for high-traffic applications.
            </p>
            <p className="body mb-8">
              My work focuses on the invisible infrastructure that makes products feel fast and reliable — the type of challenges that require deep technical knowledge and careful trade-offs between performance, cost, and maintainability.
            </p>
            <Button href="/skills" variant="text" size="md">
              View Full Skill Set →
            </Button>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                Backend & Infrastructure
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Go", "Python", "PostgreSQL", "Redis", "Kafka", "Docker", "Kubernetes"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium bg-white border border-gray-300 text-gray-700 rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                Frontend & APIs
              </h3>
              <div className="flex flex-wrap gap-2">
                {["TypeScript", "React", "Next.js", "GraphQL", "REST", "gRPC"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium bg-white border border-gray-300 text-gray-700 rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                Cloud & DevOps
              </h3>
              <div className="flex flex-wrap gap-2">
                {["AWS", "Terraform", "CI/CD", "Monitoring", "Performance"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium bg-white border border-gray-300 text-gray-700 rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gray">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-2 mb-4">Let's Work Together</h2>
          <p className="body-large mb-8">
            I'm currently open to senior or staff engineer roles at growth-stage companies working on infrastructure, developer tools, or B2B SaaS platforms.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/contact" size="lg">
              Get in Touch
            </Button>
            <Button href="/about" variant="secondary" size="lg">
              Learn More About Me
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
