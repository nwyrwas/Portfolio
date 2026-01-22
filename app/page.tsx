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
          <div className="inline-block mb-4 px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-semibold">
            Computer Science Graduate • USMC Veteran
          </div>
          <h1 className="heading-1 mb-6">
            Full-Stack Software Engineer Building Intelligent, Scalable Solutions
          </h1>
          <p className="body-large mb-8 max-w-2xl">
            I design and develop robust applications across the full stack—from AI-powered systems and secure backend APIs to responsive frontends and embedded IoT devices. With expertise spanning machine learning, mobile development, and cybersecurity, I bring a disciplined, mission-focused approach to solving complex technical challenges.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/projects" size="lg">
              View My Work
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Get in Touch
            </Button>
          </div>
        </div>

        {/* Credibility Markers */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-1">9</div>
              <div className="text-sm text-gray-600">Portfolio Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-1">15+</div>
              <div className="text-sm text-gray-600">Technologies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-1">B.S.</div>
              <div className="text-sm text-gray-600">Computer Science</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-1">USMC</div>
              <div className="text-sm text-gray-600">Veteran</div>
            </div>
          </div>
        </div>

        {/* Tech Stack Showcase */}
        <div className="mt-16">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide text-center mb-6">
            Technologies I Work With
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Python", "TypeScript", "JavaScript", "Java", "C++",
              "React", "Next.js", "Node.js", "FastAPI", "Angular",
              "PostgreSQL", "MongoDB", "SQLite", "Prisma",
              "OpenAI", "TensorFlow", "Pinecone",
              "Docker", "Git", "AWS"
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm font-medium bg-white border border-gray-200 text-gray-700 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* Featured Projects */}
      <Section background="gray">
        <div className="mb-12">
          <h2 className="heading-2 mb-4">Featured Projects</h2>
          <p className="body-large max-w-2xl">
            Selected projects demonstrating problem-solving ability, technical fundamentals, and thoughtful engineering decisions.
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
            <h2 className="heading-2 mb-4">Technical Foundation</h2>

            <p className="body-large mb-6">
              I’m a recent software engineering graduate with a solid foundation in backend development,
              API design, and building full-stack applications through academic and personal projects.
            </p>

            <p className="body mb-8">
              I’m particularly interested in the core systems behind applications—where clear structure,
              security fundamentals, and thoughtful design decisions help software remain reliable and
              maintainable as it grows.
            </p>
            <Button href="/skills" variant="text" size="md">
              View Full Skill Set →
            </Button>
          </div>

          <div className="space-y-6">
            {/* Backend & Core Programming */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                Backend & Core Programming
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Experience developing backend services and application logic with an emphasis on correctness, testing, and clear interfaces.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python",
                  "Node.js",
                  "RESTful APIs",
                  "Authentication Basics",
                  "PostgreSQL",
                  "Unit Testing"
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium bg-white border border-gray-300 text-gray-700 rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Frontend & Full-Stack Development */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                Frontend & Full-Stack Development
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Building responsive user interfaces and connecting them to backend systems using modern JavaScript frameworks.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "TypeScript",
                  "React",
                  "Next.js",
                  "HTML",
                  "CSS"
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium bg-white border border-gray-300 text-gray-700 rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tooling, Cloud & Development Practices */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                Tooling, Cloud & Development Practices
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Familiar with modern development workflows, containerization, and basic cloud deployment concepts used in real-world teams.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Git & GitHub",
                  "Docker",
                  "CI/CD Fundamentals",
                  "GitHub Actions",
                  "Cloud Deployment Basics"
                ].map((skill) => (
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
            I’m currently seeking entry-level or early-career software engineering roles where I can contribute meaningfully,
            continue learning, and grow within a strong engineering team.
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
