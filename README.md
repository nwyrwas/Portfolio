# Professional Portfolio Website

A modern, production-ready portfolio website I built to showcase my software engineering projects, technical skills, and professional background. This portfolio demonstrates my capabilities in full-stack development, modern web technologies, and clean, maintainable code architecture.

🔗 **Live Site**: [nickwyrwas.com](https://nickwyrwas.com)

## About This Project

This portfolio website represe nts my approach to building professional, user-focused web applications. I designed and developedevery aspect of this site from scratch, focusing on performance, accessibility, SEO, and a clean user experience that effectively communicates my technical capabilities to recruiters, hiring managers, and fellow developers.


### Why I Built This

As a software engineering graduate and U.S. Marine Corps veteran transitioning into the tech industry, I needed a professional platform that:
- Demonstrates my technical skills through practical implementation
- Showcases my projects with detailed case studies
- Provides an accessible, performant user experience
- Reflects my commitment to clean code and best practices
- Serves as a living example of my front-end and full-stack capabilities

## Tech Stack

This portfolio is built with a modern, industry-standard technology stack:

### Core Technologies
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router for optimal performance and SEO
- **[React 19](https://react.dev/)** - Component-based UI library
- **[TypeScript 5.7](https://www.typescriptlang.org/)** - Type-safe JavaScript for reliability and maintainability
- **[Tailwind CSS 3.4](https://tailwindcss.com/)** - Utility-first CSS framework for rapid, responsive design

### Development Tools
- **ESLint** - Code quality and consistency
- **PostCSS & Autoprefixer** - CSS processing and browser compatibility
- **Vercel** - Deployment platform with automatic HTTPS, CDN, and edge optimization

### Key Features I Implemented

#### 🎨 Design & User Experience
- **Mobile-First Responsive Design** - Fully responsive layout that works seamlessly across all device sizes
- **Custom Design System** - Consistent typography, spacing, and color palette defined in Tailwind config
- **Accessibility (WCAG AA)** - Keyboard navigation, ARIA labels, focus indicators, screen reader support
- **Performance Optimized** - Fast page loads with Next.js automatic code splitting and optimization

#### 🔍 SEO & Discoverability
- **Comprehensive Metadata** - Open Graph tags, Twitter cards, semantic HTML
- **Dynamic Sitemap** - XML sitemap for search engine crawling
- **Robots.txt Configuration** - Search engine directives
- **Structured URLs** - Clean, descriptive route structure

#### 💻 Architecture & Code Quality
- **Type-Safe Codebase** - 100% TypeScript coverage across all components and pages
- **Component-Based Architecture** - Reusable UI components (Button, Card, Section, Navigation, Footer)
- **Structured Data Management** - Centralized project data with TypeScript interfaces
- **Clean Code Principles** - DRY, separation of concerns, semantic naming

#### 📄 Content Strategy
- **Project Case Studies** - Detailed technical breakdowns with context, approach, challenges, and outcomes
- **Skills Showcase** - Organized by capability area (backend, frontend, tooling/cloud)
- **Professional Narrative** - About page emphasizing experience and values, not just biography
- **Clear CTAs** - Strategic calls-to-action guiding visitors to contact or view work

## Project Structure

```
portfolio/
├── app/                          # Next.js App Router
│   ├── about/                   # About page - professional background
│   │   └── page.tsx
│   ├── contact/                 # Contact page with form
│   │   └── page.tsx
│   ├── projects/                # Projects listing and individual case studies
│   │   ├── [id]/
│   │   │   └── page.tsx        # Dynamic project detail pages
│   │   └── page.tsx            # All projects listing
│   ├── skills/                  # Skills and technical expertise
│   │   └── page.tsx
│   ├── globals.css              # Global styles and CSS variables
│   ├── layout.tsx               # Root layout with SEO metadata
│   └── page.tsx                 # Homepage with hero, featured projects, overview
│
├── components/                   # Reusable React components
│   ├── Button.tsx               # Polymorphic button component (link/button)
│   ├── Card.tsx                 # Container component with hover effects
│   ├── Footer.tsx               # Site footer with social links
│   ├── Navigation.tsx           # Responsive navigation with mobile menu
│   └── Section.tsx              # Layout section with background variants
│
├── data/                         # Content and data layer
│   └── projects.ts              # Project case studies with TypeScript interfaces
│
├── public/                       # Static assets
│   ├── robots.txt               # Search engine directives
│   └── sitemap.xml              # Site structure for SEO
│
├── package.json                  # Dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
├── tailwind.config.ts            # Tailwind CSS customization
├── postcss.config.mjs            # PostCSS configuration
└── next.config.ts                # Next.js configuration
```

## Featured Content

### Project Case Studies

I've documented my projects using a structured approach that demonstrates technical depth and business context:

- **Context**: Problem statement, constraints, and why the project matters
- **Role**: My ownership and responsibilities
- **Approach**: Technical decisions with clear rationale
- **Challenges**: Specific problems encountered and how I solved them
- **Outcomes**: Measurable results and technical achievements

**Current Featured Project: NeuralOS**
- Full-stack AI-powered notes application
- Tech stack: React 19, FastAPI, OpenAI (GPT-4o-mini, text-embedding-3-small), Pinecone, Supabase
- Features: Semantic search, RAG (Retrieval-Augmented Generation), multi-provider authentication
- 1,795 lines of JavaScript/React, full REST API implementation

### Skills Organization

Skills are grouped by capability area rather than proficiency levels, focusing on what I can build:

- **Backend & Core Programming**: Python, Node.js, RESTful APIs, PostgreSQL, Authentication, Testing
- **Frontend & Full-Stack Development**: TypeScript, React, Next.js, HTML, CSS, Responsive Design
- **Tooling, Cloud & DevOps**: Git/GitHub, Docker, CI/CD, GitHub Actions, Cloud Deployment

## Technical Implementation Highlights

### Performance Optimizations
- ✅ Next.js automatic code splitting and tree shaking
- ✅ Optimized font loading with `next/font`
- ✅ Image optimization ready with Next.js Image component
- ✅ Static site generation (SSG) for fast page loads

### Accessibility Features
- ✅ Semantic HTML5 structure (header, nav, main, section, footer)
- ✅ ARIA labels and landmarks
- ✅ Keyboard navigation support with visible focus indicators
- ✅ Sufficient color contrast ratios (WCAG AA compliance)
- ✅ Screen reader friendly component structure

### Responsive Design
- ✅ Mobile-first CSS with Tailwind breakpoints (sm, md, lg, xl)
- ✅ Flexible grid layouts that adapt to screen size
- ✅ Touch-friendly interactive elements
- ✅ Tested across devices and browsers

### Type Safety
- ✅ TypeScript interfaces for all data structures
- ✅ Prop types for all React components
- ✅ Type-safe routing and navigation
- ✅ Compile-time error detection

## Local Development

### Prerequisites
- Node.js 18 or higher
- npm, yarn, or pnpm package manager

### Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Create optimized production build
- `npm start` - Run production server (requires build first)
- `npm run lint` - Run ESLint for code quality checks

## Deployment

This portfolio is deployed on **Vercel**, leveraging their optimized Next.js hosting:

- ✅ Automatic HTTPS
- ✅ Global CDN distribution
- ✅ Edge network optimization
- ✅ Continuous deployment from Git
- ✅ Custom domain with automatic SSL (nickwyrwas.com)

### Deployment Steps

1. Push code to GitHub repository
2. Connect repository to Vercel
3. Vercel automatically detects Next.js and configures build settings
4. Deploy with a single click
5. Configure custom domain in Vercel dashboard

## Lessons Learned & Development Process

Building this portfolio taught me several valuable lessons:

1. **Design Systems Matter**: Establishing a consistent design system early (typography scale, color palette, spacing) made development much faster and the final product more cohesive.

2. **Type Safety Saves Time**: TypeScript caught numerous potential bugs before runtime, especially when refactoring component interfaces.

3. **Mobile-First Is Essential**: Starting with mobile layouts and progressively enhancing for larger screens resulted in better responsive design than desktop-first approaches.

4. **SEO Requires Intentionality**: Search engine optimization isn't automatic - it requires deliberate implementation of metadata, semantic HTML, sitemaps, and structured content.

5. **Content Strategy Before Code**: Writing project case studies and planning content structure before building pages prevented numerous rewrites and architectural changes.

## Future Enhancements

Planned improvements and features I'm considering:

- [ ] Blog section for technical writing and development insights
- [ ] Project image galleries with Next.js Image optimization
- [ ] Contact form backend with email service integration
- [ ] Dark mode toggle with theme persistence
- [ ] Advanced analytics for visitor insights
- [ ] Automated testing with Jest and React Testing Library
- [ ] Continuous integration pipeline with GitHub Actions
- [ ] Performance monitoring and Core Web Vitals tracking

## What Makes This Portfolio Different

Unlike template-based portfolios, this project demonstrates:

- **Original Design & Implementation**: Every component built from scratch, not copied from templates
- **Production-Ready Code**: Clean, type-safe, maintainable code following industry best practices
- **Technical Depth**: Complex features like dynamic routing, responsive design, and SEO optimization
- **Content Strategy**: Thoughtful information architecture focused on recruiter/hiring manager needs
- **Live Deployment**: Fully deployed on custom domain with proper SSL, CDN, and performance optimization

## Contact & Connect

I'm actively seeking software engineering opportunities where I can contribute to meaningful projects and continue growing as a developer.

- **Website**: [nickwyrwas.com](nwyrwas.github.io)
- **Email**: nick.wyrwas@outlook.com
- **GitHub**: [github.com/nwyrwas](https://github.com/nwyrwas)
- **LinkedIn**: [linkedin.com/in/nicholas-wyrwas](https://linkedin.com/in/nicholas-wyrwas)

## License

This project is available as a reference for my portfolio work. While the code is open source and available for learning purposes, please don't directly copy this portfolio for your own use without significant modification. Build something that represents your unique experience and skills.

## Acknowledgments

Built with:
- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Vercel](https://vercel.com/) - Deployment platform

---

**Built by Nick Wyrwas** | Software Engineering Graduate | U.S. Marine Corps Veteran

*This portfolio represents not just my projects, but my commitment to clean code, user-centered design, and continuous learning in software engineering.*
