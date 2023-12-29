import { PROJECTS_ARCHIVE } from "../../content/Projects"
import iconFolder from '../../assets/images/folder-svgrepo-com.svg'
import SkilsBasic from "../skills/SkilsBasic"
import Icons from "../icons/Icons";



const ProjectsArchive = () => {

    const cssBasicSkills = "border-secundary text-secundary";
    return (
        <div className="w-3/4 m-auto">
        {
            PROJECTS_ARCHIVE.map((project) => {
                return (
                    <div key={project.title} className="bg-primary rounded-lg text-secundary flex md:justify-between md:flex-row flex-col md:items-center gap-5 p-4">
                        <img className="w-10" src={iconFolder} alt="icon folder project" />
                        <h4 className="md:text-2xl text-lg">{project.title}</h4>
                        <SkilsBasic skills={project.languages} css={cssBasicSkills}/>
                        <Icons links={project.links}/>
                    </div>
                )
            })
        }

        </div>
    )
}

export default ProjectsArchive
