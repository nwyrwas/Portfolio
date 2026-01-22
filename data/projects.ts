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
    year: "2026",
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
    year: "2025",
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
  },
  {
    id: "3d-graphics-opengl",
    title: "3D Graphics & Visualization with OpenGL",
    shortDescription: "An interactive 3D scene renderer built with OpenGL and C++ featuring real-time camera controls, lighting systems, and texture mapping to create photorealistic 3D environments",
    featured: true,
    year: "2025",
    context: {
      problem: "Understanding 3D graphics programming requires mastering complex mathematical transformations, lighting models, and rendering pipelines. This project demonstrates practical application of computer graphics theory through interactive 3D scene creation.",
      constraints: [
        "Real-time rendering at 60+ FPS with multiple textured objects",
        "Support for camera movement and rotation controls",
        "Implement multiple lighting models (ambient, directional, point)",
        "Handle 3D transformations (translation, rotation, scaling) with matrices",
        "Maintain clean, modular C++ architecture"
      ],
      stakes: "Academic project for CS-330 (Computer Graphics and Visualization) demonstrating mastery of OpenGL, linear algebra, lighting systems, and real-time rendering techniques"
    },
    role: {
      title: "Graphics Programmer",
      ownership: "Complete implementation of 3D rendering pipeline, shader programs, camera system, lighting, texture management, and scene composition",
      teamSize: "Academic Project (Individual)"
    },
    approach: {
      overview: "Built a 3D scene renderer using OpenGL with GLFW for window management and GLAD for extension loading, implementing vertex/fragment shaders, camera controls (WASD movement + mouse look), and multiple lighting sources with texture mapping.",
      decisions: [
        {
          decision: "OpenGL 3.3+ Core Profile for modern rendering",
          rationale: "Core profile enforces modern best practices, eliminates deprecated fixed-function pipeline, and provides better performance through programmable shaders and vertex buffer objects."
        },
        {
          decision: "GLSL shader programs for vertex and fragment processing",
          rationale: "Custom shaders provide full control over vertex transformations and pixel coloring, enabling advanced lighting calculations, texture mapping, and visual effects on the GPU."
        },
        {
          decision: "GLM (OpenGL Mathematics) for matrix operations",
          rationale: "GLM provides GLSL-compatible matrix and vector types in C++, simplifying camera transformations, model-view-projection matrices, and lighting calculations with type-safe API."
        },
        {
          decision: "GLFW for cross-platform window and input management",
          rationale: "GLFW abstracts platform-specific windowing, handles keyboard/mouse input events, and manages OpenGL context creation with minimal boilerplate code."
        },
        {
          decision: "Phong lighting model with ambient, diffuse, and specular components",
          rationale: "Phong lighting provides realistic surface appearance by combining ambient illumination, diffuse reflection based on surface normals, and specular highlights for shiny materials."
        },
        {
          decision: "Texture mapping with multiple image formats",
          rationale: "Textures add photorealistic detail to 3D models without complex geometry. Supporting multiple formats (JPG, PNG) enables diverse material representation like wood, metal, and glass."
        }
      ],
      alternatives: "Considered using Unity or Unreal Engine but chose raw OpenGL to demonstrate fundamental understanding of graphics programming and rendering pipeline mechanics"
    },
    challenges: [
      {
        challenge: "Implementing smooth camera movement with WASD keys and mouse look",
        solution: "Built camera system using view matrix transformations with GLM, handling keyboard input for position updates and mouse delta for rotation, applying frame-rate independent movement with deltaTime calculations."
      },
      {
        challenge: "Achieving realistic lighting across multiple object types and materials",
        solution: "Implemented Phong lighting model in fragment shaders with configurable ambient, diffuse, and specular components. Added support for directional lights and point lights with distance attenuation for depth perception."
      },
      {
        challenge: "Managing texture coordinates and preventing distortion on complex shapes",
        solution: "Calculated proper UV coordinates for each vertex, implemented texture wrapping modes (repeat, clamp), and applied texture filtering (linear, mipmap) to maintain visual quality at different distances."
      },
      {
        challenge: "Optimizing rendering performance with multiple textured objects",
        solution: "Used Vertex Buffer Objects (VBOs) and Vertex Array Objects (VAOs) to minimize state changes, implemented efficient draw calls with glDrawArrays, and batched similar objects to reduce GPU overhead."
      }
    ],
    outcomes: [
      {
        metric: "Graphics Expertise",
        impact: "Mastered OpenGL rendering pipeline, shader programming, matrix mathematics, and real-time 3D graphics techniques"
      },
      {
        metric: "Camera System",
        impact: "Fully interactive camera with WASD movement, mouse look rotation, and arrow key controls for exploring 3D scenes"
      },
      {
        metric: "Lighting Implementation",
        impact: "Multi-light system with ambient, directional, and point lights using Phong shading model for realistic illumination"
      },
      {
        metric: "Texture Mapping",
        impact: "10+ unique textures applied to scene objects including wood, metal, glass, and abstract materials"
      },
      {
        metric: "Performance",
        impact: "Consistent 60+ FPS rendering with multiple textured objects and real-time lighting calculations"
      },
      {
        metric: "Code Architecture",
        impact: "Modular C++ design with separated shader management, texture loading, camera logic, and scene rendering"
      }
    ],
    techStack: [
      "C++",
      "OpenGL 3.3+",
      "GLFW",
      "GLAD",
      "GLM",
      "GLSL",
      "Visual Studio"
    ],
    links: {
      github: "https://github.com/nwyrwas/CS-330-Comp-Graphic-and-Visualization"
    }
  },
  {
    id: "travlr-travel-platform",
    title: "Travlr – Full-Stack Travel Management Platform",
    shortDescription: "A modern MEAN stack travel booking platform with Angular admin dashboard, Express.js RESTful API, and MongoDB database featuring JWT authentication and server-side rendering",
    featured: true,
    year: "2025",
    context: {
      problem: "Travel agencies need a robust platform to manage trip listings, handle user authentication, and provide both customer-facing views and administrative dashboards. Traditional static websites lack the dynamic capabilities and security required for modern travel management.",
      constraints: [
        "Full-stack MEAN architecture (MongoDB, Express, Angular, Node.js)",
        "Secure JWT-based authentication with Passport.js",
        "RESTful API design with proper HTTP methods and status codes",
        "Server-side rendering with Handlebars for SEO and performance",
        "Responsive design supporting mobile and desktop interfaces",
        "Admin dashboard with CRUD operations for trip management"
      ],
      stakes: "Capstone project for CS-465 (Full-Stack Development) demonstrating proficiency in modern web architecture, API design, database modeling, and authentication systems"
    },
    role: {
      title: "Full-Stack Software Engineering",
      ownership: "End-to-end development: backend API, admin dashboard, database schema, authentication system, and deployment architecture",
      teamSize: "Academic Project (Individual)"
    },
    approach: {
      overview: "Built a complete travel management platform using the MEAN stack with separated Express.js backend API and Angular admin frontend, Mongoose for MongoDB ORM, JWT + Passport.js for authentication, and Handlebars for customer-facing server-side rendered views.",
      decisions: [
        {
          decision: "MEAN stack (MongoDB, Express, Angular, Node.js)",
          rationale: "JavaScript across the entire stack enables code reuse, reduces context switching, and leverages Node.js non-blocking I/O for handling concurrent API requests efficiently."
        },
        {
          decision: "Separated backend API and admin dashboard architecture",
          rationale: "Decoupling the RESTful API from the admin frontend enables independent scaling, testing, and deployment, while supporting future mobile apps or third-party integrations."
        },
        {
          decision: "JWT (JSON Web Tokens) for stateless authentication",
          rationale: "JWTs eliminate server-side session storage, enable horizontal scaling, and provide secure token-based authentication that works seamlessly with RESTful APIs and single-page applications."
        },
        {
          decision: "Passport.js for authentication middleware",
          rationale: "Passport provides battle-tested authentication strategies, simplifies JWT integration, and offers extensibility for future OAuth providers (Google, Facebook) without rewriting auth logic."
        },
        {
          decision: "Mongoose ODM for MongoDB modeling",
          rationale: "Mongoose enforces schema validation, provides middleware hooks for business logic, and offers a cleaner API for database operations compared to raw MongoDB driver."
        },
        {
          decision: "Server-side rendering with Handlebars for public pages",
          rationale: "SSR improves SEO for trip listings, reduces initial page load time, and provides better accessibility compared to client-side rendering for content-heavy pages."
        },
        {
          decision: "Angular for admin dashboard",
          rationale: "Angular's TypeScript support, dependency injection, and component architecture provide enterprise-grade structure for complex admin interfaces with routing, forms, and real-time updates."
        }
      ],
      alternatives: "Considered Next.js for unified frontend/backend but chose MEAN stack to demonstrate traditional RESTful API design and separation of concerns between client and server"
    },
    challenges: [
      {
        challenge: "Implementing secure JWT authentication across API and admin dashboard",
        solution: "Built Passport.js JWT strategy that validates tokens on protected routes, implemented token generation on login with expiration, and added Authorization header handling in Angular HTTP interceptors for automatic token attachment."
      },
      {
        challenge: "Designing RESTful API with proper HTTP semantics and error handling",
        solution: "Implemented REST endpoints following HTTP conventions (GET /api/trips, POST /api/trips, PUT /api/trips/:id, DELETE /api/trips/:id) with appropriate status codes (200, 201, 400, 401, 404, 500) and JSON error responses."
      },
      {
        challenge: "Managing database relationships between users and trips in MongoDB",
        solution: "Used Mongoose references to link trips to user creators, implemented population for nested queries, and added cascade deletion logic to maintain data integrity when users or trips are removed."
      },
      {
        challenge: "Building responsive admin dashboard with real-time trip updates",
        solution: "Created Angular services for API communication, implemented reactive forms for trip creation/editing, added client-side validation, and used RxJS observables for handling asynchronous data streams and updates."
      },
      {
        challenge: "Handling CORS for cross-origin API requests from Angular dev server",
        solution: "Configured Express.js CORS middleware to allow requests from Angular development server (localhost:4200), implemented proper preflight handling, and restricted origins in production for security."
      }
    ],
    outcomes: [
      {
        metric: "Full-Stack Proficiency",
        impact: "Demonstrated mastery of MEAN stack with MongoDB, Express.js, Angular, and Node.js across all tiers"
      },
      {
        metric: "API Design",
        impact: "RESTful API with GET, POST, PUT, DELETE operations for trips and users, following HTTP best practices"
      },
      {
        metric: "Authentication System",
        impact: "Secure JWT-based authentication with Passport.js, token expiration, and protected route middleware"
      },
      {
        metric: "Database Architecture",
        impact: "Mongoose schemas for Users and Trips with validation, references, and middleware hooks for business logic"
      },
      {
        metric: "Admin Dashboard",
        impact: "Angular SPA with routing, forms, HTTP interceptors, and real-time CRUD operations for trip management"
      },
      {
        metric: "Server-Side Rendering",
        impact: "Handlebars templates for SEO-optimized public trip listings with dynamic data from MongoDB"
      }
    ],
    techStack: [
      "Node.js",
      "Express.js",
      "Angular",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Passport.js",
      "Handlebars",
      "TypeScript",
      "RxJS",
      "Morgan"
    ],
    links: {
      github: "https://github.com/nwyrwas/Full-Stack-Development"
    }
  },
  {
    id: "thermostat-embedded-systems",
    title: "Smart Thermostat Control System",
    shortDescription: "An embedded IoT thermostat prototype built for Raspberry Pi featuring state machine logic, PWM LED control, and UART serial communication for temperature regulation simulation",
    featured: true,
    year: "2025",
    context: {
      problem: "Smart home thermostats require reliable hardware-software integration to control heating/cooling systems based on user input and environmental data. This project explores how embedded systems manage state transitions and hardware peripherals for IoT applications.",
      constraints: [
        "Raspberry Pi hardware with GPIO pins, LEDs, and buttons",
        "State machine design for Off, Heat, and Cool modes",
        "PWM (Pulse Width Modulation) for LED brightness control",
        "UART serial communication for data transmission",
        "Python-based implementation with hardware abstraction",
        "Support for setpoint adjustment with button inputs"
      ],
      stakes: "Academic project for CS-350 (Emerging Systems Architecture and Technologies) demonstrating embedded systems programming, hardware interfacing, and IoT principles"
    },
    role: {
      title: "Embedded Systems Developer",
      ownership: "Complete development of thermostat logic, state machine implementation, GPIO control, PWM configuration, UART communication, and hardware integration",
      teamSize: "Academic Project (Individual)"
    },
    approach: {
      overview: "Designed and implemented a thermostat control system using Raspberry Pi 4 with Python, leveraging the gpiozero library for GPIO control and statemachine library for state management, with PWM for LED fading effects and UART for serial communication with external systems.",
      decisions: [
        {
          decision: "Python 3 with gpiozero library for GPIO abstraction",
          rationale: "gpiozero provides high-level Pythonic API for GPIO operations, simplifying LED and button control while abstracting low-level register manipulation and pin management."
        },
        {
          decision: "State machine pattern for thermostat mode management",
          rationale: "State machines provide clean separation of Off, Heat, and Cool behaviors with explicit transitions, making the logic maintainable and testable compared to nested conditionals."
        },
        {
          decision: "PWM (Pulse Width Modulation) for LED intensity control",
          rationale: "PWM enables smooth LED fading effects to indicate temperature differential (solid LED when at setpoint, fading when heating/cooling needed), providing intuitive visual feedback without analog circuits."
        },
        {
          decision: "UART serial communication for thermostat-server messaging",
          rationale: "UART enables communication with external systems like temperature sensors or monitoring servers, demonstrating real-world IoT connectivity patterns used in smart home devices."
        },
        {
          decision: "Button-based interface for mode cycling and setpoint adjustment",
          rationale: "Physical buttons simulate real thermostat controls, allowing users to cycle through Off/Heat/Cool modes and adjust target temperature without requiring display or touchscreen."
        },
        {
          decision: "Modular code architecture with separated CRUD, app logic, and data import",
          rationale: "Separating concerns enables independent testing of state machine logic, hardware interfacing, and serial communication, improving code maintainability and reusability."
        }
      ],
      alternatives: "Considered using C for direct hardware control but chose Python for rapid prototyping, better debugging experience, and extensive library support for Raspberry Pi"
    },
    challenges: [
      {
        challenge: "Implementing state machine logic with clean transitions between Off, Heat, and Cool modes",
        solution: "Used statemachine library to define explicit states and transitions, with button press events triggering state changes and LED colors (red for Heat, blue for Cool, off for Off mode) updating automatically."
      },
      {
        challenge: "Creating realistic LED fading effects to indicate temperature differential",
        solution: "Implemented PWM control with gpiozero's PWMLED class, calculating duty cycle based on difference between current temperature and setpoint. LEDs fade when temperature is away from setpoint and stay solid when reached."
      },
      {
        challenge: "Handling button debouncing and multiple input events simultaneously",
        solution: "Leveraged gpiozero's Button class with built-in debouncing, configured separate callbacks for mode button, increase button, and decrease button with proper event handling and state updates."
      },
      {
        challenge: "Establishing UART serial communication for data logging and monitoring",
        solution: "Built client-server architecture using pyserial library, encoding thermostat state (mode, setpoint, temperature) into byte streams, transmitting over UART, and decoding on server side for logging and visualization."
      },
      {
        challenge: "Simulating temperature changes without physical temperature sensor",
        solution: "Implemented temperature simulation logic that gradually adjusts toward setpoint based on current mode (heating increases temperature, cooling decreases it), providing realistic behavior for testing and demonstration."
      }
    ],
    outcomes: [
      {
        metric: "Embedded Systems Expertise",
        impact: "Demonstrated proficiency in Raspberry Pi GPIO programming, hardware-software integration, and IoT device prototyping"
      },
      {
        metric: "State Machine Implementation",
        impact: "Clean state-driven architecture with Off, Heat, and Cool modes with button-triggered transitions"
      },
      {
        metric: "PWM Control",
        impact: "Smooth LED fading effects based on temperature differential using pulse width modulation at 60+ Hz"
      },
      {
        metric: "UART Communication",
        impact: "Serial data transmission between Raspberry Pi and monitoring server using pyserial with byte encoding/decoding"
      },
      {
        metric: "User Interface",
        impact: "Physical button controls for mode cycling and setpoint adjustment with real-time LED visual feedback"
      },
      {
        metric: "Video Demonstration",
        impact: "Published YouTube demo showcasing thermostat functionality and hardware interaction"
      }
    ],
    techStack: [
      "Python 3",
      "Raspberry Pi 4",
      "gpiozero",
      "statemachine",
      "pyserial",
      "GPIO",
      "PWM",
      "UART"
    ],
    links: {
      github: "https://github.com/nwyrwas/CS-350-13290-M01-Emerging-Sys-Arch-Tech"
    }
  },
  {
    id: "mobile-inventory-app",
    title: "Mobile Inventory Management App",
    shortDescription: "An Android mobile application with SQLite database integration, user authentication, and SMS notifications for tracking inventory items with real-time updates and permission handling",
    featured: true,
    year: "2025",
    context: {
      problem: "Small businesses and individuals need mobile-first inventory management tools that work offline, support quick data entry, and send alerts for low stock levels. Traditional desktop solutions lack the accessibility and real-time notification capabilities required for mobile workflows.",
      constraints: [
        "Android platform with SQLite for local data persistence",
        "User authentication with login and account creation",
        "CRUD operations for inventory items in grid format",
        "Runtime permission handling for SMS notifications",
        "Responsive UI supporting different screen sizes",
        "Offline-first architecture without requiring internet connectivity"
      ],
      stakes: "Academic project for CS-360 (Mobile Architecture and Programming) demonstrating Android development, database management, permissions, and mobile UI/UX design"
    },
    role: {
      title: "Android Developer",
      ownership: "Complete development of Android app: UI design, SQLite schema, authentication logic, CRUD operations, SMS integration, and permission handling",
      teamSize: "Academic Project (Individual)"
    },
    approach: {
      overview: "Built a native Android app using Java and Android Studio with SQLite for offline data storage, implementing user authentication, RecyclerView with custom adapter for inventory grid display, runtime SMS permissions, and material design components for modern UI.",
      decisions: [
        {
          decision: "SQLite database for local inventory storage",
          rationale: "SQLite provides fast, reliable offline data persistence without requiring server infrastructure, ensuring the app works without internet connectivity and reduces latency for CRUD operations."
        },
        {
          decision: "Java with Android SDK for native app development",
          rationale: "Java offers mature Android tooling, extensive documentation, and better stability compared to newer frameworks, making it ideal for academic projects requiring robust functionality."
        },
        {
          decision: "RecyclerView with custom adapter for inventory grid",
          rationale: "RecyclerView efficiently handles large datasets with view recycling, reducing memory overhead and providing smooth scrolling for inventory lists compared to ListView."
        },
        {
          decision: "Runtime permission requests for SMS functionality",
          rationale: "Android 6.0+ requires runtime permissions for dangerous permissions like SMS. Implementing proper permission handling ensures compliance with Android security model and better user experience."
        },
        {
          decision: "Material Design components for consistent UI",
          rationale: "Material Design provides familiar, accessible UI patterns with proper touch targets, ripple effects, and elevation, creating professional-looking interfaces that follow Android guidelines."
        },
        {
          decision: "Modular database helper class for CRUD abstraction",
          rationale: "Separating database logic into a helper class with methods for create, read, update, delete operations improves code maintainability and enables independent testing of database functionality."
        }
      ],
      alternatives: "Considered using Room persistence library for more modern database abstraction but chose raw SQLiteOpenHelper to demonstrate fundamental understanding of Android database operations"
    },
    challenges: [
      {
        challenge: "Implementing secure user authentication without backend server",
        solution: "Built local authentication system using SQLite to store hashed passwords with salting, validating credentials on login, and maintaining session state with SharedPreferences for persistent login across app restarts."
      },
      {
        challenge: "Handling dynamic runtime permissions for SMS without disrupting user flow",
        solution: "Implemented permission request flow that checks for SMS permission before sending notifications, displays rationale dialog if previously denied, and gracefully handles both grant and deny scenarios with appropriate fallback behavior."
      },
      {
        challenge: "Displaying inventory items in responsive grid with add/edit/delete actions",
        solution: "Used RecyclerView with GridLayoutManager for flexible column counts based on screen size, implemented custom ViewHolder with onClickListeners for edit/delete, and added FloatingActionButton for adding new items."
      },
      {
        challenge: "Maintaining data consistency during concurrent CRUD operations",
        solution: "Implemented database transactions for atomic updates, used SQLite constraints (UNIQUE, NOT NULL) for data validation, and added proper error handling with rollback logic to prevent data corruption."
      },
      {
        challenge: "Creating intuitive UI for both beginners and experienced users",
        solution: "Designed clean interface with large touch targets, clear labels, confirmation dialogs for destructive actions (delete), and visual feedback (Snackbars) for all user actions to ensure discoverability and prevent errors."
      }
    ],
    outcomes: [
      {
        metric: "Android Development Proficiency",
        impact: "Demonstrated mastery of Android SDK, SQLite database management, and mobile UI/UX design principles"
      },
      {
        metric: "Database Operations",
        impact: "Full CRUD functionality with SQLite including user authentication, inventory management, and data validation"
      },
      {
        metric: "Permission Handling",
        impact: "Runtime permission requests for SMS with proper rationale dialogs and graceful handling of grant/deny scenarios"
      },
      {
        metric: "User Interface",
        impact: "Material Design components with RecyclerView grid, FloatingActionButton, dialogs, and responsive layouts for different screen sizes"
      },
      {
        metric: "Offline Capability",
        impact: "Fully functional without internet connectivity, leveraging local SQLite storage for all data operations"
      },
      {
        metric: "SMS Notifications",
        impact: "Automated alerts for low inventory levels sent via SMS when user grants permission"
      }
    ],
    techStack: [
      "Java",
      "Android SDK",
      "Android Studio",
      "SQLite",
      "RecyclerView",
      "Material Design",
      "SharedPreferences"
    ],
    links: {
      github: "https://github.com/nwyrwas/Mobile-Architect-and-Programming"
    }
  },
  {
    id: "secure-coding-policy",
    title: "Enterprise Security Policy Framework",
    shortDescription: "A comprehensive security policy and secure coding standards document for enterprise software development, covering CERT C/C++ standards, encryption policies, AAA framework, and DevSecOps automation",
    featured: true,
    year: "2025",
    context: {
      problem: "Software organizations lack integrated security policies that connect secure coding standards with risk assessment, encryption strategies, and automated enforcement. This creates gaps between security principles and practical implementation, leaving systems vulnerable to exploits.",
      constraints: [
        "Must cover 10 core security principles with practical coding standards",
        "Map CERT C/C++ coding standards to security principles with code examples",
        "Develop threat matrix ranking vulnerabilities by severity and likelihood",
        "Define encryption policies for data at rest, in flight, and in use",
        "Implement Triple-A framework (Authentication, Authorization, Accounting)",
        "Integrate automation tools for static analysis and security enforcement"
      ],
      stakes: "Capstone project for CS-405 (Secure Coding) demonstrating ability to design enterprise security policies aligned with industry standards (CERT, OWASP), risk management frameworks, and DevSecOps practices"
    },
    role: {
      title: "Security Engineering Consultant",
      ownership: "Complete security policy design, coding standards documentation, risk assessment matrix, encryption policy, AAA framework design, automation strategy, and presentation materials",
      teamSize: "Academic Project (Individual)"
    },
    approach: {
      overview: "Developed a comprehensive security policy for a fictional software company (Green Pace) covering secure coding principles, CERT C/C++ standards with compliant/noncompliant code examples, threat assessment matrix, encryption strategies, AAA controls, and automated security enforcement using static analysis tools integrated into CI/CD pipelines.",
      decisions: [
        {
          decision: "CERT C/C++ Secure Coding Standards as foundation",
          rationale: "CERT standards are industry-recognized, peer-reviewed guidelines backed by Carnegie Mellon University, providing concrete rules for preventing buffer overflows, integer overflows, and undefined behavior in C/C++ code."
        },
        {
          decision: "Defense-in-depth layered security approach",
          rationale: "Multiple overlapping security controls ensure that failure of one layer doesn't compromise the entire system, providing redundancy and reducing single points of failure."
        },
        {
          decision: "Risk assessment matrix with severity, likelihood, and remediation cost",
          rationale: "Quantifying risks enables prioritization of high-severity, high-likelihood vulnerabilities for immediate remediation while deferring low-risk issues, optimizing resource allocation and managing technical debt strategically."
        },
        {
          decision: "Encryption at rest (AES-256), in flight (TLS/IPSec), and in use (secure enclaves)",
          rationale: "Comprehensive encryption strategy protects data in all states, ensuring confidentiality even if storage media, network traffic, or processing memory is compromised."
        },
        {
          decision: "Triple-A framework (Authentication, Authorization, Accounting)",
          rationale: "AAA provides complete access control: verifying identity (authentication), enforcing permissions (authorization), and logging actions (accounting) for audit trails and compliance requirements."
        },
        {
          decision: "Automated security enforcement with static analysis tools",
          rationale: "Integrating Clang warnings, CodeSonar, Coverity, Cppcheck, and Axivion into CI/CD pipelines ensures every code commit is validated against security standards, catching vulnerabilities before production deployment."
        },
        {
          decision: "Zero Trust security model with continuous validation",
          rationale: "Eliminating implicit trust and requiring continuous authentication/authorization prevents lateral movement after breaches and reduces insider threat risks."
        }
      ],
      alternatives: "Considered using generic security frameworks like NIST CSF but chose CERT coding standards for concrete, code-level guidance that developers can immediately apply"
    },
    challenges: [
      {
        challenge: "Translating abstract security principles into actionable coding standards",
        solution: "Mapped 10 core security principles (least privilege, defense in depth, input validation) to specific CERT C/C++ rules (STR32-C, INT31-C, MEM54-CPP) with compliant and noncompliant code examples showing exactly what to do and what to avoid."
      },
      {
        challenge: "Balancing security requirements with business constraints and development velocity",
        solution: "Created threat matrix ranking vulnerabilities by severity (critical to low), likelihood (high to rare), and remediation cost, enabling strategic prioritization where high-risk issues are fixed immediately while low-risk items are deferred to manage technical debt."
      },
      {
        challenge: "Designing encryption policies that cover all data states without excessive complexity",
        solution: "Defined layered encryption approach: AES-256 for data at rest (databases, backups), TLS 1.3/IPSec for data in flight (network traffic), and secure enclaves/homomorphic encryption for data in use (processing), with clear guidelines on when each applies."
      },
      {
        challenge: "Enforcing security policies across development lifecycle without manual audits",
        solution: "Integrated automated security tools (Clang, CodeSonar, Coverity, Cppcheck, Axivion, Astree) into CI/CD pipelines with automated unit testing, regression testing, and dependency scanning, ensuring continuous enforcement at scale."
      },
      {
        challenge: "Communicating technical security concepts to non-technical stakeholders",
        solution: "Created presentation materials with executive summary slides, speaker notes script, and visual diagrams explaining defense-in-depth, encryption strategies, and risk tradeoffs in business terms focused on value and cost-benefit analysis."
      }
    ],
    outcomes: [
      {
        metric: "Policy Scope",
        impact: "60+ page comprehensive security policy covering principles, coding standards, risk assessment, encryption, AAA, and automation"
      },
      {
        metric: "Coding Standards",
        impact: "10 CERT C/C++ standards mapped to security principles with compliant and noncompliant code examples"
      },
      {
        metric: "Threat Assessment",
        impact: "Risk matrix ranking vulnerabilities by severity, likelihood, and remediation cost for strategic prioritization"
      },
      {
        metric: "Encryption Framework",
        impact: "Complete encryption policies for data at rest (AES-256), in flight (TLS/IPSec), and in use (secure enclaves)"
      },
      {
        metric: "AAA Implementation",
        impact: "Triple-A framework with authentication (MFA), authorization (RBAC), and accounting (audit logging) controls"
      },
      {
        metric: "Automation Strategy",
        impact: "DevSecOps pipeline with integrated static analysis tools (Clang, CodeSonar, Coverity, Axivion, Cppcheck)"
      },
      {
        metric: "Presentation Materials",
        impact: "Stakeholder slide deck and speaker notes for communicating security value and risk tradeoffs"
      }
    ],
    techStack: [
      "CERT C/C++ Standards",
      "OWASP Top 10",
      "Clang Static Analyzer",
      "CodeSonar",
      "Coverity",
      "Cppcheck",
      "Axivion",
      "Astree",
      "AES-256",
      "TLS/IPSec",
      "Zero Trust Architecture"
    ],
    links: {
      github: "https://github.com/nwyrwas/CS-405-15275-Secure-Coding"
    }
  }
];

// Helper to get featured projects
export const getFeaturedProjects = () => projects.filter(p => p.featured);

// Helper to get project by ID
export const getProjectById = (id: string) => projects.find(p => p.id === id);
