import PropTypes from 'prop-types'
import styles from './Card.module.css'

function Card({ icon, title, description, className = '' }) {
  return (
    <article className={`${styles.card} ${className}`}>
      {icon && <div className={styles.icon} aria-hidden="true">{icon}</div>}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </article>
  )
}

Card.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default Card
