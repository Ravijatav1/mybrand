// ============================================================
// NAVBAR — Config-driven, scalable
// Link add karna ho toh src/config/navigation.js edit karo
// Yahan kuch change karne ki zaroorat nahi
// ============================================================
import { NavLink } from 'react-router-dom'
import { navigationLinks } from '../../../config/navigation'
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main navigation">
        <NavLink to="/" className={styles.brand} aria-label="MyBrand Home">
          <span className={styles.brandMark}>M</span>
          <span className={styles.brandName}>MyBrand</span>
        </NavLink>

        <ul className={styles.links} role="list">
          {navigationLinks.map(({ label, path }) => (
            <li key={path}>
              <NavLink
                to={path}
                end={path === '/'}
                className={({ isActive }) =>
                  `${styles.link} ${isActive ? styles.linkActive : ''}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
