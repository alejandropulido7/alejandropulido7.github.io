import { Link } from "react-router-dom";
import {links} from '../../content/Links'
import './MenuGlobal.css'
import { ShowNavContext } from "../../context/global/GlobalContext";
import { useContext } from "react";

export default function MenuGlobal({show}: any){

    const {toggleShowNav} = useContext(ShowNavContext);
    const showLinks = links.filter( link => link.show);

    if(!show) return null;

    return (
        <>
            <div className="main-navigation">
                <ul className="main-navigation__ul">
                    {showLinks.map((link) => {
                        return (
                            <li key={link.link}>
                                <Link className="btn-menu-nav" onClick={()=>toggleShowNav(!show)} to={link.link}>{link.name}</Link>                                       
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}