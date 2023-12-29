
const SkilsBasic = ({skills, css}) => {
  return (
    <ul className="flex justify-center flex-wrap md:m-auto m-0">
        {
            skills.map((skill) => {
                return (
                    <li key={skill} className={css + " border rounded-2xl py-0 px-4 m-2 bg-primary-opacity hover:cursor-pointer hover:text-white hover:bg-primary transition"}>{skill}</li>
                )
            })
        }
    </ul>
  )
}

export default SkilsBasic
