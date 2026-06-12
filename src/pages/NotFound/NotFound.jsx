import { Link } from 'react-router-dom'
import SEO from '../../components/common/SEO/SEO'
import styles from './NotFound.module.css'

function NotFound() {
  return (
    <>
      <SEO title="404 — Page Not Found | MyBrand" />
      <div className={styles.container}>
        <h1 className={styles.code}>404</h1>
        <p className={styles.message}>This page doesn't exist.</p>
        <Link to="/" className={styles.link}>← Back to Home</Link>
      </div>
    </>
  )
}

export default NotFound
