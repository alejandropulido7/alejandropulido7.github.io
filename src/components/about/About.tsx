import './About.css'
import foto from '../../assets/images/foto.jpg'
import { ABOUT } from '../../Mocks/Constants'
import Skills from '../skills/Skills'

export default function About(){

    

    return (
        <section id="about-me" className="fh5co-about-me container m-auto flex justify-around items-center md:flex-row flex-col md:w-4/6">
            <div className="about-me-inner w-5/6">
                <article className="portfolio-wrapper ">
                    <div className="portfolio__img">
                        <img src={foto} className="about-me__profile" alt="about me profile picture"/>
                    </div>
                </article>
                <div className="about-me__text">
                    <div className="about-me-slider">
                        <div className="about-me-single-slide">
                            <p className="text-about">
                                <span>{ABOUT.firstWord}</span>
                                {ABOUT.text}
                            </p>
                        </div>
                    </div>
                </div>                
            </div>
            <div className='about-me-skills w-full'>                
                <Skills/>            
            </div>
        </section>
    )
}