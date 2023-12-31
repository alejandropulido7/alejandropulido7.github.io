import './Banner.css'

export default function Intro(){
    return (
        <div className="top-banner__inner ">
            <div className="top-banner__text titulo-pag-main">
                <div className="animate-leftToRight banner-titulo top-banner__text-up relative">
                    <span className="brand-span text-primary text-xl">Hola! Soy</span>
                    <h2 className="top-banner__h2">Alejandro Pulido</h2>
                </div>
                <div className="animate-rightToLeft overflow-hidden banner-titulo top-banner__text-down">
                    <span className="brand-span text-primary text-xl float-end">Desarrollador de software Fullstack</span>
                </div>
                <div className="animate-downToUp absolute right-0 text-white flex flex-col text-right text-xl" style={{bottom: '50px'}}>
                    <span>Soy un apasionado por la tecnologia que disfruta construir</span>
                    <span>aplicaciones funcionales y atractivas</span>
                </div>
            </div>
        </div>
    )
}