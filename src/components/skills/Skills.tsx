import './Skills.css'
import {OTHER_SKILLS, SKILLS} from '../../content/Skills'
import SkilsBasic from './SkilsBasic';
import SkillsGroup from './SkillsGroup';

export default function Skills(){

    const fourSkills = [];
    const tamanio = 4;
    for (var i = 0; i < SKILLS.length; i += tamanio) {
        fourSkills.push(SKILLS.slice(i, i + tamanio));
      }
   
    const cssBasicSkills = "border-primary text-primary";

    return (
        <section className="skill-bars py-5 text-white md:w-3/4 w-11/12 md:m-auto m-0 grid gap-10">
                <p className="animate-upToDown md:text-xl text-lg md:px-0 px-7">La tecnología avanza muy rápido y es indispensable adaptarse...</p>                
                <div className='flex justify-between md:flex-row flex-col md:gap-10 gap-5'>
                    {
                        fourSkills.map((arraySkills, index) => {
                            return <SkillsGroup key={index} skills={arraySkills}/>
                        })
                    }
                </div>
                <div className='animate-downToUp'>
                    <SkilsBasic skills={OTHER_SKILLS} css={cssBasicSkills}/>
                </div>
        </section>
    )
}