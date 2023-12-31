import './Banner.css'

export default function Intro(){
    return (
        <div className="top-banner__inner ">
            <div className="top-banner__text titulo-pag-main md:block flex justify-between flex-col gap-10">
                <div className="animate-leftToRight banner-titulo top-banner__text-up relative">
                    <span className="brand-span text-primary md:text-xl text-sm">Hola! Soy</span>
                    <h2 className="top-banner__h2">Alejandro Pulido</h2>
                    <div className="animate-rightToLeft overflow-hidden banner-titulo top-banner__text-down">
                        <span className="brand-span text-primary md:text-xl text-sm float-end">Desarrollador de software Fullstack</span>
                    </div>
                </div>
                <div className="slogan-intro animate-downToUp absolute right-0 text-white flex flex-col text-right md:text-xl text-sm md:w-1/2 w-full" style={{bottom: '50px'}}>
                    <span>Soy un apasionado por la tecnologia que disfruta construir aplicaciones funcionales y atractivas</span>
                </div>
            </div>
        </div>
    )
}