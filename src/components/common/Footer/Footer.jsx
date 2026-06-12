import { navigationLinks } from '../../../config/navigation'
import { NavLink } from 'react-router-dom'
import styles from './Footer.module.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.brandMark}>M</span>
            <span className={styles.brandName}>MyBrand</span>
          </div>
          <p className={styles.tagline}>
            Modern solutions for modern problems.
          </p>
        </div>

        <nav className={styles.nav} aria-label="Footer navigation">
          {navigationLinks.map(({ label, path }) => (
            <NavLink key={path} to={path} className={styles.link}>
              {label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {year} MyBrand. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
