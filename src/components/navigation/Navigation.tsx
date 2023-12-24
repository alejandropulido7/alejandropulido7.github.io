import "./Navigation.css"
import MenuGlobal from './MenuGlobal';
import { ShowNavContext } from "../../context/global/GlobalContext";
import { useContext } from "react";
import { links } from '../../Mocks/Links.json'
import { NavLink, useLocation} from "react-router-dom";

export default function Navigation() {

    const {showNav, toggleShowNav} = useContext(ShowNavContext);
    const path = useLocation().pathname;

    if(path === '/') return null

    return (
        <>
            <nav className="site-navigation">
                <div className="md:hidden site-navigation-inner site-container">
                    <MenuGlobal show={showNav} />
                    <div id="myBtn" className={showNav ? "burger-container change" : "burger-container"} onClick={() => toggleShowNav(!showNav)}>
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                    
                </div>
                <ul className="flex justify-center m-auto my-5 text-white gap-4 text-2xl">
                    {
                        links.map((link) => {
                            return (
                                <li key={link.link}>
                                    <NavLink to={link.link}> {link.name} </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </>
    )
}