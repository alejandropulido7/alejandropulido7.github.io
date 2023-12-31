import React from 'react'
import Icons from '../icons/Icons'

const Project = ({project}) => {
    
    return (
        <div className="flex flex-col">
            <div className="flex justify-center sm:flex-row flex-col">
                <div className="animate-leftToRight md:w-52 md:order-1 order-2 self-center">
                    <img className="w-auto rounded-lg" src={project.image} alt="" />
                </div>
                <div className="md:w-1/2 md:order-2 order-1 md:mb-0 mb-4 md:flex flex flex-col gap-2">
                    <h2 className="animate-upToDown text-white text-2xl text-right font-bold">{project.title}</h2>
                    <div className="animate-rightToLeft lg:text-lg bg-primary-opacity text-white text-right px-5 py-9 rounded-r-md font-light">
                        <p>{project.description}</p>
                    </div>
                </div>
            </div>
            <div className="animate-downToUp md:flex md:justify-around md:flex-row md:gap-0 flex flex-col my-2 gap-5">
                <ul className="flex justify-between gap-3 items-center">
                    { project.languages.map((lang) => {
                        return (
                            <li key={lang} className="text-primary capitalize hover:-translate-y-2 transition hover:cursor-pointer">{lang}</li>
                        )
                    })}
                </ul>
                <Icons links={project.links}/>
            </div>
        </div>
    )
}

export default Project
