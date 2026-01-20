# Portfolio Customization Guide

This guide walks you through customizing your portfolio to reflect your personal brand, experience, and technical expertise.

## Quick Start Checklist

Before deploying, complete these essential customizations:

- [ ] Update name throughout the site
- [ ] Replace placeholder email and social links
- [ ] Add your projects to `data/projects.ts`
- [ ] Write your About page narrative
- [ ] Update skills and expertise
- [ ] Add your resume PDF
- [ ] Replace placeholder metrics with your own
- [ ] Update meta tags and SEO information
- [ ] Create an Open Graph image
- [ ] Test on mobile devices

---

## 1. Personal Information

### Update Your Name

**Files to edit:**
- `components/Navigation.tsx` (line 23): Logo/name in navigation
- `components/Footer.tsx` (line 14, 15): Footer branding
- `app/layout.tsx` (line 18, 20, 27, 31, 35, 38): All metadata
- `app/about/page.tsx` (line 7): Page title
- `app/skills/page.tsx` (line 4): Page title
- `app/projects/page.tsx` (line 7): Page title

**Search and replace:**
```
Find: "Your Name"
Replace: "Your Actual Name"
```

### Update Contact Information

**Email Address** - Find and replace in:
- `components/Footer.tsx` (line 68)
- `app/contact/page.tsx` (line 65)
- `app/layout.tsx` (update if adding structured data)

**Social Links:**

GitHub:
- `components/Footer.tsx` (line 41): Update href
- `components/Navigation.tsx` (if you add GitHub link)
- `app/contact/page.tsx` (line 129)

LinkedIn:
- `components/Footer.tsx` (line 54): Update href
- `app/contact/page.tsx` (line 93)

### Update Site URL

**Find and replace:**
```
Find: "https://yoursite.com"
Replace: "https://youractualsite.com"
```

**Files:**
- `app/layout.tsx` (lines 22, 27, 32)
- `public/sitemap.xml` (all URLs)

---

## 2. Professional Positioning

### Homepage Headline (`app/page.tsx`)

**Current (line 15-17):**
```tsx
<h1 className="heading-1 mb-6">
  I build resilient systems that scale with your business
</h1>
```

**Customize to reflect YOUR value proposition:**

Examples:
- "I architect high-performance APIs that power million-user platforms"
- "I build developer tools that make engineering teams 10x more productive"
- "I design distributed systems that never go down"

**Subheadline (line 18-21):** Update to match your specialization

### Credibility Markers (`app/page.tsx`, lines 31-51)

**Replace with YOUR metrics:**

```tsx
<div className="text-3xl font-bold text-gray-900 mb-1">6+</div>
<div className="text-sm text-gray-600">Years Experience</div>
```

Examples of metrics you can use:
- Years of experience
- Requests/day handled by your systems
- Uptime achieved
- Performance improvements (%, ms, $)
- Users impacted
- Cost savings
- Team size led
- Open source contributions
- GitHub stars

---

## 3. Projects & Case Studies

### Adding Your Projects

Edit `data/projects.ts`:

**Step 1: Remove example projects**
Delete the three example projects (distributed-rate-limiter, realtime-analytics-pipeline, graphql-api-migration)

**Step 2: Add your own projects**

Use this template:

```typescript
{
  id: "unique-project-id", // URL-friendly slug
  title: "Project Title",
  shortDescription: "One-line description (60-100 characters)",
  featured: true, // Set to true for homepage visibility
  year: "2025",
  context: {
    problem: "What problem existed? Who was affected?",
    constraints: [
      "Technical constraint 1",
      "Business constraint 2",
      "Resource constraint 3"
    ],
    stakes: "Why did this matter? Business impact if unsolved."
  },
  role: {
    title: "Your Role (e.g., Senior Backend Engineer, Tech Lead)",
    ownership: "What did you own? Solo? Led team?",
    teamSize: "Team of X engineers" // Optional
  },
  approach: {
    overview: "High-level approach in 1-2 sentences",
    decisions: [
      {
        decision: "Technology or architecture choice",
        rationale: "Why you chose this over alternatives"
      },
      // Add 2-4 key decisions
    ],
    alternatives: "What alternatives you considered" // Optional
  },
  challenges: [
    {
      challenge: "Problem you encountered",
      solution: "How you solved it"
    },
    // Add 2-3 challenges
  ],
  outcomes: [
    {
      metric: "Performance / Business metric",
      impact: "Measurable result with numbers"
    },
    // Add 3-5 outcomes
  ],
  techStack: ["React", "Node.js", "PostgreSQL"], // 5-8 technologies
  links: { // Optional
    demo: "https://...",
    github: "https://github.com/...",
  }
}
```

**Step 3: Mark 2-3 projects as `featured: true`** for homepage display

### Writing Strong Project Descriptions

**DO:**
- Start with the problem, not the solution
- Use specific numbers (68% improvement, not "significant")
- Explain WHY you made technical decisions
- Show trade-offs and judgment calls
- Focus on outcomes that matter to business

**DON'T:**
- Just list technologies used
- Use vague language ("improved performance")
- Skip the business context
- Omit challenges or make it sound easy
- Forget to quantify impact

---

## 4. About Page

Edit `app/about/page.tsx`

### Professional Narrative (lines 18-42)

**Structure:**
1. **Opening** (who you are, years of experience, focus area)
2. **Specialization** (what you're best at, types of problems)
3. **Background** (companies/stages, notable work)
4. **Motivation** (what problems interest you)
5. **Current** (what you're looking for next)

**Replace the example text with your story**

### What You Value (lines 44-84)

**Customize the 4 principles** to reflect your engineering philosophy:

Current examples:
- Systems that are simple to understand and hard to break
- Shipping quickly without accumulating technical debt
- Clear documentation and knowledge sharing
- Blameless post-mortems and continuous improvement

**Make them specific to YOU.** What do you actually care about?

### Experience Highlights (lines 88-135)

**Replace with YOUR work history:**

```tsx
<div className="border-l-2 border-gray-300 pl-6 py-2">
  <h3 className="text-xl font-semibold text-gray-900 mb-2">
    Your Job Title
  </h3>
  <p className="text-sm text-gray-600 mb-3">
    Company Name • Start Date - End Date (or Present)
  </p>
  <ul className="space-y-2 body text-gray-700">
    <li>• Accomplishment with metrics</li>
    <li>• Technical achievement with impact</li>
    <li>• Leadership or mentorship highlight</li>
  </ul>
</div>
```

**Tips:**
- List 2-4 most recent/relevant roles
- 3-4 bullets per role
- Each bullet: Action + What + Measurable outcome
- Focus on impact, not responsibilities

### Education (lines 137-145)

Update with your actual education or remove if not relevant

### Outside of Work (lines 147-152)

**One personal detail that humanizes you:**
- Open source contributions
- Technical writing
- Conference speaking
- Side projects
- Teaching/mentoring

Keep it professional and relevant to your engineering identity.

---

## 5. Skills Page

Edit `app/skills/page.tsx`

### Updating Skill Categories (lines 11-92)

**Customize the categories and skills** to match YOUR expertise:

```typescript
{
  category: "Category Name",
  skills: ["Skill 1", "Skill 2", "Skill 3"]
}
```

**Guidelines:**
- Group by domain (Languages, Backend, Frontend, etc.)
- List technologies you've actually used in production
- No proficiency levels (junior signal)
- Order by relevance, not alphabet
- 5-10 skills per category

**Categories to consider:**
- Languages
- Backend/Frontend Development
- Databases & Caching
- Cloud & Infrastructure
- DevOps & CI/CD
- Monitoring & Observability
- Testing & Quality
- Architecture & Design
- Security
- Tools & Workflows

### Core Competencies (lines 99-147)

**Replace the 4 highlighted areas** with YOUR specializations:

Current examples:
- Distributed Systems
- API Design & Development
- Performance Optimization
- Cloud Infrastructure

**Make them specific to what you do best.**

### Your Approach to Technology (lines 152-166)

**Customize this section** to explain your engineering philosophy and decision-making process.

---

## 6. Contact Page

Edit `app/contact/page.tsx`

### Update Contact Methods (lines 54-180)

**Email (line 65):**
```tsx
href="mailto:your.email@example.com"
```

**LinkedIn (line 93, 110):**
```tsx
href="https://linkedin.com/in/yourusername"
```

**GitHub (line 129, 146):**
```tsx
href="https://github.com/yourusername"
```

### Contact Form Setup

The form currently simulates submission. To make it functional:

**Option 1: Formspree (Recommended for simplicity)**

1. Sign up at [formspree.io](https://formspree.io)
2. Create a form and get your endpoint
3. Update the form action (line 38):

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus("submitting");

  try {
    const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("error");
    }
  } catch (error) {
    setStatus("error");
  }
};
```

**Option 2: Build your own API endpoint**

Create `app/api/contact/route.ts`:

```typescript
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();

  // Send email using SendGrid, AWS SES, etc.
  // Or save to database

  return NextResponse.json({ success: true });
}
```

**Option 3: Use Netlify Forms**

Add `data-netlify="true"` to your form element if deploying to Netlify.

---

## 7. Resume

### Adding Your Resume

1. Export your resume as a PDF
2. Name it `resume.pdf`
3. Place it in the `public/` folder
4. The download links will work automatically

**Links that reference the resume:**
- `components/Navigation.tsx` (line 46, 86)
- `app/page.tsx` (line 24)

### Alternative: Custom Resume Page

If you prefer an HTML resume instead of PDF download:

1. Create `app/resume/page.tsx`
2. Build your resume as a React component
3. Update navigation links

---

## 8. Design System

### Colors (`tailwind.config.ts`)

**Update primary brand color (lines 11-23):**

Current: Blue (`#3b82f6`)

To change:
1. Choose your brand color
2. Generate shades using [uicolors.app](https://uicolors.app)
3. Replace the entire `primary` color object

```typescript
primary: {
  50: '#lightest',
  100: '#...',
  // ... through
  900: '#darkest',
  950: '#darkest',
}
```

### Typography

**Font choice (`app/layout.tsx`, line 7):**

Current: Inter

To change:
```typescript
import { YourFont } from "next/font/google";

const yourFont = YourFont({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-your-font",
});
```

Popular alternatives:
- `Roboto` - Clean, professional
- `Open_Sans` - Friendly, readable
- `Source_Sans_3` - Technical, modern
- System fonts (fastest): Remove font import entirely

### Spacing & Layout

**Max widths (`tailwind.config.ts`, lines 27-30):**

Current:
- Content: 1200px
- Prose: 700px

Adjust based on your preference for wide/narrow layouts.

---

## 9. SEO & Metadata

### Open Graph Image

**Create your OG image (1200x630px):**

1. Design in Figma, Canva, or code
2. Include: Your name, headline, maybe a headshot
3. Save as `og-image.jpg` in `public/`
4. Update references in `app/layout.tsx` (lines 32, 40)

**Quick tool:** [og-image.vercel.app](https://og-image.vercel.app)

### Meta Description

Update in `app/layout.tsx` (line 19):

```typescript
description: "Your value proposition in 150-160 characters"
```

**Tips:**
- Include your role and specialization
- Mention key technologies or focus areas
- Write for humans, not just search engines

### Sitemap

Update `public/sitemap.xml`:
- Replace `yoursite.com` with your actual domain
- Update dates
- Add any additional pages

### Structured Data

Add to `app/layout.tsx` to enhance search results:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Your Name",
      jobTitle: "Senior Software Engineer",
      url: "https://yoursite.com",
      sameAs: [
        "https://github.com/yourusername",
        "https://linkedin.com/in/yourusername",
      ],
    }),
  }}
/>
```

Add this inside the `<html>` tag in your root layout.

---

## 10. Testing & Launch

### Pre-Launch Checklist

**Content:**
- [ ] All "Your Name" placeholders replaced
- [ ] All email/social links updated
- [ ] At least 3 projects added
- [ ] About page reflects your story
- [ ] Skills list is accurate
- [ ] Resume PDF uploaded
- [ ] No lorem ipsum or placeholder text

**Technical:**
- [ ] Site loads in under 3 seconds
- [ ] All links work (no 404s)
- [ ] Mobile responsive on iPhone and Android
- [ ] Lighthouse score 90+ (all categories)
- [ ] No console errors
- [ ] Forms submit successfully

**SEO:**
- [ ] Meta titles on all pages
- [ ] Meta descriptions on all pages
- [ ] Open Graph image created and linked
- [ ] Sitemap updated with your domain
- [ ] Robots.txt updated

**Accessibility:**
- [ ] All images have alt text
- [ ] Can navigate entire site with keyboard
- [ ] Focus indicators visible
- [ ] Color contrast passes WCAG AA
- [ ] Screen reader tested (VoiceOver/NVDA)

### Testing Tools

**Performance:**
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

**SEO:**
- [Google Search Console](https://search.google.com/search-console)
- [Bing Webmaster Tools](https://www.bing.com/webmasters)

**Accessibility:**
- [WAVE](https://wave.webaim.org/)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- Chrome Lighthouse

**Mobile:**
- Chrome DevTools device mode
- [Responsively App](https://responsively.app/)
- Real devices (ask friends to test)

**Validation:**
- [W3C HTML Validator](https://validator.w3.org/)
- [Schema.org Validator](https://validator.schema.org/)

---

## 11. Deployment

### Vercel (Recommended)

**Why Vercel:**
- Created by Next.js team
- Zero configuration
- Automatic HTTPS
- Global CDN
- Free for personal projects

**Steps:**
1. Push code to GitHub
2. Sign up at [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"
5. Add custom domain (optional)

### Netlify

**Steps:**
1. Push code to GitHub
2. Sign up at [netlify.com](https://netlify.com)
3. "Add new site" → Import from Git
4. Build command: `npm run build`
5. Publish directory: `.next`
6. Deploy

### Custom Domain

**After deployment:**
1. Buy domain (Namecheap, Google Domains, etc.)
2. Add domain in hosting platform
3. Update DNS records (provided by platform)
4. Wait for DNS propagation (up to 48hrs)
5. Update all `yoursite.com` references

---

## 12. Ongoing Maintenance

### Adding New Projects

1. Add to `data/projects.ts`
2. Follow existing structure
3. Set `featured: true` for top 3
4. Commit and push

### Updating Content

**Monthly:**
- Add new projects as you ship them
- Update metrics on homepage
- Refresh skills if learning new tech

**Quarterly:**
- Review About page for accuracy
- Update resume PDF
- Check for broken links

**Annually:**
- Refresh design if needed
- Update professional positioning
- Review SEO performance

### Analytics (Optional)

**Privacy-respecting options:**
- [Plausible](https://plausible.io)
- [Fathom](https://usefathom.com)
- [Simple Analytics](https://simpleanalytics.com)

Add to `app/layout.tsx` after user consent.

---

## Need Help?

**Resources:**
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

**Common Issues:**

**Site won't build:**
- Check for TypeScript errors: `npm run build`
- Ensure all required fields in projects data
- Verify all imports are correct

**Styling looks broken:**
- Clear `.next` folder and rebuild
- Check Tailwind classes are valid
- Verify imports in components

**Links don't work:**
- Check file paths (case-sensitive)
- Ensure Next.js Link components used correctly
- Verify href attributes

---

## Final Tips

1. **Keep it simple** - Don't over-customize until you have content
2. **Content first** - Great writing > fancy design
3. **Ship fast** - Perfect is the enemy of good
4. **Get feedback** - Ask 2-3 peers to review before launch
5. **Iterate** - You can always improve after launch

Remember: The goal is to get hired, not to build the perfect website. Focus on clearly communicating your value, demonstrating your skills through projects, and making it easy for recruiters to contact you.

Good luck! 🚀
