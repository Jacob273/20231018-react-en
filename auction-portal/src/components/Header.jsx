import PropTypes from 'prop-types'

Header.propTypes = {
    title: PropTypes.string
}

export function Header({title = 'Auction Portal'}) {
   return (
    <header className="p-4 mb-3 bg-warning">
        <h1>{title}</h1>
    </header>
   ) 
}