import type {
    Viewport,
    Metadata
} from 'next'

import { Header } from '@components/header'
import { Footer } from '@components/footer'

import { rootUrl } from '@PeachCodeData'
import { NotoSans } from './fonts'

import './globals.css'

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#001920'
}
export const metadata: Metadata = {
    title: 'PeachCode',
    description: 'A Peach Code, empresa de consultoria em TI com vasta experiência, oferece soluções inovadoras e personalizadas para as necessidades do mercado atual. Nossa equipe altamente qualificada está comprometida em superar expectativas e elevar o padrão da indústria.',
    metadataBase: new URL(rootUrl),
    openGraph: {
        siteName: 'PeachCode',
        type: 'website',
        locale: 'pt_BR',
    },
    twitter: {
        card: 'summary_large_image',
        creator: '@NyctibiusVII',
        site: '@NyctibiusVII'
    },
    robots: {
        index: false // Default
    },
    applicationName: 'PeachCode',
    appleWebApp: {
        title: 'PeachCode',
        statusBarStyle: 'default',
        capable: true
    },
    verification: {
        google: 'OjYiqlxK64Fx5dZre97pwHGJ7pYgOP4vQYH1UCOdBuo'
    },
    icons: {
        icon: [
            {
                url: '/favicon.ico',
                type: 'image/x-icon'
            },
            {
                url: '/favicon-16x16.webp',
                sizes: '16x16',
                type: 'image/webp'
            },
            {
                url: '/favicon-32x32.webp',
                sizes: '32x32',
                type: 'image/webp'
            },
            {
                url: '/favicon-96x96.webp',
                sizes: '96x96',
                type: 'image/webp'
            },
            {
                url: '/favicon-192x192.webp',
                sizes: '192x192',
                type: 'image/webp'
            }
        ],
        shortcut: [
            {
                url: '/favicon.ico',
                type: 'image/x-icon'
            }
        ],
        apple: [
            {
                url: '/apple-icon-57x57.webp',
                sizes: '57x57',
                type: 'image/webp'
            },
            {
                url: '/apple-icon-60x60.webp',
                sizes: '60x60',
                type: 'image/webp'
            },
            {
                url: '/apple-icon-72x72.webp',
                sizes: '72x72',
                type: 'image/webp'
            },
            {
                url: '/apple-icon-76x76.webp',
                sizes: '76x76',
                type: 'image/webp'
            },
            {
                url: '/apple-icon-114x114.webp',
                sizes: '114x114',
                type: 'image/webp'
            },
            {
                url: '/apple-icon-120x120.webp',
                sizes: '120x120',
                type: 'image/webp'
            },
            {
                url: '/apple-icon-144x144.webp',
                sizes: '144x144',
                type: 'image/webp'
            },
            {
                url: '/apple-icon-152x152.webp',
                sizes: '152x152',
                type: 'image/webp'
            },
            {
                url: '/apple-icon-180x180.webp',
                sizes: '180x180',
                type: 'image/webp'
            }
        ]
    }
}

const ENVIRONMENT = process.env.ENVIRONMENT || 'product'
const suppressHydrationWarning = ENVIRONMENT === 'product' ? false : true

export default function RootLayout({
    children
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang='pt-BR'>
            <body className={NotoSans.className} suppressHydrationWarning={suppressHydrationWarning}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
