import Section from "@/components/Section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills & Expertise – Nick Wyrwas",
  description: "Technical skills and expertise spanning full-stack development, AI/ML integration, quality systems, cybersecurity, and modern software engineering practices.",
};

const skillCategories = [
  {
    category: "Programming & Frameworks",
    icon: "💻",
    skills: [
      { name: "Python", level: "Proficient", years: "3+" },
      { name: "JavaScript", level: "Proficient", years: "3+" },
      { name: "TypeScript", level: "Intermediate", years: "2+" },
      { name: "Java", level: "Intermediate", years: "2+" },
      { name: "C", level: "Intermediate", years: "2+" },
      { name: "C++", level: "Intermediate", years: "2+" },
      { name: "HTML", level: "Proficient", years: "3+" },
      { name: "CSS", level: "Proficient", years: "3+" },
      { name: "React", level: "Proficient", years: "2+" },
      { name: "Node.js", level: "Proficient", years: "2+" },
      { name: "Express", level: "Intermediate", years: "2+" },
      { name: "Angular", level: "Intermediate", years: "1+" },
      { name: "Django", level: "Intermediate", years: "1+" },
      { name: "Django REST Framework", level: "Intermediate", years: "1+" },
      { name: "OpenGL", level: "Foundational", years: "1" },
      { name: "X86/x64", level: "Foundational", years: "1" },
    ],
  },
  {
    category: "AI & Machine Learning",
    icon: "🤖",
    skills: [
      { name: "TensorFlow", level: "Intermediate", years: "2+" },
      { name: "Keras", level: "Intermediate", years: "2+" },
      { name: "Neural Networks", level: "Intermediate", years: "2+" },
      { name: "Deep Learning", level: "Intermediate", years: "1+" },
      { name: "Model Training and Optimization", level: "Intermediate", years: "1+" },
      { name: "Supervised/Unsupervised Learning", level: "Intermediate", years: "2+" },
      { name: "RAG Pipelines", level: "Proficient", years: "1+" },
      { name: "OpenAI API", level: "Proficient", years: "1+" },
    ],
  },
  {
    category: "Web & Mobile Development",
    icon: "🌐",
    skills: [
      { name: "Full-Stack Development", level: "Proficient", years: "2+" },
      { name: "RESTful APIs", level: "Proficient", years: "2+" },
      { name: "Front-End/Back-End Integration", level: "Proficient", years: "2+" },
      { name: "Firebase", level: "Intermediate", years: "1+" },
      { name: "Bootstrap", level: "Intermediate", years: "2+" },
      { name: "Android Development", level: "Intermediate", years: "1+" },
      { name: "Mobile UI/UX", level: "Intermediate", years: "1+" },
      { name: "Kotlin", level: "Foundational", years: "1" },
    ],
  },
  {
    category: "Quality Systems & Documentation",
    icon: "📋",
    skills: [
      { name: "PLM & QMS Documentation Management", level: "Proficient", years: "4+" },
      { name: "Document Change Orders (DCOs)", level: "Proficient", years: "4+" },
      { name: "SOP Authoring and Control", level: "Proficient", years: "4+" },
      { name: "Training Record Management", level: "Proficient", years: "4+" },
      { name: "Change Control Workflows", level: "Proficient", years: "4+" },
      { name: "Audit Support (FDA, ISO 13485)", level: "Proficient", years: "4+" },
      { name: "Controlled Document Archiving", level: "Proficient", years: "4+" },
      { name: "Electronic Document Routing", level: "Proficient", years: "3+" },
      { name: "Version Control", level: "Proficient", years: "3+" },
    ],
  },
  {
    category: "Manufacturing & Quality Systems",
    icon: "🏭",
    skills: [
      { name: "Production Documentation Updates", level: "Proficient", years: "4+" },
      { name: "Process Change Implementation", level: "Proficient", years: "4+" },
      { name: "Cross-Functional Quality Support", level: "Proficient", years: "4+" },
      { name: "ISO-13485", level: "Proficient", years: "4+" },
      { name: "cGMP Documentation Practices", level: "Proficient", years: "4+" },
      { name: "Internal and External Audit Support", level: "Proficient", years: "4+" },
      { name: "Training Compliance", level: "Proficient", years: "4+" },
      { name: "Quality System Maintenance", level: "Proficient", years: "4+" },
    ],
  },
  {
    category: "Database Technologies",
    icon: "🗄️",
    skills: [
      { name: "SQL", level: "Proficient", years: "2+" },
      { name: "MongoDB", level: "Intermediate", years: "2+" },
      { name: "PostgreSQL", level: "Intermediate", years: "1+" },
      { name: "Relational & Non-Relational Databases", level: "Proficient", years: "2+" },
      { name: "Data Modeling", level: "Intermediate", years: "2+" },
      { name: "Redis (Vector Search)", level: "Intermediate", years: "1+" },
      { name: "Pinecone", level: "Intermediate", years: "1+" },
    ],
  },
  {
    category: "DevOps & Tools",
    icon: "⚙️",
    skills: [
      { name: "Git", level: "Proficient", years: "3+" },
      { name: "GitHub", level: "Proficient", years: "3+" },
      { name: "Docker", level: "Intermediate", years: "1+" },
      { name: "Postman", level: "Intermediate", years: "2+" },
      { name: "CI/CD (GitHub Actions)", level: "Intermediate", years: "1+" },
      { name: "Agile/Scrum", level: "Proficient", years: "2+" },
      { name: "TDD (Jest, JUnit)", level: "Intermediate", years: "2+" },
      { name: "Google Cloud Run", level: "Intermediate", years: "1+" },
    ],
  },
  {
    category: "Secure Coding & Cybersecurity",
    icon: "🔒",
    skills: [
      { name: "Input Validation", level: "Proficient", years: "2+" },
      { name: "Buffer Overflow Mitigation", level: "Intermediate", years: "1+" },
      { name: "SQL Injection Defense", level: "Proficient", years: "2+" },
      { name: "Reverse Engineering (C++ ↔ Assembly ↔ Binary Translation)", level: "Intermediate", years: "1+" },
      { name: "Disassembly Analysis", level: "Intermediate", years: "1+" },
      { name: "Legacy Code Documentation", level: "Proficient", years: "2+" },
      { name: "Vulnerability Identification", level: "Intermediate", years: "2+" },
      { name: "Static/Dynamic Code Analysis", level: "Intermediate", years: "2+" },
      { name: "Unit Testing for Security", level: "Intermediate", years: "2+" },
      { name: "Encryption Techniques", level: "Intermediate", years: "1+" },
      { name: "Secure SDLC Programming", level: "Proficient", years: "2+" },
    ],
  },
  {
    category: "Systems Architecture & Embedded Technologies",
    icon: "⚡",
    skills: [
      { name: "Raspberry Pi (GPIO, UART, PWM)", level: "Proficient", years: "1+" },
      { name: "Peripheral Device Integration (Sensors, Displays)", level: "Proficient", years: "1+" },
      { name: "Embedded vs. Desktop Systems", level: "Intermediate", years: "1+" },
      { name: "Thermostat and IoT Device Programming", level: "Proficient", years: "1+" },
      { name: "Hardware-Software Interfaces", level: "Intermediate", years: "1+" },
      { name: "Binary File Analysis", level: "Intermediate", years: "1+" },
      { name: "Low-Level System Optimization", level: "Intermediate", years: "1+" },
      { name: "Performance Optimization", level: "Intermediate", years: "2+" },
      { name: "System Architecture Evaluation", level: "Intermediate", years: "2+" },
    ],
  },
  {
    category: "UI/UX & Design",
    icon: "🎨",
    skills: [
      { name: "Wireframing", level: "Intermediate", years: "2+" },
      { name: "Prototyping", level: "Intermediate", years: "2+" },
      { name: "User Journey Mapping", level: "Intermediate", years: "1+" },
      { name: "Responsive Design", level: "Proficient", years: "2+" },
      { name: "Figma", level: "Intermediate", years: "1+" },
    ],
  },
  {
    category: "Testing & QA",
    icon: "✅",
    skills: [
      { name: "Unit/Integration Testing", level: "Proficient", years: "2+" },
      { name: "Test Planning", level: "Proficient", years: "4+" },
      { name: "Static/Dynamic Testing", level: "Intermediate", years: "2+" },
      { name: "Secure Development Lifecycle (SDLC)", level: "Proficient", years: "2+" },
      { name: "QA Documentation", level: "Proficient", years: "4+" },
    ],
  },
];

export default function SkillsPage() {
  return (
    <>
      <Section className="pt-20">
        <div className="max-w-4xl mb-12">
          <h1 className="heading-1 mb-6">Skills & Expertise</h1>
          <p className="body-large mb-6">
            Technical skills developed through academic coursework, personal projects, and recent internships.
            I'm continuously expanding my capabilities and eager to apply what I've learned in a professional setting.
          </p>

          {/* Proficiency Legend */}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-200 rounded-lg p-5">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
              Proficiency Levels
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <div className="px-3 py-1 text-xs font-medium bg-green-100 text-green-700 border border-green-300 rounded">
                  Proficient
                </div>
                <span className="text-sm text-gray-700">Comfortable building projects independently</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 border border-blue-300 rounded">
                  Intermediate
                </div>
                <span className="text-sm text-gray-700">Working knowledge through coursework/projects</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 border border-gray-300 rounded">
                  Foundational
                </div>
                <span className="text-sm text-gray-700">Learning through coursework and practice</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl space-y-12">
          {skillCategories.map((category) => (
            <div key={category.category} className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h2 className="heading-3 text-gray-900">{category.category}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.skills.map((skill) => {
                  const levelColors = {
                    "Proficient": "bg-green-100 text-green-700 border-green-300",
                    "Intermediate": "bg-blue-100 text-blue-700 border-blue-300",
                    "Foundational": "bg-gray-100 text-gray-700 border-gray-300",
                  };

                  return (
                    <div
                      key={skill.name}
                      className="bg-gray-50 border border-gray-200 rounded-lg p-4 hover:border-primary-400 hover:bg-primary-50/50 transition-all group"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-gray-900 text-sm leading-tight flex-1 group-hover:text-primary-700 transition-colors">
                          {skill.name}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`px-2 py-1 text-xs font-medium rounded border ${levelColors[skill.level as keyof typeof levelColors]}`}>
                          {skill.level}
                        </span>
                        <span className="text-xs text-gray-500 font-medium">
                          {skill.years} {skill.years === "1" ? "year" : "years"}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Key Areas of Focus */}
        <div className="mt-20 pt-16 border-t border-gray-200 max-w-4xl">
          <h2 className="heading-2 mb-8">Areas of Focus</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary-50 to-blue-50 p-6 rounded-lg border border-primary-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Full-Stack Development</h3>
              <p className="body text-gray-700">
                Building web applications through academic projects and internships using React, Next.js,
                Node.js, and Django. Learning RESTful API design, database modeling, and connecting frontend
                interfaces to backend services.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI & Machine Learning</h3>
              <p className="body text-gray-700">
                Exploring AI-powered applications through internship work with RAG pipelines, OpenAI APIs, and vector databases.
                Academic experience with TensorFlow, Keras, and neural networks. Eager to deepen my understanding of ML systems.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-lg border border-purple-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Secure Coding Practices</h3>
              <p className="body text-gray-700">
                Completed coursework in secure software development covering input validation, SQL injection defense,
                and buffer overflow mitigation. Learning about vulnerability identification, code analysis, and secure development lifecycle.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-lg border border-orange-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Systems & Documentation</h3>
              <p className="body text-gray-700">
                Professional experience with documentation management in regulated environments (ISO 13485, cGMP).
                Developed strong skills in process documentation, change control, and maintaining compliance standards.
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
                <h3 className="font-semibold text-gray-900 mb-1">API Integration</h3>
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

        {/* Learning Mindset */}
        <div className="mt-16 max-w-4xl">
          <div className="bg-gray-50 border-l-4 border-primary-500 p-8 rounded-r">
            <h2 className="heading-3 mb-4">My Approach to Learning</h2>
            <p className="body mb-4">
              I focus on understanding fundamentals rather than just learning frameworks. I believe strong foundations in
              data structures, algorithms, and software design principles make it easier to adapt to new technologies and solve problems effectively.
            </p>
            <p className="body">
              I learn best by building things, breaking them, and understanding why. I value code that's readable and maintainable,
              and I'm always looking for feedback to improve my skills and grow as an engineer.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
