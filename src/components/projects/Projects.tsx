
import { PROJECTS } from "../../content/Projects"
import iconArrow from '../../assets/images/right-arrow-svgrepo-com.png'
import { Link } from "react-router-dom"
import Icons from "../icons/Icons"

const Projects = () => {
  return (
    <div className="relative md:m-auto ml-3 md:w-3/4 w-4/5 flex flex-col md:mt-40 md:mb-20 gap-14">
      { PROJECTS.map((project, index) => {
        return <Project key={index} project={project}/>
      })}
      <div className="md:mr-10 mb-7 mr-0 flex justify-end">
        <Link to='/archive' className="flex justify-end mt-4 gap-2 hover:translate-x-3 transition md:w-1/4 w-full">
            <span className="text-white text-lg">Ver mas proyectos</span>
            <img className="" src={iconArrow} alt="" />
        </Link>
      </div>
    </div>
  )
}


const Project = ({project}) => {
    return (
        <div className="flex flex-col">
            <div className="flex justify-center sm:flex-row flex-col">
                <div className="md:w-52 md:order-1 order-2">
                    <img className="w-auto rounded-lg" src={project.image} alt="" />
                </div>
                <div className="md:w-1/2 md:order-2 order-1 md:mb-0 mb-4 md:flex flex flex-col gap-2">
                    <h2 className="text-white text-2xl text-right font-bold">{project.title}</h2>
                    <div className="lg:text-lg bg-primary-opacity text-white text-right px-5 py-9 rounded-r-md font-light">
                        <p>{project.description}</p>
                    </div>
                </div>
            </div>
            <div className="md:flex md:justify-around md:flex-row md:gap-0 flex flex-col my-2 gap-5">
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

export default Projects
