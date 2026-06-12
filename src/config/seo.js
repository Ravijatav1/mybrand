// ============================================================
// SEO CONFIG — Har page ka unique metadata yahan define karo
// WhatsApp / OG preview bhi yahan se aata hai
// IMPORTANT: BASE_URL ko apne Vercel domain se replace karo
// ============================================================

export const BASE_URL = 'https://your-domain.vercel.app'

export const SEO_CONFIG = {
  home: {
    title: 'Home | MyBrand — Modern Solutions for Modern Problems',
    description:
      'Welcome to MyBrand. We build fast, scalable, and beautiful digital products that help businesses grow in the modern era.',
    image: `${BASE_URL}/og/og-home.jpg`,
    url: `${BASE_URL}/`,
    type: 'website',
  },
  about: {
    title: 'About Us | MyBrand — Our Story & Mission',
    description:
      'Learn about MyBrand — our mission, values, and the passionate team behind the products that power thousands of businesses worldwide.',
    image: `${BASE_URL}/og/og-about.jpg`,
    url: `${BASE_URL}/about`,
    type: 'website',
  },
  default: {
    title: 'MyBrand — Modern Solutions for Modern Problems',
    description: 'A production-ready React application with full SEO and social sharing support.',
    image: `${BASE_URL}/og/og-home.jpg`,
    url: BASE_URL,
    type: 'website',
  },
}
