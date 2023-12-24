import './Banner.css'
import { Link } from "react-router-dom";

export default function Intro(){
    return (
        <div className="top-banner__inner">
            <div className="top-banner__text titulo-pag-main">
                <div className="banner-titulo top-banner__text-up">
                    <span className="brand-span">Hola! Soy</span>
                    <h2 className="top-banner__h2">Alejandro</h2>
                </div>
                <div className="banner-titulo top-banner__text-down">
                    <h2 className="top-banner__h2">Pulido</h2>

                </div>
                <div className="banner-titulo top-banner__text-down">
                    <span className="brand-span">Desarrollador de software</span>
                </div>
                <div className="flex justify-center py-4">
                    <Link className="bg-transparent hover:bg-white hover:text-black border border-s-2 rounded-md text-white px-4 py-2" to={'skills'}> Conoce mis proyectos</Link>
                </div>
            </div>
        </div>
    )
}