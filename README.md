# Professional Portfolio

A world-class personal portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Designed to communicate credibility, competence, and professional maturity to technical recruiters, hiring managers, and executives.

## Features

- **Modern Tech Stack**: Next.js 15 (App Router), TypeScript, Tailwind CSS
- **Performance Optimized**: Fast load times, optimized assets, SEO-friendly
- **Fully Responsive**: Mobile-first design that works on all devices
- **Accessible**: WCAG-compliant with keyboard navigation and screen reader support
- **Type-Safe**: Full TypeScript coverage for reliability
- **SEO Optimized**: Metadata, Open Graph tags, sitemap, robots.txt
- **Easy to Customize**: Structured data files for projects and skills

## Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page with form
│   ├── projects/          # Projects listing and detail pages
│   ├── skills/            # Skills and expertise page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Homepage
├── components/            # Reusable React components
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Footer.tsx
│   ├── Navigation.tsx
│   └── Section.tsx
├── data/                  # Content and data
│   └── projects.ts        # Project case studies data
├── public/                # Static assets
│   ├── robots.txt
│   └── sitemap.xml
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization Guide

### 1. Update Personal Information

**Navigation & Footer** (`components/Navigation.tsx`, `components/Footer.tsx`):
- Replace "Your Name" with your actual name
- Update social media links (GitHub, LinkedIn)
- Update email address

**Metadata** (`app/layout.tsx`):
- Update site title and description
- Add your Open Graph image URL
- Update meta tags with your information

### 2. Add Your Projects

Edit `data/projects.ts`:
- Add or modify project case studies
- Include context, approach, challenges, and outcomes
- Set `featured: true` for projects to appear on homepage
- Update tech stack arrays

### 3. Update About Page

Edit `app/about/page.tsx`:
- Write your professional narrative
- Update experience highlights
- Modify education and background
- Customize your values and principles

### 4. Customize Skills

Edit `app/skills/page.tsx`:
- Update skill categories and lists
- Modify core competencies
- Adjust highlighted expertise areas

### 5. Add Your Resume

Place your resume PDF in the `public/` folder as `resume.pdf`, or update the download links in:
- `components/Navigation.tsx`
- `app/page.tsx`

### 6. Update Design System

Edit `tailwind.config.ts`:
- Customize colors (primary brand color)
- Adjust spacing scale
- Modify font choices

Edit `app/globals.css`:
- Customize CSS variables
- Adjust typography styles
- Modify component utilities

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Deploy with one click

### Netlify

1. Push your code to GitHub
2. Connect your repository in [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `.next`

### Other Platforms

Build the production bundle:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Performance Optimization

- Images: Use Next.js Image component for automatic optimization
- Fonts: Using `next/font` for optimized font loading
- Code splitting: Automatic with Next.js App Router
- Caching: Configure headers in `next.config.ts`

## SEO Checklist

- [x] Metadata in all pages
- [x] Open Graph tags
- [x] Sitemap.xml
- [x] Robots.txt
- [x] Semantic HTML
- [x] Descriptive URLs
- [ ] Add your actual Open Graph image (`public/og-image.jpg`)
- [ ] Submit sitemap to Google Search Console

## Accessibility Features

- Keyboard navigation support
- ARIA labels and landmarks
- Focus indicators
- Screen reader friendly
- Sufficient color contrast (WCAG AA)
- Responsive to `prefers-reduced-motion`

## Content Strategy

### Homepage
- Value proposition and positioning
- Credibility markers (years, metrics)
- Featured projects
- Skills overview
- Clear CTAs

### Projects
- Problem → Solution → Impact structure
- Technical depth with business context
- Measurable outcomes
- Tech stack visibility

### About
- Professional narrative (not biography)
- Experience highlights
- Values and principles
- What you're looking for

### Skills
- Grouped by capability
- No proficiency ratings
- Core competencies highlighted
- Technology choices explained

## Maintenance

### Adding New Projects

1. Add project data to `data/projects.ts`
2. Follow the existing structure
3. Include all required fields
4. Set `featured: true` if appropriate

### Updating Content

- Projects: Edit `data/projects.ts`
- About: Edit `app/about/page.tsx`
- Skills: Edit `app/skills/page.tsx`
- Homepage: Edit `app/page.tsx`

## License

This is a personal portfolio template. Feel free to use it for your own portfolio, but please don't claim it as your own design work.

## Credits

Built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), and [TypeScript](https://www.typescriptlang.org/).
