import "./Navigation.css"
import MenuGlobal from './MenuGlobal';
import { ShowNavContext } from "../../context/global/GlobalContext";
import { useContext, useEffect, useState } from "react";
import { links } from '../../content/Links'
import { useLocation} from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import Contact from "./Contact";
import NavigationLinks from "./NavigationLinks";

export default function Navigation({dimensions}) {

    const {showNav, toggleShowNav} = useContext(ShowNavContext);
    const [linksState, setLinksState] = useState([]);
    const [pathState, setPathState] = useState('');
    const [showBreadcrumb, setShowBreadcrumb] = useState(false);

    const path = useLocation().pathname.split('/')[2];

    useEffect(()=>{
        setShowBreadcrumb(false)
        if(path) {
            setPathState(links.find((link) => link.link === path).name)
            setShowBreadcrumb(true)
        }
        setLinksState(links.filter(link => link.link != path && link.show));
    }, [path]);

    return (
        <>
            <nav className="site-navigation relative site-container w-full m-auto">
                <div className="md:hidden site-navigation-inner fixed top-7">
                    <MenuGlobal show={showNav} />
                    <div id="myBtn" className={showNav ? "burger-container change" : "burger-container"} onClick={() => toggleShowNav(!showNav)}>
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>                    
                </div>
                <div className="breadcrumbs">
                { showBreadcrumb &&
                    <Breadcrumbs pathName={pathState} dimensions={dimensions}/> 
                }               
                </div>
                <Contact/>               
                <NavigationLinks links={linksState} dimensions={dimensions}/>
            </nav>
        </>
    )
}