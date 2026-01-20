import Section from "@/components/Section";
import Button from "@/components/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About – Your Name",
  description: "Senior software engineer with 6+ years building scalable backend systems and APIs for B2B SaaS companies.",
};

export default function AboutPage() {
  return (
    <>
      <Section className="pt-20">
        <div className="max-w-4xl">
          <h1 className="heading-1 mb-8">About Me</h1>

          <div className="prose prose-lg max-w-none">
            <p className="body-large mb-6 text-gray-700">
              I'm a software engineer with 6 years building backend systems and APIs for B2B SaaS companies.
            </p>

            <p className="body mb-6">
              I specialize in designing scalable architectures, optimizing database performance, and improving developer experience.
              My work focuses on the invisible infrastructure that makes products feel fast and reliable — the type of challenges
              that require deep technical knowledge and careful trade-offs between performance, cost, and maintainability.
            </p>

            <p className="body mb-6">
              I've worked at early-stage startups and growth-stage companies, where I've built payment processing systems,
              real-time data pipelines, and internal tools that reduce operational overhead. I'm particularly drawn to problems
              where the right abstraction can eliminate entire categories of bugs.
            </p>

            <p className="body mb-8">
              Currently, I'm looking for senior or staff engineer roles where I can lead architecture decisions, mentor junior engineers,
              and work closely with product teams to solve hard technical problems.
            </p>

            <div className="bg-gray-50 border-l-4 border-primary-500 p-6 rounded-r mb-12">
              <h2 className="heading-4 mb-4">What I Value</h2>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-primary-600 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="body">
                    <strong>Systems that are simple to understand and hard to break</strong> — complexity should live in the domain, not the code
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary-600 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="body">
                    <strong>Shipping quickly without accumulating technical debt</strong> — speed and quality aren't mutually exclusive
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary-600 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="body">
                    <strong>Clear documentation and knowledge sharing</strong> — future you (and your teammates) will thank you
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary-600 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="body">
                    <strong>Blameless post-mortems and continuous improvement</strong> — learning from failures makes systems more resilient
                  </span>
                </li>
              </ul>
            </div>

            <h2 className="heading-3 mb-6">Experience Highlights</h2>

            <div className="space-y-8 mb-12">
              <div className="border-l-2 border-gray-300 pl-6 py-2">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Senior Backend Engineer</h3>
                <p className="text-sm text-gray-600 mb-3">TechCorp • 2022 - Present</p>
                <ul className="space-y-2 body text-gray-700">
                  <li>• Built distributed rate limiting service processing 50,000+ requests/second with 99.99% uptime</li>
                  <li>• Led migration from monolith to microservices architecture, reducing deployment time from 45min to 8min</li>
                  <li>• Mentored 3 junior engineers, establishing code review standards and documentation practices</li>
                </ul>
              </div>

              <div className="border-l-2 border-gray-300 pl-6 py-2">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Full-Stack Engineer</h3>
                <p className="text-sm text-gray-600 mb-3">StartupCo • 2020 - 2022</p>
                <ul className="space-y-2 body text-gray-700">
                  <li>• Designed and implemented GraphQL API reducing mobile data usage by 68%</li>
                  <li>• Built real-time analytics pipeline processing 5M events/day with sub-second latency</li>
                  <li>• Reduced customer churn by 9% through performance optimization (4.6s → 1.2s page loads)</li>
                </ul>
              </div>

              <div className="border-l-2 border-gray-300 pl-6 py-2">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Software Engineer</h3>
                <p className="text-sm text-gray-600 mb-3">InnovateInc • 2019 - 2020</p>
                <ul className="space-y-2 body text-gray-700">
                  <li>• Built REST API handling 10M+ requests/day for fintech application</li>
                  <li>• Implemented authentication system supporting OAuth, SSO, and API keys</li>
                  <li>• Optimized database queries reducing average response time by 340ms</li>
                </ul>
              </div>
            </div>

            <h2 className="heading-3 mb-6">Education & Continuous Learning</h2>
            <p className="body mb-4">
              <strong>B.S. Computer Science</strong> • University Name • 2015-2019
            </p>
            <p className="body mb-12">
              I stay current through reading technical papers, contributing to open-source projects, and occasionally writing
              about distributed systems and API design. I believe the best way to learn is by building and teaching others.
            </p>

            <h2 className="heading-3 mb-6">Outside of Work</h2>
            <p className="body mb-12">
              When I'm not coding, I contribute to open-source developer tooling and occasionally write technical articles
              about performance optimization and system design. I'm also an avid reader of engineering blogs and technical papers.
            </p>

            <div className="pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-4">
                <Button href="/projects" size="lg">
                  View My Work
                </Button>
                <Button href="/contact" variant="secondary" size="lg">
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
