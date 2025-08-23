# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Website for Illusive Bloom, a small natural perfumery company. Built with Eleventy (11ty), Tailwind CSS, and deployed via GitHub Pages.

## Tech Stack

- **Static Site Generator**: Eleventy (11ty)
- **CSS Framework**: Tailwind CSS
- **Deployment**: GitHub Pages
- **Build Process**: npm scripts

## Common Commands

```bash
# Install dependencies
npm install

# Development server with live reload
npm run dev

# Build for production
npm run build

# Build CSS (Tailwind)
npm run build:css

# Watch CSS during development
npm run watch:css

# Deploy to GitHub Pages
npm run deploy

# Clean build directory
npm run clean
```

## Project Structure

```
src/
  _data/           # Global data files (JSON, JS)
  _includes/       # Layout templates and partials
  _site/           # Generated site output (ignored in git)
  assets/
    css/           # Source CSS files
    images/        # Image assets
    js/            # JavaScript files
  pages/           # Individual pages (.md, .njk, .html)
  collections/     # Content collections (blog, products, etc.)
```

## Eleventy Conventions

- Configuration in `.eleventy.js` 
- Input directory: `src/`
- Output directory: `src/_site/`
- Template languages: Nunjucks (.njk), Markdown (.md), HTML
- Use `_data` for global site data
- Use `_includes` for layouts and partials
- Collections for grouped content (products, blog posts)

## Tailwind CSS Setup

- Main CSS file: `src/assets/css/style.css`
- Tailwind config: `tailwind.config.js`
- Build process generates final CSS in `_site/assets/css/`
- Use `@tailwind` directives in source CSS
- Purge unused CSS for production builds

## GitHub Pages Deployment

- Deploy from `gh-pages` branch or `docs/` folder
- Base URL configuration needed for proper asset paths
- Build process should output to correct directory structure
- Use GitHub Actions for automated deployment

## Content Management

- Markdown files for pages and blog content
- Front matter for page metadata
- Use Eleventy shortcodes for reusable components
- Image optimization and responsive images recommended

## Performance Considerations

- Optimize images (responsive sizes, modern formats)
- Minimize and inline critical CSS
- Use Eleventy's built-in minification
- Leverage GitHub Pages CDN

## Background Info and Content

Illusive Bloom
Botanical Perfumery

Unique Artisan Fragrances Handcrafted In Efland, NC USA
Established 2020

Hi, I’m Shannon—founder of Illusive Bloom. This brand grew out of my deep love for both science and scent—two seemingly different worlds that, to me, feel deeply connected. With a background in biochemistry, I began quietly blending botanicals in search of a hair perfume that felt as natural as it was beautiful. What began as a personal experiment soon unfolded into a much deeper creative journey.

Illusive Bloom grew from a desire to capture the soul of Nature in scent. Every perfume I create is made exclusively with natural materials—botanical oils, organic extracts, CO2s, concretes, absolutes, tinctures, and natural isolates. These ingredients come from fruits, flowers, roots, seeds, leaves, moss, lichen, woods, bark, and resins. I also do my own extractions using steam distillation, enfleurage, and ethanol.

In 2020, I used my stimulus funds to invest in the supplies I needed to start this business. But Illusive Bloom is more than a business—it’s a practice. A perfumery grounded in curiosity, intention, and a deep reverence for scent. In perfumery, you’re not just influencing how someone smells—you’re influencing how they feel and remember. I’m currently doing custom fragrance work, continuing my training, making my own extracts, and creating new perfumes.

