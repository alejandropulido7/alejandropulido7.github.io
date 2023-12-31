import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavigationLinks = ({links, dimensions}) => {


  return (
    <ul className="nav-bottom flex fixed flex-col justify-center my-5 text-white gap-7 text-lg font-bold nav-bottom" style={{top: dimensions.height-200}}>
        {
            links.map((link) => {
                return (
                    <li key={link.link}>
                        <NavLink to={link.link}
                        className={'uppercase relative flex items-center hover:translate-x-4 hover:text-primary transition duration-300 ease-in-out'}>    
                            <span className="line-link"></span>                                    
                            <span className="flex gap-6 items-center">{link.name}</span>
                        </NavLink>
                    </li>
                )
            })
        }
    </ul>
  )
}

export default NavigationLinks
