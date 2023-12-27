import './Skills.css'
import {SKILLS} from '../../content/Skills'

export default function Skills(){

    return (
        <section id="skill-bars" className="skill-bars py-5 text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="skills">
                            <ul className="skills-ul">
                                {
                                    SKILLS.map((skill) => {
                                        return (
                                            <li key={skill.languague}>
                                                <div className="skill-bar-holder">                                        
                                                    <div className="skill-capacity col-xs-11" style={{ width: skill.percent+'%'}}>
                                                    </div>
                                                    <div className='skill-bar-text'>
                                                        <span>{skill.languague}</span>
                                                        <div className='skills-porcent'>
                                                            <span id="llenar1">{skill.percent}</span>
                                                            <span>%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}