import { useEffect, useState } from 'react';
import './Banner.css'

export default function Banner(){

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
          width,
          height
        };
      }

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const fullHeight = () => {
        return windowDimensions
    }

    return (
        <section id="top-banner" className="fh5co-top-banner" style={{minHeight: fullHeight().height}}>
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
                </div>
                <div className="top-banner__image">
                    <div>
                        <a href="portafolio.html" className="btn-empezar boton">Portafolio</a>
                        <a href="#contacto" className="btn-contacto boton">Contacto</a>
                    </div>
                </div>
            </div>
        </section>
    )
}