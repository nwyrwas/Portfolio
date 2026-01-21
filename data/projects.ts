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
    }
  }
];

// Helper to get featured projects
export const getFeaturedProjects = () => projects.filter(p => p.featured);

// Helper to get project by ID
export const getProjectById = (id: string) => projects.find(p => p.id === id);
