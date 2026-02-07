import Section from "@/components/Section";
import Card from "@/components/Card";
import { projects } from "@/data/projects";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects – Your Name",
  description: "Case studies and technical projects demonstrating expertise in distributed systems, API design, and scalable infrastructure.",
};

export default function ProjectsPage() {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <>
      <Section background="none" className="pt-20">
        <div className="max-w-3xl mb-16">
          <h1 className="heading-1 mb-6">Projects & Case Studies</h1>
          <p className="body-large">
            Selected work demonstrating full-stack development, AI/ML integration, and systems programming expertise.
            Each project includes context, technical decisions, challenges faced, and measurable outcomes.
          </p>
        </div>

        {/* Featured Projects Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="heading-2">Featured Projects</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-primary-200 to-transparent"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map((project) => (
              <Card key={project.id} hover className="flex flex-col h-full border-2 border-primary-200 bg-gradient-to-br from-white to-primary-50/30">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-primary-600 uppercase tracking-wide">
                      {project.year}
                    </span>
                    <span className="px-2.5 py-1 text-xs font-bold bg-primary-600 text-white rounded shadow-sm">
                      ⭐ Featured
                    </span>
                  </div>
                  <h2 className="heading-3 mb-3">{project.title}</h2>
                  <p className="body mb-4 text-gray-700">{project.shortDescription}</p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium bg-primary-100 text-primary-800 rounded-md border border-primary-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 5 && (
                      <span className="px-2.5 py-1 text-xs font-medium text-primary-600">
                        +{project.techStack.length - 5} more
                      </span>
                    )}
                  </div>

                  {/* Key Outcomes */}
                  <div className="space-y-2 bg-white/50 rounded-lg p-4 border border-primary-100">
                    {project.outcomes.slice(0, 3).map((outcome, idx) => (
                      <div key={idx} className="text-sm">
                        <span className="font-semibold text-gray-900">{outcome.metric}:</span>{" "}
                        <span className="text-gray-700">{outcome.impact}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-primary-200">
                  <Link
                    href={`/projects/${project.id}`}
                    className="text-sm font-semibold text-primary-600 hover:text-primary-700 inline-flex items-center gap-1 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-sm"
                  >
                    Read Full Case Study
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
        </div>

        {/* Other Projects Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <h2 className="heading-2">Additional Projects</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project) => (
              <Card key={project.id} hover className="flex flex-col h-full">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-primary-600 uppercase tracking-wide">
                      {project.year}
                    </span>
                  </div>
                  <h2 className="heading-4 mb-3">{project.title}</h2>
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

                  {/* Key Outcomes */}
                  <div className="space-y-2">
                    {project.outcomes.slice(0, 2).map((outcome, idx) => (
                      <div key={idx} className="text-sm">
                        <span className="font-medium text-gray-900">{outcome.metric}:</span>{" "}
                        <span className="text-gray-600">{outcome.impact}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200">
                  <Link
                    href={`/projects/${project.id}`}
                    className="text-sm font-medium text-primary-600 hover:text-primary-700 inline-flex items-center gap-1 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-sm"
                  >
                    Read Full Case Study
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
        </div>
      </Section>
    </>
  );
}
