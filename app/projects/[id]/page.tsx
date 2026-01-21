import Section from "@/components/Section";
import Button from "@/components/Button";
import { projects, getProjectById } from "@/data/projects";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} – Your Name`,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Section className="pt-20">
        {/* Header */}
        <div className="max-w-4xl mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wide">
              {project.year}
            </span>
            {project.featured && (
              <span className="px-2.5 py-1 text-xs font-semibold bg-primary-100 text-primary-700 rounded">
                Featured Project
              </span>
            )}
          </div>
          <h1 className="heading-1 mb-6">{project.title}</h1>
          <p className="body-large text-gray-700">{project.shortDescription}</p>
        </div>

        {/* Project Images */}
        {project.images && project.images.length > 0 && (
          <div className="mb-12">
            {project.images.length === 1 ? (
              /* Single Image - Full Width Centered */
              <div className="flex justify-center">
                <div className="relative w-full max-w-4xl rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={project.images[0]}
                    alt={`${project.title} screenshot`}
                    width={1200}
                    height={675}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>
            ) : project.images.length === 2 ? (
              /* Two Images - Side by Side on Desktop, Stacked on Mobile */
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {project.images.map((image, idx) => (
                  <div key={idx} className="relative rounded-lg overflow-hidden shadow-lg bg-gray-900">
                    <Image
                      src={image}
                      alt={`${project.title} screenshot ${idx + 1}`}
                      width={800}
                      height={450}
                      className="w-full h-auto object-contain"
                      priority={idx === 0}
                    />
                  </div>
                ))}
              </div>
            ) : (
              /* Three or More Images - Grid Layout */
              <div className="max-w-6xl mx-auto">
                {/* First image takes full width */}
                <div className="mb-6 flex justify-center">
                  <div className="relative w-full rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={project.images[0]}
                      alt={`${project.title} screenshot 1`}
                      width={1200}
                      height={675}
                      className="w-full h-auto"
                      priority
                    />
                  </div>
                </div>
                {/* Remaining images in a grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.images.slice(1).map((image, idx) => (
                    <div key={idx + 1} className="relative rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src={image}
                        alt={`${project.title} screenshot ${idx + 2}`}
                        width={800}
                        height={450}
                        className="w-full h-auto"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tech Stack */}
        <div className="mb-16 pb-12 border-b border-gray-200">
          <h2 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-sm font-medium bg-gray-100 text-gray-700 rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className="max-w-4xl space-y-16">
          {/* Context */}
          <div>
            <h2 className="heading-3 mb-6">Context</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">The Problem</h3>
                <p className="body">{project.context.problem}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Constraints</h3>
                <ul className="space-y-2">
                  {project.context.constraints.map((constraint, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-primary-600 mt-1.5 flex-shrink-0">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="body">{constraint}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Stakes</h3>
                <p className="body text-gray-800">{project.context.stakes}</p>
              </div>
            </div>
          </div>

          {/* Role */}
          <div>
            <h2 className="heading-3 mb-6">My Role</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide">
                  Title
                </h3>
                <p className="body">{project.role.title}</p>
              </div>
              {project.role.teamSize && (
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide">
                    Team
                  </h3>
                  <p className="body">{project.role.teamSize}</p>
                </div>
              )}
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ownership</h3>
              <p className="body">{project.role.ownership}</p>
            </div>
          </div>

          {/* Approach */}
          <div>
            <h2 className="heading-3 mb-6">Approach & Key Decisions</h2>
            <p className="body mb-8">{project.approach.overview}</p>

            <div className="space-y-6">
              {project.approach.decisions.map((decision, idx) => (
                <div key={idx} className="border-l-2 border-primary-500 pl-6 py-2">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {decision.decision}
                  </h3>
                  <p className="body text-gray-700">{decision.rationale}</p>
                </div>
              ))}
            </div>

            {project.approach.alternatives && (
              <div className="mt-8 bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Alternatives Considered</h3>
                <p className="body text-gray-800">{project.approach.alternatives}</p>
              </div>
            )}
          </div>

          {/* Challenges */}
          <div>
            <h2 className="heading-3 mb-6">Challenges & Solutions</h2>
            <div className="space-y-8">
              {project.challenges.map((item, idx) => (
                <div key={idx} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-start gap-2">
                    <span className="text-red-500 mt-1">⚠</span>
                    Challenge
                  </h3>
                  <p className="body mb-4 text-gray-800">{item.challenge}</p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    Solution
                  </h3>
                  <p className="body text-gray-800">{item.solution}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Outcomes */}
          <div>
            <h2 className="heading-3 mb-6">Outcomes & Impact</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.outcomes.map((outcome, idx) => (
                <div key={idx} className="bg-primary-50 border border-primary-200 p-6 rounded-lg">
                  <h3 className="text-sm font-semibold text-primary-900 mb-2 uppercase tracking-wide">
                    {outcome.metric}
                  </h3>
                  <p className="text-lg font-bold text-gray-900">{outcome.impact}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          {project.links && (
            <div className="pt-8 border-t border-gray-200">
              <h2 className="heading-4 mb-4">Project Links</h2>
              <div className="flex flex-wrap gap-4">
                {project.links.demo && (
                  <Button href={project.links.demo} variant="primary">
                    View Live Demo
                  </Button>
                )}
                {project.links.github && (
                  <Button href={project.links.github} variant="secondary">
                    View on GitHub
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <Button href="/projects" variant="text">
            ← Back to All Projects
          </Button>
        </div>
      </Section>
    </>
  );
}
