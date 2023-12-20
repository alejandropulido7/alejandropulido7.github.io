import { Link } from "react-router-dom";
import {links} from '../../Mocks/Links.json'
import './MenuGlobal.css'
import { ShowNavContext } from "../../context/global/GlobalContext";
import { useContext } from "react";

export default function MenuGlobal({show}: any){

    const {toggleShowNav} = useContext(ShowNavContext);

    if(!show) return null;

    return (
        <>
            <div className="main-navigation">
                <ul className="main-navigation__ul">
                    {links.map((link) => {
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