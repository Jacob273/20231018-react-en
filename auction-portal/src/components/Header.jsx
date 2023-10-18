import PropTypes from 'prop-types'

Header.propTypes = {
    title: PropTypes.string
}

export function Header({title = 'Auction Portal'}) {
   return (
    <header>
        <h1>{title}</h1>
    </header>
   ) 
}