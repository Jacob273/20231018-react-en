import PropTypes from 'prop-types'

MainMenuItem.propTypes = {
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

export function MainMenuItem({link, name}) {
  return (
    <li className="nav-item">
        <a className="nav-link" href={link}>
            {name}
        </a>
    </li>
  )
}
