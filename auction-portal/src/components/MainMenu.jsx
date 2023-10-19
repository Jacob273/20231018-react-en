import { useState } from 'react'
import classNames from 'classnames'

export function MainMenu() {

  const [isMenuShown, setMenuShown] = useState(false);
    //   const standardCollapseClasses = "collapse navbar-collapse";
    //   const computedClasses =  isMenuShown ? standardCollapseClasses + ' show' : standardCollapseClasses; 
    // The code commented above is now handled by classNames call below

    // setMenuShown(true) // WARN: that will cause infinite loop of re-render

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3 px-3">
        <button className="navbar-toggler" type="button" onClick={() => setMenuShown(!isMenuShown)}>
            <span className="navbar-toggler-icon" />
        </button>
        {/* <div className={"collapse navbar-collapse" + (true ? " show" : "")}> */}
        <div className={classNames("collapse navbar-collapse", {show: isMenuShown})}>
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
