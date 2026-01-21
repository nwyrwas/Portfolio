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
      <Section className="pt-20">
        <div className="max-w-6xl">
          <h1 className="heading-1 mb-8">About Me</h1>

          <div className="grid md:grid-cols-3 gap-12 items-start">
            {/* Text Content - Left Side (2/3 width) */}
            <div className="md:col-span-2 prose prose-lg max-w-none">
              <p className="body-large mb-6 text-gray-700">
                I am a Marine Corps veteran and recent Computer Science graduate specializing in full-stack software development and applied AI engineering.
                I bring a disciplined, mission-driven approach to building reliable, secure, and scalable software systems—shaped by both military service and hands-on
                industry experience.
              </p>

              <p className="body mb-6">
                My technical background spans full-stack web development, RESTful API design, and AI-powered applications.
                Through internships in generative AI and software engineering, I have worked with technologies such as Python, JavaScript, React, Django, Node.js, and
                modern AI frameworks to deliver production-ready solutions. I am particularly interested in building systems that balance performance, maintainability,
                and real-world usability.
              </p>

              <p className="body mb-6">
                Before transitioning fully into software engineering, I led training and documentation initiatives in a regulated manufacturing environment,
                working under ISO 13485 and cGMP standards. This experience strengthened my attention to detail, systems thinking, and ability to operate in
                high-accountability environments—skills I now apply directly to software architecture, secure coding, and technical documentation.
              </p>

              <p className="body mb-8">
                I am currently seeking an entry-level or junior software engineering role where I can continue to grow under strong technical mentorship,
                contribute meaningfully to production systems, and apply my problem-solving mindset to complex engineering challenges.
              </p>
            </div>

            {/* Photo - Right Side (1/3 width) */}
            <div className="md:col-span-1">
              <div className="sticky top-24">
                <img
                  src="/headshot.jpg"
                  alt="Nick Wyrwas"
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-sm text-gray-600 text-center mt-4">
                  Nick Wyrwas
                </p>
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

            <h2 className="heading-3 mb-6">Experience Highlights</h2>

            <div className="space-y-8 mb-12">
              <div className="border-l-2 border-gray-300 pl-6 py-2">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Auto Care Technician
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  Walmart • June 2025 – Present
                </p>
                <ul className="space-y-2 body text-gray-700">
                  <li>• Performed routine maintenance, diagnostics, and repair on customer vehicles to ensure optimal performance and safety.</li>
                  <li>• Conducted inspections of brakes, tires, fluids, and other critical vehicle systems to identify and resolve issues efficiently.</li>
                  <li>• Provided clear, professional guidance to customers regarding recommended repairs, maintenance schedules, and safety considerations.</li>
                  <li>• Documented service work accurately in company systems to maintain records and track completed maintenance tasks.</li>
                  <li>• Collaborated with team members to optimize workflow, maintain parts inventory, and meet daily service targets.</li>
                  <li>• Adhered strictly to safety protocols, company standards, and regulatory compliance requirements.</li>
                </ul>
              </div>

              <div className="border-l-2 border-gray-300 pl-6 py-2">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Generative AI Engineer (Internship)</h3>
                <p className="text-sm text-gray-600 mb-3">Reality AI • December 2024 - May 2025</p>
                <ul className="space-y-2 body text-gray-700">
                  <li>• Contributed to the development of Marvel AI, an AI Teaching Assistant, and Sky AI, an AI Career Coach, to transform education and career growth through generative AI technology.</li>
                  <li>• Built features for Marvel AI using technologies such as LangChain, LlamaIndex, and Retrieval-Augmented Generation (RAG) workflows.</li>
                  <li>• Implemented structured knowledge graphs to dynamically link educational content to relevant topics for efficient retrieval.</li>
                  <li>• Enhanced real-time semantic search and recommendations by leveraging OpenAI embeddings and Redis for Vector Search.</li>
                  <li>• Collaborated with a global team to develop open-source AI tools that make education more accessible.</li>
                  <li>• Deployed AI services using Google Cloud Run, monitored performance with Log Explorer, and refined outputs through LangSmith to optimize prompts and system outputs.</li>
                </ul>
              </div>

              <div className="border-l-2 border-gray-300 pl-6 py-2">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Full-Stack Software Engineer (Internship)</h3>
                <p className="text-sm text-gray-600 mb-3">Connectify • December 2024 - February 2025</p>
                <ul className="space-y-2 body text-gray-700">
                  <li>• Designed and developed scalable web applications using Django for back-end architecture and modern front-end frameworks like React and Vue.</li>
                  <li>• Built and optimized RESTful APIs for seamless integration between user interfaces and server-side systems.</li>
                  <li>• Collaborated with UI/UX designers, QA engineers, and DevOps teams to create intuitive, production-ready solutions.</li>
                  <li>• Implemented and maintained CI/CD pipelines to automate testing, integration, and deployment workflows.</li>
                  <li>• Enhanced application performance through caching strategies, asynchronous task management, and analytics integration.</li>
                  <li>• Actively participated in agile practices, including sprint planning, daily stand-ups, and code reviews to deliver high-quality software.</li>
                </ul>
              </div>

              <div className="border-l-2 border-gray-300 pl-6 py-2">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Manufacturing Process Leader - Training Department</h3>
                <p className="text-sm text-gray-600 mb-3">Stryker Medical Cary • December 2019 - June 2023</p>
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

              <div className="border-l-2 border-gray-300 pl-6 py-2">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Needle Punch Operator</h3>
                <p className="text-sm text-gray-600 mb-3">Stryker Medical Cary • February 2019 - December 2019</p>
                <ul className="space-y-2 body text-gray-700">
                  <li>• Conducted routine inspections and maintenance on equipment to ensure safe and reliable operation.</li>
                  <li>• Collaborated with the production team to meet daily manufacturing goals while maintaining strict adherence to quality control protocols.</li>
                  <li>• Documented production data and machine performance metrics to support process improvements and operational excellence.</li>
                  <li>• Managed raw material movement, roll stock, and performed light machine adjustments</li>
                  <li>• Adhered to all safety guidelines and company policies, fostering a compliant and secure work environment.</li>
                </ul>
              </div>

              <div className="border-l-2 border-gray-300 pl-6 py-2">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Infantry</h3>
                <p className="text-sm text-gray-600 mb-3">United States Marine Corps • August 2013 - December 2016</p>
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
                I stay current through reading technical papers, contributing to open-source projects, and building personal projects
                that push my understanding of modern software engineering practices. I believe the best way to learn is by building
                and teaching others.
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
