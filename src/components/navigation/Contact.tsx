import React, { useState } from 'react'
import { contact } from "../../content/Contact";

const Contact = () => {
    
    const linkEmail = 'mailto: '+contact.email;
    const [animation, setAnimation ] = useState('animate-upToDown');

    return (
      <ul className={animation + " section-contact fixed flex flex-col gap-5"} style={{right: '7%'}}>
          <li className="w-px h-20 bg-white self-center"></li>
          <li className="hover:-translate-x-3 transition cursor-pointer"><a href={contact.git.link} target="_blank"><img src={contact.git.icon}/></a></li>
          <li className="hover:-translate-x-3 transition cursor-pointer hover:fill-primary"><a href={contact.linkedin.link} target="_blank"><img src={contact.linkedin.icon}/></a></li>
          <li className="contact-email text-white text-xl transition hover:text-primary"><a href={linkEmail}>{contact.email}</a></li>
      </ul> 
    )
}

export default Contact
