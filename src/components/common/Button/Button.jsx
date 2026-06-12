import PropTypes from 'prop-types'
import styles from './Button.module.css'

function Button({
  children,
  variant = 'primary',
  size = 'md',
  as: Tag = 'button',
  href,
  external = false,
  onClick,
  disabled = false,
  className = '',
  ...rest
}) {
  const externalProps =
    external && href ? { target: '_blank', rel: 'noopener noreferrer' } : {}

  const cls = [styles.btn, styles[variant], styles[size], className]
    .filter(Boolean)
    .join(' ')

  if (href) {
    return (
      <a href={href} className={cls} {...externalProps} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <Tag className={cls} onClick={onClick} disabled={disabled} {...rest}>
      {children}
    </Tag>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  as: PropTypes.elementType,
  href: PropTypes.string,
  external: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
}

export default Button
