import type { StaticImageData } from 'next/image'

/* -------------------------------------------------- */

/**
 * APP_ROUTES_NAME - Title of the Header links.
 **/
export enum APP_ROUTES_NAME {
    HOME      = 'Home',
    SERVICES  = 'Serviços',
    PROJECTS  = 'Projetos',
    ABOUT     = 'Sobre Nós',
    MISSION   = 'Missão'
}

/* -------------------------------------------------- */

/**
 * MenuItensType - Type of Header items, link and name of each.
 * @param {string} href
 * @param {string[]} name
 **/
export type MenuItensType = {
    href: string
    name: APP_ROUTES_NAME
}

/* -------------------------------------------------- */

/**
 * ProjectsDataType - Project data type for the mapped listing.
 * @param {string} title
 * @param {string} description
 * @param {Array<StaticImageData>} images
 * @param {string} genericAlt
 * @param {Object} logo - { src, alt, width, height }
 * @param {StaticImageData} src
 * @param {string} alt
 * @param {number} width
 * @param {number} height
 **/
export type ProjectsDataType = {
    title: string
    description: string
    images: Array<StaticImageData>
    genericAlt: string
    logo: {
        src: StaticImageData
        alt: string
        width: number
        height: number
    }
}