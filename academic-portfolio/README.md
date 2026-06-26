# Academic Portfolio

A production-ready personal academic portfolio for a researcher, data analyst, and future PhD candidate. Built with React 19, Vite, TypeScript, Tailwind CSS, Framer Motion, React Router, React Icons, Lucide Icons, ESLint, and Prettier.

## Features

- Light mode, dark mode, system theme detection, and persisted manual theme selection
- Responsive layouts for desktop, laptop, tablet, mobile, and large screens
- WCAG-oriented semantic HTML, keyboard navigation, skip link, ARIA labels, reduced motion support, and high-contrast states
- Home, About, Research, Projects, Publications, Experience, Education, Awards, Skills, Teaching, Certifications, Blog, Gallery, Resources, Downloads, CV, Contact, 404, Privacy Policy, and Terms of Use pages
- Global search, scroll progress, reading/progress affordances, animated counters, page transitions, reveal animations, back-to-top button, toast notifications, skeleton loaders, cookie notice, share buttons, lightbox, print-friendly CV, and RSS placeholder
- SEO essentials: metadata, canonical URL, Open Graph, Twitter cards, robots.txt, sitemap.xml, manifest.json, favicon, and JSON-LD structured data
- Netlify-ready configuration with SPA redirects and cache/security headers
- Placeholder assets and files for profile photos, cover images, research images, project screenshots, gallery photos, logos, icons, PDFs, videos, audio, datasets, presentations, certificates, awards, resume, CV, publication PDFs, blog images, favicon, and Open Graph image

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Build

```bash
npm run build
```

The production build is written to `dist`.

## Preview Production Build

```bash
npm run preview
```

## Linting and Formatting

```bash
npm run lint
npm run format:check
npm run format
```

## Deploying to Netlify

1. Push this project to a Git repository.
2. In Netlify, choose **Add new site** and connect the repository.
3. Netlify should detect the included `netlify.toml`.
4. Confirm the build command is `npm run build`.
5. Confirm the publish directory is `dist`.
6. Deploy.

The included redirect rule sends all routes to `index.html`, which allows React Router pages to work on refresh.

## Editing Personal Information

Most site-wide identity and contact information lives in:

```text
src/config/site.ts
```

Update:

- `name`
- `shortName`
- `title`
- `headline`
- `bio`
- `mission`
- `vision`
- `email`
- `phone`
- `address`
- `officeHours`
- `location`
- `canonicalUrl`
- social links
- navigation links

## Editing Content

Most page content lives in:

```text
src/data/content.ts
```

This file controls:

- statistics
- research interests
- research themes
- timeline
- projects
- publications
- skills
- awards
- education
- teaching
- certifications
- blog posts
- gallery items
- resources
- downloads
- testimonials
- FAQs

Changing this one file updates the corresponding pages.

## Adding Publications

Add a new object to the `publications` array in `src/data/content.ts`. Include:

- `type`
- `title`
- `authors`
- `journal`
- `volume`
- `issue`
- `pages`
- `year`
- `doi`
- `pdf`
- `bibtex`
- `citation`
- `abstract`
- `keywords`

Put publication PDFs in:

```text
public/downloads/publications/
```

Then point `pdf` to the public path, for example:

```text
/downloads/publications/my-paper.pdf
```

## Adding Projects

Add a new object to the `projects` array in `src/data/content.ts`. Project screenshots live in:

```text
public/assets/projects/
```

Use public paths such as:

```text
/assets/projects/my-project.svg
```

## Adding Blog Posts

Add a new object to the `blogPosts` array in `src/data/content.ts`. Blog images live in:

```text
public/assets/blog/
```

The blog listing includes search, categories, tags, reading time, and featured article support.

## Replacing Placeholders

Replace files inside `public/assets` and `public/downloads` while keeping the same filenames for zero-code updates. If you rename a file, update the matching path in `src/config/site.ts` or `src/data/content.ts`.

Common paths:

- Profile photo: `public/assets/profile/profile-photo-placeholder.svg`
- Cover image: `public/assets/covers/cover-image-placeholder.svg`
- Open Graph image: `public/assets/og/open-graph-image.svg`
- Favicon: `public/favicon.svg`
- CV: `public/downloads/CV.pdf`
- Resume: `public/downloads/Resume.pdf`
- Publication PDFs: `public/downloads/publications/`
- Gallery images: `public/assets/gallery/`
- Videos: `public/assets/videos/`
- Audio: `public/assets/audio/`
- Datasets: `public/downloads/datasets/`
- Certificates: `public/downloads/certificates/`
- Awards: `public/downloads/awards/`

## Updating Downloads

Download cards are controlled by the `downloads` array in `src/data/content.ts`. Add, remove, or rename items there. Files should be placed in `public/downloads` or one of its subfolders.

## Changing Colors

Color tokens are defined in:

```text
tailwind.config.ts
```

The main custom color groups are `ink` and `signal`. Global focus states and form styles are in:

```text
src/styles/index.css
```

## Changing Fonts

The project uses system fonts by default for performance. To add a hosted or self-hosted font:

1. Add the font files or provider link.
2. Update `fontFamily` in `tailwind.config.ts`.
3. Test performance and layout on mobile.

## Updating SEO

Update baseline metadata in:

```text
index.html
src/config/site.ts
src/utils/seo.ts
public/robots.txt
public/sitemap.xml
public/manifest.json
```

Set `canonicalUrl` in `src/config/site.ts` to your deployed domain before launch.

## Updating CV

The CV page is generated from `siteConfig`, `education`, `timeline`, `publications`, `awards`, and `skills`. Update those in `src/config/site.ts` and `src/data/content.ts`.

Replace the PDF at:

```text
public/downloads/CV.pdf
```

## Folder Structure

```text
academic-portfolio/
  public/
    assets/
    downloads/
    robots.txt
    sitemap.xml
    manifest.json
  src/
    components/
      layout/
      ui/
    config/
    data/
    hooks/
    pages/
    styles/
    utils/
    App.tsx
    main.tsx
  netlify.toml
  package.json
  vite.config.ts
  tsconfig.json
```

## Troubleshooting

- If routes show 404 after deployment, confirm `netlify.toml` is included and Netlify is publishing `dist`.
- If assets do not load, ensure paths begin with `/assets/` or `/downloads/` and that the files exist in `public`.
- If theme switching does not persist, check browser local storage permissions.
- If build fails after adding content, check object shapes in `src/data/content.ts` against `src/types.ts`.
- If PDFs open as placeholders, replace the stub files in `public/downloads`.

## Production Checklist

- Replace placeholder name, contact details, and canonical URL.
- Replace all placeholder images and documents.
- Review Privacy Policy and Terms of Use with appropriate institutional/legal guidance.
- Run `npm run lint`.
- Run `npm run build`.
- Deploy to Netlify.
