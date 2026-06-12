# MyBrand — Production-Ready React App with WhatsApp OG Preview

A scalable, SEO-optimized React application with per-page Open Graph metadata so WhatsApp, LinkedIn, Twitter/X aur sab crawlers correct preview dikhate hain.

---

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Build + Prerender (WhatsApp ke liye):
```bash
npm run prerender
```

---

## 📁 Folder Structure

```
src/
├── assets/           → Images, icons
├── components/
│   ├── common/
│   │   ├── Navbar/   → Config-driven navbar
│   │   ├── Footer/   → Auto-renders nav links
│   │   ├── Button/   → Reusable button (primary/secondary/ghost)
│   │   └── SEO/      → WhatsApp + OG meta tags component
│   └── ui/
│       └── Card/     → Feature card component
├── config/
│   ├── seo.js        → ⭐ Per-page SEO/OG metadata
│   ├── navigation.js → ⭐ Navbar links array
│   ├── routes.js     → ⭐ App routes array
│   └── cards.js      → ⭐ Card data arrays
├── layouts/
│   └── MainLayout.jsx → Navbar + Footer wrapper
├── pages/
│   ├── Home/         → Home page + unique OG tags
│   ├── About/        → About page + unique OG tags
│   └── NotFound/     → 404 page
├── router/
│   └── AppRouter.jsx → Dynamic route renderer
└── styles/
    └── global.css    → Global reset + typography
```

---

## 📦 Packages Used

| Package | Why |
|---|---|
| `react` + `react-dom` | Core UI library |
| `react-router-dom` | Client-side routing |
| `react-helmet-async` | Dynamic `<head>` meta tags per page |
| `prop-types` | Runtime prop validation |
| `react-snap` | **Prerendering** — WhatsApp OG fix ke liye |
| `vite` + `@vitejs/plugin-react` | Fast build tool |

---

## ⚡ WhatsApp Preview — How It Works

### Problem
WhatsApp ka crawler JavaScript **execute nahi karta**. Toh pure React SPA mein, `/about` URL share karo toh WhatsApp ko sirf blank `<head>` milta hai — correct OG image nahi dikhta.

### Solution: react-snap (Static Prerendering)
`react-snap` build ke baad Puppeteer use karta hai — har route visit karta hai, JS run karta hai, aur static HTML snapshot save karta hai.

```
dist/
├── index.html        → Home page ka prerendered HTML (with OG tags)
└── about/
    └── index.html    → About page ka prerendered HTML (with OG tags)
```

Ab jab WhatsApp `/about` crawl karta hai, usse already bana hua HTML milta hai — **correct OG image, title, description sab dikhta hai**.

### Steps to enable:

1. `src/config/seo.js` mein `BASE_URL` update karo:
   ```js
   export const BASE_URL = 'https://your-actual-domain.vercel.app'
   ```

2. `public/og/` mein apni images dalo:
   - `og-home.jpg` (1200×630px)
   - `og-about.jpg` (1200×630px)

3. Build + prerender karo:
   ```bash
   npm run prerender
   ```

4. `dist/` folder ko Vercel pe deploy karo.

---

## 🆕 Adding a New Page

### Step 1 — Page file banao
```
src/pages/Contact/Contact.jsx
```

### Step 2 — SEO config add karo (`src/config/seo.js`)
```js
contact: {
  title: 'Contact | MyBrand',
  description: 'Get in touch with our team.',
  image: `${BASE_URL}/og/og-contact.jpg`,
  url: `${BASE_URL}/contact`,
  type: 'website',
},
```

### Step 3 — Route add karo (`src/config/routes.js`)
```js
{ path: '/contact', component: lazy(() => import('../pages/Contact/Contact')) }
```

### Step 4 — Nav link add karo (`src/config/navigation.js`)
```js
{ label: 'Contact', path: '/contact' }
```

### Step 5 — OG image banao
`public/og/og-contact.jpg` (1200×630px)

**Bas!** Navbar, routing, SEO sab automatically kaam karega.

---

## 🃏 Adding a New Card

`src/config/cards.js` mein sirf ek object add karo:
```js
{
  id: 5,
  icon: '🎨',
  title: 'Beautiful Design',
  description: 'Pixel-perfect interfaces your users will love.'
}
```

Component mein kuch change karne ki zaroorat nahi.

---

## 🔗 Vercel Deployment

```bash
# 1. Prerender karo
npm run prerender

# 2. Vercel CLI se deploy
npx vercel --prod

# Ya GitHub se connect karo aur push karo
```

`vercel.json` already configured hai with:
- SPA routing fix (rewrites)
- Security headers
- Asset caching

---

## 🛡️ Security
- No `dangerouslySetInnerHTML`
- External links: `rel="noopener noreferrer"`
- Security headers via `vercel.json`
- No inline scripts

---

## 📈 Performance
- Route-based code splitting (`lazy` + `Suspense`)
- Google Fonts with `display=swap`
- Immutable asset caching
- Minimal dependencies

---

## 🌱 Future Scalability

| Feature | How to Add |
|---|---|
| New Page | 4-step process above |
| New Nav Item | 1 line in `navigation.js` |
| New Card | 1 object in `cards.js` |
| New OG Config | 1 object in `seo.js` |
| Multi-language | Add `lang` to SEO component |
| Analytics | Add in `main.jsx` |
