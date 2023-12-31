import pluginWordpress from '../assets/images/wp-plugin-pet.png'
import webSunwarrior from '../assets/images/sunwarrior-page.png'
import moduloPrestashop from '../assets/images/Modulo-prestashop.png'
import portfolioV1 from '../assets/images/portfolio-v1.png'
import webAppAgreements from '../assets/images/web-app-agreements.png'
import bellAge from '../assets/images/bellAge.png'

import iconGit from '../assets/images/github-svgrepo-com.svg'
import iconEntry from '../assets/images/entry-svgrepo-com.svg'

export const PROJECTS = [
    {
        title: 'Web app de Contratos',
        description: 'Esta web app fue pensada para tramitar requerimientos, crear un contrato en una plantilla PDF y firmarlos directamente desde la app, también tiene la función de enviar por correo electronico. Tiene frontend, backend y proceso de autenticacion',
        image: webAppAgreements,
        languages: ['angular', 'nodejs/express', 'mongoDB', 'jwt'],
        links: [
            {
                icon: iconGit,
                link: 'https://github.com/alejandropulido7/pdfCreator'
            },
            {
                icon: iconGit,
                link: 'https://github.com/alejandropulido7/pdfcreator-front'
            }
        ]
    },
    {
        title: 'Website wordpress',
        description: 'Sitio web Ecommerce diseñado totalmente en wordpress a la medida del cliente, con funcionalidades especificas como combos de productos, clientes mayoristas, etc..',
        image: webSunwarrior,
        languages: ['php', 'wordpress', 'javascript', 'mysql'],
        links: [
            {
                icon: iconGit,
                link: 'https://github.com/alejandropulido7/wp-plugin-pets'
            },
            {
                icon: iconEntry,
                link: 'http://sunwarriorcolombia.com/'
            }
        ]
    },
    {
        title: 'Plugin wordpress',
        description: 'Calculador de cantidad de comida que necesita una mascota segun su peso, edad y tipo de mascota. Se mostrara un post personalizado despues de realizar la busqueda',
        image: pluginWordpress,
        languages: ['php', 'wordpress', 'javascript', 'mysql'],
        links: [
            {
                icon: iconGit,
                link: 'https://github.com/alejandropulido7/wp-plugin-pets'
            }
        ]
    },
    {
        title: 'Modulo Prestashop',
        description: 'Modulo desarrollado para que los clientes que quieran ser mayoristas de la tienda, llenen un formulario y les permita tener mejores precios, se agrega un umbral de compras minimas para que se valide el pedido en el carrito',
        image: moduloPrestashop,
        languages: ['php', 'prestashop', 'javascript', 'mysql'],
        links: [
            {
                icon: iconGit,
                link: 'https://github.com/alejandropulido7/wholesalerPrestashop'
            }
        ]
    },
    {
        title: 'Portfolio v1',
        description: 'Mi primer portafolio realizado en el 2020. Este fue el año donde empecé a aprender mucho mas de programación, y me puse a prueba creando mi portafolio con las tecnologias nativas.',
        image: portfolioV1,
        languages: ['HTML', 'CSS', 'JAVASCRIPT'],
        links: [
            {
                icon: iconGit,
                link: 'https://github.com/alejandropulido7/portfolio-v1'
            },
            {
                icon: iconEntry,
                link: 'https://master--peaceful-klepon-baede3.netlify.app/'
            }
        ]
    },
    {
        title: 'Web APP CSS',
        description: 'Una web App que me solicitaron diseñar con solo CSS, contiene varias páginas y su diseño es resposivo',
        image: bellAge,
        languages: ['HTML', 'CSS', 'JAVASCRIPT', 'Responsive'],
        links: [
            {
                icon: iconGit,
                link: 'https://github.com/alejandropulido7/bellage'
            }
        ]
    }
]

export const PROJECTS_ARCHIVE = [
    // {
    //     title: 'Diseño de páginas solo en CSS',
    //     languages: ['HTML', 'CSS'],
    //     links: [
    //         {
    //             icon: iconGit,
    //             link: 'https://github.com/alejandropulido7/bellage'
    //         }
    //     ]
    // }
]