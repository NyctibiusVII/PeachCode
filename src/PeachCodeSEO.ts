import type { Metadata } from 'next'
import {
    rootUrl
} from './PeachCodeData'

/* --- Static Metadata --- */
const metaImages = [
    {
        url: `${rootUrl}/assets/images/thumbnail.png`,
        width: 2000,
        height: 1000,
        alt: 'Página inicial do site PeachCode.'
    }, {
        url: `${rootUrl}/assets/images/projects.png`,
        width: 2000,
        height: 1000,
        alt: 'Projetos da PeachCode.'
    }
]

const homeMetadata: Metadata = {
    keywords: [
        'peach code',
        'projetos',
        'aplicação',
        'web',
        'site',
        'website',
        'desenvolvimento',
        'criação',
        'consultoria em TI',
        'soluções tecnológicas',
        'inovadoras',
        'eficientes',
        'personalizadas',
        'otimizar processos',
        'reduzir custos',
        'aumentar produtividade'
    ],
    robots: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
        googleBot: 'index, follow'
    },
    openGraph: {
        url: rootUrl,
        title: 'PeachCode',
        description: 'Procurando por soluções tecnológicas eficientes que impulsionem seus negócios? A Peach Code, empresa de consultoria em TI com vasta experiência, oferece soluções inovadoras e personalizadas para as necessidades do mercado atual. Nossa equipe altamente qualificada está comprometida em superar expectativas e elevar o padrão da indústria.',
        images: metaImages
    },
    twitter: {
        title: 'PeachCode',
        description: 'Procurando por soluções tecnológicas eficientes que impulsionem seus negócios? A Peach Code, empresa de consultoria em TI com vasta experiência, oferece soluções inovadoras e personalizadas para as necessidades do mercado atual. Nossa equipe altamente qualificada está comprometida em superar expectativas e elevar o padrão da indústria.',
        images: metaImages
    }
}
const projectsMetadata: Metadata = {
    title: 'PeachCode - Projetos',
    description: 'Cansado de soluções rasas? Mergulhe nos nossos projetos detalhados, criados para eliminar problemas e impulsionar resultados. Descubra como superamos expectativas e garantimos a satisfação do cliente.',
    keywords: [
        'soluções',
        'problemas',
        'resultados',
        'satisfação do cliente',
        'peach code',
        'projeto',
        'projetos',
        'aplicação',
        'aplicativo',
        'web',
        'site',
        'website',
        'desenvolvimento',
        'criação',
        'Atenas',
        'Biocube',
        'Boletim',
        'Finances',
        'Occurrences'
    ],
    robots: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
        googleBot: 'index, follow'
    },
    openGraph: {
        url: `${rootUrl}/projects`,
        title: 'PeachCode - Projetos',
        description: 'Cansado de soluções rasas? Mergulhe nos nossos projetos detalhados, criados para eliminar problemas e impulsionar resultados. Descubra como superamos expectativas e garantimos a satisfação do cliente.',
        images: metaImages
    },
    twitter: {
        title: 'PeachCode - Projetos',
        description: 'Cansado de soluções rasas? Mergulhe nos nossos projetos detalhados, criados para eliminar problemas e impulsionar resultados. Descubra como superamos expectativas e garantimos a satisfação do cliente.',
        images: metaImages
    }
}

export {
    homeMetadata,
    projectsMetadata
}