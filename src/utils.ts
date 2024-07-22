import ProjectImage1 from '@../public/assets/images/projects/app-1.png'
import ProjectImage2 from '@../public/assets/images/projects/app-2.png'
import ProjectImage3 from '@../public/assets/images/projects/app-3.png'
import ProjectImage4 from '@../public/assets/images/projects/app-4.png'
import ProjectImage5 from '@../public/assets/images/projects/app-5.png'

export const projectImages = [
    {
        src: ProjectImage1,
        alt: 'Imagem do projeto Biocube, feito pela PeachCode.'
    },
    {
        src: ProjectImage2,
        alt: 'Imagem do projeto Boletim, feito pela PeachCode.'
    },
    {
        src: ProjectImage3,
        alt: 'Imagem do projeto Occurrences, feito pela PeachCode.'
    },
    {
        src: ProjectImage4,
        alt: 'Imagem do projeto Atenas Ceap, feito pela PeachCode.'
    },
    {
        src: ProjectImage5,
        alt: 'Imagem do projeto Finances, feito pela PeachCode.'
    }
]

/**
 * ProcessText - Function that processes text to highlight words with a specific color and/or underline it based on specific characters surrounding it.
 *
 * @param {string} text
 * @returns {JSX.Element}
 * @template underline (_)
 * @template italic (|)
 * @template green (&)
 * @template lightOrange (^)
 * @template orange (*)
 * @template red (°)
 * @template lineBreak (\n)
 * @template lineBreak2x (\t)
 * @example
 * <p>Hello *World*</p>
 *
 * return <p>Hello <span style="color: #FD7752; text-wrap: wrap;">World</span></p>
 **/
export const processText = (text: string) => {
    const processedText = text
    .replace(/_([^_]+)_/g, '<span style="text-decoration: underline; text-wrap: wrap;">$1</span>')
    .replace(/\|([^|]+)\|/g, '<span style="font-style: italic; text-wrap: wrap;">$1</span>')
    .replace(/\&([^&]+)\&/g, '<span style="color: #187238; text-wrap: wrap;">$1</span>')
    .replace(/\^([^^]+)\^/g, '<span style="color: #FBD099; text-wrap: wrap;">$1</span>')
    .replace(/\*([^*]+)\*/g, '<span style="color: #FD7752; text-wrap: wrap;">$1</span>')
    .replace(/\°([^°]+)\°/g, '<span style="color: #C32731; text-wrap: wrap;">$1</span>')
    .replace(/\n/g, '<br />')
    .replace(/\t/g, '<br /><br />')

    return processedText
}