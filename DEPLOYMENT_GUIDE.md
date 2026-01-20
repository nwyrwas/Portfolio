# Deployment Guide

This guide will walk you through deploying your portfolio to production.

## Pre-Deployment Checklist

Before deploying, ensure you've completed these customizations:

### Required Changes

- [ ] **Replace "Your Name"** throughout the codebase
  - `components/Navigation.tsx`
  - `components/Footer.tsx`
  - `app/layout.tsx`
  - All page metadata

- [ ] **Update Contact Information**
  - Email address
  - GitHub username/URL
  - LinkedIn username/URL

- [ ] **Add Your Projects**
  - Edit `data/projects.ts`
  - Remove example projects
  - Add at least 3 of your own projects
  - Set `featured: true` for top projects

- [ ] **Customize About Page**
  - Write your professional narrative
  - Update experience highlights
  - Adjust values and principles

- [ ] **Update Skills**
  - Modify skill categories in `app/skills/page.tsx`
  - Ensure accuracy (only list what you know)

- [ ] **Add Resume**
  - Place `resume.pdf` in `public/` folder
  - Or update links if using different filename

### SEO & Metadata

- [ ] **Create Open Graph Image**
  - Size: 1200x630px
  - Save as `public/og-image.jpg`
  - Update references in `app/layout.tsx`

- [ ] **Update Sitemap**
  - Replace `yoursite.com` with actual domain in `public/sitemap.xml`

- [ ] **Test Locally**
  - Run `npm run build` successfully
  - Run `npm run dev` and check all pages
  - Verify mobile responsiveness
  - Test all links work

---

## Option 1: Vercel (Recommended)

Vercel is built by the Next.js team and offers the best performance for Next.js applications.

### Why Vercel?
- Zero configuration needed
- Automatic HTTPS
- Global CDN
- Instant cache invalidation
- Free for personal projects
- Preview deployments for every git push

### Deployment Steps

#### 1. Prepare Your Code

```bash
# Ensure your code is committed to git
git init
git add .
git commit -m "Initial portfolio commit"
```

#### 2. Push to GitHub

```bash
# Create a new repository on GitHub
# Then push your code
git remote add origin https://github.com/yourusername/portfolio.git
git branch -M main
git push -u origin main
```

#### 3. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" (use your GitHub account)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

**That's it!** Your site will be live in 2-3 minutes.

#### 4. Add Custom Domain (Optional)

1. Buy a domain (recommended: Namecheap, Google Domains, Cloudflare)
2. In Vercel project settings, go to "Domains"
3. Add your domain (e.g., `johndoe.com`)
4. Follow DNS configuration instructions
5. Wait for DNS propagation (up to 48 hours, usually < 1 hour)

**Vercel automatically handles:**
- SSL certificates
- Redirects (www to non-www or vice versa)
- Renewals

#### 5. Environment Variables (If Needed)

If you add contact form backend or analytics:

1. In Vercel dashboard, go to Settings → Environment Variables
2. Add your variables (e.g., `NEXT_PUBLIC_FORMSPREE_ID`)
3. Redeploy for changes to take effect

### Continuous Deployment

Once connected:
- Every `git push` to `main` triggers a production deployment
- Pull request branches get preview URLs automatically
- You can rollback to any previous deployment with one click

---

## Option 2: Netlify

Good alternative to Vercel with similar features.

### Deployment Steps

#### 1. Build Configuration

Create `netlify.toml` in project root:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

#### 2. Deploy

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy site"

#### 3. Add Custom Domain

1. Go to Site settings → Domain management
2. Add custom domain
3. Update DNS records as instructed
4. SSL certificate auto-generated

### Contact Form with Netlify Forms

If using Netlify, you can use their built-in form handling:

1. Add `netlify` attribute to your form in `app/contact/page.tsx`:

```tsx
<form netlify>
  {/* form fields */}
</form>
```

2. Netlify will automatically capture form submissions
3. View submissions in Netlify dashboard under "Forms"

---

## Option 3: Self-Hosting (AWS, DigitalOcean, etc.)

For full control, you can self-host.

### Build the Application

```bash
npm run build
```

### Run in Production

```bash
npm start
```

This starts the Next.js server on port 3000.

### Using Docker

Create `Dockerfile`:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

Build and run:

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

### Nginx Reverse Proxy

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### SSL with Let's Encrypt

```bash
sudo certbot --nginx -d yourdomain.com
```

---

## Post-Deployment Tasks

### 1. Verify Deployment

- [ ] Visit your live site
- [ ] Check all pages load correctly
- [ ] Test mobile responsiveness
- [ ] Verify all links work
- [ ] Test contact form submission
- [ ] Check resume download works

### 2. SEO Setup

#### Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your property (your domain)
3. Verify ownership (via DNS or HTML tag)
4. Submit your sitemap: `https://yoursite.com/sitemap.xml`

#### Bing Webmaster Tools

1. Go to [bing.com/webmasters](https://www.bing.com/webmasters)
2. Add your site
3. Verify ownership
4. Submit sitemap

### 3. Analytics (Optional)

**Privacy-Respecting Options:**

#### Plausible (Recommended)

1. Sign up at [plausible.io](https://plausible.io)
2. Add your domain
3. Add script tag to `app/layout.tsx`:

```tsx
<Script
  defer
  data-domain="yourdomain.com"
  src="https://plausible.io/js/script.js"
/>
```

#### Vercel Analytics

If deployed on Vercel:

```bash
npm install @vercel/analytics
```

In `app/layout.tsx`:

```tsx
import { Analytics } from '@vercel/analytics/react';

// In the return statement
<Analytics />
```

### 4. Monitoring

#### Uptime Monitoring

Free options:
- [UptimeRobot](https://uptimerobot.com) - 50 monitors free
- [Checkly](https://www.checklyhq.com) - Good for API monitoring
- [Better Uptime](https://betteruptime.com) - Clean interface

Set up alerts to your email/Slack when site goes down.

#### Performance Monitoring

- [Google PageSpeed Insights](https://pagespeed.web.dev/) - Run monthly
- [WebPageTest](https://www.webpagetest.org/) - Detailed analysis
- Vercel Analytics (if on Vercel) - Real user monitoring

---

## Updating Your Portfolio

### Adding New Projects

1. Edit `data/projects.ts`
2. Add your new project using the template
3. Commit and push to GitHub
4. Auto-deploys to production (if using Vercel/Netlify)

### Updating Content

```bash
# Make changes locally
git add .
git commit -m "Update about page"
git push
```

Your changes will deploy automatically.

### Manual Redeployment

**Vercel:**
- Dashboard → Deployments → Redeploy latest

**Netlify:**
- Dashboard → Deploys → Trigger deploy

---

## Performance Optimization

### Images

If you add images to your portfolio:

```tsx
import Image from 'next/image';

<Image
  src="/project-screenshot.jpg"
  alt="Project description"
  width={800}
  height={600}
  quality={90}
/>
```

Next.js automatically optimizes images.

### Fonts

Already optimized with `next/font/google`. If you add custom fonts:

1. Place fonts in `public/fonts/`
2. Use `next/font/local`

```tsx
import localFont from 'next/font/local';

const myFont = localFont({
  src: '../public/fonts/MyFont.woff2',
  display: 'swap',
});
```

### Caching

Add to `next.config.ts`:

```typescript
const nextConfig = {
  // ... existing config
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};
```

---

## Troubleshooting

### Build Fails

**Error: "Cannot find module"**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**TypeScript errors:**
```bash
npm run build
# Fix errors shown in output
```

### Site Not Loading

1. Check deployment logs in Vercel/Netlify dashboard
2. Verify build completed successfully
3. Check DNS propagation: [whatsmydns.net](https://www.whatsmydns.net)

### Forms Not Working

1. Check browser console for errors
2. Verify form action/endpoint is correct
3. Test form submission in development first

### Slow Performance

1. Run Lighthouse audit in Chrome DevTools
2. Check image sizes (should be < 200KB each)
3. Verify no render-blocking scripts
4. Check hosting provider status page

---

## Getting Help

**Documentation:**
- [Next.js Docs](https://nextjs.org/docs)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)

**Community:**
- [Next.js Discord](https://nextjs.org/discord)
- [Next.js GitHub Discussions](https://github.com/vercel/next.js/discussions)

---

## Maintenance Schedule

### Weekly
- Check analytics for traffic/errors
- Respond to contact form submissions

### Monthly
- Run Lighthouse audit
- Check for broken links
- Review and respond to feedback

### Quarterly
- Update projects with new work
- Refresh resume
- Review SEO performance
- Update dependencies: `npm update`

### Annually
- Review entire content for accuracy
- Update professional positioning
- Check for design refresh needs
- Renew domain (if needed)

---

## Next Steps After Deployment

1. **Share your portfolio:**
   - Update LinkedIn profile link
   - Add to GitHub profile README
   - Include in email signature
   - Share with your network

2. **Apply to jobs:**
   - Use portfolio URL in applications
   - Reference specific projects in cover letters
   - Send to recruiters with context

3. **Collect feedback:**
   - Ask 3-5 people to review
   - Test with actual recruiters if possible
   - Iterate based on feedback

4. **Track results:**
   - Monitor traffic sources
   - Track which projects get most views
   - Note which content leads to conversations

Remember: Your portfolio is never "done." It should grow with your career. Update it regularly as you ship new projects and gain experience.

Good luck! 🚀
