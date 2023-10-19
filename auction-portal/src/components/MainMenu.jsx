
export function MainMenu() {


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3 px-3">
        <button className="navbar-toggler" type="button">
        <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
            <li className="nav-item active">
                <a className="nav-link" href="/auctions">
                    Auctions
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/promotions">
                    Promotions
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/advices">
                    Advices
                </a>
            </li>
        </ul>
        </div>
    </nav>
  )
}
