import pluginWordpress from '../assets/images/wp-plugin-pet.png'
import iconGit from '../assets/images/github-svgrepo-com.svg'
import iconEntry from '../assets/images/entry-svgrepo-com.svg'

export const PROJECTS = [
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
        title: 'Website wordpress',
        description: 'Sitio web Ecommerce diseñado totalmente en wordpress a la medida del cliente, con funcionalidades especificas como combos de productos, clientes mayoristas, etc..',
        image: pluginWordpress,
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
    }
]

export const PROJECTS_ARCHIVE = [
    {
        title: 'Diseño de páginas solo en CSS',
        languages: ['HTML', 'CSS'],
        links: [
            {
                icon: iconGit,
                link: 'https://github.com/alejandropulido7/bellage'
            }
        ]
    }
]