import { useState } from 'react'
import classNames from 'classnames'
import { MainMenuItem } from './MainMenuItem';

/* example:
const myData = [{id: 1, fruit: 'apple'}, {id: 2, fruit: 'banana'}]
myData.map(obj => obj.id + obj.fruit) 
*/

export function MainMenu() {

  const [isMenuShown, setMenuShown] = useState(false);
  const menuItems = [
    {name: 'Auctions', link: '/auctions'},
    {name: 'Promotions', link: '/promotions'},
    {name: 'Advices', link: '/advices'},
  ]
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
            {
                menuItems.map(mI => (<MainMenuItem key={mI.link} name={mI.name} link={mI.link} />))
            }
        </ul>
        </div>
    </nav>
  )
}
