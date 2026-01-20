# Portfolio File Structure Guide

Complete reference for every file in your portfolio. Use this when you need to find and edit specific content.

---

## 📚 Documentation Files (Read These First)

### `QUICK_START.md` ⭐ START HERE
**What:** Step-by-step checklist to customize and deploy in 2 hours
**When to use:** Right now, before doing anything else
**Key sections:**
- Personal information updates
- Adding projects
- Writing About page
- Deployment steps

### `CUSTOMIZATION_GUIDE.md`
**What:** Detailed guide for every customization
**When to use:** When you need detailed instructions for specific sections
**Key sections:**
- Content customization
- Design system changes
- SEO optimization
- Form setup

### `DEPLOYMENT_GUIDE.md`
**What:** Complete deployment and post-launch guide
**When to use:** When ready to deploy or having deployment issues
**Key sections:**
- Vercel deployment
- Custom domains
- Analytics setup
- Maintenance schedule

### `PROJECT_SUMMARY.md`
**What:** Overview of what we built and why
**When to use:** To understand the architecture and strategy
**Key sections:**
- Technical stack explanation
- Design principles
- Success metrics
- Competitive advantages

### `README.md`
**What:** Project overview and getting started
**When to use:** Quick reference for commands and structure
**Key sections:**
- Installation
- Project structure
- Customization overview
- Deployment quick links

---

## 🎯 Content Files (Edit These to Customize)

### `data/projects.ts` ⭐ MOST IMPORTANT
**What:** All your project case studies
**Edit to:**
- Add/remove projects
- Update project details
- Mark projects as featured

**Structure:**
```typescript
export interface Project {
  id: string;              // URL slug
  title: string;           // Project name
  shortDescription: string;
  featured: boolean;       // Shows on homepage if true
  year: string;
  context: { ... }         // Problem, constraints, stakes
  role: { ... }            // Your role and ownership
  approach: { ... }        // Technical decisions
  challenges: [ ... ]      // Problems and solutions
  outcomes: [ ... ]        // Measurable results
  techStack: [ ... ]       // Technologies used
  links: { ... }           // Demo/GitHub links
}
```

**Pro tip:** Keep 3-5 projects total, mark top 3 as `featured: true`

---

## 📄 Page Files (Main Content)

### `app/page.tsx`
**What:** Homepage
**Edit to change:**
- Hero headline (line 15-17)
- Subheadline (line 18-21)
- Credibility metrics (lines 31-51)
- Skills overview (lines 165-203)

**Don't touch:** Component structure, layout logic

### `app/about/page.tsx`
**What:** About page
**Edit to change:**
- Professional narrative (lines 18-42)
- What you value (lines 44-84)
- Experience highlights (lines 88-135)
- Education (lines 137-145)

**Structure:**
- Opening: Who you are + years
- Specialization: What you do best
- Background: Where you've worked
- Current: What you're looking for

### `app/projects/page.tsx`
**What:** Projects listing page
**Edit to change:** Usually nothing - pulls from `data/projects.ts`
**Touch only if:** Changing layout or adding filters

### `app/projects/[id]/page.tsx`
**What:** Individual project detail pages
**Edit to change:** Usually nothing - pulls from `data/projects.ts`
**Touch only if:** Changing case study layout

### `app/skills/page.tsx`
**What:** Skills & expertise page
**Edit to change:**
- Skill categories (lines 11-92)
- Core competencies (lines 99-147)
- Your approach to technology (lines 152-166)

**Structure:**
```typescript
const skillCategories = [
  {
    category: "Category Name",
    skills: ["Skill 1", "Skill 2", ...]
  }
]
```

### `app/contact/page.tsx`
**What:** Contact page with form
**Edit to change:**
- Contact methods (lines 54-180)
- Form submission logic (line 38-47)
- Response time note (lines 182-191)

**To connect form:**
See `CUSTOMIZATION_GUIDE.md` section "Contact Form Setup"

---

## 🎨 Style Files

### `app/globals.css`
**What:** Global styles and utility classes
**Edit to change:**
- CSS variables (lines 6-13)
- Typography styles (lines 47-74)
- Container widths (lines 77-83)
- Section spacing (lines 86-92)

**Custom utilities defined:**
- `.heading-1` through `.heading-4` - Heading styles
- `.body-large`, `.body`, `.body-small` - Text styles
- `.container-custom` - Max-width container
- `.section-spacing` - Vertical spacing

**Don't touch:** Tailwind directives (lines 1-3), base styles

### `tailwind.config.ts`
**What:** Tailwind CSS configuration
**Edit to change:**
- Primary brand color (lines 11-23)
- Font family (line 25)
- Max widths (lines 27-30)
- Spacing scale (lines 31-35)

**To change brand color:**
1. Use [uicolors.app](https://uicolors.app) to generate shades
2. Replace entire `primary` color object

---

## 🧩 Component Files

### `components/Navigation.tsx`
**What:** Site header and navigation
**Edit to change:**
- Your name in logo (line 23)
- Navigation links (lines 8-14)
- Resume download link (line 46, 86)

**Features:**
- Mobile responsive menu
- Active link highlighting
- Keyboard accessible

### `components/Footer.tsx`
**What:** Site footer
**Edit to change:**
- Your name (lines 14-15)
- Social links (lines 41, 54, 68)
- Email (line 68)

**Structure:**
- Brand/tagline
- Quick links
- Social links
- Copyright

### `components/Button.tsx`
**What:** Reusable button component
**Edit to change:** Rarely - only to adjust styles

**Usage:**
```tsx
<Button href="/projects">View Work</Button>
<Button variant="secondary">Download</Button>
<Button variant="text">Learn More →</Button>
```

**Variants:**
- `primary` - Blue background (default)
- `secondary` - White with border
- `text` - Text-only link style

### `components/Card.tsx`
**What:** Reusable card component
**Edit to change:** Rarely - only for styling tweaks

**Usage:**
```tsx
<Card>Content here</Card>
<Card hover>Lifts on hover</Card>
```

### `components/Section.tsx`
**What:** Reusable page section wrapper
**Edit to change:** Rarely - handles spacing/layout

**Usage:**
```tsx
<Section>Default white background</Section>
<Section background="gray">Gray background</Section>
<Section spacing="small">Less vertical space</Section>
```

---

## ⚙️ Configuration Files

### `package.json`
**What:** Project dependencies and scripts
**Edit to change:**
- Project name (line 2)
- Version (line 3)

**Don't edit:** Dependencies, scripts (unless you know what you're doing)

**Scripts:**
```bash
npm run dev     # Development server
npm run build   # Production build
npm start       # Run production server
npm run lint    # Check code quality
```

### `next.config.ts`
**What:** Next.js configuration
**Edit to change:** Rarely - only for advanced features

**Current settings:**
- `reactStrictMode: true` - Helps catch bugs
- `poweredByHeader: false` - Removes "Powered by Next.js"
- `compress: true` - Enables gzip compression

### `tsconfig.json`
**What:** TypeScript configuration
**Edit to change:** Never - works out of the box

### `postcss.config.mjs`
**What:** PostCSS configuration for Tailwind
**Edit to change:** Never

### `.eslintrc.json`
**What:** Code linting rules
**Edit to change:** Only if adding custom rules

**Current customization:**
- Disabled `react/no-unescaped-entities` for cleaner content

### `.gitignore`
**What:** Tells git which files to ignore
**Edit to change:** Only if adding new build artifacts

**Ignored:**
- `node_modules/` - Dependencies
- `.next/` - Build output
- `.env*.local` - Environment variables

---

## 📁 Directories

### `app/`
**What:** Next.js App Router pages
**Structure:**
```
app/
├── layout.tsx          # Root layout (nav, footer, metadata)
├── page.tsx           # Homepage
├── globals.css        # Global styles
├── about/page.tsx     # About page
├── contact/page.tsx   # Contact page
├── projects/
│   ├── page.tsx      # Projects list
│   └── [id]/page.tsx # Project detail (dynamic)
└── skills/page.tsx    # Skills page
```

**To add new page:**
1. Create `app/newpage/page.tsx`
2. Export default component
3. Add to navigation in `components/Navigation.tsx`

### `components/`
**What:** Reusable React components
**Files:**
- `Button.tsx` - Buttons and links
- `Card.tsx` - Content cards
- `Footer.tsx` - Site footer
- `Navigation.tsx` - Site header
- `Section.tsx` - Page sections

**To add new component:**
1. Create `components/NewComponent.tsx`
2. Import where needed

### `data/`
**What:** Content and data files
**Files:**
- `projects.ts` - All project data

**To add more data:**
1. Create `data/newdata.ts`
2. Export interface and data
3. Import in pages

### `public/`
**What:** Static assets (served directly)
**Files:**
- `robots.txt` - Search engine directives
- `sitemap.xml` - Page index for SEO
- `resume.pdf` - Your resume (add this!)
- `og-image.jpg` - Social sharing image (add this!)

**To add files:**
Just drop them in `public/` folder. Access via `/filename.ext`

Example:
- File: `public/resume.pdf`
- URL: `https://yoursite.com/resume.pdf`

### `node_modules/`
**What:** Installed dependencies
**Edit:** Never - managed by npm

### `.next/`
**What:** Build output
**Edit:** Never - generated by Next.js

---

## 🔧 When to Edit Which File

### "I want to change my name"
→ Search all files for "Your Name" and replace

### "I want to add a project"
→ Edit `data/projects.ts`

### "I want to change my headline"
→ Edit `app/page.tsx` (line 15-17)

### "I want to update my skills"
→ Edit `app/skills/page.tsx` (lines 11-92)

### "I want to change my email"
→ Edit `components/Footer.tsx` and `app/contact/page.tsx`

### "I want to update my experience"
→ Edit `app/about/page.tsx` (lines 88-135)

### "I want to change colors"
→ Edit `tailwind.config.ts` (primary color)

### "I want to add a new page"
→ Create `app/newpage/page.tsx`

### "I want to modify the contact form"
→ Edit `app/contact/page.tsx`

### "I want to add my resume"
→ Add `public/resume.pdf`

### "I want to change fonts"
→ Edit `app/layout.tsx` (import different font)

### "I want to adjust spacing"
→ Edit `app/globals.css` or `tailwind.config.ts`

---

## 🚫 Files You Should Never Edit

- `node_modules/*` - Auto-generated by npm
- `.next/*` - Build output, regenerated each build
- `next-env.d.ts` - TypeScript definitions, auto-generated
- `package-lock.json` - Lock file, managed by npm

---

## 📝 Files You'll Edit Most Often

1. **`data/projects.ts`** - Every time you ship new work
2. **`app/about/page.tsx`** - When changing jobs or updating experience
3. **`app/skills/page.tsx`** - When learning new technologies
4. **`public/resume.pdf`** - Quarterly or when job hunting

---

## 🎯 Quick Find Guide

**Need to change...** | **Edit this file** | **Line(s)**
--- | --- | ---
Your name | Multiple files | (Search all)
Headline | `app/page.tsx` | 15-17
Email | `components/Footer.tsx`, `app/contact/page.tsx` | 68, 65
GitHub link | `components/Footer.tsx`, `app/contact/page.tsx` | 41, 129
LinkedIn link | `components/Footer.tsx`, `app/contact/page.tsx` | 54, 93
Projects | `data/projects.ts` | Full file
About page | `app/about/page.tsx` | Full file
Skills | `app/skills/page.tsx` | 11-92
Brand color | `tailwind.config.ts` | 11-23
Resume link | `components/Navigation.tsx` | 46, 86
Contact methods | `app/contact/page.tsx` | 54-180
Site URL | `app/layout.tsx`, `public/sitemap.xml` | Multiple

---

## 💡 Pro Tips

1. **Use search:** Most code editors (VS Code, etc.) have "Find in Files" (Cmd/Ctrl+Shift+F)
   - Search for "Your Name" to find all personalization spots
   - Search for "your.email" to find contact info

2. **Test after editing:**
   ```bash
   npm run build
   ```
   If build succeeds, your changes are valid.

3. **Save often, commit often:**
   ```bash
   git add .
   git commit -m "Updated projects"
   git push
   ```

4. **Read file comments:**
   Many files have helpful comments explaining what's what.

5. **Use TypeScript:**
   If you're in `projects.ts` and forget what fields are required, TypeScript will tell you!

---

## 🆘 "I Broke Something" Checklist

1. **Check console for errors:**
   ```bash
   npm run dev
   ```
   Look at terminal output

2. **Try rebuilding:**
   ```bash
   npm run build
   ```
   Error messages will guide you

3. **Undo recent changes:**
   ```bash
   git diff  # See what changed
   git checkout -- filename.tsx  # Undo changes to file
   ```

4. **Restore to last working version:**
   ```bash
   git reset --hard HEAD
   ```

5. **Start fresh:**
   ```bash
   rm -rf .next node_modules
   npm install
   npm run build
   ```

---

## 📚 Further Reading

- `QUICK_START.md` - Getting started checklist
- `CUSTOMIZATION_GUIDE.md` - Detailed customization
- `DEPLOYMENT_GUIDE.md` - Deployment help
- `PROJECT_SUMMARY.md` - Architecture overview
- `README.md` - Project overview

---

**Remember:** You can't break anything that can't be fixed. Experiment, learn, iterate. The worst case is `git reset --hard` and you're back to working state.

Happy customizing! 🚀
