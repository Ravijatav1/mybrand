import { Link } from 'react-router-dom'
import SEO from '../../components/common/SEO/SEO'
import Card from '../../components/ui/Card/Card'
import Button from '../../components/common/Button/Button'
import { SEO_CONFIG } from '../../config/seo'
import { homeCards } from '../../config/cards'
import styles from './Home.module.css'

function Home() {
  const seo = SEO_CONFIG.home

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        image={seo.image}
        url={seo.url}
      />

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.container}>
          <div className={styles.badge}>Production Ready</div>
          <h1 className={styles.heroTitle}>
            Modern Solutions for{' '}
            <span className={styles.accent}>Modern Problems</span>
          </h1>
          <p className={styles.heroSubtitle}>
            We craft fast, scalable, and beautiful digital products. From idea to
            production — built with React, engineered for growth.
          </p>
          <div className={styles.heroCta}>
            <Button as={Link} to="/about" variant="primary" size="lg">
              Learn About Us →
            </Button>
            <Button href="https://github.com" variant="secondary" size="lg" external>
              View on GitHub
            </Button>
          </div>

          {/* Stats */}
          <div className={styles.stats}>
            {[
              { value: '50+', label: 'Projects Shipped' },
              { value: '99.9%', label: 'Uptime SLA' },
              { value: '4.9★', label: 'Client Rating' },
            ].map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className={styles.features}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Built Right</span>
            <h2 className={styles.sectionTitle}>Everything You Need</h2>
            <p className={styles.sectionSubtitle}>
              Configuration-driven, scalable, and ready for production from day one.
            </p>
          </div>

          <div className={styles.grid}>
            {homeCards.map((card) => (
              <Card
                key={card.id}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className={styles.ctaBanner}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Ready to Build Something Great?</h2>
          <p className={styles.ctaSubtitle}>
            Join hundreds of teams shipping faster with MyBrand.
          </p>
          <Button as={Link} to="/about" variant="primary" size="lg">
            Get Started Today
          </Button>
        </div>
      </section>
    </>
  )
}

export default Home
