// ============================================================
// SEO COMPONENT — WhatsApp, Facebook, LinkedIn, Twitter preview
// Har page mein use karo: <SEO title="" description="" image="" url="" />
// ============================================================
import { Helmet } from 'react-helmet-async'
import PropTypes from 'prop-types'
import { SEO_CONFIG } from '../../../config/seo'

function SEO({
  title,
  description,
  image,
  url,
  type = 'website',
  twitterCard = 'summary_large_image',
}) {
  const defaults = SEO_CONFIG.default
  const seoTitle = title || defaults.title
  const seoDescription = description || defaults.description
  const seoImage = image || defaults.image
  const seoUrl = url || defaults.url

  return (
    <Helmet>
      {/* === Basic HTML Meta === */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <link rel="canonical" href={seoUrl} />

      {/* === Open Graph (WhatsApp, Facebook, LinkedIn) === */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={seoTitle} />
      <meta property="og:site_name" content="MyBrand" />
      <meta property="og:locale" content="en_US" />

      {/* === Twitter Card === */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={seoUrl} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />
      <meta name="twitter:image:alt" content={seoTitle} />

      {/* === Extra SEO === */}
      <meta name="robots" content="index, follow" />
    </Helmet>
  )
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  type: PropTypes.string,
  twitterCard: PropTypes.string,
}

export default SEO
