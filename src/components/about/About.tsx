import './About.css'
import foto from '../../assets/images/foto.jpg'
import {contact} from '../../content/Contact'
import { Link } from 'react-router-dom'
import iconArrow from '../../assets/images/right-arrow-svgrepo-com.png'

export default function About(){
    return (
        <section id="about-me" className="fh5co-about-me container md:m-auto m-0">
            <div className="about-me-inner w-5/6 grid grid-cols-2 m-auto gap-5">                
                <div className="animate-leftToRight about-me__text text-right w-1/2">
                    <p className="text-about text-xl">
                        Actualmente trabajo en <span>IAS SOFTWARE</span> construyendo soluciones en la industria de polizas de seguros, y en ocasiones construyo pequeñas soluciones como <span>freelancer</span>.
                        Me encanta estar actualizado con las nuevas tendencias y me enfoco en aplicarlo a mi vida profesional.  Mi interes por el desarrollo de software empezo en el 2020 y desde entonces disfruto aprender cada dia algo diferente que refuerce mis habilidades. 
                        Mi mayor motivación es <span>crear soluciones de alto valor</span> y que además sea <span>atractivo para sus usuarios</span>.
                    </p>                    
                    <div className="mb-7 mr-0 flex justify-end">                        
                        <Link to={contact.summaryLink} target='_blank' className="flex justify-end mt-4 gap-2 hover:translate-x-3 transition w-full">
                            <span className="text-white font-bold text-lg">Ver resumen</span>
                            <img className="" src={iconArrow} alt="" />
                        </Link>        
                    </div>
                </div>  
                
                <div className="animate-rightToLeft portfolio-wrapper m-auto after:rounded-lg hover:-translate-y-1 hover:-translate-x-1 transition duration-200 hover:after:bg-transparent hover:cursor-pointer">
                        <img src={foto} className="about-me__profile" alt="about me profile picture"/>       
                </div> 
            </div>
        </section>
    )
}