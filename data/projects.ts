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
    id: "distributed-rate-limiter",
    title: "Distributed Rate Limiter for Multi-Tenant SaaS",
    shortDescription: "High-throughput rate limiting service that enforces API quotas across 12 microservices without creating a bottleneck",
    featured: true,
    year: "2025",
    context: {
      problem: "Platform serves 200+ enterprise customers with different API rate limits based on pricing tiers. Existing rate limiter lived in each service independently, causing inconsistent enforcement and making it impossible to track usage across services.",
      constraints: [
        "Must support per-second granularity for bursty traffic",
        "Cannot introduce significant latency to API requests",
        "Must handle 50,000+ requests per second",
        "Budget constraints prevented commercial API gateway adoption"
      ],
      stakes: "Billing disputes with customers and inability to upsell higher-tier plans directly impacted revenue growth"
    },
    role: {
      title: "Senior Backend Engineer",
      ownership: "End-to-end ownership: requirements gathering, design, implementation, and rollout",
      teamSize: "Worked with platform team (3 engineers) for integration"
    },
    approach: {
      overview: "Built a centralized rate limiting service exposing a gRPC API that each microservice calls before processing requests.",
      decisions: [
        {
          decision: "Redis with sliding window counter algorithm instead of token bucket",
          rationale: "Traffic patterns were bursty and required per-second granularity. Token bucket would have been smoother but less precise for our billing needs."
        },
        {
          decision: "gRPC over REST for inter-service communication",
          rationale: "Lower latency and better performance for high-volume internal traffic. HTTP/2 multiplexing reduced connection overhead."
        },
        {
          decision: "Stateless service design with horizontal scaling",
          rationale: "Enables easy scaling during traffic spikes without complex coordination or state management."
        }
      ],
      alternatives: "Considered commercial API gateway but multi-tenancy model required custom logic that would have been expensive and inflexible"
    },
    challenges: [
      {
        challenge: "Redis became a single point of failure in critical request path",
        solution: "Added Redis Sentinel for automatic failover and implemented fail-open mode that allows requests through if Redis is unreachable, with immediate alerts to on-call engineer"
      },
      {
        challenge: "Initial latency was 15-20ms per check, unacceptable for user-facing APIs",
        solution: "Reduced to 3ms by batching checks and using Redis pipelining for multiple commands"
      },
      {
        challenge: "Testing distributed rate limiting behavior was difficult",
        solution: "Built internal load testing framework using k6 that simulates multi-tenant traffic patterns and validates quota enforcement"
      }
    ],
    outcomes: [
      {
        metric: "Uptime",
        impact: "99.99% uptime over 6 months in production"
      },
      {
        metric: "Performance",
        impact: "3ms p95 latency for rate limit checks (down from 15-20ms)"
      },
      {
        metric: "Business Impact",
        impact: "Zero billing disputes related to API usage since launch"
      },
      {
        metric: "Revenue",
        impact: "Enabled usage-based pricing tiers, contributing to $200k ARR in upsells within first quarter"
      },
      {
        metric: "Scalability",
        impact: "Currently handling 50,000+ requests per second with room to scale to 200,000+"
      }
    ],
    techStack: [
      "Go",
      "gRPC",
      "Redis",
      "Redis Sentinel",
      "Prometheus",
      "Grafana",
      "Kubernetes",
      "k6"
    ],
    links: {
      github: "https://github.com/yourusername/rate-limiter"
    }
  },
  {
    id: "realtime-analytics-pipeline",
    title: "Real-Time Analytics Pipeline",
    shortDescription: "Event streaming platform processing 5M events/day with sub-second latency for customer-facing dashboards",
    featured: true,
    year: "2024",
    context: {
      problem: "Customer-facing analytics dashboards were updated every 15 minutes via batch processing, making them unusable for time-sensitive operational decisions. Customers frequently complained about stale data.",
      constraints: [
        "Must process events in near real-time (< 1 second)",
        "Cannot lose events during processing failures",
        "Must handle sudden traffic spikes (10x normal load)",
        "Existing PostgreSQL database struggling with write volume"
      ],
      stakes: "Customer churn risk and lost enterprise deals due to inadequate real-time capabilities"
    },
    role: {
      title: "Tech Lead",
      ownership: "Led design and architecture. Mentored 2 junior engineers during implementation.",
      teamSize: "Team of 3 engineers"
    },
    approach: {
      overview: "Built an event streaming pipeline using Kafka for ingestion, stream processing with aggregations, and materialized views for fast queries.",
      decisions: [
        {
          decision: "Apache Kafka for event streaming instead of AWS Kinesis",
          rationale: "Better exactly-once semantics and lower cost at our scale. Team already had Kafka expertise."
        },
        {
          decision: "TimescaleDB for time-series analytics instead of ClickHouse",
          rationale: "PostgreSQL compatibility meant easier migration and reuse of existing queries. ClickHouse would require complete query rewrites."
        },
        {
          decision: "Incremental aggregations in stream processor rather than query-time aggregation",
          rationale: "Pre-aggregating data reduced dashboard query latency from 2-3s to 150ms"
        }
      ]
    },
    challenges: [
      {
        challenge: "Kafka consumer lag spiked during peak traffic, causing data delays",
        solution: "Implemented dynamic partition scaling and optimized batch sizes. Added monitoring alerts for lag > 10 seconds."
      },
      {
        challenge: "Duplicate events causing incorrect metric calculations",
        solution: "Implemented idempotency keys and exactly-once processing semantics using Kafka transactions"
      }
    ],
    outcomes: [
      {
        metric: "Latency",
        impact: "Reduced data freshness from 15 minutes to < 1 second"
      },
      {
        metric: "Dashboard Performance",
        impact: "Query latency improved from 2-3s to 150ms average"
      },
      {
        metric: "Reliability",
        impact: "Zero data loss incidents in 8 months of operation"
      },
      {
        metric: "Customer Satisfaction",
        impact: "Customer complaints about stale data dropped to zero"
      },
      {
        metric: "Scalability",
        impact: "Processing 5M events/day with capacity for 50M+"
      }
    ],
    techStack: [
      "Apache Kafka",
      "Kafka Streams",
      "TimescaleDB",
      "PostgreSQL",
      "Go",
      "Docker",
      "Kubernetes",
      "Prometheus"
    ]
  },
  {
    id: "graphql-api-migration",
    title: "REST to GraphQL API Migration",
    shortDescription: "Migrated core API from REST to GraphQL, reducing mobile app data transfer by 68% and improving load times",
    featured: true,
    year: "2024",
    context: {
      problem: "Mobile app was making 15+ REST API calls per screen load, causing slow initial load times (4-6 seconds) and excessive data transfer on cellular networks.",
      constraints: [
        "Cannot break existing REST API clients (web and integrations)",
        "Must maintain backwards compatibility during migration",
        "Mobile team needs to ship features during transition",
        "Limited backend engineering capacity"
      ],
      stakes: "Mobile app store ratings declining due to poor performance. 23% of users churning within first week."
    },
    role: {
      title: "Senior Full-Stack Engineer",
      ownership: "Designed and implemented GraphQL layer. Coordinated with mobile team on client migration.",
      teamSize: "Solo backend work, collaborated with 2 mobile engineers"
    },
    approach: {
      overview: "Built a GraphQL layer on top of existing REST services, enabling gradual migration without disrupting current clients.",
      decisions: [
        {
          decision: "Apollo Server with schema-first design",
          rationale: "Type safety and clear contract between frontend and backend. Schema served as living documentation."
        },
        {
          decision: "DataLoader for batching and caching",
          rationale: "Solved N+1 query problem and reduced database load by 40%"
        },
        {
          decision: "Parallel deployment strategy (GraphQL alongside REST)",
          rationale: "Zero downtime migration. Allowed gradual client migration and easy rollback if needed."
        }
      ]
    },
    challenges: [
      {
        challenge: "Authentication and authorization patterns differed between REST and GraphQL",
        solution: "Built unified auth middleware that worked for both. Implemented field-level permissions in GraphQL resolvers."
      },
      {
        challenge: "Mobile team unfamiliar with GraphQL query optimization",
        solution: "Created query complexity analysis tool and provided training. Wrote documentation with examples of efficient query patterns."
      }
    ],
    outcomes: [
      {
        metric: "Data Transfer",
        impact: "68% reduction in mobile data usage per screen load"
      },
      {
        metric: "Load Time",
        impact: "Initial screen load reduced from 4-6s to 1.2s average"
      },
      {
        metric: "API Calls",
        impact: "Reduced from 15+ calls to 1 GraphQL query per screen"
      },
      {
        metric: "User Retention",
        impact: "First-week churn decreased from 23% to 14%"
      },
      {
        metric: "Developer Experience",
        impact: "Mobile team velocity increased 30% due to faster iteration on data requirements"
      }
    ],
    techStack: [
      "GraphQL",
      "Apollo Server",
      "Node.js",
      "TypeScript",
      "DataLoader",
      "PostgreSQL",
      "Redis"
    ],
    links: {
      github: "https://github.com/yourusername/graphql-api"
    }
  }
];

// Helper to get featured projects
export const getFeaturedProjects = () => projects.filter(p => p.featured);

// Helper to get project by ID
export const getProjectById = (id: string) => projects.find(p => p.id === id);
