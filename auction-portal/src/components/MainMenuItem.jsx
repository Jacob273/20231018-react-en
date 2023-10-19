import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'


MainMenuItem.propTypes = {
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

export function MainMenuItem({link, name}) {
  return (
    <li className="nav-item">
       <NavLink to={link} className="nav-link" >
          {name}
       </NavLink>
    </li>
  )
}
