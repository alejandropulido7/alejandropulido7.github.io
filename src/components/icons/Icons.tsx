const Icons = ({links}) => {
  return (
    <div className="md:flex md:justify-between flex justify-end items-center gap-2">
        { links.map((link) => {
            return (
                <a className="hover:-translate-y-2 transition" href={link.link} key={link.link} target="_blank">
                    <img src={link.icon} alt="" />
                </a>
            )
        }) }
    </div>
  )
}

export default Icons

