import "./Navigation.css"
import MenuGlobal from './MenuGlobal';
import { ShowNavContext } from "../../context/global/GlobalContext";
import { useContext } from "react";

export default function Navigation() {

    const {showNav, toggleShowNav} = useContext(ShowNavContext);

    return (
        <>
            <nav className="site-navigation">
                <div className="site-navigation-inner site-container">
                    <MenuGlobal show={showNav} />
                    <div id="myBtn" className={showNav ? "burger-container change" : "burger-container"} onClick={() => toggleShowNav(!showNav)}>
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                </div>
            </nav>
        </>
    )
}