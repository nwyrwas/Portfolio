import Section from "@/components/Section";
import Button from "@/components/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About – Nicholas Wyrwas",
  description: "Aspiring Software Engineer",
};

export default function AboutPage() {
  return (
    <>
      <Section className="pt-20 relative overflow-hidden">
        {/* Mesh Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 -z-10"></div>
        {/* Glassmorphism Overlay */}
        <div className="absolute inset-0 backdrop-blur-[100px] -z-10"></div>
        <div className="max-w-6xl">
          <h1 className="heading-1 mb-12">About Me</h1>

          <div className="grid md:grid-cols-3 gap-12 items-start">
            {/* Text Content - Left Side (2/3 width) */}
            <div className="md:col-span-2 prose prose-lg max-w-none">
              {/* Elevator Pitch */}
              <div className="bg-gradient-to-r from-primary-50 to-blue-50 border-l-4 border-primary-600 p-6 rounded-r mb-8">
                <p className="body-large font-medium text-gray-900 mb-3">
                  Recent Computer Science graduate and Marine Corps veteran building full-stack applications and exploring AI engineering.
                </p>
                <p className="body text-gray-700">
                  I bring a disciplined, mission-driven approach to learning and problem-solving—shaped by military service and hands-on academic projects.
                </p>
              </div>

              <p className="body-large mb-6 text-gray-700">
                Through my degree program and recent internships, I've gained hands-on experience with full-stack web development, RESTful API design, and AI-powered applications.
                I've worked with technologies like Python, JavaScript, React, Django, Node.js, and modern AI frameworks through academic projects and internships.
                I'm eager to continue learning and applying these skills in a professional environment.
              </p>

              <p className="body mb-6">
                Before transitioning fully into software engineering, I served in the U.S. Marine Corps and later worked in regulated
                manufacturing environments operating under ISO 13485 and cGMP standards. These experiences reinforced discipline,
                attention to detail, and the importance of clear processes—principles I now apply to writing secure, reliable,
                and well-documented software.
              </p>

              {/* Career Goals Section - Enhanced */}
              <div className="relative bg-gradient-to-br from-primary-50 via-blue-50 to-primary-50 border-2 border-primary-400 rounded-lg p-6 my-8 shadow-md">
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 bg-primary-600 text-white text-xs font-bold rounded-full uppercase tracking-wide">
                    Currently Seeking
                  </span>
                </div>
                <h3 className="heading-4 mb-4 flex items-center gap-2 text-primary-900">
                  <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  What I'm Looking For
                </h3>
                <p className="body text-gray-800 mb-4 font-medium">
                  I'm seeking an entry-level software engineering role where I can learn from experienced engineers, contribute to real-world projects,
                  and continue developing my skills in full-stack development.
                </p>
                <p className="body text-gray-700">
                  I'm drawn to teams that value clean code, collaborative learning, and continuous improvement. I'm ready to work hard,
                  ask questions, and grow as an engineer while making meaningful contributions to projects I believe in.
                </p>
              </div>
            </div>

            {/* Photo & Contact - Right Side (1/3 width) */}
            <div className="md:col-span-1">
              <div className="sticky top-24 space-y-6">
                <img
                  src="/headshot.jpg"
                  alt="Nick Wyrwas"
                  className="w-full rounded-lg shadow-lg"
                />
                <div className="text-center">
                  <p className="text-lg font-semibold text-gray-900 mb-1">
                    Nicholas Wyrwas
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    Software Engineer
                  </p>
                </div>

                {/* Contact Information */}
                <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
                    Contact
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="mailto:nick.wyrwas@outlook.com"
                      className="flex items-center gap-3 text-sm text-gray-700 hover:text-primary-600 transition-colors group"
                    >
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="break-all">nick.wyrwas@outlook.com</span>
                    </a>
                    <a
                      href="https://linkedin.com/in/nicholas-wyrwas"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-gray-700 hover:text-primary-600 transition-colors group"
                    >
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href="https://github.com/nwyrwas"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-gray-700 hover:text-primary-600 transition-colors group"
                    >
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span>GitHub</span>
                    </a>
                    <a
                      href="/resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-gray-700 hover:text-primary-600 transition-colors group"
                    >
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span>View Resume</span>
                    </a>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
                    Quick Facts
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-gray-600">Location:</span>
                      <span className="ml-2 font-medium text-gray-900">Illinois, USA</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Education:</span>
                      <span className="ml-2 font-medium text-gray-900">B.S. Computer Science</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Experience:</span>
                      <span className="ml-2 font-medium text-gray-900">2+ Years</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Status:</span>
                      <span className="ml-2 font-medium text-primary-600">Open to Opportunities</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Continue with the rest of the content */}
          <div className="max-w-4xl mt-12">
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
                    <strong>Systems that are clear, resilient, and secure</strong> — software should be easy to reason about, difficult to misuse, and safe by default.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary-600 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="body">
                    <strong>Strong fundamentals over shortcuts</strong> — clean architecture, readable code, and sound engineering decisions scale better than quick fixes.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary-600 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="body">
                    <strong>Continuous learning and iteration</strong> — effective engineers adapt quickly and treat every project as a learning opportunity.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary-600 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="body">
                    <strong>Accountability and ownership</strong> — I take responsibility for outcomes, not just tasks.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary-600 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="body">
                    <strong>Clear communication and Documentation</strong> - Good software is supported by clear explanations and shared understanding.
                  </span>
                </li>
              </ul>
            </div>

            <div className="flex items-center gap-3 mb-8">
              <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h2 className="heading-2">Professional Experience</h2>
            </div>

            <div className="space-y-6 mb-12">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="border-l-4 border-primary-500 pl-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Auto Care Technician
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="font-medium">Walmart</span>
                    <span className="text-gray-400">•</span>
                    <span>June 2025 – Present</span>
                  </div>
                  <ul className="space-y-2 body text-gray-700">
                    <li>• Performed routine maintenance, diagnostics, and repair on customer vehicles to ensure optimal performance and safety.</li>
                    <li>• Conducted inspections of brakes, tires, fluids, and other critical vehicle systems to identify and resolve issues efficiently.</li>
                    <li>• Provided clear, professional guidance to customers regarding recommended repairs, maintenance schedules, and safety considerations.</li>
                    <li>• Documented service work accurately in company systems to maintain records and track completed maintenance tasks.</li>
                    <li>• Collaborated with team members to optimize workflow, maintain parts inventory, and meet daily service targets.</li>
                    <li>• Adhered strictly to safety protocols, company standards, and regulatory compliance requirements.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="border-l-4 border-green-500 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">Generative AI Engineer</h3>
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded">Internship</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="font-medium">Reality AI</span>
                    <span className="text-gray-400">•</span>
                    <span>December 2024 - May 2025</span>
                  </div>
                  <ul className="space-y-2 body text-gray-700">
                    <li>• Contributed to the development of Marvel AI, an AI Teaching Assistant, and Sky AI, an AI Career Coach, to transform education and career growth through generative AI technology.</li>
                    <li>• Built features for Marvel AI using technologies such as LangChain, LlamaIndex, and Retrieval-Augmented Generation (RAG) workflows.</li>
                    <li>• Implemented structured knowledge graphs to dynamically link educational content to relevant topics for efficient retrieval.</li>
                    <li>• Enhanced real-time semantic search and recommendations by leveraging OpenAI embeddings and Redis for Vector Search.</li>
                    <li>• Collaborated with a global team to develop open-source AI tools that make education more accessible.</li>
                    <li>• Deployed AI services using Google Cloud Run, monitored performance with Log Explorer, and refined outputs through LangSmith to optimize prompts and system outputs.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="border-l-4 border-blue-500 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">Full-Stack Software Engineer</h3>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded">Internship</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="font-medium">Connectify</span>
                    <span className="text-gray-400">•</span>
                    <span>December 2024 - February 2025</span>
                  </div>
                  <ul className="space-y-2 body text-gray-700">
                    <li>• Designed and developed scalable web applications using Django for back-end architecture and modern front-end frameworks like React and Vue.</li>
                    <li>• Built and optimized RESTful APIs for seamless integration between user interfaces and server-side systems.</li>
                    <li>• Collaborated with UI/UX designers, QA engineers, and DevOps teams to create intuitive, production-ready solutions.</li>
                    <li>• Implemented and maintained CI/CD pipelines to automate testing, integration, and deployment workflows.</li>
                    <li>• Enhanced application performance through caching strategies, asynchronous task management, and analytics integration.</li>
                    <li>• Actively participated in agile practices, including sprint planning, daily stand-ups, and code reviews to deliver high-quality software.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Manufacturing Process Leader - Training Department</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="font-medium">Stryker Medical Cary</span>
                    <span className="text-gray-400">•</span>
                    <span>December 2019 - June 2023</span>
                  </div>
                  <ul className="space-y-2 body text-gray-700">
                    <li>• Led the development and implementation of comprehensive manufacturing training programs aligned with cGMP and ISO 13485 standards.</li>
                    <li>• Managed staff onboarding, documented reviews, and cross-functional training to ensure readiness and regulatory compliance.</li>
                    <li>• Originated and approved Document Change Orders (DCOs), maintaining up-to-date SOPs and process documentation.</li>
                    <li>• Audited production floors regularly to ensure adherence to FDA and ISO 13485 requirements.</li>
                    <li>• Mentored new hires and junior team members, increasing retention and fostering a culture of accountability.</li>
                    <li>• Collaborated with stakeholders to address compliance gaps, refine processes, and align training with evolving business goals.</li>
                    <li>• Developed and tracked key performance indicators (KPIs) for onboarding efficiency, retention, and turnover analysis.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Needle Punch Operator</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="font-medium">Stryker Medical Cary</span>
                    <span className="text-gray-400">•</span>
                    <span>February 2019 - December 2019</span>
                  </div>
                  <ul className="space-y-2 body text-gray-700">
                    <li>• Conducted routine inspections and maintenance on equipment to ensure safe and reliable operation.</li>
                    <li>• Collaborated with the production team to meet daily manufacturing goals while maintaining strict adherence to quality control protocols.</li>
                    <li>• Documented production data and machine performance metrics to support process improvements and operational excellence.</li>
                    <li>• Managed raw material movement, roll stock, and performed light machine adjustments</li>
                    <li>• Adhered to all safety guidelines and company policies, fostering a compliant and secure work environment.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="border-l-4 border-red-600 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">Infantry</h3>
                    <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-semibold rounded">USMC</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="font-medium">United States Marine Corps</span>
                    <span className="text-gray-400">•</span>
                    <span>August 2013 - December 2016</span>
                  </div>
                  <ul className="space-y-2 body text-gray-700">
                    <li>• Executed ground combat operations, operated diverse weapon systems, maintained equipment integrity, and contributed to reconnaissance missions
                          with precision and professionalism.</li>
                    <li>• Operated and maintained a wide range of weaponry, communication systems, and field equipment, ensuring readiness and compliance with operational
                          standards.</li>
                    <li>• Participated in reconnaissance and surveillance missions to gather actionable intelligence and support strategic decision-making.</li>
                    <li>• Trained and collaborated with team members to enhance combat readiness, adaptability, and overall mission success.</li>
                    <li>• Conducted tactical ground operations, including offensive and defensive maneuvers, to achieve mission objectives while ensuring team safety and
                          operational efficiency.</li>
                  </ul>
                </div>
              </div>
            </div>
              
            <h2 className="heading-3 mb-6">Education & Continuous Learning</h2>

            <div className="space-y-6 mb-12">
              <div className="border-l-2 border-gray-300 pl-6 py-2">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  BS Computer Science - Software Engineering
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  Southern New Hampshire University • October 2022 – November 2025
                </p>
                <p className="text-sm font-semibold text-gray-700 mb-2">Graduated: November 1st 2025</p>
                <p className="text-sm text-gray-600 mb-3"><em>Manchester, NH</em></p>

                <div className="space-y-3 body text-gray-700">
                  <div>
                    <p className="font-semibold mb-1">Academic Achievement:</p>
                    <ul className="ml-4 space-y-1">
                      <li>• Honor Roll: Spring 2023, Fall 2023, Spring 2024</li>
                      <li>• Dean's List: Fall 2024, Spring 2025, Fall 2025</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold mb-1">Relevant Coursework:</p>
                    <ul className="ml-4 space-y-1">
                      <li>• <strong>Software Engineering & Development:</strong> Software Development Lifecycle, System Analysis & Design, Programming Languages, Foundations of Application Development, Current Emerging Trends in CS</li>
                      <li>• <strong>Cybersecurity & Reverse Engineering:</strong> Software Security, Secure Coding, Software Reverse Engineering (C++/Assembly/Binary Translation, Disassembly Analysis, Vulnerability Detection), Operating Platforms</li>
                      <li>• <strong>Data & Algorithms:</strong> Discrete Mathematics, Applied Linear Algebra, Applied Statistics for STEM, Data Structures & Algorithms (Analysis of Algorithms, Structured and Unstructured Data, Database Environments)</li>
                      <li>• <strong>Full-Stack & Mobile:</strong> Client Server Development, Full Stack Development I, Mobile Architecture & Programming, UI/UX Design & Development</li>
                      <li>• <strong>Specialized & Technical:</strong> Computer Graphics & Visualization, Emerging Systems Architecture & Technology, Introduction to Scripting, Intro Physics: Mechanics</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-l-2 border-gray-300 pl-6 py-2">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Computer Science
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  McHenry County College
                </p>
                <p className="text-sm text-gray-600"><em>Foundational coursework in computer science fundamentals</em></p>
              </div>
            </div>

            <div className="bg-gray-50 border-l-4 border-primary-500 p-6 rounded-r mb-12">
              <h3 className="heading-4 mb-3">Continuous Learning</h3>
              <p className="body">
                I continue developing my skills through hands-on practice, personal projects, and studying real-world codebases.
                I’m motivated by learning through building, refining my work through feedback, and steadily improving as an engineer.
              </p>
            </div>

            <h2 className="heading-3 mb-6">Outside of Work</h2>
            <p className="body mb-12">
              Outside of coursework and personal projects, I spend time strengthening my fundamentals through hands-on practice,
              exploring open-source projects, and staying current with modern software development practices.
              I enjoy learning how real-world systems are built and continuously improving my skills as an engineer.
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
