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
    id: "ledgeriq",
    title: "LedgerIQ",
    shortDescription: "A full-stack personal finance application with AI-powered transaction categorization, real-time budget tracking, and interactive analytics for managing your money smarter",
    featured: true,
    year: "2025",
    context: {
      problem: "Managing personal finances is tedious. Users need to manually categorize transactions, track budgets across spreadsheets, and lack insights into spending patterns. Most finance apps are either too complex or lack intelligent automation.",
      constraints: [
        "Real-time transaction updates with optimistic UI",
        "Automatic transaction categorization without manual input",
        "Type-safe full-stack application with end-to-end validation",
        "Responsive design supporting mobile, tablet, and desktop",
        "Secure handling of financial data with SQL injection and XSS prevention"
      ],
      stakes: "Portfolio piece demonstrating modern full-stack development with Next.js 14, AI integration, real-time data visualization, and production-grade architecture"
    },
    role: {
      title: "Full-Stack Software Engineering",
      ownership: "Complete ownership: system architecture, database schema design, frontend UI/UX, backend API, AI integration, state management, and deployment",
      teamSize: "Personal Project"
    },
    approach: {
      overview: "Built a full-stack finance app using Next.js 14 App Router with TypeScript, Prisma ORM + PostgreSQL for data persistence, OpenAI GPT-4 for intelligent categorization, and shadcn/ui + Recharts for interactive visualizations and modern UI components.",
      decisions: [
        {
          decision: "Next.js 14 App Router with Server Components",
          rationale: "Server Components reduce JavaScript bundle size, improve initial page load, and enable better SEO while maintaining interactivity where needed with Client Components."
        },
        {
          decision: "Prisma ORM with PostgreSQL",
          rationale: "Prisma provides type-safe database queries, automatic migrations, and prevents SQL injection attacks. PostgreSQL offers robust relational data modeling for transactions, budgets, and goals."
        },
        {
          decision: "OpenAI GPT-4 for transaction categorization",
          rationale: "AI automatically categorizes transactions based on merchant names and descriptions, eliminating manual categorization work and learning from spending patterns."
        },
        {
          decision: "Zustand for client-side state management",
          rationale: "Lightweight alternative to Redux with simpler API, less boilerplate, and better TypeScript support for managing UI state like filters and selections."
        },
        {
          decision: "React Query for server state",
          rationale: "Handles caching, background refetching, optimistic updates, and error handling for API calls, keeping server and client state synchronized automatically."
        },
        {
          decision: "shadcn/ui component library",
          rationale: "Copy-paste components built on Radix UI primitives provide accessible, customizable UI elements without vendor lock-in or large dependencies."
        },
        {
          decision: "Zod for end-to-end validation",
          rationale: "TypeScript-first schema validation ensures data integrity from API requests to database operations, catching errors early and providing type inference."
        },
        {
          decision: "Recharts for data visualization",
          rationale: "React-native chart library with responsive design, composable API, and support for complex financial visualizations like spending trends and budget progress."
        }
      ],
      alternatives: "Considered using Plaid API for bank integrations but focused on manual transaction entry first to demonstrate core features without external dependencies"
    },
    challenges: [
      {
        challenge: "Real-time budget tracking across multiple categories without performance issues",
        solution: "Implemented Prisma aggregations to compute budget utilization directly in the database, combined with React Query caching to minimize redundant calculations and keep UI responsive."
      },
      {
        challenge: "AI categorization needed to understand diverse merchant names and transaction descriptions",
        solution: "Integrated OpenAI GPT-4 with custom prompts that analyze merchant names, transaction amounts, and descriptions to predict categories like Groceries, Dining, Transportation, with high accuracy."
      },
      {
        challenge: "Optimistic UI updates for instant feedback while maintaining data consistency",
        solution: "Used React Query's optimistic update pattern with automatic rollback on API errors, ensuring users see immediate changes while maintaining sync with server state."
      },
      {
        challenge: "Type safety across frontend, API routes, and database queries",
        solution: "Leveraged TypeScript with Prisma's generated types, Zod schemas for validation, and strict TypeScript config to catch type errors at compile time across the entire stack."
      },
      {
        challenge: "Complex financial calculations for spending trends and budget forecasts",
        solution: "Built aggregation pipelines using Prisma's groupBy and raw SQL queries for time-series analysis, combined with Recharts for interactive visualizations of trends and projections."
      }
    ],
    outcomes: [
      {
        metric: "Type Safety",
        impact: "96.7% TypeScript coverage with end-to-end type safety from database to UI"
      },
      {
        metric: "Feature Set",
        impact: "Complete CRUD for transactions, budgets, and goals with AI categorization and analytics"
      },
      {
        metric: "Data Visualization",
        impact: "Interactive Recharts dashboards showing spending trends, budget progress, and financial forecasts"
      },
      {
        metric: "Performance",
        impact: "Server Components, code splitting, lazy loading, and optimistic UI for instant feedback"
      },
      {
        metric: "Security",
        impact: "Prisma prevents SQL injection, XSS protection, CSRF tokens, and secure session handling"
      },
      {
        metric: "User Experience",
        impact: "Responsive mobile-first design, dark mode, real-time updates, and accessible UI components"
      }
    ],
    techStack: [
      "Next.js 14",
      "TypeScript",
      "Prisma ORM",
      "PostgreSQL",
      "OpenAI GPT-4",
      "Tailwind CSS",
      "shadcn/ui",
      "Zustand",
      "React Query",
      "Recharts",
      "Framer Motion",
      "Zod"
    ],
    links: {
      github: "https://github.com/nwyrwas/LedgerIq"
    },
    images: ["/ledgeriq_images/ledgeriq_homepage.jpg", "/ledgeriq_images/ledgeriq_dashboard.jpg", "/ledgeriq_images/ledgeriq_ai_insights.jpg"]
  },
  {
    id: "intelligent-pirate-maze-agent",
    title: "Intelligent Pirate Maze Agent",
    shortDescription: "An autonomous AI agent that uses Deep Q-Learning to navigate an 8×8 maze environment, achieving 100% success rate across all starting positions through reinforcement learning",
    featured: true,
    year: "2024",
    context: {
      problem: "Traditional pathfinding requires explicit programming of rules and strategies. This project explores whether an AI agent can learn optimal navigation autonomously through trial and error, without hardcoded instructions.",
      constraints: [
        "8×8 grid maze environment with obstacles and a treasure goal",
        "Agent must learn from scratch without pre-programmed pathfinding logic",
        "Must achieve reliable performance across all 44 possible starting positions",
        "Training must converge within reasonable computational limits (~750 episodes)"
      ],
      stakes: "Academic project for CS-370 (Current Emerging Trends in CS) at Southern New Hampshire University, demonstrating understanding of reinforcement learning, neural networks, and AI fundamentals"
    },
    role: {
      title: "Machine Learning Engineer",
      ownership: "Complete implementation of Deep Q-Learning agent, neural network architecture, training pipeline, reward shaping, and performance analysis",
      teamSize: "Academic Project (Individual)"
    },
    approach: {
      overview: "Implemented a Deep Q-Learning agent using TensorFlow/Keras with experience replay to train a neural network that learns optimal pathfinding policies through reinforcement learning, balancing exploration and exploitation via epsilon-greedy strategy.",
      decisions: [
        {
          decision: "Deep Q-Learning with neural network function approximation",
          rationale: "Q-tables are impractical for large state spaces. Neural networks can generalize from seen states to unseen configurations, enabling the agent to handle any starting position."
        },
        {
          decision: "Experience replay buffer for training stability",
          rationale: "Storing and randomly sampling past experiences breaks correlation between consecutive training samples, leading to more stable learning and faster convergence."
        },
        {
          decision: "64-neuron input layer representing flattened 8×8 maze",
          rationale: "Each cell in the maze is represented as input, providing the network with complete environmental awareness for decision-making."
        },
        {
          decision: "Two hidden layers with PReLU activation functions",
          rationale: "PReLU (Parametric ReLU) handles negative values better than standard ReLU, improving learning dynamics in reinforcement learning scenarios where rewards can be negative."
        },
        {
          decision: "Epsilon-greedy exploration strategy with decay",
          rationale: "Balances exploration (random actions to discover new strategies) with exploitation (using learned knowledge). Decay schedule gradually shifts from exploration to exploitation as training progresses."
        },
        {
          decision: "Shaped reward system with penalties for inefficiency",
          rationale: "Large positive reward for reaching treasure, negative rewards for wall collisions and inefficient moves encourage the agent to find short, valid paths rather than wandering aimlessly."
        }
      ],
      alternatives: "Considered traditional pathfinding algorithms (A*, Dijkstra) but the goal was demonstrating AI learning capabilities rather than implementing deterministic solutions"
    },
    challenges: [
      {
        challenge: "Agent initially exhibited random wandering without learning progress",
        solution: "Implemented shaped reward system with immediate penalties for wall collisions (-0.75) and small step penalties (-0.04) to discourage inefficient exploration, while maintaining large treasure reward (+1.0) for successful completion."
      },
      {
        challenge: "Training was unstable with correlated sequential experiences",
        solution: "Built experience replay buffer that stores (state, action, reward, next_state) tuples and samples randomly during training, breaking temporal correlations and stabilizing neural network convergence."
      },
      {
        challenge: "Agent overfitted to specific starting positions during training",
        solution: "Trained across diverse starting positions and validated performance on all 44 possible free cell locations, ensuring generalization rather than memorization of specific paths."
      },
      {
        challenge: "Balancing exploration of new strategies vs exploitation of learned knowledge",
        solution: "Implemented epsilon-greedy strategy with exponential decay schedule, starting at high exploration (ε=1.0) and gradually reducing to low exploration (ε=0.1) as the agent gains experience."
      }
    ],
    outcomes: [
      {
        metric: "Win Rate",
        impact: "100% success rate across all 44 possible starting positions after training"
      },
      {
        metric: "Training Efficiency",
        impact: "Convergence achieved within ~750 episodes, demonstrating efficient learning"
      },
      {
        metric: "Behavioral Evolution",
        impact: "Agent evolved from random exploration to optimal pathfinding with minimal steps to treasure"
      },
      {
        metric: "Neural Network Architecture",
        impact: "64-input → 164-hidden → 150-hidden → 4-output layers with PReLU activation"
      },
      {
        metric: "Learning Methodology",
        impact: "Successfully implemented Deep Q-Learning with experience replay, epsilon-greedy exploration, and reward shaping"
      }
    ],
    techStack: [
      "Python 3.8+",
      "TensorFlow",
      "Keras",
      "NumPy",
      "Matplotlib",
      "Jupyter Notebook"
    ],
    links: {
      github: "https://github.com/nwyrwas/CS-370-16865-M01-Current-Emerging-Trends-in-CS"
    },
    images: ["/intelligent-pirate-maze-agent.png"]
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
