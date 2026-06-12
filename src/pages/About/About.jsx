import { Link } from 'react-router-dom'
import SEO from '../../components/common/SEO/SEO'
import Card from '../../components/ui/Card/Card'
import Button from '../../components/common/Button/Button'
import { SEO_CONFIG } from '../../config/seo'
import { teamMembers } from '../../config/cards'
import styles from './About.module.css'

function About() {
  const seo = SEO_CONFIG.about

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        image={seo.image}
        url={seo.url}
      />

      {/* ── About Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.container}>
          <span className={styles.eyebrow}>Our Story</span>
          <h1 className={styles.heroTitle}>
            We Build{' '}
            <span className={styles.accent}>With Purpose</span>
          </h1>
          <p className={styles.heroSubtitle}>
            MyBrand was founded with one belief: great software changes how
            businesses operate. We're a small, focused team that cares deeply
            about craft, performance, and the people we build for.
          </p>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className={styles.mission}>
        <div className={styles.container}>
          <div className={styles.missionGrid}>
            <div className={styles.missionText}>
              <span className={styles.eyebrow}>Our Mission</span>
              <h2 className={styles.sectionTitle}>
                Turning Complex Problems Into Simple Solutions
              </h2>
              <p className={styles.bodyText}>
                We believe the best software feels invisible. It works exactly when
                you need it, gets out of the way when you don't, and never makes
                you think twice. That's what we obsess over.
              </p>
              <p className={styles.bodyText}>
                Every project we take on is treated as a long-term partnership.
                We're not here to ship and move on — we're here to build things
                that last.
              </p>
            </div>

            <div className={styles.missionStats}>
              {[
                { value: '2019', label: 'Founded' },
                { value: '50+', label: 'Projects' },
                { value: '12', label: 'Countries' },
                { value: '3', label: 'Core Team' },
              ].map((item) => (
                <div key={item.label} className={styles.missionStat}>
                  <span className={styles.statValue}>{item.value}</span>
                  <span className={styles.statLabel}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className={styles.team}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>The Team</span>
            <h2 className={styles.sectionTitle}>People Behind the Product</h2>
          </div>

          <div className={styles.teamGrid}>
            {teamMembers.map((member) => (
              <article key={member.id} className={styles.memberCard}>
                <div className={styles.avatar} aria-hidden="true">
                  {member.name.charAt(0)}
                </div>
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={styles.memberRole}>{member.role}</p>
                <p className={styles.memberBio}>{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className={styles.values}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>What We Stand For</span>
            <h2 className={styles.sectionTitle}>Our Values</h2>
          </div>
          <div className={styles.valuesGrid}>
            {[
              { icon: '🎯', title: 'Clarity', description: 'We keep things simple. Simple code, simple communication, simple pricing.' },
              { icon: '🔬', title: 'Craft', description: 'We sweat the details because that&apos;s where quality actually lives.' },
              { icon: '🤝', title: 'Honesty', description: 'No jargon, no overselling. We tell you what we can and cannot do.' },
            ].map((v) => (
              <Card key={v.title} icon={v.icon} title={v.title} description={v.description} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Let's Build Something Together</h2>
          <p className={styles.ctaSubtitle}>
            Got a project in mind? We'd love to hear about it.
          </p>
          <Button as={Link} to="/" variant="primary" size="lg">
            ← Back to Home
          </Button>
        </div>
      </section>
    </>
  )
}

export default About
