import { useState } from "react";


const SkillsGroup = ({skills}) => {

    return (
        <ul className="skills gap-4 grid">
            {
                skills.map((skill) => {
                    return (
                        <li key={skill.languague} className="animate-fadeIn skill-bar-holder relative bg-primary-opacity hover:-translate-y-2 transition duration-200 hover:cursor-pointer">                          
                            <div className="skill-bar animate-leftToRight bg-primary h-7 transition-all" style={{ width: skill.percent+'%', transition: '1.5s ease-out'}}>
                            </div>
                            <div className='animate-downToUp skill-bar-text text-secundary font-bold'>
                                <span className="text-md">{skill.languague}</span>
                                <div className='skills-porcent'>
                                    <span>{skill.percent}</span>
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

export default SkillsGroup
