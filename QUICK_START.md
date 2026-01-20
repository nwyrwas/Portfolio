# Quick Start Checklist

Use this checklist to customize and launch your portfolio in under 2 hours.

## ✅ Step 1: Personal Information (10 minutes)

### Search and Replace

Open each file and update:

**Your Name:**
```
Find: "Your Name"
Replace with: "Your Actual Name"
```

Files to check:
- [ ] `components/Navigation.tsx` (line 23)
- [ ] `components/Footer.tsx` (lines 14, 15)
- [ ] `app/layout.tsx` (multiple locations in metadata)
- [ ] All page title metadata

**Email:**
```
Find: "your.email@example.com"
Replace with: "youremail@domain.com"
```

Files:
- [ ] `components/Footer.tsx`
- [ ] `app/contact/page.tsx`

**GitHub:**
```
Find: "yourusername"
Replace with: "your-github-username"
```

Files:
- [ ] `components/Footer.tsx`
- [ ] `app/contact/page.tsx`

**LinkedIn:**
```
Find: "yourusername"
Replace with: "your-linkedin-username"
```

Files:
- [ ] `components/Footer.tsx`
- [ ] `app/contact/page.tsx`

**Website URL:**
```
Find: "https://yoursite.com"
Replace with: "https://yoursite.com" (temporary, change after deployment)
```

Files:
- [ ] `app/layout.tsx`
- [ ] `public/sitemap.xml`

---

## ✅ Step 2: Add Your Projects (30-60 minutes)

### Edit `data/projects.ts`

1. **Delete the example projects:**
   - distributed-rate-limiter
   - realtime-analytics-pipeline
   - graphql-api-migration

2. **Add YOUR projects** (at least 3)

For each project, fill in:

```typescript
{
  id: "unique-slug",
  title: "Project Name",
  shortDescription: "One sentence (60-100 chars)",
  featured: true, // Set true for top 3 projects
  year: "2025",
  context: {
    problem: "What problem did this solve?",
    constraints: [
      "Technical constraint 1",
      "Business constraint 2",
      "Resource constraint 3"
    ],
    stakes: "Why did this matter to the business?"
  },
  role: {
    title: "Your job title",
    ownership: "What you owned (e.g., 'end-to-end', 'led team of 3')",
    teamSize: "Team size (optional)"
  },
  approach: {
    overview: "High-level approach in 1-2 sentences",
    decisions: [
      {
        decision: "Tech/architecture choice",
        rationale: "Why you chose it"
      }
    ]
  },
  challenges: [
    {
      challenge: "Problem you hit",
      solution: "How you solved it"
    }
  ],
  outcomes: [
    {
      metric: "Performance/Business metric",
      impact: "Quantified result"
    }
  ],
  techStack: ["Tech", "Stack", "List"],
  links: {
    github: "https://github.com/...", // optional
    demo: "https://...", // optional
  }
}
```

### Tips:

- **Be specific:** "Reduced latency by 340ms" not "improved performance"
- **Show business impact:** Revenue, users, cost savings
- **Explain WHY:** Why did you choose this technology?
- **Include challenges:** Shows honesty and problem-solving
- **Mark top 3 as featured:** These show on homepage

---

## ✅ Step 3: Write About Page (20 minutes)

### Edit `app/about/page.tsx`

Replace the example narrative with YOUR story:

**Opening paragraph:**
```
I'm a [role] with [X years] building [what you build] for [who you serve].
```

**Specialization paragraph:**
```
I specialize in [core skills]. My work focuses on [types of problems] —
the challenges that require [key qualities].
```

**Background paragraph:**
```
I've worked at [types of companies], where I've built [notable work].
I'm particularly drawn to [what interests you].
```

**Current status:**
```
Currently, I'm [what you're doing/looking for]. I'm interested in
opportunities where I can [what you want to do next].
```

**What I Value (4 principles):**

Replace with principles YOU actually care about. Examples:
- "Systems that are simple to understand and hard to break"
- "Shipping quickly without accumulating technical debt"
- "Clear documentation and knowledge sharing"
- "Blameless post-mortems and continuous improvement"

**Experience Highlights:**

Add 2-4 recent roles:
```tsx
<div className="border-l-2 border-gray-300 pl-6 py-2">
  <h3>Job Title</h3>
  <p>Company • Dates</p>
  <ul>
    <li>• Achievement with metrics</li>
    <li>• Technical contribution with impact</li>
    <li>• Leadership or mentorship</li>
  </ul>
</div>
```

**Education:**

Update or remove if not relevant.

**Outside of Work:**

One humanizing detail (open source, writing, teaching, etc.)

---

## ✅ Step 4: Update Skills (10 minutes)

### Edit `app/skills/page.tsx`

Update the `skillCategories` array (lines 11-92):

1. **Keep categories that apply to you:**
   - Languages
   - Backend Development
   - Frontend Development
   - Databases & Caching
   - Cloud & Infrastructure
   - etc.

2. **Update skills in each category:**

```typescript
{
  category: "Backend Development",
  skills: [
    "Node.js",    // Keep what you know
    "Express",    // Remove what you don't
    "FastAPI",    // Add what's missing
  ],
}
```

**Guidelines:**
- Only list skills you've used in production
- No proficiency levels (junior signal)
- 5-10 skills per category
- Order by relevance, not alphabet

3. **Update Core Competencies** (lines 99-147)

Replace the 4 highlighted areas with YOUR specializations.

---

## ✅ Step 5: Homepage Metrics (5 minutes)

### Edit `app/page.tsx`

**Update credibility markers (lines 31-51):**

Replace with YOUR metrics:

```tsx
<div className="text-3xl font-bold">6+</div>
<div className="text-sm">Years Experience</div>
```

Examples:
- Years of experience
- Requests/day your systems handle
- Uptime you've achieved
- Performance improvements (%, ms, $)
- Users impacted
- Cost savings
- Team size led

**Update headline (line 15-17):**

Customize to YOUR value proposition:

```tsx
<h1 className="heading-1 mb-6">
  I build resilient systems that scale with your business
</h1>
```

Examples:
- "I architect high-performance APIs that power million-user platforms"
- "I build developer tools that make engineering teams 10x more productive"
- "I design distributed systems that never go down"

---

## ✅ Step 6: Add Resume (2 minutes)

1. Export your resume as PDF
2. Name it `resume.pdf`
3. Place in `public/` folder
4. Download links will work automatically

Or update the links in:
- `components/Navigation.tsx` (lines 46, 86)
- `app/page.tsx` (line 24)

---

## ✅ Step 7: Test Locally (10 minutes)

```bash
# Install dependencies (first time only)
npm install

# Build for production (checks for errors)
npm run build

# Start development server
npm run dev
```

Open http://localhost:3000

**Check:**
- [ ] All pages load
- [ ] No "Your Name" placeholders remain
- [ ] All links work (no 404s)
- [ ] Projects display correctly
- [ ] Contact form displays (won't submit yet - that's OK)
- [ ] Resume downloads
- [ ] Mobile responsive (Chrome DevTools → Toggle device toolbar)

---

## ✅ Step 8: Create Open Graph Image (15 minutes)

**Size:** 1200 x 630 pixels

**Include:**
- Your name
- Your headline/positioning
- Optional: headshot or brand element

**Tools:**
- [Canva](https://canva.com) - Free templates
- [Figma](https://figma.com) - Design tool
- [og-image.vercel.app](https://og-image.vercel.app) - Quick generator

**Save as:** `public/og-image.jpg`

**Update reference in:**
- `app/layout.tsx` (lines 32, 40)

---

## ✅ Step 9: Deploy to Vercel (15 minutes)

### Option A: GitHub + Vercel (Recommended)

1. **Create GitHub repo:**
```bash
git init
git add .
git commit -m "Initial portfolio"
```

2. **Push to GitHub:**
   - Create new repo on github.com
   - Follow instructions to push

3. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project"
   - Import your repository
   - Click "Deploy"

4. **Done!** Live in 2-3 minutes.

### Option B: Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

Follow prompts. Deploy with one command.

---

## ✅ Step 10: Post-Deployment (10 minutes)

### Verify Everything Works

Visit your live site and check:
- [ ] All pages load
- [ ] Links work
- [ ] Resume downloads
- [ ] Mobile responsive
- [ ] No console errors (F12 in browser)

### Update URLs

Now that you have your real URL (e.g., `your-portfolio.vercel.app`):

1. Update in `app/layout.tsx`:
   - Change all `https://yoursite.com` to your actual URL

2. Update in `public/sitemap.xml`:
   - Replace domain

3. Commit and push:
```bash
git add .
git commit -m "Update URLs"
git push
```

Vercel will auto-deploy.

### Submit to Search Engines

**Google:**
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your property
3. Verify via HTML tag (Vercel makes this easy)
4. Submit sitemap: `https://yoursite.com/sitemap.xml`

**Bing:**
1. Go to [bing.com/webmasters](https://www.bing.com/webmasters)
2. Add site
3. Submit sitemap

### Share Your Portfolio

- [ ] Update LinkedIn profile (add link)
- [ ] Add to GitHub profile README
- [ ] Update email signature
- [ ] Share with 3 people for feedback

---

## ✅ Optional Enhancements

### Contact Form Backend

**Quick setup with Formspree:**

1. Sign up at [formspree.io](https://formspree.io)
2. Create form and get endpoint ID
3. Update `app/contact/page.tsx` handleSubmit:

```tsx
const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
});
```

### Analytics

**Vercel Analytics (if on Vercel):**

```bash
npm install @vercel/analytics
```

In `app/layout.tsx`:
```tsx
import { Analytics } from '@vercel/analytics/react';

// Add to return
<Analytics />
```

### Custom Domain

1. Buy domain (Namecheap, Google Domains, etc.)
2. In Vercel dashboard → Settings → Domains
3. Add your domain
4. Update DNS records (follow Vercel instructions)
5. Wait 1-48 hours for propagation

---

## Common Issues & Fixes

### Build fails

```bash
# Clear cache and rebuild
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### TypeScript errors

Read the error message carefully. Usually:
- Missing property in projects data
- Typo in component props
- Missing import

### Site doesn't load after deploy

1. Check Vercel deployment logs
2. Verify build succeeded
3. Check for console errors in browser

### Contact form not working

Form is ready but needs backend. See "Contact Form Backend" above.

---

## Time Estimate

- **Minimum (basic customization):** 1.5 hours
- **Recommended (thorough):** 2-3 hours
- **Full customization:** 4-6 hours

## You're Done! 🎉

Your portfolio is live and ready to land you a senior engineering role.

**Next steps:**
1. Share it with your network
2. Use in job applications
3. Update regularly with new projects
4. Collect feedback and iterate

Remember: **Shipping is better than perfecting.** You can always improve after launch.

Good luck! 🚀

---

## Quick Commands Reference

```bash
# Development
npm run dev              # Start dev server

# Production
npm run build            # Build for production
npm start                # Run production server

# Deployment
git add .
git commit -m "message"
git push                 # Auto-deploys on Vercel

# Troubleshooting
rm -rf .next             # Clear build cache
rm -rf node_modules      # Clear dependencies
npm install              # Reinstall
```

## Need Help?

1. Check `CUSTOMIZATION_GUIDE.md` for detailed instructions
2. Check `DEPLOYMENT_GUIDE.md` for deployment help
3. Read `PROJECT_SUMMARY.md` for full overview
4. Search [Next.js Docs](https://nextjs.org/docs)
5. Ask in [Next.js Discord](https://nextjs.org/discord)
