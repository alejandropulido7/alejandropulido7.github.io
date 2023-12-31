
import { PROJECTS, PROJECTS_ARCHIVE } from "../../content/Projects"
import iconArrow from '../../assets/images/right-arrow-svgrepo-com.png'
import { Link } from "react-router-dom"
import Project from "./Project"

const Projects = () => {
  return (
    <div className="relative md:m-auto ml-3 md:w-3/4 w-4/5 flex flex-col md:mt-40 md:mb-20 gap-14">
      { PROJECTS.map((project, index) => {
        return <Project key={index} project={project}/>
      })}
      { PROJECTS_ARCHIVE.length > 0 &&
      <div className="md:mr-10 mb-7 mr-0 flex justify-end">
        
        <Link to='/archive' className="flex justify-end mt-4 gap-2 hover:translate-x-3 transition md:w-1/4 w-full">
            <span className="text-white text-lg">Ver mas proyectos</span>
            <img className="" src={iconArrow} alt="" />
        </Link>        
      </div>
      }
    </div>
  )
}

export default Projects
