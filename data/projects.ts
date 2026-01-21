export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  featured: boolean;
  year: string;
  context: {
    problem: string;
    constraints: string[];
    stakes: string;
  };
  role: {
    title: string;
    ownership: string;
    teamSize?: string;
  };
  approach: {
    overview: string;
    decisions: {
      decision: string;
      rationale: string;
    }[];
    alternatives?: string;
  };
  challenges: {
    challenge: string;
    solution: string;
  }[];
  outcomes: {
    metric: string;
    impact: string;
  }[];
  techStack: string[];
  links?: {
    demo?: string;
    github?: string;
    case_study?: string;
  };
  images?: string[];
}

export const projects: Project[] = [
    {
    id: "neural-os",
    title: "NeuralOS",
    shortDescription: "A full-stack AI-powered notes application that uses semantic search and GPT-4 to help you capture, organize, and recall your thoughts using natural language",
    featured: true,
    year: "2025",
    context: {
      problem: "Traditional note-taking apps let you save notes, but finding them later is painful. Keyword search fails when you can't remember exact words.",
      constraints: [
        "Must understand meaning behind notes, not just match keywords",
        "Real-time instant search results",
        "Privacy-first design",
        "Support multiple auth methods (email/password, Google, GitHub OAuth)"
      ],
      stakes: "Portfolio piece demonstrating full-stack engineering with AI/ML integration, vector databases, and modern authentication"
    },
    role: {
      title: "Full-Stack Software Engineering",
      ownership: "End-to-end ownership: system architecture, frontend, backend API, AI integration, database design, and deployment",
      teamSize: "Personal Project working by myself"
    },
    approach: {
      overview: "Built a full-stack notes application with a React frontend communicating via REST API to a FastAPI backend, which orchestrates OpenAI for embeddings/chat, Pinecone for vector search, and Supabase for auth and data persistence.",
      decisions: [
        {
          decision: "Pinecone vector database for semantic search",
          rationale: "Enables similarity search on note embeddings so users can find notes by meaning rather than exact keyword matches."
        },
        {
          decision: "OpenAI text-embedding-3-small for embeddings + GPT-4o-mini for chat",
          rationale: "Notes are auto-indexed with embeddings on save. GPT-4 synthesizes answers from retrieved notes with full context."
        },
        {
          decision: "FastAPI for backend",
          rationale: "Async support, automatic OpenAPI docs, and type hints make it ideal for building a clean REST API quickly."
        },
        {
          decision: "Supabase for auth and database",
          rationale: "Provides PostgreSQL database, user authentication, and real-time capabilities in one managed service. Supports email/password and OAuth (Google, GitHub)."
        },
        {
          decision: "Hooks-based state management with single-file architecture",
          rationale: "Keeps frontend simple and maintainable at 1,800 lines of React without needing Redux or complex state libraries."
        }
      ],
      alternatives: "Considered using a traditional SQL full-text search but semantic search provides dramatically better results when users can't recall exact wording"
    },
    challenges: [
      {
        challenge: "Semantic search needed to understand meaning, not just match keywords",
        solution: "Integrated OpenAI embeddings (text-embedding-3-small) with Pinecone vector database to enable similarity search across all user notes"
      },
      {
        challenge: "AI responses needed context from user's entire knowledge base",
        solution: "Built retrieval-augmented generation (RAG) pipeline: query Pinecone for relevant notes, pass them as context to GPT-4o-mini, synthesize personalized answers"
      },
      {
        challenge: "Managing authentication across multiple providers",
        solution: "Leveraged Supabase Auth for unified handling of email/password, Google OAuth, and GitHub OAuth sign-in options"
      },
      {
        challenge: "Auto-indexing notes for search without slowing down saves",
        solution: "Notes are auto-indexed for semantic search upon save, generating embeddings asynchronously to keep the UI responsive"
      }
    ],
    outcomes: [
      {
        metric: "Codebase",
        impact: "1,795 lines of JavaScript/React, 69K+ lines of CSS"
      },
      {
        metric: "API Coverage",
        impact: "Full REST API: POST /notes, GET /notes, GET /search, PATCH /notes/:id, DELETE /notes/:id"
      },
      {
        metric: "AI Features",
        impact: "Semantic search with GPT-4 synthesized answers and related note suggestions with match percentages"
      },
      {
        metric: "Authentication",
        impact: "Full auth flow with email/password and OAuth (Google, GitHub) via Supabase"
      },
      {
        metric: "Organization",
        impact: "Favorites, Archives, Trash & Restore, Dark/Light mode, Keyboard shortcuts"
      }
    ],
    techStack: [
      "React 19",
      "FastAPI",
      "OpenAI (GPT-4o-mini + text-embedding-3-small)",
      "Pinecone",
      "Supabase",
      "Axios",
      "Lucide React",
      "React Markdown",
      "Create React App"
    ],
    links: {
      github: "https://github.com/nwyrwas/neural-os"
    },
    images: ["/neural-os-1.jpg", "/neural-os-2.jpg"]
  },
  {
    id: "animal-shelter-analytics",
    title: "Animal Shelter Analytics Dashboard",
    shortDescription: "An interactive data analytics dashboard built with Dash and MongoDB that transforms static animal shelter data into actionable insights with real-time visualizations and geospatial mapping",
    featured: true,
    year: "2025",
    context: {
      problem: "Animal shelters need data-driven insights to optimize rescue operations, but traditional CRUD applications lack visualization capabilities and interactive analytics to identify adoption trends and geographic patterns.",
      constraints: [
        "Transform existing Flask CRUD app into full analytics dashboard",
        "Handle 2,000+ animal records with real-time filtering",
        "Implement secure database operations (SEI CERT, OWASP standards)",
        "Support specialized rescue type queries (Water, Mountain, Disaster)",
        "Maintain modular, scalable MVC architecture"
      ],
      stakes: "Computer Science capstone project demonstrating software engineering principles, data visualization, database optimization, and secure coding practices for degree completion at Southern New Hampshire University"
    },
    role: {
      title: "Full-Stack Software Engineering",
      ownership: "Complete refactor of original artifact: system redesign, database optimization, visualization implementation, security hardening, and documentation",
      teamSize: "Academic Capstone Project (Individual)"
    },
    approach: {
      overview: "Refactored a basic Flask CRUD application into an interactive analytics dashboard using Dash framework, MongoDB with aggregation pipelines, and multiple visualization libraries (Matplotlib, Plotly, Dash Leaflet) to provide rescue organizations with actionable data insights.",
      decisions: [
        {
          decision: "Dash framework for interactive analytics",
          rationale: "Dash provides React-powered components without JavaScript, enabling rapid development of interactive dashboards with Python callbacks for real-time data updates and filtering."
        },
        {
          decision: "MongoDB aggregation pipelines for analytics",
          rationale: "Aggregation pipelines enable complex data transformations and grouping operations directly in the database, reducing application-layer processing and improving query performance."
        },
        {
          decision: "Matplotlib + Plotly dual visualization approach",
          rationale: "Matplotlib for static chart generation and Plotly for interactive visualizations provides flexibility for both reporting and exploratory data analysis."
        },
        {
          decision: "Dash Leaflet for geospatial mapping",
          rationale: "Interactive maps allow rescue coordinators to visualize animal locations, identify geographic patterns, and optimize rescue operations based on spatial distribution."
        },
        {
          decision: "Parameterized queries with MongoDB $regex operators",
          rationale: "Prevents NoSQL injection attacks while maintaining flexible search functionality across multiple fields with case-insensitive pattern matching."
        },
        {
          decision: "MVC-inspired modular architecture",
          rationale: "Separating CRUD operations (crud.py), application logic (app.py), and data import (load_csv.py) improves maintainability and enables independent testing of components."
        }
      ],
      alternatives: "Considered using Streamlit for rapid prototyping but chose Dash for production-grade callback system and better control over component behavior"
    },
    challenges: [
      {
        challenge: "Transforming static CRUD operations into dynamic analytics",
        solution: "Implemented MongoDB aggregation pipelines to compute breed distribution statistics, adoption trends by intake type, and time-series analysis directly in the database layer, then exposed results through reactive Dash callbacks."
      },
      {
        challenge: "Real-time filtering across 2,000+ records without performance degradation",
        solution: "Combined server-side MongoDB queries with client-side Dash DataTable virtual pagination and derived data callbacks to minimize full dataset transfers while maintaining responsive UI."
      },
      {
        challenge: "Specialized rescue type filtering with complex breed/age/gender criteria",
        solution: "Built parameterized query builders using MongoDB $and/$or operators with $regex for breed matching and $gte/$lte for age ranges, enabling precise filtering for Water, Mountain, and Disaster rescue classifications."
      },
      {
        challenge: "Securing database operations against injection attacks",
        solution: "Implemented parameterized queries throughout the CRUD layer, applied input validation on user searches, and used MongoDB's built-in operators ($regex, $and, $or) instead of string concatenation to prevent NoSQL injection."
      },
      {
        challenge: "Interactive geospatial visualization of shelter locations",
        solution: "Integrated Dash Leaflet with marker clustering and tooltips, using MongoDB geospatial data to render animal locations on interactive maps with breed/name metadata and coordinate-based zoom."
      }
    ],
    outcomes: [
      {
        metric: "Capstone Completion",
        impact: "Successfully completed Computer Science B.S. capstone requirement, demonstrating mastery of software design, algorithms, databases, and security"
      },
      {
        metric: "Architecture Enhancement",
        impact: "Refactored monolithic Flask CRUD app into modular MVC architecture with separated concerns (CRUD operations, application logic, data import)"
      },
      {
        metric: "Data Visualization",
        impact: "Implemented interactive dashboards with Matplotlib bar charts (top 10 breeds), Plotly analytics, and Dash Leaflet geospatial mapping"
      },
      {
        metric: "Database Optimization",
        impact: "MongoDB aggregation pipelines for breed distribution, parameterized queries for security, and efficient filtering supporting 2,000+ records"
      },
      {
        metric: "Search Functionality",
        impact: "Cross-column case-insensitive search with MongoDB $regex, specialized rescue type filters (Water, Mountain, Disaster), and real-time result updates"
      },
      {
        metric: "Security Implementation",
        impact: "Applied SEI CERT and OWASP standards with parameterized queries, input validation, and NoSQL injection prevention"
      },
      {
        metric: "User Experience",
        impact: "Dark-themed responsive UI with interactive data tables, dynamic charts, and map-based location visualization"
      }
    ],
    techStack: [
      "Python 3.13",
      "Dash",
      "Flask",
      "MongoDB",
      "Pandas",
      "Matplotlib",
      "Plotly",
      "Dash Leaflet",
      "HTML/CSS",
      "Base64 Encoding"
    ],
    links: {
      github: "https://github.com/nwyrwas/CS-499-Capstone-Project"
    },
    images: ["/animal-shelter-dashboard.jpg"]
  }
];

// Helper to get featured projects
export const getFeaturedProjects = () => projects.filter(p => p.featured);

// Helper to get project by ID
export const getProjectById = (id: string) => projects.find(p => p.id === id);
