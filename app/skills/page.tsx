import Section from "@/components/Section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills & Expertise – Nick Wyrwas",
  description: "Technical skills and expertise spanning full-stack development, AI/ML integration, quality systems, cybersecurity, and modern software engineering practices.",
};

const skillCategories = [
  {
    category: "Programming & Frameworks",
    skills: [
      "Python",
      "JavaScript",
      "TypeScript",
      "Java",
      "C",
      "C++",
      "HTML",
      "CSS",
      "React",
      "Node.js",
      "Express",
      "Angular",
      "Django",
      "Django REST Framework",
      "OpenGL",
      "X86/x64",
    ],
  },
  {
    category: "AI & Machine Learning",
    skills: [
      "TensorFlow",
      "Keras",
      "Neural Networks",
      "Deep Learning",
      "Model Training and Optimization",
      "Supervised/Unsupervised Learning",
      "RAG Pipelines",
      "OpenAI API",
    ],
  },
  {
    category: "Web & Mobile Development",
    skills: [
      "Full-Stack Development",
      "RESTful APIs",
      "Front-End/Back-End Integration",
      "Firebase",
      "Bootstrap",
      "Android Development",
      "Mobile UI/UX",
      "Kotlin",
    ],
  },
  {
    category: "Quality Systems & Documentation",
    skills: [
      "PLM & QMS Documentation Management",
      "Document Change Orders (DCOs)",
      "SOP Authoring and Control",
      "Training Record Management",
      "Change Control Workflows",
      "Audit Support (FDA, ISO 13485)",
      "Controlled Document Archiving",
      "Electronic Document Routing",
      "Version Control",
    ],
  },
  {
    category: "Manufacturing & Quality Systems",
    skills: [
      "Production Documentation Updates",
      "Process Change Implementation",
      "Cross-Functional Quality Support",
      "ISO-13485",
      "cGMP Documentation Practices",
      "Internal and External Audit Support",
      "Training Compliance",
      "Quality System Maintenance",
    ],
  },
  {
    category: "Database Technologies",
    skills: [
      "SQL",
      "MongoDB",
      "PostgreSQL",
      "Relational & Non-Relational Databases",
      "Data Modeling",
      "Redis (Vector Search)",
      "Pinecone",
    ],
  },
  {
    category: "DevOps & Tools",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Postman",
      "CI/CD (GitHub Actions)",
      "Agile/Scrum",
      "TDD (Jest, JUnit)",
      "Google Cloud Run",
    ],
  },
  {
    category: "Secure Coding & Cybersecurity",
    skills: [
      "Input Validation",
      "Buffer Overflow Mitigation",
      "SQL Injection Defense",
      "Reverse Engineering (C++ ↔ Assembly ↔ Binary Translation)",
      "Disassembly Analysis",
      "Legacy Code Documentation",
      "Vulnerability Identification",
      "Static/Dynamic Code Analysis",
      "Unit Testing for Security",
      "Encryption Techniques",
      "Secure SDLC Programming",
    ],
  },
  {
    category: "Systems Architecture & Embedded Technologies",
    skills: [
      "Raspberry Pi (GPIO, UART, PWM)",
      "Peripheral Device Integration (Sensors, Displays)",
      "Embedded vs. Desktop Systems",
      "Thermostat and IoT Device Programming",
      "Hardware-Software Interfaces",
      "Binary File Analysis",
      "Low-Level System Optimization",
      "Performance Optimization",
      "System Architecture Evaluation",
    ],
  },
  {
    category: "UI/UX & Design",
    skills: [
      "Wireframing",
      "Prototyping",
      "User Journey Mapping",
      "Responsive Design",
      "Figma",
    ],
  },
  {
    category: "Testing & QA",
    skills: [
      "Unit/Integration Testing",
      "Test Planning",
      "Static/Dynamic Testing",
      "Secure Development Lifecycle (SDLC)",
      "QA Documentation",
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
            Comprehensive technical capabilities spanning full-stack development, AI/ML integration, quality systems,
            cybersecurity, and embedded systems. Organized by domain expertise developed through academic projects,
            professional experience, and continuous learning.
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">Full-Stack Development</h3>
              <p className="body text-gray-700">
                Building complete web applications through academic and personal projects using React, Next.js,
                Node.js, and Django. Comfortable with RESTful APIs, database design, and connecting front-end interfaces
                to backend services.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI & Machine Learning Integration</h3>
              <p className="body text-gray-700">
                Implementing AI-powered features using TensorFlow, Keras, and OpenAI APIs in personal projects.
                Familiar with neural networks, RAG pipelines, vector databases, and integrating ML models into full-stack applications.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-lg border border-purple-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Secure Software Development Practices</h3>
              <p className="body text-gray-700">
                Trained in writing secure code with emphasis on input validation, SQL injection defense, and buffer overflow mitigation.
                Academic coursework in reverse engineering, static/dynamic code analysis, vulnerability identification, and secure SDLC.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-lg border border-orange-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Systems & Technical Documentation</h3>
              <p className="body text-gray-700">
                Professional experience managing PLM/QMS documentation at Walmart and Reality AI, including change control workflows,
                SOP authoring, training records, and supporting FDA and ISO 13485 audit preparation in regulated environments.
              </p>
            </div>
          </div>
        </div>

        {/* Professional Skills */}
        <div className="mt-20 pt-16 border-t border-gray-200 max-w-4xl">
          <h2 className="heading-2 mb-8">Professional Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <div className="mt-1 w-2 h-2 rounded-full bg-primary-500 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Agile Methodologies (Scrum, Kanban)</h3>
                <p className="text-sm text-gray-600">Experienced in sprint planning, stand-ups, and iterative development</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 w-2 h-2 rounded-full bg-primary-500 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Software Development Lifecycle (SDLC)</h3>
                <p className="text-sm text-gray-600">Full lifecycle experience from requirements to deployment</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 w-2 h-2 rounded-full bg-primary-500 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Database Management</h3>
                <p className="text-sm text-gray-600">SQL and NoSQL database design, optimization, and administration</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 w-2 h-2 rounded-full bg-primary-500 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Cybersecurity Awareness & Risk Management</h3>
                <p className="text-sm text-gray-600">Security-first mindset with vulnerability assessment capabilities</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 w-2 h-2 rounded-full bg-primary-500 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Continuous Improvement (Lean/Six Sigma)</h3>
                <p className="text-sm text-gray-600">Process optimization and quality improvement methodologies</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 w-2 h-2 rounded-full bg-primary-500 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Cross-Functional Team Collaboration</h3>
                <p className="text-sm text-gray-600">Working effectively across engineering, QA, and business teams</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 w-2 h-2 rounded-full bg-primary-500 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Deadline-Driven Project Execution</h3>
                <p className="text-sm text-gray-600">Delivering high-quality results on schedule</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 w-2 h-2 rounded-full bg-primary-500 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">System Analysis & Design</h3>
                <p className="text-sm text-gray-600">Analyzing requirements and architecting scalable solutions</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 w-2 h-2 rounded-full bg-primary-500 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">APT Integration</h3>
                <p className="text-sm text-gray-600">API development and third-party service integration</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 w-2 h-2 rounded-full bg-primary-500 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Quality Assurance & Testing (TDD/QA)</h3>
                <p className="text-sm text-gray-600">Test-driven development with comprehensive quality processes</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 w-2 h-2 rounded-full bg-primary-500 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Regulatory Compliance (FDA/ISO)</h3>
                <p className="text-sm text-gray-600">Documentation and processes for regulated environments</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 w-2 h-2 rounded-full bg-primary-500 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Documentation & Technical Reporting</h3>
                <p className="text-sm text-gray-600">Clear technical documentation and stakeholder communication</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 w-2 h-2 rounded-full bg-primary-500 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Training, Mentorship & Technical Leadership</h3>
                <p className="text-sm text-gray-600">Sharing knowledge and guiding team members</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 w-2 h-2 rounded-full bg-primary-500 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Conflict Resolution & Stakeholder Communication</h3>
                <p className="text-sm text-gray-600">Managing expectations and resolving technical disagreements</p>
              </div>
            </div>
          </div>
        </div>

        {/* Approach */}
        <div className="mt-16 max-w-4xl">
          <div className="bg-gray-50 border-l-4 border-primary-500 p-8 rounded-r">
            <h2 className="heading-3 mb-4">My Approach to Technology</h2>
            <p className="body mb-4">
              I believe in choosing the right tool for the job rather than chasing trends. Technology choices should be
              driven by project requirements, team capabilities, and long-term maintainability.
            </p>
            <p className="body">
              I prioritize clean, well-tested solutions that solve real problems. The best code is readable, maintainable,
              and secure—built with both the end user and future developers in mind.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
