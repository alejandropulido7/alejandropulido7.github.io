import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom';
import iconHome from '../../assets/images/home-svgrepo-com.svg'

const Breadcrumbs = ({pathName, dimensions}) => {

    const breadcrumbNode = useRef();

    // if (breadcrumbNode.current) { 
    //     breadcrumbNode.current.style = null
    // }

    // useEffect(()=> {
    //     if (breadcrumbNode.current) { 
    //         breadcrumbNode.current.style.animationName = "leftToRight"; 
    //         breadcrumbNode.current.style.animationDuration = "1s";
    //     }
    // },[pathName]);

    return (
        <>
            <ul className="fixed flex flex-row gap-5 top-20 transition duration-300 ease-in-out" ref={breadcrumbNode}>
                <li className="text-white uppercase text-lg font-bold">{pathName}</li>
                <li className="w-80 h-px bg-white self-center"></li>
            </ul>
            <div className="btn-home fixed right-0 my-5" style={{right: '7%', top: dimensions.height-100}}>
                <NavLink to={'/'}>
                    <img src={iconHome} alt="icon home"/>
                </NavLink>
            </div>
        </>
    )
}

export default Breadcrumbs
