# Fatehin Alam — Portfolio

Personal portfolio website for Fatehin Alam, built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, and GSAP.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, GSAP
- **Smooth Scroll**: Lenis (@studio-freight/lenis)
- **Icons**: React Icons

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main page
│   ├── sitemap.ts       # SEO sitemap
│   └── robots.ts        # SEO robots
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Timeline.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Particles.tsx
│   ├── SmoothScroll.tsx
│   ├── CursorGlow.tsx
│   ├── ScrollProgress.tsx
│   └── SectionHeader.tsx
├── hooks/
│   ├── useInView.ts
│   └── useMagneticButton.ts
├── lib/
│   ├── data.ts          # All portfolio content
│   └── utils.ts
├── public/
│   └── fatehin.jpg      # Profile photo
└── styles/
    └── globals.css
```

## Replacing Profile Photo

Replace `public/fatehin.jpg` with your photo. The image renders in the Hero section.

## Deployment

Deploy to Vercel:

```bash
npm install -g vercel
vercel
```

## Author

**Fatehin Alam**  
Full Stack Developer | AI Researcher | Cybersecurity Enthusiast  
[GitHub](https://github.com/Fatehin03) | [LinkedIn](https://www.linkedin.com/in/alam-fatehin-4b1314396)
