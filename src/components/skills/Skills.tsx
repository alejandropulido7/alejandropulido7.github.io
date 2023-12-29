import './Skills.css'
import {OTHER_SKILLS, SKILLS} from '../../content/Skills'
import SkilsBasic from './SkilsBasic';

export default function Skills(){

    const fourSkills = [];
    const tamanio = 4;
    for (var i = 0; i < SKILLS.length; i += tamanio) {
        fourSkills.push(SKILLS.slice(i, i + tamanio));
      }
   
    const cssBasicSkills = "border-primary text-primary";

    return (
        <section className="skill-bars py-5 text-white md:w-4/5 w-11/12 md:m-auto m-0 grid gap-10">
                <p className="md:text-xl text-lg md:px-0 px-7">La tecnología avanza muy rápido y es indispensable adaptarse...</p>                
                <div className='flex justify-between md:flex-row flex-col md:gap-10 gap-5'>
                    {
                        fourSkills.map((arraySkills, index) => {
                            return <SkillsGroup key={index} skills={arraySkills}/>
                        })
                    }
                </div>
                <div>
                    <SkilsBasic skills={OTHER_SKILLS} css={cssBasicSkills}/>
                </div>
        </section>
    )
}

function SkillsGroup(skillsContainer){
    return (
        <ul className="skills gap-4 grid">
            {
                skillsContainer.skills.map((skill) => {
                    return (
                        <li key={skill.languague} className="skill-bar-holder relative bg-primary-opacity hover:-translate-y-2 transition duration-200 hover:cursor-pointer">                          
                            <div className="bg-primary h-7 " style={{ width: skill.percent+'%'}}>
                            </div>
                            <div className='skill-bar-text text-secundary font-bold'>
                                <span className="text-md">{skill.languague}</span>
                                <div className='skills-porcent'>
                                    <span id="llenar1">{skill.percent}</span>
                                    <span>%</span>
                                </div>
                            </div>
                        </li>
                    )
                })
            }            
        </ul>
    )

}