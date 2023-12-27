import './About.css'
import foto from '../../assets/images/foto.jpg'
import Skills from '../skills/Skills'

export default function About(){

    

    return (
        <section id="about-me" className="fh5co-about-me container m-auto ">
            <div className="about-me-inner w-5/6 grid grid-cols-2 m-auto gap-5">                
                <div className="about-me__text text-right w-1/2">
                    <p className="text-about text-xl">
                        Actualmente trabajo en <span>IAS SOFTWARE</span> construyendo soluciones en la industria de polizas de seguros, y en ocasiones construyo pequeñas soluciones como <span>freelancer</span>.
                        Me encanta estar actualizado con las nuevas tendencias y me enfoco en aplicarlo a mi vida profesional.  Mi interes por el desarrollo de software empezo en el 2020 y desde entonces disfruto aprender cada dia algo diferente que refuerce mis habilidades. 
                        Mis mayor interes es <span>crear soluciones de alto valor</span> y que además sea <span>atractivo para sus usuarios</span>.
                    </p>
                </div>  
                
                <div className="portfolio-wrapper m-auto after:rounded-lg hover:-translate-y-1 hover:-translate-x-1 transition duration-200 hover:after:bg-transparent hover:cursor-pointer">
                        <img src={foto} className="about-me__profile rounded-lg" alt="about me profile picture"/>       
                </div> 
            </div>
        </section>
    )
}