# Trendy Fashion Official Lookbook & Affiliate Hub

Official web storefront and affiliate hub for the YouTube channel **Trendy Fashion** ([@trendy-jd](https://www.youtube.com/@trendy-jd)).
> *"Style that speaks — Fashion is what you buy, style is what you do with it."*  
> 🌟 685K+ Channel Views • 160+ Fashion Lookbooks & Reviews

---

## ✨ Features

- **YouTube Short Haul Codes (`#TF01`, `#TF02`, ...)**: Allows viewers from YouTube video descriptions to jump straight to specific outfits with `/p/:code` or via search.
- **Dedicated Product Review Pages (`/product/:id`)**:
  - In-depth fabric and fit breakdown
  - Key highlights checklist (*"Why It Made Our Haul"*)
  - Creator Styling Tip
  - High-converting Amazon.in affiliate CTA with compliance tagging (`rel="nofollow sponsored noopener noreferrer"`)
  - Try-on video links to YouTube
  - One-click shortlink copy with visual confirmation
- **Filterable & Searchable Shop (`/shop`)**:
  - Filter by category (*Ethnic Wear, Western Wear, Beauty & Skincare, Jewelry & Accessories, Footwear & Bags*)
  - Search by haul code (e.g. `TF01`, `TF02`), outfit name, or style keywords
  - Sort by Featured, Highest Rated, Code, or Name
- **Amazon Associates Compliance**:
  - Mandatory disclosure banner across all pages
  - Comprehensive disclosure statements in the footer and on product action buttons
- **SPA Routing Ready**:
  - [vercel.json](file:///vercel.json) for Vercel deployment
  - [public/_redirects](file:///public/_redirects) for Netlify / Cloudflare Pages
  - [public/404.html](file:///public/404.html) with path restore script for GitHub Pages / React Pages

---

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite 8
- **Styling**: Tailwind CSS v4 + Playfair Display / Plus Jakarta Sans fonts
- **Routing**: React Router v6 / v7
- **Icons**: Lucide React + custom SVG YouTube brand icon

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

### 4. Lint Check
```bash
npm run lint
```

---

## 🌐 Hosting & Deployment

### Vercel
The project includes `vercel.json` configured with rewrite rules for SPA routing. Just connect your Git repository to Vercel and it will deploy automatically.

### Netlify / Cloudflare Pages
`public/_redirects` ensures all paths redirect cleanly to `/index.html` with status `200`.

### GitHub Pages (React Pages)
1. In `package.json`, set `"homepage": "https://<username>.github.io/<repo-name>"` if deploying under a repository subpath, or keep root for custom domains.
2. `public/404.html` and `index.html` contain the SPA path preservation script to prevent 404 errors on direct navigation or page refresh.
